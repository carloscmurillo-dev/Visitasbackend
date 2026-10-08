import axios from 'axios';

// Envío de correo vía Microsoft Graph API (OAuth2 client credentials), en
// vez de SMTP con usuario/contraseña: la cuenta de envío tiene MFA
// obligatorio, así que la autenticación básica (usuario+contraseña) nunca
// va a funcionar, sin importar la contraseña. Requiere una app registrada
// en Azure AD / Entra ID con el permiso de aplicación 'Mail.Send' sobre
// Microsoft Graph (ver GRAPH_TENANT_ID / GRAPH_CLIENT_ID /
// GRAPH_CLIENT_SECRET / GRAPH_MAIL_FROM en variables.env).
let tokenCache: {token: string; expiresAt: number} | null = null;

const obtenerTokenGraph = async (): Promise<string> => {
  if (tokenCache && tokenCache.expiresAt > Date.now() + 30_000) {
    return tokenCache.token;
  }

  const tenantId = process.env.GRAPH_TENANT_ID;
  const clientId = process.env.GRAPH_CLIENT_ID;
  const clientSecret = process.env.GRAPH_CLIENT_SECRET;

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', clientId || '');
  params.append('client_secret', clientSecret || '');
  params.append('scope', 'https://graph.microsoft.com/.default');

  const {data} = await axios.post(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
    params,
  );

  tokenCache = {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };
  return tokenCache.token;
};

export const enviarCorreoGraph = async ({
  to,
  cc,
  subject,
  html,
}: {
  to: string;
  cc?: string | null;
  subject: string;
  html: string;
}) => {
  const remitente = process.env.GRAPH_MAIL_FROM || 'carlosmurillo@amimedsaludcr.com';
  const token = await obtenerTokenGraph();

  const message: any = {
    subject,
    body: {contentType: 'HTML', content: html},
    toRecipients: [{emailAddress: {address: to}}],
  };
  if (cc && cc.trim()) {
    message.ccRecipients = [{emailAddress: {address: cc.trim()}}];
  }

  await axios.post(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(remitente)}/sendMail`,
    {message, saveToSentItems: true},
    {headers: {Authorization: `Bearer ${token}`}},
  );
};

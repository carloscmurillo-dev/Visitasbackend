
// Define ENDPOINT 
export const BASE_ENDPOINT = "/api";

export const SERVER_STATUS_ENDPOINT = `${BASE_ENDPOINT}/server-status`;
export const GSONE_ENDPOINT = `${BASE_ENDPOINT}/gsone`;
export const AUTH_ENDPOINT = `${BASE_ENDPOINT}/auth`;
export const GET_ITEMS_ENDPOINT = `${GSONE_ENDPOINT}/getItems`;
export const LOAD_PRODUCTS_ENDPOINT = `${GSONE_ENDPOINT}/LoadProductos`;

export const LOAD_PRODUCTS_NUEVOLOG_ENDPOINT = `${GSONE_ENDPOINT}/LoadProductosNlo`;
export const LOAD_PRODUCTS_PRESENT_ENDPOINT = `${GSONE_ENDPOINT}/LoadProductosPre`;
export const LOAD_PRODUCTS_PROVEEDOR_ENDPOINT = `${GSONE_ENDPOINT}/LoadProductosProv`;
export const LOAD_PRODUCTS_TEMPOPDV_ENDPOINT = `${GSONE_ENDPOINT}/LoadProductosPdv`;


export const ACT_RETORNOS_PRODUCTOS = `${GSONE_ENDPOINT}/createRetorno`;


export const CARGAR_PRODUCTO_ENDPOINT = `${GSONE_ENDPOINT}/CargarProducto`;


export const GET_IMAGES_ENDPOINT = `${GSONE_ENDPOINT}/getImages`;
export const UPDATE_ITEMS_FROM_API_ENDPOINT = `${GSONE_ENDPOINT}/updateItems`;
export const GET_CATEGORIES_ENDPOINT = `${GSONE_ENDPOINT}/getCategories`;
export const GET_SUBCATEGORIES_ENDPOINT = `${GSONE_ENDPOINT}/getSubCategories`;
export const ADD_CATEGORY_ENDPOINT = `${GSONE_ENDPOINT}/addCategory`;
export const ADD_SUBCATEGORY_ENDPOINT = `${GSONE_ENDPOINT}/addSubCategory`;
export const GET_ITEM_ENDPOINT = `${GSONE_ENDPOINT}/getItem`;
export const GET_ITEMCAMBPRECIOS_ENDPOINT = `${GSONE_ENDPOINT}/getItemsCambPrecios`;

export const GET_FOTOS_ENDPOINT  = `${GSONE_ENDPOINT}/getFotos`;

export const GETCATEXPROVEEDOR_ENDPOINT = `${GSONE_ENDPOINT}/getCateXProveedor`;
export const GET_CATEGORY_ENDPOINT = `${GSONE_ENDPOINT}/getCategory`;
export const GET_SUBCATEGORY_ENDPOINT = `${GSONE_ENDPOINT}/getSubCategory`;
export const UPDATE_MENSAJE_ENDPOINT = `${GSONE_ENDPOINT}/updateMensaje`;
export const UPDATE_ITEM_ENDPOINT = `${GSONE_ENDPOINT}/updateProduct`;

export const UPDATE_ITEMCAMBIOPRECICOS_ENDPOINT = `${GSONE_ENDPOINT}/updateProductCambioPrecios`;

export const GET_BUYER_TYPES_ENDPOINT = `${GSONE_ENDPOINT}/getBuyerTypes`;
export const NEW_USER_ENDPOINT = `${AUTH_ENDPOINT}/newUser`;
export const LOGIN_ENDPOINT = `${AUTH_ENDPOINT}/login`;
export const GET_USER_ENDPOINT = `${AUTH_ENDPOINT}/getUser`;
export const GET_USERS_ENDPOINT = `${AUTH_ENDPOINT}/getUsers`;
export const GET_USERS_BYUSERNAME = `${AUTH_ENDPOINT}/getUserByUsername`;
export const DEL_USER_ENDPOINT=`${AUTH_ENDPOINT}/deleteUser`;
export const GET_PROVIDERS_ENDPOINT = `${GSONE_ENDPOINT}/getProviders`;
export const GET_POS_ENDPOINT = `${GSONE_ENDPOINT}/getPos`;
export const UPDATE_ITEM_COMERCIAL_DATA_ENDPOINT = `${GSONE_ENDPOINT}/updateProductComercialData`;
export const ADD_ITEM_STATUS_ENDPOINT = `${GSONE_ENDPOINT}/addItemStatus`;
export const GET_ITEM_DISCOUNTS_ENDPOINT = `${GSONE_ENDPOINT}/getItemDicounts`;
export const UPDATE_ITEM_CODE_ENDPOINT = `${GSONE_ENDPOINT}/updateCode`;
export const GET_RULE_CODE_TYPE_ENDPOINT = `${GSONE_ENDPOINT}/getRuleCodeType`;
export const GET_TIPOREGISTRO = `${GSONE_ENDPOINT}/getTipoRegistro`;
export const GET_MARCAS_ENDPOINT = `${GSONE_ENDPOINT}/getMarcas`;
export const GET_ARTICULO_ENDPOINT = `${GSONE_ENDPOINT}/getArticulo`;

export const GET_ARTICULOS_ENDPOINT = `${GSONE_ENDPOINT}/getArticulos`;


export const GET_ARTICULOSCHG_ENDPOINT = `${GSONE_ENDPOINT}/getArticulosChg`;
export const GET_PLAZOSPAGO_ENDPOINT = `${GSONE_ENDPOINT}/getPlazosPago`;
export const GET_TIPOCOMPRA_ENDPOINT = `${GSONE_ENDPOINT}/getTipoCompra`;
export const GET_TIPOSGRAVADOS_ENDPOINT = `${GSONE_ENDPOINT}/getTiposGravados`;
export const GET_UNIDADEMPAQUE_ENDPOINT = `${GSONE_ENDPOINT}/getUnidadEmpaque`;
export const GET_MERCADOORIGEN_ENDPOINT = `${GSONE_ENDPOINT}/getMercadoOrigen`;
export const GET_PROVEEDORES_ENDPOINT = `${GSONE_ENDPOINT}/getProveedores`;
export const GET_PROVEEDORSOL_ENDPOINT = `${GSONE_ENDPOINT}/getProveedorsol`;
export const GET_PROVEEDORESOL_ENDPOINT = `${GSONE_ENDPOINT}/getProveedoresol`;
export const GET_PROVEEDOR_ENDPOINT = `${GSONE_ENDPOINT}/getProveedor`;
export const GET_CANTONES_ENDPOINT = `${GSONE_ENDPOINT}/getCantonDistritoProvincia`;
export const GET_ACTIVIDADECONOMICA_ENDPOINT = `${GSONE_ENDPOINT}/getActividadEconomica`;
export const CREATE_ARTICULO_ENDPOINT = `${GSONE_ENDPOINT}/createArticulo`;
export const CREATE_PROVEEDOR_ENDPOINT = `${GSONE_ENDPOINT}/createProveedor`;  
export const CREATE_PROVEEDORSOL_ENDPOINT = `${GSONE_ENDPOINT}/createProveedorsol`;
export const GET_MENSAJES = `${GSONE_ENDPOINT}/getMensajes`;  

export const GET_MENSAJESXTERA = `${GSONE_ENDPOINT}/getMensajesXtera`;

export const GET_REPORTES_ENDPOINT = `${GSONE_ENDPOINT}/getReportes`;  
export const CREATE_MENSAJES_ENDPOINT = `${GSONE_ENDPOINT}/createMensaje`;  


export const GET_ASUNTOS = `${GSONE_ENDPOINT}/getAsuntos`;  
export const GET_ASUNTO_ENDPOINT = `${GSONE_ENDPOINT}/getAsunto`;  
export const EDIT_ASUNTOS_ENDPOINT = `${GSONE_ENDPOINT}/editAsuntos`;  
export const DEL_ASUNTOS_ENDPOINT = `${GSONE_ENDPOINT}/delAsuntos`;  

export const CREATEDISCOUNTS = `${GSONE_ENDPOINT}/createDiscounts`;
export const GET_PUESTOS = `${GSONE_ENDPOINT}/getPuestos`;  
export const GET_PUESTO_ENDPOINT = `${GSONE_ENDPOINT}/getPuesto`;  
export const EDIT_PUESTOS_ENDPOINT = `${GSONE_ENDPOINT}/editPuestos`;  
export const DEL_PUESTOS_ENDPOINT = `${GSONE_ENDPOINT}/delPuestos`;  

export const GET_DESCFIJO_ENDPOINT = `${GSONE_ENDPOINT}/getDescfijo`;




export const AMIMED_ENDPOINT = `${BASE_ENDPOINT}/amimed`;


export const CREATE_VISITA_ENDPOINT = `${AMIMED_ENDPOINT}/createVisita`;  
export const UPDATE_VISITA_ENDPOINT = `${AMIMED_ENDPOINT}/updateVisita`;  

export const GET_PACIENTES_ENDPOINT = `${AMIMED_ENDPOINT}/getPacientes`

export const CREATE_PACIENTES_ENDPOINT = `${AMIMED_ENDPOINT}/createPaciente`

export const UPDATE_PACIENTES_ENDPOINT = `${AMIMED_ENDPOINT}/updatePaciente`

export const DEL_PACIENTE_ENDPOINT = `${AMIMED_ENDPOINT}/delPaciente`

export const GET_EVALUACIONVISITAS_ENDPOINT = `${AMIMED_ENDPOINT}/getEvaluacionVisitas`
export const GET_MESESVISITAS_ENDPOINT = `${AMIMED_ENDPOINT}/getMesesVisitas`
export const GET_HOSPITALES_ENDPOINT = `${AMIMED_ENDPOINT}/getHospitales`
export const GET_TIPOSEQUIPOS_ENDPOINT = `${AMIMED_ENDPOINT}/getTiposEquipos`
export const GET_ESTADOSEQUIPOS_ENDPOINT = `${AMIMED_ENDPOINT}/getEstadosEquipos`
export const GET_TIPOSVISITAS_ENDPOINT = `${AMIMED_ENDPOINT}/getTiposVisitas`
export const GET_TERAPEUTAS_ENDPOINT = `${AMIMED_ENDPOINT}/getTerapeutas`
export const GET_VISITASHOSPITALES_ENDPOINT = `${AMIMED_ENDPOINT}/getVisitasHospitales`
export const GET_VISITASXTERAPEUTA_ENDPOINT = `${AMIMED_ENDPOINT}/getVisitasxTerapeuta`
export const GET_VISITASXTERAPEUTAHISTO_ENDPOINT = `${AMIMED_ENDPOINT}/getVisitasxTerapeutaHisto`
export const GET_PACIENTESXTERAPEUTA_ENDPOINT = `${AMIMED_ENDPOINT}/getPacientesXTerapeuta`

export const GET_VISITASXFILTROS_ENDPOINT = `${AMIMED_ENDPOINT}/getVisitasxFiltros`
export const GET_VISITASXFILTROS_HISTORICAS_ENDPOINT = `${AMIMED_ENDPOINT}/getVisitasxFiltrosHistoricas`

export const GET_PACIENTESXLLAVE_ENDPOINT = `${AMIMED_ENDPOINT}/getPacienteKey`


export const GET_INSUMOS_ENDPOINT = `${AMIMED_ENDPOINT}/getInsumos`;

export const GET_REFERENCIAS_ENDPOINT = `${AMIMED_ENDPOINT}/getReferencias`;

export const GET_IMAGENES_ENDPOINT = `${AMIMED_ENDPOINT}/getImagenesCarrousel`;

export const DEL_VISITAS_ENDPOINT = `${AMIMED_ENDPOINT}/deleteVisita`;

export const LOGIN2_ENDPOINT = `${AUTH_ENDPOINT}/login`;
export const USUARIOS_ENDPOINT = `${AUTH_ENDPOINT}/usuarios`;
export const REGISTER_USER_ENDPOINT = `${AUTH_ENDPOINT}/registerUser`;



export const GET_FOTOMENSAJE_ENDPOINT = `${AMIMED_ENDPOINT}/getFotoMensaje`;

export const GET_PACIENTESVISITAS_ENDPOINT = `${AMIMED_ENDPOINT}/getPacientesVisitas`;

export const GET_MENU_ENDPOINT = `${AMIMED_ENDPOINT}/getMenuconfig`;


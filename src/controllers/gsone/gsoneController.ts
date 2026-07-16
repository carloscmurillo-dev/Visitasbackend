const { createItem, getRuleCodeType, updateCode, createDiscount, getItems, getitemDiscounts, getPOS, getCategories, getSubCategories,
    getBuyerTypes, addCategory, addSubCategory, getItem, getCategory, addItemStatus, sendEmail,getArticulo,createProveedorsol,
    getSubCategory, updateProduct, getProviders, updateProductComercialData,getProveedoresol,getProveedorsol,getReportes,
    getProveedores, getProveedor, getCantonDistritoProvincia, getActividadEconomica, getMercadoOrigen, getUnidadEmpaque, getTiposGravados,
    getMarcas, getARTICULOS,getARTICULOSCHG ,createArticulo,createMensaje,updateMensaje ,createProveedor, getPlazosPago, getTipoCompra,
    getMensajes, getAsuntos, 
    getMensajesXtera,getTipoRegistro,getCateXProveedor ,
    getAsunto,editAsuntos,delAsuntos,getPuesto,getPuestos,editPuestos,delPuestos, createImage,getItemsCambPrecios,getFotos,updateProductCambioPrecios,
    LoadProductos,CargarProducto,LoadProductosNlo,LoadProductosPre,LoadProductosProv,LoadProductosPdv,getDescFijo,createRetorno} = require('../../db');
import axios from 'axios';
import { getCipherInfo } from 'crypto';
import { AprobacionesAttributes, itemDiscounts, itemDiscountsAttributes, ItemsAttributes, PublicadorImagenesAttributes } from '../../../models/init-models';


const nodemailer = require('nodemailer');

const { transform } = require('camaro')

exports.getProveedores = async (req: any, res: any, next: any) => {
    const Proveedores = await getProveedores();
    res.status(200).send({ ok: true, Proveedores, msg: 'get Proveedores From API' });
}

exports.getTipoRegistro = async (req: any, res: any, next: any) => {
    const tiposregistro = await getTipoRegistro();
    res.status(200).send({ ok: true, tiposregistro, msg: 'get Proveedores From API' });
}

exports.getProveedor = async (req: any, res: any, next: any) => {
    const proveedor_id = req.query.proveedor_id;
    const proveedor = await getProveedor(proveedor_id);
    res.status(200).send({ ok: true, msg: 'get Proveedor From API', proveedor });
}



exports.getProveedorsol = async (req: any, res: any, next: any) => {
    const proveedor_id = req.query.proveedor_id;
    const proveedor = await getProveedorsol(proveedor_id);
    res.status(200).send({ ok: true, msg: 'get Proveedor From API', proveedor });
}

exports.getCantonDistritoProvincia = async (req: any, res: any, next: any) => {
    const cantones = await getCantonDistritoProvincia();
    res.status(200).send({ ok: true, cantones, msg: 'get cantones From API' });
}
exports.getActividadEconomica = async (req: any, res: any, next: any) => {
    const actividadEcono = await getActividadEconomica();
    res.status(200).send({ ok: true, actividadEcono, msg: 'get actividadEcono From API' });
}

exports.getMercadoOrigen = async (req: any, res: any, next: any) => {
    const MercadoOrigen = await getMercadoOrigen();
    res.status(200).send({ ok: true, MercadoOrigen, msg: 'get UnidadEmpaque From API' });
}

exports.getUnidadEmpaque = async (req: any, res: any, next: any) => {
    const UnidadEmpaque = await getUnidadEmpaque();
    res.status(200).send({ ok: true, UnidadEmpaque, msg: 'get UnidadEmpaque From API' });
}

exports.getTiposGravados = async (req: any, res: any, next: any) => {
    const tiposGravados = await getTiposGravados();
    res.status(200).send({ ok: true, tiposGravados, msg: 'get Tipos gravados  From API' });
}

exports.getMarcas = async (req: any, res: any, next: any) => {
    const marcas = await getMarcas();
    res.status(200).send({ ok: true, marcas, msg: 'get Marcas From API' });
}

exports.getProveedoresol = async (req: any, res: any, next: any) => {
    console.warn(req.usuario)
    console.log(req.usuario)
    if (req.usuario) {
    const Proveedores = await getProveedoresol(req.usuario);
    res.status(200).send({ ok: true, Proveedores, msg: 'get Proveedores From API' });
}
else {
    res.status(401).send({ ok: false, msg: 'Unauthorized' });
}
}


exports.getArticulos = async (req: any, res: any, next: any) => {

    console.warn(req.usuario)
    console.log(req.usuario)
    if (req.usuario) {
        const articulos = await getARTICULOS(req.usuario);
        res.status(200).send({ ok: true, msg: 'get ARTICULOS From API', articulos });
    }
    else {
        res.status(401).send({ ok: false, msg: 'Unauthorized' });
    }
}

exports.getArticulosChg = async (req: any, res: any, next: any) => {

    console.warn(req.usuario)
    console.log(req.usuario)
    if (req.usuario) {
        const articulos = await getARTICULOSCHG(req.usuario);
        res.status(200).send({ ok: true, msg: 'get ARTICULOS From API', articulos });
    }
    else {
        res.status(401).send({ ok: false, msg: 'Unauthorized' });
    }
}

exports.getArticulo = async (req: any, res: any, next: any) => {
    const ArticuloID = req.query.ArticuloId;
    console.log('El Articulo en API:',ArticuloID)
    const articulo = await getArticulo(ArticuloID);
    res.status(200).send({ ok: true, msg: 'get Articulo From API', articulo });
}

exports.createArticulo = async (req: any, res: any, next: any) => {
    const { ProveedorID, ArticuloID,DescripcionProducto,MarcaID,TamanoGessa,IdUnidadEmpaque,EAN13,DUN14,CompraEnUnidades,
        DescripcionLarga,DescripcionPublicacion,UnidadMedida,SaborAroma,categoria_id,subcategoria_id,
        DepartamentoID,SeccionID,SegmentoID,PlazoPagoID,tipoCompra_id,CabysCodigo,
        CostoEmpaque,CostoUnitario,GravadoID,GravadoOExento,PorcImpConsumo,MercadoOrigenID,TiempoVigencia,MedProdAnchoProducto,MedProdAltoProducto,MedProdLargoProducto, 
        MedProdPesoNeto,MedProdPesoBruto,MedProdPesoEscurrido,MedProdDiametro,MedCajaAnchoProducto,
        MedCajaAltoProducto, MedCajaLargoProducto,FotoProductoFrente,FotoProductoLado,FotoProductoArribaBase,FotoProducto4,FotoProducto5,DescuentoConfidencialDC,DescuentoIntroduccionDEI,
        DescuentoFijoDFI,DescuentoNoDevolucionDND,CentroDistribucionTAE,PromocionalPAE,status,CambioPrecio} = req.body;

        console.log('Datos del req.body de controllers...',req.body)

    const articulo = await createArticulo({ProveedorID,ArticuloID,DescripcionProducto,MarcaID,TamanoGessa,IdUnidadEmpaque,EAN13,DUN14,
        CompraEnUnidades,DescripcionLarga,DescripcionPublicacion,UnidadMedida,SaborAroma,categoria_id,subcategoria_id,DepartamentoID,SeccionID,SegmentoID,PlazoPagoID,tipoCompra_id,
          CabysCodigo,CostoEmpaque,CostoUnitario,GravadoID,GravadoOExento,PorcImpConsumo,MercadoOrigenID,TiempoVigencia,MedProdAnchoProducto,
          MedProdAltoProducto,MedProdLargoProducto,MedProdPesoNeto,MedProdPesoBruto,
          MedProdPesoEscurrido,MedProdDiametro,MedCajaAnchoProducto,MedCajaAltoProducto,MedCajaLargoProducto,FotoProductoFrente,FotoProductoLado,FotoProductoArribaBase,FotoProducto4,FotoProducto5,
          DescuentoConfidencialDC,DescuentoIntroduccionDEI,
          DescuentoFijoDFI,DescuentoNoDevolucionDND,CentroDistribucionTAE,PromocionalPAE,status,CambioPrecio});
    res.status(200).send({ ok: true, msg: 'actualizar Articulos From API', articulo });
}

exports.createDiscounts = async (req: any, res: any, next: any) => {
    const { gtin,ruleType,ruleCode,type,value,startDate,endDate,secuency} = req.body;

        console.log('Datos del req.body de controllers...',req.body)

        const itmDiscount: itemDiscountsAttributes = {
            gtin: gtin,
            ruleType: ruleType,
            ruleCode: ruleCode,
            type: type,
            value: value,
            startDate: startDate,
            endDate: endDate,
            secuency: secuency
        }
       createDiscount(itmDiscount);

    
    res.status(200).send({ ok: true, msg: 'actualizar Articulos From API', itmDiscount });
}




exports.createProveedor = async (req: any, res: any, next: any) => {
    const { 
        proveedor_id,
        proveedor_dsc,
        gln,
        fechaSolicitud,
        CedJuridica,
        RazonSocial,
        RepreLegal,
        GerenteGeneral,
        GerenteVentas,
        AgenteVentas,
        ContactoFinanc,
        Direccion,
        canton_id,
        Barrio,
        Tel1,
        Tel2,
        NombreContactoFactElec,
        TelContactoFactElec,
        EmailContactoFactElec,
        EmailReciboContactoFactElec,
        CantidadLineasXFactura,
        TipoEntrega,
        AceptaDevoluc,
        OrdenCompra,
        DescuentoFijo,
        PorDescuentofijo,
        DescuentoConfidencial,
        PorcDescuentoConfidencial,
        DescuentoIntroduccion,
        PorcDescuentoIntroduccion,
        PartDinamicasComerciales,
        PartEspaciosPromocionales,
        PartDisplays,
        FrecuenciaVisitaTiendas,
        AportaCodigoCABYS,
        CodigoCABYS,
        ActividadEconomicaID,
        PlazoPagoID,
        DocEntregaFacElect,
        DocEntregaGuiaDespacho
    } = req.body;
    const proveedor = await createProveedor(
       { proveedor_id,
        proveedor_dsc,
        gln,
        fechaSolicitud,
        CedJuridica,
        RazonSocial,
        RepreLegal,
        GerenteGeneral,
        GerenteVentas,
        AgenteVentas,
        ContactoFinanc,
        Direccion,
        canton_id,
        Barrio,
        Tel1,
        Tel2,
        NombreContactoFactElec,
        TelContactoFactElec,
        EmailContactoFactElec,
        EmailReciboContactoFactElec,
        CantidadLineasXFactura,
        TipoEntrega,
        AceptaDevoluc,
        OrdenCompra,
        DescuentoFijo,
        PorDescuentofijo,
        DescuentoConfidencial,
        PorcDescuentoConfidencial,
        DescuentoIntroduccion,
        PorcDescuentoIntroduccion,
        PartDinamicasComerciales,
        PartEspaciosPromocionales,
        PartDisplays,
        FrecuenciaVisitaTiendas,
        AportaCodigoCABYS,
        CodigoCABYS,
        ActividadEconomicaID,
        PlazoPagoID,
        DocEntregaFacElect,
        DocEntregaGuiaDespacho}

    );
    res.status(200).send({ ok: true, msg: 'actualizar Proveedores From API', proveedor });
}

exports.createProveedorsol = async (req: any, res: any, next: any) => {
    const { 
        proveedor_id,
        proveedor_dsc,
        gln,
        categoria_id,
        fechaSolicitud,
        CedJuridica,
        RazonSocial,
        RepreLegal,
        GerenteGeneral,
        GerenteVentas,
        AgenteVentas,
        ContactoFinanc,
        Direccion,
        canton_id,
        Barrio,
        Tel1,
        Tel2,
        NombreContactoFactElec,
        TelContactoFactElec,
        EmailContactoFactElec,
        EmailReciboContactoFactElec,
        CantidadLineasXFactura,
        TipoEntrega,
        AceptaDevoluc,
        OrdenCompra,
        DescuentoFijo,
        PorDescuentofijo,
        DescuentoConfidencial,
        PorcDescuentoConfidencial,
        DescuentoIntroduccion,
        PorcDescuentoIntroduccion,
        PartDinamicasComerciales,
        PartEspaciosPromocionales,
        PartDisplays,
        FrecuenciaVisitaTiendas,
        AportaCodigoCABYS,
        CodigoCABYS,
        ActividadEconomicaID,
        PlazoPagoID,
        DocEntregaFacElect,
        DocEntregaGuiaDespacho
    } = req.body;
    console.log(req.body)
    const proveedor = await createProveedorsol(
       { proveedor_id,
        proveedor_dsc,
        gln,
        categoria_id,
        fechaSolicitud,
        CedJuridica,
        RazonSocial,
        RepreLegal,
        GerenteGeneral,
        GerenteVentas,
        AgenteVentas,
        ContactoFinanc,
        Direccion,
        canton_id,
        Barrio,
        Tel1,
        Tel2,
        NombreContactoFactElec,
        TelContactoFactElec,
        EmailContactoFactElec,
        EmailReciboContactoFactElec,
        CantidadLineasXFactura,
        TipoEntrega,
        AceptaDevoluc,
        OrdenCompra,
        DescuentoFijo,
        PorDescuentofijo,
        DescuentoConfidencial,
        PorcDescuentoConfidencial,
        DescuentoIntroduccion,
        PorcDescuentoIntroduccion,
        PartDinamicasComerciales,
        PartEspaciosPromocionales,
        PartDisplays,
        FrecuenciaVisitaTiendas,
        AportaCodigoCABYS,
        CodigoCABYS,
        ActividadEconomicaID,
        PlazoPagoID,
        DocEntregaFacElect,
        DocEntregaGuiaDespacho}

    );
    res.status(200).send({ ok: true, msg: 'actualizar Proveedores Solicitantes From API', proveedor });
}



exports.getPlazosPago = async (req: any, res: any, next: any) => {
    const plazosPago = await getPlazosPago();
    res.status(200).send({ ok: true, plazosPago, msg: 'get Plazos Pago From API' });
}

exports.getTipoCompra = async (req: any, res: any, next: any) => {
    const tipocompra = await getTipoCompra();
    res.status(200).send({ ok: true, tipocompra, msg: 'get Tipo Compra From API' });
}

exports.getTipoCompra = async (req: any, res: any, next: any) => {
    const tipocompra = await getTipoCompra();
    res.status(200).send({ ok: true, tipocompra, msg: 'get Tipo Compra From API' });
}

exports.getTipoCompra = async (req: any, res: any, next: any) => {
    const tipocompra = await getTipoCompra();
    res.status(200).send({ ok: true, tipocompra, msg: 'get Tipo Compra From API' });
}

exports.getMensajes = async (req: any, res: any, next: any) => {
    console.warn(req.usuario)
    console.log('USUARIO =============================>',req.query.usuario,req.query.tipoMsg)
    const tipoMsg = req.query.tipoMsg;
    const Mensaje = await getMensajes(req.query.usuario,tipoMsg);
    res.status(200).send({ ok: true, Mensaje, msg: 'get Tipo Compra From API' });
}

exports.getMensajesXtera = async (req: any, res: any, next: any) => {
    console.warn(req.usuario)
    console.log('USUARIO =============================>',req.query.usuario)
    
    const Mensajes = await getMensajesXtera(req.query.usuario);
    res.status(200).send({ ok: true, Mensajes, msg: 'get Tipo Compra From API' });
}

exports.createRetorno= async (req: any, res: any, next: any) => {
    const {gtin,MotivoRetorno,modo,UserType} = req.body;
   
    console.log('parametros')
    console.log(req.body)

    const Retorno = await createRetorno(gtin ,MotivoRetorno,modo,UserType );

    res.status(200).send({ ok: true, msg: 'actualizada tabla retornos', Retorno });

}


exports.createMensaje = async (req: any, res: any, next: any) => {
    const { mensaje_id,
    mensajeResp_id,
    UsuarioSend,
    UsuarioRecep,
    msgDate,
    msgDateCita,
    asunto_id,
    msgMensaje,
    msgMensajeRespuesta,
    msgUsuarioRecepOk,
    msgEliminado,
    IdMensajeOriginal,
    categoria_id,
    participantes,
    participantesCia,
    tipoMensaje,
    status,
    Foto,titulo,fechaCita} = req.body;

        console.log('..........................Datos del req.body de controllers.................................',req.body)

    const Mensaje = await createMensaje({
        mensaje_id,
        mensajeResp_id,
        UsuarioSend,
        UsuarioRecep,
        msgDate,
        msgDateCita,
        asunto_id,
        msgMensaje,
        msgMensajeRespuesta,
        msgUsuarioRecepOk,
        msgEliminado,
        IdMensajeOriginal,
        categoria_id,
        participantes,
        participantesCia,
        tipoMensaje,
        status,
        Foto,
        titulo,fechaCita });
    res.status(200).send({ ok: true, msg: 'actualizar Mensajes From API', Mensaje });
}

exports.updateMensaje = async (req: any, res: any, next: any) => {
   
    const {mensaje_id ,
        UsuarioSend,
        UsuarioRecep,
        msgMensajeRespuesta,
        msgEliminado,        // true si no se acepta la cita
        participantes,
        participantesCia,
        status,
        totalDestinos,
        fechaCita} = req.body;
    //console.log('TIPO DE REGISTRO=====================================>',req.body )
    const item = await updateMensaje(
        mensaje_id ,
        UsuarioSend,
        UsuarioRecep,
        msgMensajeRespuesta,
        msgEliminado,        // true si no se acepta la cita
        participantes,
        participantesCia,
        status,
        totalDestinos,
        fechaCita);
    res.status(200).send({ ok: true, msg: 'get Item From API', item });
}



exports.getReportes = async (req: any, res: any, next: any) => {
    const proveedor_id = req.query.proveedor_id;
    const Reportes = await getReportes(proveedor_id);
    res.status(200).send({ ok: true, Reportes, msg: 'get Tipo Compra From API' });
}


exports.getCategories = async (req: any, res: any, next: any) => {
    const categories = await getCategories();
    res.status(200).send({ ok: true, categories, msg: 'get Categories From API' });
}
exports.getPOS = async (req: any, res: any, next: any) => {
    const POS = await getPOS();
    res.status(200).send({ ok: true, msg: 'get POS From API', POS });
}
exports.getRuleCodeType = async (req: any, res: any, next: any) => {
    const { id } = req.query;
    const RuleCodeType = await getRuleCodeType(id);
    res.status(200).send({ ok: true, msg: 'get getRuleCodeType From API', RuleCodeType });
}
exports.getSubCategories = async (req: any, res: any, next: any) => {
    const categoryId = req.query.categoryId;
    const subCategories = await getSubCategories(categoryId);
    res.status(200).send({ ok: true, subCategories, msg: 'get SubCategories From API' });
}
exports.addItemStatus = async (req: any, res: any, next: any) => {

    if (req.usuario) {
        const { gtin, Status } = req.body;
        let nivelApprobacion = -1;
        switch (req.usuario.UserType) {
            case '1':
                nivelApprobacion = 1;
                break;
            case '2':
                nivelApprobacion = 0;
                break;
            case '4':
                nivelApprobacion = 2;
                break;
            default:
                break;
        }
        const statusUpdate: AprobacionesAttributes = {
            gtin, Status, UserId: req.usuario.userId,
            NivelAprobacion: nivelApprobacion

        };
        const item = await addItemStatus(statusUpdate);
        res.status(200).send({ ok: true, msg: 'add Item Status From API', item });
    }
    else {
        res.status(401).send({ ok: false, msg: 'Unauthorized' });
    }
}
exports.addCategory = async (req: any, res: any, next: any) => {
    const category = req.body.category;
    const categoryId = await addCategory(category);
    res.status(200).send({ ok: true, msg: 'add Category From API', categoryId });
}
exports.addSubCategory = async (req: any, res: any, next: any) => {
    const { category, categoryId } = req.body;
    const subCategory = await addSubCategory(category, categoryId);
    res.status(200).send({ ok: true, msg: 'add Category From API', categoryId });
}


exports.getItems = async (req: any, res: any, next: any) => {

    console.warn(req.usuario)
  
    if (req.usuario) {
        const items = await getItems(req.usuario);
        res.status(200).send({ ok: true, msg: 'get Items From API', items });
    }
    else {
        res.status(401).send({ ok: false, msg: 'Unauthorized' });
    }

}


exports.getFotos = async (req: any, res: any, next: any) => {

    const gln = req.query.gln
    const gtin  = req.query.gtin;
    const CambioPrecios = req.query.CambioPrecios;

    console.log('cambioprecios',CambioPrecios)
  
        const items = await getFotos(gln, gtin,CambioPrecios);
        res.status(200).send({ ok: true, msg: 'get Items From API', items });
   

}

exports.getItemsCambPrecios = async (req: any, res: any, next: any) => {
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    console.warn('USUARIO:',req.query.gln)
  
    const gln = req.query.gln;
        const items = await getItemsCambPrecios(gln);
        res.status(200).send({ ok: true, msg: 'get Items From API', items });
   

}


exports.getProviders = async (req: any, res: any, next: any) => {
    const providers = await getProviders();
    res.status(200).send({ ok: true, msg: 'get Providers From API', providers });
}
exports.getItem = async (req: any, res: any, next: any) => {
    const gtin = req.query.gtin;
    const item = await getItem(gtin);
    res.status(200).send({ ok: true, msg: 'get Item From API', item });
}



exports.getCateXProveedor = async (req: any, res: any, next: any) => {
    const gln = req.query.gln;
    const categories = await getCateXProveedor(gln);
    res.status(200).send({ ok: true, msg: 'get Item From API', categories });
}

exports.getItemDicounts = async (req: any, res: any, next: any) => {
    const gtin = req.query.gtin;
    console.log(gtin)
    const itemsDiscounts = await getitemDiscounts(gtin);
    res.status(200).send({ ok: true, msg: 'get itemsDiscounts From API', itemsDiscounts });
}
exports.getCategory = async (req: any, res: any, next: any) => {
    const { categoryId } = req.query;
    const Category = await getCategory(categoryId);
    res.status(200).send({ ok: true, msg: 'get Item From API', Category });
}
exports.getSubCategory = async (req: any, res: any, next: any) => {
    const { categoryId, subcategoryId } = req.query;
    const SubCategory = await getSubCategory(categoryId, subcategoryId);
    res.status(200).send({ ok: true, msg: 'get Item From API', SubCategory });
}
exports.getBuyerTypes = async (req: any, res: any, next: any) => {
    const buyerTypes = await getBuyerTypes();
    res.status(200).send({ ok: true, msg: 'get BuyerTypes From API', buyerTypes });
}
exports.updateCode = async (req: any, res: any, next: any) => {
    const { gtin, itmCode } = req.body;
    const item = await updateCode(gtin, itmCode);
    res.status(200).send({ ok: true, msg: 'get Item From API', item });
}


exports.LoadProductos = async (req: any, res: any, next: any) => {
    const gtin  = req.query.gtin;
    console.log('ESTE GTIN ES:',gtin)
    const item = await LoadProductos(gtin);
    res.status(200).send({ ok: true, msg: 'get Item From API', item });
}


exports.LoadProductosNlo = async (req: any, res: any, next: any) => {
    const gtin  = req.query.gtin;
    const item = await LoadProductosNlo(gtin);
    res.status(200).send({ ok: true, msg: 'get Item From API', item });
}

exports.LoadProductosPre = async (req: any, res: any, next: any) => {
    const gtin  = req.query.gtin;
    const item = await LoadProductosPre(gtin);
    res.status(200).send({ ok: true, msg: 'get Item From API', item });
}

exports.LoadProductosProv = async (req: any, res: any, next: any) => {
    const gtin  = req.query.gtin;
    const item = await LoadProductosProv(gtin);
    res.status(200).send({ ok: true, msg: 'get Item From API', item });
}

exports.LoadProductosPdv = async (req: any, res: any, next: any) => {
    const gtin  = req.query.gtin;
    const item = await LoadProductosPdv(gtin);
    res.status(200).send({ ok: true, msg: 'get Item From API', item });
}



exports.CargarProducto = async (req: any, res: any, next: any) => {
    const { gtin, itmCode } = req.body;
    const item = await CargarProducto(gtin);
    res.status(200).send({ ok: true, msg: 'get Item From API', item });
}


exports.updateProduct = async (req: any, res: any, next: any) => {
   
    console.log(req.user)
    const { gtin, categoryId, SubCategoryId, TipoRegistro_ID, buyerType, FotoProductoFrente,
            FotoProductoLado,FotoProductoArribaBase,FotoProducto4,FotoProducto5,amountCosto,
            unitBuy,AceptaDevoluciones,skuSustitucion } = req.body;
    console.log('TIPO DE REGISTRO=====================================>',req.body )
    const item = await updateProduct(gtin, categoryId, SubCategoryId,TipoRegistro_ID ,
                                     buyerType, FotoProductoFrente,FotoProductoLado,FotoProductoArribaBase,
                                    FotoProducto4,FotoProducto5,amountCosto,unitBuy,AceptaDevoluciones,skuSustitucion);
    res.status(200).send({ ok: true, msg: 'get Item From API', item });
}



exports.updateProductCambioPrecios = async (req: any, res: any, next: any) => {
   
    const { gtin,amountCosto } = req.body;
    console.log('TIPO DE REGISTRO CAMBIO PRECIOS=====================================>',req.body )
    
    {const item = await updateProductCambioPrecios(gtin,amountCosto)
    res.status(200).send({ ok: true, msg: 'get Item From API', item });
}
}




exports.updateProductComercialData = async (req: any, res: any, next: any) => {
    
    const { gtin, comercialLongDescription, comercialShortDescription,comercialPubliDescription ,
        comercialFonetDescription,comercialHablaDescription,periCostSale,
        periCostUtility, sarettoCostSale, sarettoCostUtility, supercomproCostUtility,
        PosID, supercomproCostSale, periSelected, sarettoSelected, superComproSelected,
        priceFixed, superPrice, sarettoPrice, periPrice, PeriSinIVA, PeriConIVA,
        SupercomproSinIVA, SupercomproConIVA, SarettoSinIVA, SarettoConIVA,
        confidencial, introduccion, fijo, promocional,ddc,nodevolucion,
        superviquezCostSale,superviquezCostUtility,superviquezPrice,superviquezSinIVA,superviquezConIVA,superviquezSelected,
        SegmentacionArticulo,tipoRegistroIdSelected,buyerTypeSelected,AreaManejo,UbicacionCedi,ProyMenVtasCol,ProyMenVtasUni,AceptaDevoluciones } = req.body;
    const item = await updateProductComercialData(gtin, comercialLongDescription, comercialShortDescription,comercialPubliDescription ,
        comercialFonetDescription,comercialHablaDescription,periCostSale,
        periCostUtility, sarettoCostSale, sarettoCostUtility, supercomproCostUtility, PosID, supercomproCostSale, periSelected, 
        sarettoSelected, superComproSelected, priceFixed, superPrice, sarettoPrice, periPrice, PeriSinIVA, PeriConIVA, 
        SupercomproSinIVA, SupercomproConIVA, SarettoSinIVA, SarettoConIVA, confidencial, introduccion, fijo, promocional,ddc,nodevolucion,
        superviquezCostSale,superviquezCostUtility,superviquezPrice,superviquezSinIVA,superviquezConIVA,superviquezSelected,
        SegmentacionArticulo,tipoRegistroIdSelected,buyerTypeSelected,AreaManejo,UbicacionCedi,ProyMenVtasCol,ProyMenVtasUni,AceptaDevoluciones);
    res.status(200).send({ ok: true, msg: 'get Item From API', item });
    console.log('SUPER VIQUEZ:',superviquezCostSale,superviquezCostUtility,superviquezPrice,
    superviquezSinIVA,superviquezConIVA,superviquezSelected,SegmentacionArticulo,
    tipoRegistroIdSelected,buyerTypeSelected,AreaManejo,UbicacionCedi,ProyMenVtasCol,ProyMenVtasUni,AceptaDevoluciones)
    
}


exports.updateItems = async (req: any, res: any, next: any) => {
    try {

        let dd2 = new Date()
        let dia =  dd2.getDate().toString()
        dia = dia.length == 1 ? '0' + dia : dia
        let mes =  dd2.getMonth()+1
        let mesc = mes.toString()
        mesc = mesc.length == 1 ? '0' + mesc : mesc
        let anu = dd2.getFullYear().toString()

        let fechaProceso2 = dia +'/'+ mesc +'/'+ anu  

        
        let dd1 = new Date()
        dd1.setDate(dd1.getDate() - 3)    
        let dia1 =  dd1.getDate().toString()
        dia1 = dia1.length == 1 ? '0' + dia1 : dia1
        let mes1 =  dd1.getMonth()+1
        let mesc1 = mes1.toString()
        mesc1 = mesc1.length == 1 ? '0' + mesc1 : mesc1
        let anu1 = dd1.getFullYear().toString()

        let fechaProceso1 = dia1 +'/'+ mesc1 +'/'+ anu1  

        console.log('Fecha 1',fechaProceso1)
        console.log('Fecha 2',fechaProceso2)


       

    var data = '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="/pub/ws/generico/server.php">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <ser:ws_verifLogin soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\n         <gln xsi:type="xsd:string">7449027700006</gln>\n         <usuario xsi:type="xsd:string">GESSAWS</usuario>\n         <password xsi:type="xsd:string">ws2hp0pt24</password>\n      </ser:ws_verifLogin>\n   </soapenv:Body>\n</soapenv:Envelope>';

    var config = {
        method: 'post',
       // url: 'http://preprod.syncway.com/pub/ws/generico/server.php?wsdl',
        url: 'https://cr.syncway.com/pub/ws/generico/server.php?wsdl',
        headers: {
            'Content-Type': 'text/xml'
        },
        data: data
    };

    const resAPIReq = await axios(config)

    const template = {
        token: ['//descripcion', {
            error: 'error',
            codigo_error: 'codigo_error',
            valor: 'valor'
        }]
    }

    const result = await transform(resAPIReq.data, template)


  //  data = `<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="/pub/ws/generico/server.php" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">\n    <soapenv:Header/>\n    <soapenv:Body>\n        <ser:consultarPorFechasYGLN soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\n            <token xsi:type="xsd:string">${result.token[0].valor}</token>\n            <fecha_desde xsi:type="xsd:string"></fecha_desde>\n            <fecha_hasta xsi:type="xsd:string"></fecha_hasta>\n            <glnSolicitante xsi:type="xsd:string"></glnSolicitante>\n            <gln xsi:type="ser:ArrayOfstring" soapenc:arrayType="xsd:string[]"/>\n        </ser:consultarPorFechasYGLN>\n    </soapenv:Body>\n</soapenv:Envelope>`;
    data = `<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="/pub/ws/generico/server.php" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">\n    <soapenv:Header/>\n    <soapenv:Body>\n        <ser:consultarPorFechasYGLN soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\n            <token xsi:type="xsd:string">${result.token[0].valor}</token>\n            <fecha_desde xsi:type="xsd:string">${fechaProceso1}</fecha_desde>\n            <fecha_hasta xsi:type="xsd:string">${fechaProceso2}</fecha_hasta>\n            <glnSolicitante xsi:type="xsd:string"></glnSolicitante>\n            <gln xsi:type="ser:ArrayOfstring" soapenc:arrayType="xsd:string[]"/>\n        </ser:consultarPorFechasYGLN>\n    </soapenv:Body>\n</soapenv:Envelope>`;
   
    config = {
        method: 'post',
        url: 'https://cr.syncway.com/pub/ws/generico/server.php?wsdl',
       // url: 'http://preprod.syncway.com/pub/ws/generico/server.php?wsdl',
        headers: {
            'Content-Type': 'text/xml'
        },
        data: data
    };
    const resAPI = await axios(config);
    const templateXmlStringResult = {
        resultado: ['//xmlContenido', {
            error: 'error',
            codigo_error: 'codigo_error',
            resultadoOperacion: 'resultadoOperacion'
        }]
    }
    const resultt = await transform(resAPI.data, templateXmlStringResult)
    const templateResultAPI = {
        res: ['//tradeItem', {
            idNivel: 'idNivel',
            gln: 'gln',
            partyName: 'partyName',
            additionalPartyIdentification: 'additionalPartyIdentification',
            gtin: 'gtin',
            tradeItemUnitDescriptor: 'tradeItemUnitDescriptor',
            classificationCategoryCode: 'classificationCategoryCode',
            classificationCategoryDesc: 'classificationCategoryDesc',
            startAvailabilityDateTime: 'startAvailabilityDateTime',
            endAvailabilityDateTime: 'endAvailabilityDateTime',
            functionalName: 'functionalName',
            brandName: 'brandName',
            variantDescription: 'variantDescription',
            netContent: 'number(netContent)',
            netContentUnitOfMeasure: 'netContentUnitOfMeasure',
            height: 'number(height)',
            width: 'number(width)',
            depth: 'number(depth)',
            lengthUnitOfMeasure: 'lengthUnitOfMeasure',
            grossWeight: 'number(grossWeight)',
            weightUnitOfMeasure: 'weightUnitOfMeasure',
            packagingTypeCode: 'packagingTypeCode',
            packagingTypeDesc: 'packagingTypeDesc',
            tradeItemCountryOfOrigin: 'tradeItemCountryOfOrigin',
            targetMarketCountryCode: 'targetMarketCountryCode',
            tradeItemDescription: 'tradeItemDescription',
            descriptionShort: 'descriptionShort',
            additionalTradeItemIdentification: 'additionalTradeItemIdentification',
            contactName: 'contactName',
            isPackagingMarkedReturnable: 'boolean(isPackagingMarkedReturnable != "N")',
            isPriceOnPack: 'boolean(isPriceOnPack != "N")',
            isTradeItemADespatchUnit: 'boolean(isTradeItemADespatchUnit != "N")',
            isTradeItemAnOrderableUnit: 'boolean(isTradeItemAnOrderableUnit != "N")',
            isTradeItemAnInvoiceUnit: 'boolean(isTradeItemAnInvoiceUnit != "N")',
            isTradeItemAVariableUnit: 'boolean(isTradeItemAVariableUnit != "N")',
            isTradeItemAMinimumUnit: 'boolean(isTradeItemAMinimumUnit != "N")',
            regulatoryPermitIdentification: 'regulatoryPermitIdentification',
            permitStartDateTime: 'permitStartDateTime',
            permitEndDateTime: 'permitEndDateTime',
            invoiceName: 'invoiceName',
            legibilityStatus: 'legibilityStatus',
            gs1TradeItemIdentificationKeyCode: 'gs1TradeItemIdentificationKeyCode',
            nameOfManufacturer: 'nameOfManufacturer',
            glnOfManufacturer: 'glnOfManufacturer',
            isTradeItemAConsumerUnit: 'boolean(isTradeItemAConsumerUnit != "N")',
            availabilityType: 'availabilityType',
            quantityOfTradeItemsPerPallet: 'quantityOfTradeItemsPerPallet',
            stackingFactor	: 'stackingFactor',
            quantityOfTradeItemsPerPalletLayer: 'quantityOfTradeItemsPerPalletLayer',
            quantityOfLayersPerPallet: 'quantityOfLayersPerPallet',
            priceInformation: ['priceInformation/prePricedAmount', { amount: 'number(amount)' }],
            priceInformationCurrency: ['priceInformation/prePricedAmount/amount', { Currency: '@currencyISOCode' }],
            isPrivate: 'boolean(isPrivate != "N")',
            additionalTradeItemClassification: ['AdditionalTradeItemClassification', { additionalTradeItemClassificationSystemCode: 'additionalTradeItemClassificationSystemCode' }],
            additionalTradeItemClassificationValue: ['AdditionalTradeItemClassification/additionalTradeItemClassificationValue', { additionalTradeItemClassificationCodeValue: 'additionalTradeItemClassificationCodeValue', additionalTradeItemClassificationCodeDescription: 'additionalTradeItemClassificationCodeDescription' }],
            childTradeItem: 'childTradeItem',
            discount: ['priceInformation/dataRecipient/discount', { type: '@type', ruleType: 'ruleType', ruleCode: 'ruleCode', value: 'value', startDate: 'startDate', endDate: 'endDate', secuency: 'secuency' }],
        }]
    }
    //console.log('xxxx', resultt.resultado[0])
    const resultAPITransform = await transform(resultt.resultado[0].resultadoOperacion, templateResultAPI)

   // console.log('Elementos:', Element)

    resultAPITransform.res.forEach((element: any) => {
        //console.log('x: ', element.discount);
        const ins: ItemsAttributes = {
            additionalPartyIdentification: element.additionalPartyIdentification,
            idNivel: element.idNivel,
            gln: element.gln,
            partyName: element.partyName,
            gtin: element.gtin,
            tradeItemUnitDescriptor: element.tradeItemUnitDescriptor,
            classificationCategoryCode: element.classificationCategoryCode,
            classificationCategoryDesc: element.classificationCategoryDesc,
            startAvailabilityDateTime: element.startAvailabilityDateTime,
            endAvailabilityDateTime: element.endAvailabilityDateTime,
            functionalName: element.functionalName,
            brandName: element.brandName,
            variantDescription: element.variantDescription,
            netContent: element.netContent,
            netContentUnitOfMeasure: element.netContentUnitOfMeasure,
            height: element.height,
            width: element.width,
            depth: element.depth,
            lengthUnitOfMeasure: element.lengthUnitOfMeasure,
            grossWeight: element.grossWeight,
            weightUnitOfMeasure: element.weightUnitOfMeasure,
            packagingTypeDesc: element.packagingTypeDesc,
            packagingTypeCode: element.packagingTypeCode,
            tradeItemCountryOfOrigin: element.tradeItemCountryOfOrigin,
            targetMarketCountryCode: element.targetMarketCountryCode,
            tradeItemDescription: element.tradeItemDescription,
            descriptionShort: element.descriptionShort,
            additionalTradeItemIdentification: element.additionalTradeItemIdentification,
            contactName: element.contactName,
            isPackagingMarkedReturnable: element.isPackagingMarkedReturnable,
            isPriceOnPack: element.isPriceOnPack,
            isTradeItemADespatchUnit: element.isTradeItemADespatchUnit,
            isTradeItemAnOrderableUnit: element.isTradeItemAnOrderableUnit,
            isTradeItemAnInvoiceUnit: element.isTradeItemAnInvoiceUnit,
            isTradeItemAVariableUnit: element.isTradeItemAVariableUnit,
            isTradeItemAMinimumUnit: element.isTradeItemAMinimumUnit,
            regulatoryPermitIdentification: element.regulatoryPermitIdentification,
            permitStartDateTime: element.permitStartDateTime,
            permitEndDateTime: element.permitEndDateTime,
            invoiceName: element.invoiceName,
            legibilityStatus: element.legibilityStatus,
            gs1TradeItemIdentificationKeyCode: element.gs1TradeItemIdentificationKeyCode,
            nameOfManufacturer: element.nameOfManufacturer,
            glnOfManufacturer: element.glnOfManufacturer,
            isTradeItemAConsumerUnit: element.isTradeItemAConsumerUnit,
            availabilityType: element.availabilityType,
            quantityOfTradeItemsPerPallet: element.quantityOfTradeItemsPerPallet,
            stackingFactor	: element.stackingFactor,
            quantityOfTradeItemsPerPalletLayer: element.quantityOfTradeItemsPerPalletLayer,
            quantityOfLayersPerPallet: element.quantityOfLayersPerPallet,
            amount: element.priceInformation.length > 0 ? element.priceInformation[0].amount : null,
            childTradeItem:  element.childTradeItem,
            priceInformationCurrency: element.priceInformationCurrency.length > 0 ? element.priceInformationCurrency[0].Currency : null,
            cabysCode: element.additionalTradeItemClassificationValue[0].additionalTradeItemClassificationCodeValue,
            cabysDesc: element.additionalTradeItemClassificationValue[0].additionalTradeItemClassificationCodeDescription,
        }
       // console.log(ins)
        createItem(ins)

        console.log(element.gln,element.gtin)
        GetFuncImages(element.gln,element.gtin)   


        element.discount.forEach((q: any) => {
            const itmDiscount: itemDiscountsAttributes = {
                gtin: element.gtin,
                ruleType: q.ruleType,
                ruleCode: q.ruleCode,
                type: q.type,
                value: q.value,
                startDate: q.startDate,
                endDate: q.endDate,
                secuency: q.secuency
            }
           createDiscount(itmDiscount);
        })


    })
    res.status(200).send({ ok: true, msg: 'update Items From API', });

} catch (error) {
    console.error('Error en interfaz api GSONE:', error);
    let UsuarioId = 9999
    const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 25,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: "contacto@conexiongessa.com",
            pass: "1Tsupp0rt01%",
        },
    });
    transporter.sendMail({
        from: '"conexiongessa" <contacto@conexiongessa.com>', // sender address
        to: 'carlos_murillosoto@hotmail.com', // list of receivers
        subject: 'Error carga datos GS1',
        text: error, // html body
    }).then((info: any) => {
        console.log({ info });
    }).catch(console.error);
}
}

exports.getAsuntos = async (req: any, res: any, next: any) => {
    const asunto = await getAsuntos();
    res.status(200).send({ ok: true, asunto, msg: 'get Tipo Compra From API' });
}


exports.getAsunto = async (req: any, res: any, next: any) => {
    const asuntoId = req.query.asunto_id
    const asunto = await getAsunto(asuntoId);
    res.status(200).send({ ok: true, msg: 'get reporte From API', asunto });
}


exports.editAsuntos = async (req: any, res: any, next: any) => {
    const { asunto_id,asunto_dsc,tipoAsunto} = req.body;
    
    await editAsuntos( asunto_id,asunto_dsc,tipoAsunto );
    res.send({ msg: 'Asunto editado o creado correctamente' });
}

exports.delAsuntos = async (req: any, res: any, next: any) => {
    const asuntoId = req.query.asunto_id
    const asuntodel = await delAsuntos(asuntoId);
    res.send({ msg: 'Usuario eliminado',  asuntodel });
}




exports.getPuestos = async (req: any, res: any, next: any) => {
    const puesto = await getPuestos();
    res.status(200).send({ ok: true, puesto, msg: 'get Puestos From API' });
}



exports.getPuesto = async (req: any, res: any, next: any) => {
    const PuestoId = req.query.IdPuesto
    const puesto = await getPuesto(PuestoId);
    res.status(200).send({ ok: true, msg: 'get puesto From API', puesto });
}

exports.getDescFijo = async (req: any, res: any, next: any) => {
    const proveedor_id = req.query.proveedor_id
    const categoria_id = req.query.categoria_id
    const descFijo = await getDescFijo(proveedor_id,categoria_id);
    res.status(200).send({ ok: true, msg: 'get puesto From API', descFijo });
}


exports.editPuestos = async (req: any, res: any, next: any) => {
    const { IdPuesto,DescripcionPuesto} = req.body;
    
    await editPuestos( IdPuesto,DescripcionPuesto );
    res.send({ msg: 'Puesto editado o creado correctamente' });
}

exports.delPuestos = async (req: any, res: any, next: any) => {
    const PuestoId = req.query.IdPuesto
    const puestodel = await delPuestos(PuestoId);
    res.send({ msg: 'Puesto eliminado',  puestodel });
}



exports.getImages = async (req: any, res: any, next: any) => {
    const { glnPublicador, gtin} = req.body;
    
// esta parte de codigo se usa para procesar las imagenes  (hasta *)
     var dataImage = '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="/pub/ws/imagenes/server.php">\n <soapenv:Header/>\n <soapenv:Body>\n <ser:ws_verifLogin soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\n <gln xsi:type="xsd:string">7449027700006</gln>\n <usuario xsi:type="xsd:string">GESSAWS</usuario>\n <password xsi:type="xsd:string">ws2hp0pt24</password>\n </ser:ws_verifLogin>\n </soapenv:Body>\n </soapenv:Envelope>\n'
    

    var configImage = {
        method: 'post',
        url: 'http://cr.syncway.com/pub/ws/imagenes/server.php?wsdl',
       // url: 'https://cr.syncway.com/pub/ws/generico/server.php?wsdl',
        headers: {
            'Content-Type': 'text/xml'
        },
        data: dataImage
    };

    const resAPIReqImage = await axios(configImage)

    const templateImage = {
        token: ['//descripcion', {
            error: 'error',
            codigo_error: 'codigo_error',
            valor: 'valor'
        }]
    }
    

    const resultImage = await transform(resAPIReqImage.data, templateImage)

// codigo     

    //console.log('datos token', result.token[0].valor)

   // data = `<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="/pub/ws/generico/server.php" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">\n    <soapenv:Header/>\n    <soapenv:Body>\n        <ser:consultarPorFechasYGLN soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\n            <token xsi:type="xsd:string">${result.token[0].valor}</token>\n            <fecha_desde xsi:type="xsd:string"></fecha_desde>\n            <fecha_hasta xsi:type="xsd:string"></fecha_hasta>\n            <glnSolicitante xsi:type="xsd:string"></glnSolicitante>\n            <gln xsi:type="ser:ArrayOfstring" soapenc:arrayType="xsd:string[]"/>\n        </ser:consultarPorFechasYGLN>\n    </soapenv:Body>\n</soapenv:Envelope>`;
    dataImage = `
                        <soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="/pub/ws/imagenes/server.php">
                    <soapenv:Header/>
                    <soapenv:Body>
                        <ser:wm_consultarImagenes_porUrl soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                            <token xsi:type="xsd:string">${resultImage.token[0].valor}</token>
                            <glnPublicador xsi:type="xsd:string">${glnPublicador}</glnPublicador>
                            <gtin xsi:type="xsd:string">${gtin}</gtin>
                        </ser:wm_consultarImagenes_porUrl>
                    </soapenv:Body>
                    </soapenv:Envelope>
    
    `;
   
    configImage = {
        method: 'post',
        //url: 'https://cr.syncway.com/pub/ws/generico/server.php?wsdl',  // CAMBIAR AQUI CON LA URL DE PRODUCCION
        url: 'http://cr.syncway.com/pub/ws/imagenes/server.php',
       
        headers: {
            'Content-Type': 'text/xml'
        },
        data: dataImage
    };
    const resAPIImage = await axios(configImage);

    const templateXmlStringResultImage = {
        resultado: ['//descripcion', {
            error: 'error',
            codigo_error: 'codigo_error',
            descripcion: 'descripcion',
            valor: 'valor',
        }]
    }
    const resulImage = await transform(resAPIImage.data, templateXmlStringResultImage)

    if(resulImage.resultado[0].error==true) {
        
        console.log('IMAGEN NO ENCONTRADA')
       }

        else

     {   

    console.log('TOKEN:',resulImage )

    

    const templateResultAPIImage = {
        res: ['//producto', {
            gtin: 'gtin',
            glnFabricante: 'glnFabricante',
            imagenes: ['imagenes/item',{nombre: 'nombre',codigo: 'codigo',contenido:'contenido'}] ,
        }]
    }
    
    const resultAPITransformImage = await transform(resulImage.resultado[0].valor, templateResultAPIImage)

    //console.log('Datos de Imagenes:',resultAPITransformImage)

 

//console.log('URL:',resultAPITransform.res[0].imagenes)





//let imageUrl = 'https://s3.sa-east-1.amazonaws.com/eway.preproduccion-br/vLid9QXOkmRPrcggx1k9HOdzN0U5Fxpy.jpg'
let imageUrl = ''

    

    resultAPITransformImage.res[0].imagenes.forEach((element: any)=> {

        imageUrlToBase64(element.contenido).then(base64String => {

        const ins: PublicadorImagenesAttributes ={
     
             glnPublicador: glnPublicador,
             gtin: gtin,
             nombre : element.nombre,
             codigo: element.codigo,
             contenido : element.contenido,
             gtinImage: base64String,
             
             
     
     
        }
     
         createImage(ins)
        });
     })    // este cierra el ciclo
     
 



    }

    res.status(200).send({ ok: true, msg: 'update Items From API', });

}



async function GetFuncImages(glnPublicador:string, gtin:string)  {

    try {

    // esta parte de codigo se usa para procesar las imagenes  (hasta *)
     var dataImage = '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="/pub/ws/imagenes/server.php">\n <soapenv:Header/>\n <soapenv:Body>\n <ser:ws_verifLogin soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\n <gln xsi:type="xsd:string">7449027700006</gln>\n <usuario xsi:type="xsd:string">GESSAWS</usuario>\n <password xsi:type="xsd:string">ws2hp0pt24</password>\n </ser:ws_verifLogin>\n </soapenv:Body>\n </soapenv:Envelope>\n'
    

    var configImage = {
        method: 'post',
        url: 'http://cr.syncway.com/pub/ws/imagenes/server.php?wsdl',
        headers: {
            'Content-Type': 'text/xml'
        },
        data: dataImage
    };

    const resAPIReqImage = await axios(configImage)

    const templateImage = {
        token: ['//descripcion', {
            error: 'error',
            codigo_error: 'codigo_error',
            valor: 'valor'
        }]
    }
    

    const resultImage = await transform(resAPIReqImage.data, templateImage)

// codigo     

    //console.log('datos token', result.token[0].valor)

   // data = `<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="/pub/ws/generico/server.php" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">\n    <soapenv:Header/>\n    <soapenv:Body>\n        <ser:consultarPorFechasYGLN soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\n            <token xsi:type="xsd:string">${result.token[0].valor}</token>\n            <fecha_desde xsi:type="xsd:string"></fecha_desde>\n            <fecha_hasta xsi:type="xsd:string"></fecha_hasta>\n            <glnSolicitante xsi:type="xsd:string"></glnSolicitante>\n            <gln xsi:type="ser:ArrayOfstring" soapenc:arrayType="xsd:string[]"/>\n        </ser:consultarPorFechasYGLN>\n    </soapenv:Body>\n</soapenv:Envelope>`;
    dataImage = `
                        <soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="/pub/ws/imagenes/server.php">
                    <soapenv:Header/>
                    <soapenv:Body>
                        <ser:wm_consultarImagenes_porUrl soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                            <token xsi:type="xsd:string">${resultImage.token[0].valor}</token>
                            <glnPublicador xsi:type="xsd:string">${glnPublicador}</glnPublicador>
                            <gtin xsi:type="xsd:string">${gtin}</gtin>
                        </ser:wm_consultarImagenes_porUrl>
                    </soapenv:Body>
                    </soapenv:Envelope>
    
    `;
   
    configImage = {
        method: 'post',
       
         // CAMBIAR AQUI CON LA URL DE PRODUCCION
        url: 'http://cr.syncway.com/pub/ws/imagenes/server.php',
      // url: 'https://cr.syncway.com/pub/ws/generico/server.php?wsdl',
       
        headers: {
            'Content-Type': 'text/xml'
        },
        data: dataImage
    };
    const resAPIImage = await axios(configImage);

    const templateXmlStringResultImage = {
        resultado: ['//descripcion', {
            error: 'error',
            codigo_error: 'codigo_error',
            descripcion: 'descripcion',
            valor: 'valor',
        }]
    }
    const resulImage = await transform(resAPIImage.data, templateXmlStringResultImage)

    if(resulImage.resultado[0].error==true) {
        
        console.log('IMAGEN NO ENCONTRADA')
       }

        else

     {   

            console.log('TOKEN:',resulImage )

            

            const templateResultAPIImage = {
                res: ['//producto', {
                    gtin: 'gtin',
                    glnFabricante: 'glnFabricante',
                    imagenes: ['imagenes/item',{nombre: 'nombre',codigo: 'codigo',contenido:'contenido'}] ,
                }]
            }
            
            const resultAPITransformImage = await transform(resulImage.resultado[0].valor, templateResultAPIImage)

            resultAPITransformImage.res[0].imagenes.forEach((element: any)=> {

                imageUrlToBase64(element.contenido).then(base64String => {

                const ins: PublicadorImagenesAttributes ={
            
                    glnPublicador: glnPublicador,
                    gtin: gtin,
                    nombre : element.nombre,
                    codigo: element.codigo,
                    contenido : element.contenido,
                    gtinImage: base64String,
                    
                    
            
            
                }
            
                createImage(ins)

                return true

                
                });

        
     })    // este cierra el ciclo
     
 



    }   // cierra el else

    //res.status(200).send({ ok: true, msg: 'update Items From API', });

}catch (err) {
    console.log(err);
  }


}



async function imageUrlToBase64(url:any) {
    try {
      const response = await axios.get(url, {
        responseType: 'arraybuffer',
      });
  
      const contentType = response.headers['content-type'];
  
      const base64String = `data:${contentType};base64,${Buffer.from(
        response.data,
      ).toString('base64')}`;
  
      return base64String;
    } catch (err) {
      console.log(err);
    }
  }

 
  // FIN DEL CODIGO
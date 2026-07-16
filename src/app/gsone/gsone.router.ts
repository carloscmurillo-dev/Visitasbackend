import { Router } from 'express';
const auth = require('../../middleware/auth');
import { ADD_CATEGORY_ENDPOINT, UPDATE_ITEM_CODE_ENDPOINT, GET_ITEM_DISCOUNTS_ENDPOINT, ADD_ITEM_STATUS_ENDPOINT, ADD_SUBCATEGORY_ENDPOINT, GET_BUYER_TYPES_ENDPOINT, GET_CATEGORIES_ENDPOINT, 
    GET_CATEGORY_ENDPOINT, GET_ITEMS_ENDPOINT, GET_ITEM_ENDPOINT, GET_POS_ENDPOINT, GET_PROVIDERS_ENDPOINT, GET_SUBCATEGORIES_ENDPOINT, GET_SUBCATEGORY_ENDPOINT, 
    GET_ARTICULO_ENDPOINT,GET_PROVEEDORESOL_ENDPOINT,GET_PROVEEDORSOL_ENDPOINT,CREATE_PROVEEDORSOL_ENDPOINT,GET_REPORTES_ENDPOINT,
    UPDATE_ITEMS_FROM_API_ENDPOINT, UPDATE_ITEM_COMERCIAL_DATA_ENDPOINT, UPDATE_ITEM_ENDPOINT, GET_RULE_CODE_TYPE_ENDPOINT ,GET_MARCAS_ENDPOINT,GET_ARTICULOS_ENDPOINT,GET_PLAZOSPAGO_ENDPOINT,GET_TIPOCOMPRA_ENDPOINT,
    GET_TIPOSGRAVADOS_ENDPOINT,GET_UNIDADEMPAQUE_ENDPOINT,GET_MERCADOORIGEN_ENDPOINT,GET_CANTONES_ENDPOINT,GET_ACTIVIDADECONOMICA_ENDPOINT,GET_PROVEEDORES_ENDPOINT,GET_PROVEEDOR_ENDPOINT,
    CREATE_ARTICULO_ENDPOINT,CREATE_PROVEEDOR_ENDPOINT,GET_MENSAJES,GET_ASUNTOS,CREATE_MENSAJES_ENDPOINT,GET_ARTICULOSCHG_ENDPOINT,GET_TIPOREGISTRO,UPDATE_MENSAJE_ENDPOINT,GETCATEXPROVEEDOR_ENDPOINT,
    GET_ASUNTO_ENDPOINT,UPDATE_ITEMCAMBIOPRECICOS_ENDPOINT,EDIT_ASUNTOS_ENDPOINT,GET_ITEMCAMBPRECIOS_ENDPOINT,GET_FOTOS_ENDPOINT,DEL_ASUNTOS_ENDPOINT,CREATEDISCOUNTS,GET_PUESTOS,GET_PUESTO_ENDPOINT,
    EDIT_PUESTOS_ENDPOINT,DEL_PUESTOS_ENDPOINT,GET_IMAGES_ENDPOINT,LOAD_PRODUCTS_ENDPOINT,CARGAR_PRODUCTO_ENDPOINT,LOAD_PRODUCTS_NUEVOLOG_ENDPOINT,LOAD_PRODUCTS_PRESENT_ENDPOINT,
    LOAD_PRODUCTS_PROVEEDOR_ENDPOINT,LOAD_PRODUCTS_TEMPOPDV_ENDPOINT,GET_DESCFIJO_ENDPOINT,ACT_RETORNOS_PRODUCTOS,
    GET_PACIENTES_ENDPOINT,GET_EVALUACIONVISITAS_ENDPOINT,GET_MESESVISITAS_ENDPOINT,GET_HOSPITALES_ENDPOINT,
    GET_TIPOSEQUIPOS_ENDPOINT,GET_ESTADOSEQUIPOS_ENDPOINT,GET_TIPOSVISITAS_ENDPOINT,GET_TERAPEUTAS_ENDPOINT,
    GET_VISITASHOSPITALES_ENDPOINT,GET_PACIENTESXTERAPEUTA_ENDPOINT,GET_VISITASXTERAPEUTA_ENDPOINT,GET_INSUMOS_ENDPOINT,
    CREATE_VISITA_ENDPOINT,UPDATE_VISITA_ENDPOINT,DEL_VISITAS_ENDPOINT,GET_VISITASXFILTROS_ENDPOINT,GET_VISITASXTERAPEUTAHISTO_ENDPOINT,
    GET_MENSAJESXTERA,GET_FOTOMENSAJE_ENDPOINT,GET_REFERENCIAS_ENDPOINT,GET_VISITASXFILTROS_HISTORICAS_ENDPOINT, GET_IMAGENES_ENDPOINT,
    GET_PACIENTESVISITAS_ENDPOINT,CREATE_PACIENTES_ENDPOINT,UPDATE_PACIENTES_ENDPOINT,DEL_PACIENTE_ENDPOINT,GET_PACIENTESXLLAVE_ENDPOINT,GET_MENU_ENDPOINT
} from '../../constants/endpoint';
const gsoneController = require('../../controllers/gsone/gsoneController');
const amimedController = require('../../controllers/amimed/amimedController');




export const router: Router = Router();

router.get(`${GET_ITEMS_ENDPOINT}`, auth, gsoneController.getItems);
router.get(`${GET_IMAGES_ENDPOINT}`, gsoneController.getImages)
router.get(`${UPDATE_ITEMS_FROM_API_ENDPOINT}`, gsoneController.updateItems);
router.get(`${GET_CATEGORIES_ENDPOINT}`, gsoneController.getCategories);
router.get(`${GET_SUBCATEGORIES_ENDPOINT}`, gsoneController.getSubCategories);
router.put(`${ADD_CATEGORY_ENDPOINT}`, gsoneController.addCategory);
router.put(`${ADD_SUBCATEGORY_ENDPOINT}`, gsoneController.addSubCategory);
router.get(`${GET_ITEM_ENDPOINT}`, gsoneController.getItem);

router.post(`${ACT_RETORNOS_PRODUCTOS}`, gsoneController.createRetorno);

router.get(`${LOAD_PRODUCTS_ENDPOINT}`, gsoneController.LoadProductos);

router.get(`${LOAD_PRODUCTS_NUEVOLOG_ENDPOINT}`, gsoneController.LoadProductosNlo);
router.get(`${LOAD_PRODUCTS_PRESENT_ENDPOINT}`, gsoneController.LoadProductosPre);
router.get(`${LOAD_PRODUCTS_PROVEEDOR_ENDPOINT}`, gsoneController.LoadProductosProv);
router.get(`${LOAD_PRODUCTS_TEMPOPDV_ENDPOINT}`, gsoneController.LoadProductosPdv);





router.patch(`${CARGAR_PRODUCTO_ENDPOINT}`, gsoneController.CargarProducto);

router.get(`${GET_ITEMCAMBPRECIOS_ENDPOINT}`, gsoneController.getItemsCambPrecios);

router.get(`${GETCATEXPROVEEDOR_ENDPOINT}`, gsoneController.getCateXProveedor);
router.get(`${GET_CATEGORY_ENDPOINT}`, gsoneController.getCategory);
router.get(`${GET_SUBCATEGORY_ENDPOINT}`, gsoneController.getSubCategory);
router.patch(`${UPDATE_ITEM_ENDPOINT}`, gsoneController.updateProduct);

router.patch(`${UPDATE_ITEMCAMBIOPRECICOS_ENDPOINT}`, gsoneController.updateProductCambioPrecios);


router.get(`${GET_FOTOS_ENDPOINT}`, gsoneController.getFotos) ;

router.get(`${GET_BUYER_TYPES_ENDPOINT}`, gsoneController.getBuyerTypes);
router.get(`${GET_PROVIDERS_ENDPOINT}`, gsoneController.getProviders);
router.get(`${GET_POS_ENDPOINT}`, gsoneController.getPOS);
router.patch(`${UPDATE_ITEM_COMERCIAL_DATA_ENDPOINT}`, gsoneController.updateProductComercialData);
router.put(`${ADD_ITEM_STATUS_ENDPOINT}`, auth, gsoneController.addItemStatus);
router.patch(`${CREATEDISCOUNTS}`,gsoneController.createDiscounts);

router.get(`${GET_ITEM_DISCOUNTS_ENDPOINT}`,gsoneController.getItemDicounts);
router.patch(`${UPDATE_ITEM_CODE_ENDPOINT}`, gsoneController.updateCode);
router.get(`${GET_RULE_CODE_TYPE_ENDPOINT}`, gsoneController.getRuleCodeType);
router.patch(`${UPDATE_MENSAJE_ENDPOINT}`, gsoneController.updateMensaje);
router.get(`${GET_MARCAS_ENDPOINT}`, gsoneController.getMarcas);
router.get(`${GET_ARTICULOS_ENDPOINT}`, auth, gsoneController.getArticulos);
router.get(`${GET_ARTICULOSCHG_ENDPOINT}`, auth, gsoneController.getArticulosChg);
router.get(`${GET_ARTICULO_ENDPOINT}`, gsoneController.getArticulo);
router.get(`${GET_PLAZOSPAGO_ENDPOINT}`, gsoneController.getPlazosPago);
router.get(`${GET_TIPOCOMPRA_ENDPOINT}`, gsoneController.getTipoCompra);
router.get(`${GET_TIPOSGRAVADOS_ENDPOINT}`, gsoneController.getTiposGravados);
router.get(`${GET_UNIDADEMPAQUE_ENDPOINT}`, gsoneController.getUnidadEmpaque);
router.get(`${GET_MERCADOORIGEN_ENDPOINT}`, gsoneController.getMercadoOrigen);
router.get(`${GET_CANTONES_ENDPOINT}`, gsoneController.getCantonDistritoProvincia);
router.get(`${GET_ACTIVIDADECONOMICA_ENDPOINT}`, gsoneController.getActividadEconomica);
router.get(`${GET_PROVEEDORES_ENDPOINT}`, gsoneController.getProveedores);
router.get(`${GET_PROVEEDOR_ENDPOINT}`, gsoneController.getProveedor);
router.get(`${GET_PROVEEDORESOL_ENDPOINT}`,auth, gsoneController.getProveedoresol);
router.get(`${GET_PROVEEDORSOL_ENDPOINT}`, gsoneController.getProveedorsol);
router.post(`${CREATE_ARTICULO_ENDPOINT}`, gsoneController.createArticulo);
router.post(`${CREATE_PROVEEDOR_ENDPOINT}`, gsoneController.createProveedor);
router.post(`${CREATE_PROVEEDORSOL_ENDPOINT}`, gsoneController.createProveedorsol);
router.get(`${GET_MENSAJES}`, gsoneController.getMensajes);

router.get(`${GET_MENSAJESXTERA}`, gsoneController.getMensajesXtera);

router.get(`${GET_REFERENCIAS_ENDPOINT}`, amimedController.getReferencias);



router.get(`${GET_REPORTES_ENDPOINT}`, gsoneController.getReportes);
router.post(`${CREATE_MENSAJES_ENDPOINT}`, gsoneController.createMensaje);
router.get(`${GET_TIPOREGISTRO}`, gsoneController.getTipoRegistro);


router.get(`${GET_ASUNTOS}`, gsoneController.getAsuntos);
router.get(`${GET_ASUNTO_ENDPOINT}`,gsoneController.getAsunto);
router.post(`${EDIT_ASUNTOS_ENDPOINT}`,gsoneController.editAsuntos);
router.delete(`${DEL_ASUNTOS_ENDPOINT}`,gsoneController.delAsuntos);

router.get(`${GET_PUESTOS}`, gsoneController.getPuestos);
router.get(`${GET_PUESTO_ENDPOINT}`,gsoneController.getPuesto);
router.post(`${EDIT_PUESTOS_ENDPOINT}`,gsoneController.editPuestos);
router.delete(`${DEL_PUESTOS_ENDPOINT}`,gsoneController.delPuestos);

router.get(`${GET_DESCFIJO_ENDPOINT}`, gsoneController.getDescFijo);

router.post(`${CREATE_VISITA_ENDPOINT}`, amimedController.createVisita);
router.put(`${UPDATE_VISITA_ENDPOINT}`, amimedController.updateVisita);


router.get(`${GET_PACIENTES_ENDPOINT}`, amimedController.getPacientes);
router.post(`${CREATE_PACIENTES_ENDPOINT}`, amimedController.createPaciente);
router.put(`${UPDATE_PACIENTES_ENDPOINT}`, amimedController.updatePaciente);
router.delete(`${DEL_PACIENTE_ENDPOINT}`,amimedController.delPaciente);

router.get(`${GET_PACIENTESXLLAVE_ENDPOINT}`, amimedController.getPacienteKey);



router.get(`${GET_EVALUACIONVISITAS_ENDPOINT}`, amimedController.getEvaluacionVisitas);
router.get(`${GET_MESESVISITAS_ENDPOINT}`, amimedController.getMesesVisitas);
router.get(`${GET_HOSPITALES_ENDPOINT}`, amimedController.getHospitales);
router.get(`${GET_TIPOSEQUIPOS_ENDPOINT}`, amimedController.getTiposEquipos);
router.get(`${GET_ESTADOSEQUIPOS_ENDPOINT}`, amimedController.getEstadosEquipos);
router.get(`${GET_TIPOSVISITAS_ENDPOINT}`, amimedController.getTiposVisitas);
router.get(`${GET_TERAPEUTAS_ENDPOINT}`, amimedController.getTerapeutas);
router.get(`${GET_VISITASHOSPITALES_ENDPOINT}`, amimedController.getVisitasHospitales);
router.get(`${GET_VISITASXTERAPEUTA_ENDPOINT}`, amimedController.getVisitasxTerapeuta);
router.get(`${GET_VISITASXTERAPEUTAHISTO_ENDPOINT}`, amimedController.getVisitasxTerapeutaHisto);

router.get(`${GET_INSUMOS_ENDPOINT}`, amimedController.getInsumos);


router.get(`${GET_VISITASXFILTROS_ENDPOINT}`, amimedController.getVisitasXFiltros);

router.get(`${GET_VISITASXFILTROS_HISTORICAS_ENDPOINT}`, amimedController.getVisitasXFiltrosHistoricas);



router.get(`${GET_PACIENTESXTERAPEUTA_ENDPOINT}`, amimedController.getPacientesXTerapeuta);


router.delete(`${DEL_VISITAS_ENDPOINT}`,amimedController.deleteVisita);

router.get(`${GET_VISITASXTERAPEUTA_ENDPOINT}`, amimedController.getVisitasxTerapeuta);

router.get(`${GET_FOTOMENSAJE_ENDPOINT}`, amimedController.getFotoMensaje);

router.get(`${GET_IMAGENES_ENDPOINT}`, amimedController.getImagenesCarrousel);

router.get(`${GET_PACIENTESVISITAS_ENDPOINT}`, amimedController.getPacientesVisitas);

router.get(`${GET_MENU_ENDPOINT}`, amimedController.getMenuconfig);
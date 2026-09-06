import type { Sequelize } from "sequelize";
import { ARTICULOS as _ARTICULOS } from "./ARTICULOS";
import type { ARTICULOSAttributes, ARTICULOSCreationAttributes } from "./ARTICULOS";
import { ActividadEconomica as _ActividadEconomica } from "./ActividadEconomica";
import type { ActividadEconomicaAttributes, ActividadEconomicaCreationAttributes } from "./ActividadEconomica";
import { Analytics as _Analytics } from "./Analytics";
import type { AnalyticsAttributes, AnalyticsCreationAttributes } from "./Analytics";
import { AnalyticsAsignaciones as _AnalyticsAsignaciones } from "./AnalyticsAsignaciones";
import type { AnalyticsAsignacionesAttributes, AnalyticsAsignacionesCreationAttributes } from "./AnalyticsAsignaciones";
import { Aprobaciones as _Aprobaciones } from "./Aprobaciones";
import type { AprobacionesAttributes, AprobacionesCreationAttributes } from "./Aprobaciones";
import { AprobacionesHistorico as _AprobacionesHistorico } from "./AprobacionesHistorico";
import type { AprobacionesHistoricoAttributes, AprobacionesHistoricoCreationAttributes } from "./AprobacionesHistorico";
import { AsuntosMsg as _AsuntosMsg } from "./AsuntosMsg";
import type { AsuntosMsgAttributes, AsuntosMsgCreationAttributes } from "./AsuntosMsg";
import { CADUCIDAD as _CADUCIDAD } from "./CADUCIDAD";
import type { CADUCIDADAttributes, CADUCIDADCreationAttributes } from "./CADUCIDAD";
import { CantonDistritoProvincia as _CantonDistritoProvincia } from "./CantonDistritoProvincia";
import type { CantonDistritoProvinciaAttributes, CantonDistritoProvinciaCreationAttributes } from "./CantonDistritoProvincia";
import { Categorias as _Categorias } from "./Categorias";
import type { CategoriasAttributes, CategoriasCreationAttributes } from "./Categorias";
import { Categorias$ as _Categorias$ } from "./Categorias$";
import type { Categorias$Attributes, Categorias$CreationAttributes } from "./Categorias$";
import { HOMOL_CATINTEGRA as _HOMOL_CATINTEGRA } from "./HOMOL_CATINTEGRA";
import type { HOMOL_CATINTEGRAAttributes, HOMOL_CATINTEGRACreationAttributes } from "./HOMOL_CATINTEGRA";
import { Hoja1$ as _Hoja1$ } from "./Hoja1$";
import type { Hoja1$Attributes, Hoja1$CreationAttributes } from "./Hoja1$";
import { Items as _Items } from "./Items";
import type { ItemsAttributes, ItemsCreationAttributes } from "./Items";
import { ItemsApi as _ItemsApi } from "./ItemsApi";
import type { ItemsApiAttributes, ItemsApiCreationAttributes } from "./ItemsApi";
import { ItemsApl as _ItemsApl } from "./ItemsApl";
import type { ItemsAplAttributes, ItemsAplCreationAttributes } from "./ItemsApl";
import { Marca as _Marca } from "./Marca";
import type { MarcaAttributes, MarcaCreationAttributes } from "./Marca";
import { MercadoOrigen as _MercadoOrigen } from "./MercadoOrigen";
import type { MercadoOrigenAttributes, MercadoOrigenCreationAttributes } from "./MercadoOrigen";
import { PlazosPago as _PlazosPago } from "./PlazosPago";
import type { PlazosPagoAttributes, PlazosPagoCreationAttributes } from "./PlazosPago";
import { ProveeSolicitantes as _ProveeSolicitantes } from "./ProveeSolicitantes";
import type { ProveeSolicitantesAttributes, ProveeSolicitantesCreationAttributes } from "./ProveeSolicitantes";
import { Proveedores as _Proveedores } from "./Proveedores";
import type { ProveedoresAttributes, ProveedoresCreationAttributes } from "./Proveedores";
import { PublicadorImagenes as _PublicadorImagenes } from "./PublicadorImagenes";
import type { PublicadorImagenesAttributes, PublicadorImagenesCreationAttributes } from "./PublicadorImagenes";
import { Puestos as _Puestos } from "./Puestos";
import type { PuestosAttributes, PuestosCreationAttributes } from "./Puestos";
import { PuntosVenta as _PuntosVenta } from "./PuntosVenta";
import type { PuntosVentaAttributes, PuntosVentaCreationAttributes } from "./PuntosVenta";
import { ReferenciasVisitas as _ReferenciasVisitas } from "./ReferenciasVisitas";
import type { ReferenciasVisitasAttributes, ReferenciasVisitasCreationAttributes } from "./ReferenciasVisitas";
import { RelacionAsistenteCategorias as _RelacionAsistenteCategorias } from "./RelacionAsistenteCategorias";
import type { RelacionAsistenteCategoriasAttributes, RelacionAsistenteCategoriasCreationAttributes } from "./RelacionAsistenteCategorias";
import { RelacionProveedorCategorias as _RelacionProveedorCategorias } from "./RelacionProveedorCategorias";
import type { RelacionProveedorCategoriasAttributes, RelacionProveedorCategoriasCreationAttributes } from "./RelacionProveedorCategorias";
import { RuleCodeTypes as _RuleCodeTypes } from "./RuleCodeTypes";
import type { RuleCodeTypesAttributes, RuleCodeTypesCreationAttributes } from "./RuleCodeTypes";
import { SegmentacionArticulo as _SegmentacionArticulo } from "./SegmentacionArticulo";
import type { SegmentacionArticuloAttributes, SegmentacionArticuloCreationAttributes } from "./SegmentacionArticulo";
import { SubCategorias as _SubCategorias } from "./SubCategorias";
import type { SubCategoriasAttributes, SubCategoriasCreationAttributes } from "./SubCategorias";
import { TipoCompra as _TipoCompra } from "./TipoCompra";
import type { TipoCompraAttributes, TipoCompraCreationAttributes } from "./TipoCompra";
import { TipoRegistro as _TipoRegistro } from "./TipoRegistro";
import type { TipoRegistroAttributes, TipoRegistroCreationAttributes } from "./TipoRegistro";
import { TiposGravados as _TiposGravados } from "./TiposGravados";
import type { TiposGravadosAttributes, TiposGravadosCreationAttributes } from "./TiposGravados";
import { UnidadEmpaque as _UnidadEmpaque } from "./UnidadEmpaque";
import type { UnidadEmpaqueAttributes, UnidadEmpaqueCreationAttributes } from "./UnidadEmpaque";
import { UserTypes as _UserTypes } from "./UserTypes";
import type { UserTypesAttributes, UserTypesCreationAttributes } from "./UserTypes";
import { Users as _Users } from "./Users";
import type { UsersAttributes, UsersCreationAttributes } from "./Users";
import { ValidacionCostos as _ValidacionCostos } from "./ValidacionCostos";
import type { ValidacionCostosAttributes, ValidacionCostosCreationAttributes } from "./ValidacionCostos";
import { Vmensajes as _Vmensajes } from "./Vmensajes";
import type { VmensajesAttributes, VmensajesCreationAttributes } from "./Vmensajes";
import { categoriasInf as _categoriasInf } from "./categoriasInf";
import type { categoriasInfAttributes, categoriasInfCreationAttributes } from "./categoriasInf";
import { descto_fijoprov as _descto_fijoprov } from "./descto_fijoprov";
import type { descto_fijoprovAttributes, descto_fijoprovCreationAttributes } from "./descto_fijoprov";
import { homol_marcaintegra as _homol_marcaintegra } from "./homol_marcaintegra";
import type { homol_marcaintegraAttributes, homol_marcaintegraCreationAttributes } from "./homol_marcaintegra";
import { homol_subcatintegra as _homol_subcatintegra } from "./homol_subcatintegra";
import type { homol_subcatintegraAttributes, homol_subcatintegraCreationAttributes } from "./homol_subcatintegra";
import { itemDiscounts as _itemDiscounts } from "./itemDiscounts";
import type { itemDiscountsAttributes, itemDiscountsCreationAttributes } from "./itemDiscounts";
import { itemDiscountsApi as _itemDiscountsApi } from "./itemDiscountsApi";
import type { itemDiscountsApiAttributes, itemDiscountsApiCreationAttributes } from "./itemDiscountsApi";
import { marca_holom_marcaintegra as _marca_holom_marcaintegra } from "./marca_holom_marcaintegra";
import type { marca_holom_marcaintegraAttributes, marca_holom_marcaintegraCreationAttributes } from "./marca_holom_marcaintegra";
import { marcas as _marcas } from "./marcas";
import type { marcasAttributes, marcasCreationAttributes } from "./marcas";
import { proveedoresInf as _proveedoresInf } from "./proveedoresInf";
import type { proveedoresInfAttributes, proveedoresInfCreationAttributes } from "./proveedoresInf";
import { publibak as _publibak } from "./publibak";
import type { publibakAttributes, publibakCreationAttributes } from "./publibak";
import { subcategoriasInf as _subcategoriasInf } from "./subcategoriasInf";
import type { subcategoriasInfAttributes, subcategoriasInfCreationAttributes } from "./subcategoriasInf";



import { EstadosEquipos as _EstadosEquipos } from "./EstadosEquipos";
import type { EstadosEquiposAttributes, EstadosEquiposCreationAttributes } from "./EstadosEquipos";
import { EvaluacionesVisitas as _EvaluacionesVisitas } from "./EvaluacionesVisitas";
import type { EvaluacionesVisitasAttributes, EvaluacionesVisitasCreationAttributes } from "./EvaluacionesVisitas";
import { Hospitales as _Hospitales } from "./Hospitales";
import type { HospitalesAttributes, HospitalesCreationAttributes } from "./Hospitales";
import { Insumos as _Insumos } from "./insumos";
import type { InsumosAttributes, InsumosCreationAttributes } from "./insumos";
import { MesesVisitas as _MesesVisitas } from "./MesesVisitas";
import type { MesesVisitasAttributes, MesesVisitasCreationAttributes } from "./MesesVisitas";
import { Padron as _Padron } from "./Padron";
import type { PadronAttributes, PadronCreationAttributes } from "./Padron";
import { SolicitudInsumosDeta as _SolicitudInsumosDeta } from "./SolicitudInsumosDeta";
import type { SolicitudInsumosDetaAttributes, SolicitudInsumosDetaCreationAttributes } from "./SolicitudInsumosDeta";
import { SolicitudInsumosEnca as _SolicitudInsumosEnca } from "./SolicitudInsumosEnca";
import type { SolicitudInsumosEncaAttributes, SolicitudInsumosEncaCreationAttributes } from "./SolicitudInsumosEnca";
import { TiposEquipos as _TiposEquipos } from "./TiposEquipos";
import type { TiposEquiposAttributes, TiposEquiposCreationAttributes } from "./TiposEquipos";
import { TiposEstudio as _TiposEstudio } from "./TiposEstudio";
import type { TiposEstudioAttributes, TiposEstudioCreationAttributes } from "./TiposEstudio";
import { TiposVisitas as _TiposVisitas } from "./TiposVisitas";
import type { TiposVisitasAttributes, TiposVisitasCreationAttributes } from "./TiposVisitas";

import { VisitasEnca as _VisitasEnca } from "./VisitasEnca";
import type { VisitasEncaAttributes, VisitasEncaCreationAttributes } from "./VisitasEnca";
import { VisitasHospitales as _VisitasHospitales } from "./VisitasHospitales";
import type { VisitasHospitalesAttributes, VisitasHospitalesCreationAttributes } from "./VisitasHospitales";
import { pacientes as _pacientes } from "./pacientes";
import type { pacientesAttributes, pacientesCreationAttributes } from "./pacientes";
import { referencias as _referencias } from "./referencias";
import type { referenciasAttributes, referenciasCreationAttributes } from "./referencias";
import { terapeutas as _terapeutas } from "./terapeutas";
import type { terapeutasAttributes, terapeutasCreationAttributes } from "./terapeutas";
import { usuario as _usuario } from "./usuario";
import type { usuarioAttributes, usuarioCreationAttributes } from "./usuario";
import { visitashm as _visitashm } from "./visitashm";
import type { visitashmAttributes, visitashmCreationAttributes } from "./visitashm";


export {
  _ARTICULOS as ARTICULOS,
  _ActividadEconomica as ActividadEconomica,
  _Analytics as Analytics,
  _AnalyticsAsignaciones as AnalyticsAsignaciones,
  _Aprobaciones as Aprobaciones,
  _AprobacionesHistorico as AprobacionesHistorico,
  _AsuntosMsg as AsuntosMsg,
  _CADUCIDAD as CADUCIDAD,
  _CantonDistritoProvincia as CantonDistritoProvincia,
  _Categorias as Categorias,
  _Categorias$ as Categorias$,
  _HOMOL_CATINTEGRA as HOMOL_CATINTEGRA,
  _Hoja1$ as Hoja1$,
  _Items as Items,
  _ItemsApi as ItemsApi,
  _ItemsApl as ItemsApl,
  _Marca as Marca,
  _MercadoOrigen as MercadoOrigen,
  _PlazosPago as PlazosPago,
  _ProveeSolicitantes as ProveeSolicitantes,
  _Proveedores as Proveedores,
  _PublicadorImagenes as PublicadorImagenes,
  _Puestos as Puestos,
  _PuntosVenta as PuntosVenta,
  _ReferenciasVisitas as ReferenciasVisitas,
  _RelacionAsistenteCategorias as RelacionAsistenteCategorias,

  _RelacionProveedorCategorias as RelacionProveedorCategorias,
  _RuleCodeTypes as RuleCodeTypes,
  _SegmentacionArticulo as SegmentacionArticulo,
  _SubCategorias as SubCategorias,
  _TipoCompra as TipoCompra,
  _TipoRegistro as TipoRegistro,
  _TiposGravados as TiposGravados,
  _UnidadEmpaque as UnidadEmpaque,
  _UserTypes as UserTypes,
  _Users as Users,
  _ValidacionCostos as ValidacionCostos,
  _Vmensajes as Vmensajes,
  _categoriasInf as categoriasInf,
  _descto_fijoprov as descto_fijoprov,
  _homol_marcaintegra as homol_marcaintegra,
  _homol_subcatintegra as homol_subcatintegra,
  _itemDiscounts as itemDiscounts,
  _itemDiscountsApi as itemDiscountsApi,
  _marca_holom_marcaintegra as marca_holom_marcaintegra,
  _marcas as marcas,
  _proveedoresInf as proveedoresInf,
  _publibak as publibak,
  _subcategoriasInf as subcategoriasInf,

  _EstadosEquipos as EstadosEquipos,
  _EvaluacionesVisitas as EvaluacionesVisitas,
  _Hospitales as Hospitales,
  _Insumos as Insumos,
  _MesesVisitas as MesesVisitas,
  _Padron as Padron,
  _SolicitudInsumosDeta as SolicitudInsumosDeta,
  _SolicitudInsumosEnca as SolicitudInsumosEnca,
  _TiposEquipos as TiposEquipos,
  _TiposEstudio as TiposEstudio,
  _TiposVisitas as TiposVisitas,

  _VisitasEnca as VisitasEnca,
  _VisitasHospitales as VisitasHospitales,
  _pacientes as pacientes,
  _referencias as referencias,
  _terapeutas as terapeutas,
  _usuario as usuario,
  _visitashm as visitashm,
};

export type {
  ARTICULOSAttributes,
  ARTICULOSCreationAttributes,
  ActividadEconomicaAttributes,
  ActividadEconomicaCreationAttributes,
  AnalyticsAttributes,
  AnalyticsCreationAttributes,
  AnalyticsAsignacionesAttributes,
  AnalyticsAsignacionesCreationAttributes,
  AprobacionesAttributes,
  AprobacionesCreationAttributes,
  AprobacionesHistoricoAttributes,
  AprobacionesHistoricoCreationAttributes,
  AsuntosMsgAttributes,
  AsuntosMsgCreationAttributes,
  CADUCIDADAttributes,
  CADUCIDADCreationAttributes,
  CantonDistritoProvinciaAttributes,
  CantonDistritoProvinciaCreationAttributes,
  CategoriasAttributes,
  CategoriasCreationAttributes,
  Categorias$Attributes,
  Categorias$CreationAttributes,
  HOMOL_CATINTEGRAAttributes,
  HOMOL_CATINTEGRACreationAttributes,
  Hoja1$Attributes,
  Hoja1$CreationAttributes,
  ItemsAttributes,
  ItemsCreationAttributes,
  ItemsApiAttributes,
  ItemsApiCreationAttributes,
  ItemsAplAttributes,
  ItemsAplCreationAttributes,
  MarcaAttributes,
  MarcaCreationAttributes,
  MercadoOrigenAttributes,
  MercadoOrigenCreationAttributes,
  PlazosPagoAttributes,
  PlazosPagoCreationAttributes,
  ProveeSolicitantesAttributes,
  ProveeSolicitantesCreationAttributes,
  ProveedoresAttributes,
  ProveedoresCreationAttributes,
  PublicadorImagenesAttributes,
  PublicadorImagenesCreationAttributes,
  PuestosAttributes,
  PuestosCreationAttributes,
  PuntosVentaAttributes,
  PuntosVentaCreationAttributes,
  ReferenciasVisitasAttributes,
  ReferenciasVisitasCreationAttributes,
  RelacionAsistenteCategoriasAttributes,
  RelacionAsistenteCategoriasCreationAttributes,
 
  RelacionProveedorCategoriasAttributes,
  RelacionProveedorCategoriasCreationAttributes,
  RuleCodeTypesAttributes,
  RuleCodeTypesCreationAttributes,
  SegmentacionArticuloAttributes,
  SegmentacionArticuloCreationAttributes,
  SubCategoriasAttributes,
  SubCategoriasCreationAttributes,
  TipoCompraAttributes,
  TipoCompraCreationAttributes,
  TipoRegistroAttributes,
  TipoRegistroCreationAttributes,
  TiposGravadosAttributes,
  TiposGravadosCreationAttributes,
  UnidadEmpaqueAttributes,
  UnidadEmpaqueCreationAttributes,
  UserTypesAttributes,
  UserTypesCreationAttributes,
  UsersAttributes,
  UsersCreationAttributes,
  ValidacionCostosAttributes,
  ValidacionCostosCreationAttributes,
  VmensajesAttributes,
  VmensajesCreationAttributes,
  categoriasInfAttributes,
  categoriasInfCreationAttributes,
  descto_fijoprovAttributes,
  descto_fijoprovCreationAttributes,
  homol_marcaintegraAttributes,
  homol_marcaintegraCreationAttributes,
  homol_subcatintegraAttributes,
  homol_subcatintegraCreationAttributes,
  itemDiscountsAttributes,
  itemDiscountsCreationAttributes,
  itemDiscountsApiAttributes,
  itemDiscountsApiCreationAttributes,
  marca_holom_marcaintegraAttributes,
  marca_holom_marcaintegraCreationAttributes,
  marcasAttributes,
  marcasCreationAttributes,
  proveedoresInfAttributes,
  proveedoresInfCreationAttributes,
  publibakAttributes,
  publibakCreationAttributes,
  subcategoriasInfAttributes,
  subcategoriasInfCreationAttributes,

  EstadosEquiposAttributes,
  EstadosEquiposCreationAttributes,
  EvaluacionesVisitasAttributes,
  EvaluacionesVisitasCreationAttributes,
  HospitalesAttributes,
  HospitalesCreationAttributes,
  InsumosAttributes,
  InsumosCreationAttributes,
  MesesVisitasAttributes,
  MesesVisitasCreationAttributes,
  PadronAttributes,
  PadronCreationAttributes,
  SolicitudInsumosDetaAttributes,
  SolicitudInsumosDetaCreationAttributes,
  SolicitudInsumosEncaAttributes,
  SolicitudInsumosEncaCreationAttributes,
  TiposEquiposAttributes,
  TiposEquiposCreationAttributes,
  TiposEstudioAttributes,
  TiposEstudioCreationAttributes,
  TiposVisitasAttributes,
  TiposVisitasCreationAttributes,
 
  VisitasEncaAttributes,
  VisitasEncaCreationAttributes,
  VisitasHospitalesAttributes,
  VisitasHospitalesCreationAttributes,
  pacientesAttributes,
  pacientesCreationAttributes,
  referenciasAttributes,
  referenciasCreationAttributes,
  terapeutasAttributes,
  terapeutasCreationAttributes,
  usuarioAttributes,
  usuarioCreationAttributes,
  visitashmAttributes,
  visitashmCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const ARTICULOS = _ARTICULOS.initModel(sequelize);
  const ActividadEconomica = _ActividadEconomica.initModel(sequelize);
  const Analytics = _Analytics.initModel(sequelize);
  const AnalyticsAsignaciones = _AnalyticsAsignaciones.initModel(sequelize);
  const Aprobaciones = _Aprobaciones.initModel(sequelize);
  const AprobacionesHistorico = _AprobacionesHistorico.initModel(sequelize);
  const AsuntosMsg = _AsuntosMsg.initModel(sequelize);
  const CADUCIDAD = _CADUCIDAD.initModel(sequelize);
  const CantonDistritoProvincia = _CantonDistritoProvincia.initModel(sequelize);
  const Categorias = _Categorias.initModel(sequelize);
  const Categorias$ = _Categorias$.initModel(sequelize);
  const HOMOL_CATINTEGRA = _HOMOL_CATINTEGRA.initModel(sequelize);
  const Hoja1$ = _Hoja1$.initModel(sequelize);
  const Items = _Items.initModel(sequelize);
  const ItemsApi = _ItemsApi.initModel(sequelize);
  const ItemsApl = _ItemsApl.initModel(sequelize);
  const Marca = _Marca.initModel(sequelize);
  const MercadoOrigen = _MercadoOrigen.initModel(sequelize);
  const PlazosPago = _PlazosPago.initModel(sequelize);
  const ProveeSolicitantes = _ProveeSolicitantes.initModel(sequelize);
  const Proveedores = _Proveedores.initModel(sequelize);
  const PublicadorImagenes = _PublicadorImagenes.initModel(sequelize);
  const Puestos = _Puestos.initModel(sequelize);
  const PuntosVenta = _PuntosVenta.initModel(sequelize);
  const ReferenciasVisitas = _ReferenciasVisitas.initModel(sequelize);
  const RelacionAsistenteCategorias = _RelacionAsistenteCategorias.initModel(sequelize);

  const RelacionProveedorCategorias = _RelacionProveedorCategorias.initModel(sequelize);
  const RuleCodeTypes = _RuleCodeTypes.initModel(sequelize);
  const SegmentacionArticulo = _SegmentacionArticulo.initModel(sequelize);
  const SubCategorias = _SubCategorias.initModel(sequelize);
  const TipoCompra = _TipoCompra.initModel(sequelize);
  const TipoRegistro = _TipoRegistro.initModel(sequelize);
  const TiposGravados = _TiposGravados.initModel(sequelize);
  const UnidadEmpaque = _UnidadEmpaque.initModel(sequelize);
  const UserTypes = _UserTypes.initModel(sequelize);
  const Users = _Users.initModel(sequelize);
  const ValidacionCostos = _ValidacionCostos.initModel(sequelize);
  const Vmensajes = _Vmensajes.initModel(sequelize);
  const categoriasInf = _categoriasInf.initModel(sequelize);
  const descto_fijoprov = _descto_fijoprov.initModel(sequelize);
  const homol_marcaintegra = _homol_marcaintegra.initModel(sequelize);
  const homol_subcatintegra = _homol_subcatintegra.initModel(sequelize);
  const itemDiscounts = _itemDiscounts.initModel(sequelize);
  const itemDiscountsApi = _itemDiscountsApi.initModel(sequelize);
  const marca_holom_marcaintegra = _marca_holom_marcaintegra.initModel(sequelize);
  const marcas = _marcas.initModel(sequelize);
  const proveedoresInf = _proveedoresInf.initModel(sequelize);
  const publibak = _publibak.initModel(sequelize);
  const subcategoriasInf = _subcategoriasInf.initModel(sequelize);

  const EstadosEquipos = _EstadosEquipos.initModel(sequelize);
  const EvaluacionesVisitas = _EvaluacionesVisitas.initModel(sequelize);
  const Hospitales = _Hospitales.initModel(sequelize);
  const Insumos = _Insumos.initModel(sequelize);
  const MesesVisitas = _MesesVisitas.initModel(sequelize);
  const Padron = _Padron.initModel(sequelize);
  const SolicitudInsumosDeta = _SolicitudInsumosDeta.initModel(sequelize);
  const SolicitudInsumosEnca = _SolicitudInsumosEnca.initModel(sequelize);
  const TiposEquipos = _TiposEquipos.initModel(sequelize);
  const TiposEstudio = _TiposEstudio.initModel(sequelize);
  const TiposVisitas = _TiposVisitas.initModel(sequelize);
  
  const VisitasEnca = _VisitasEnca.initModel(sequelize);
  const VisitasHospitales = _VisitasHospitales.initModel(sequelize);
  const pacientes = _pacientes.initModel(sequelize);
  const referencias = _referencias.initModel(sequelize);
  const terapeutas = _terapeutas.initModel(sequelize);
  const usuario = _usuario.initModel(sequelize);
  const visitashm = _visitashm.initModel(sequelize);

  Proveedores.belongsTo(ActividadEconomica, { as: "ActividadEconomica", foreignKey: "ActividadEconomicaID"});
  ActividadEconomica.hasMany(Proveedores, { as: "Proveedores", foreignKey: "ActividadEconomicaID"});
  Vmensajes.belongsTo(AsuntosMsg, { as: "asunto", foreignKey: "asunto_id"});
  AsuntosMsg.hasMany(Vmensajes, { as: "Vmensajes", foreignKey: "asunto_id"});
  Proveedores.belongsTo(CantonDistritoProvincia, { as: "canton", foreignKey: "canton_id"});
  CantonDistritoProvincia.hasMany(Proveedores, { as: "Proveedores", foreignKey: "canton_id"});
  SubCategorias.belongsTo(Categorias, { as: "categorium", foreignKey: "categoria_id"});
  Categorias.hasMany(SubCategorias, { as: "SubCategoria", foreignKey: "categoria_id"});
  Vmensajes.belongsTo(Categorias, { as: "categorium", foreignKey: "categoria_id"});
  Categorias.hasMany(Vmensajes, { as: "Vmensajes", foreignKey: "categoria_id"});
  ARTICULOS.belongsTo(Marca, { as: "Marca", foreignKey: "MarcaID"});
  Marca.hasMany(ARTICULOS, { as: "ARTICULOs", foreignKey: "MarcaID"});
  ARTICULOS.belongsTo(PlazosPago, { as: "PlazoPago", foreignKey: "PlazoPagoID"});
  PlazosPago.hasMany(ARTICULOS, { as: "ARTICULOs", foreignKey: "PlazoPagoID"});
  Proveedores.belongsTo(PlazosPago, { as: "PlazoPago", foreignKey: "PlazoPagoID"});
  PlazosPago.hasMany(Proveedores, { as: "Proveedores", foreignKey: "PlazoPagoID"});
  ARTICULOS.belongsTo(SubCategorias, { as: "categorium", foreignKey: "categoria_id"});
  SubCategorias.hasMany(ARTICULOS, { as: "ARTICULOs", foreignKey: "categoria_id"});
  ARTICULOS.belongsTo(SubCategorias, { as: "subcategorium", foreignKey: "subcategoria_id"});
  SubCategorias.hasMany(ARTICULOS, { as: "subcategoria_ARTICULOs", foreignKey: "subcategoria_id"});
  ARTICULOS.belongsTo(TipoCompra, { as: "tipoCompra", foreignKey: "tipoCompra_id"});
  TipoCompra.hasMany(ARTICULOS, { as: "ARTICULOs", foreignKey: "tipoCompra_id"});
  ARTICULOS.belongsTo(TiposGravados, { as: "Gravado", foreignKey: "GravadoID"});
  TiposGravados.hasMany(ARTICULOS, { as: "ARTICULOs", foreignKey: "GravadoID"});
  ARTICULOS.belongsTo(UnidadEmpaque, { as: "IdUnidadEmpaque_UnidadEmpaque", foreignKey: "IdUnidadEmpaque"});
  UnidadEmpaque.hasMany(ARTICULOS, { as: "ARTICULOs", foreignKey: "IdUnidadEmpaque"});

  VisitasHospitales.belongsTo(EstadosEquipos, { as: "IdEstadoEquipo_EstadosEquipo", foreignKey: "IdEstadoEquipo"});
  EstadosEquipos.hasMany(VisitasHospitales, { as: "VisitasHospitales", foreignKey: "IdEstadoEquipo"});
  VisitasHospitales.belongsTo(EvaluacionesVisitas, { as: "IdEvaluacionVisita_EvaluacionesVisita", foreignKey: "IdEvaluacionVisita"});
  EvaluacionesVisitas.hasMany(VisitasHospitales, { as: "VisitasHospitales", foreignKey: "IdEvaluacionVisita"});
  VisitasHospitales.belongsTo(Hospitales, { as: "IdHospital_Hospitale", foreignKey: "IdHospital"});
  Hospitales.hasMany(VisitasHospitales, { as: "VisitasHospitales", foreignKey: "IdHospital"});
  SolicitudInsumosDeta.belongsTo(Insumos, { as: "IdInsumo_Insumo", foreignKey: "IdInsumo"});
  Insumos.hasMany(SolicitudInsumosDeta, { as: "SolicitudInsumosDeta", foreignKey: "IdInsumo"});
  VisitasHospitales.belongsTo(MesesVisitas, { as: "IdMesVisita_MesesVisita", foreignKey: "IdMesVisita"});
  MesesVisitas.hasMany(VisitasHospitales, { as: "VisitasHospitales", foreignKey: "IdMesVisita"});
  SolicitudInsumosDeta.belongsTo(SolicitudInsumosEnca, { as: "IdSoliInsumo_SolicitudInsumosEnca", foreignKey: "IdSoliInsumo"});
  SolicitudInsumosEnca.hasMany(SolicitudInsumosDeta, { as: "SolicitudInsumosDeta", foreignKey: "IdSoliInsumo"});
  VisitasHospitales.belongsTo(TiposEquipos, { as: "IdTipoEquipo_TiposEquipo", foreignKey: "IdTipoEquipo"});
  TiposEquipos.hasMany(VisitasHospitales, { as: "VisitasHospitales", foreignKey: "IdTipoEquipo"});
  VisitasHospitales.belongsTo(TiposVisitas, { as: "IdTipoVisita_TiposVisita", foreignKey: "IdTipoVisita"});
  TiposVisitas.hasMany(VisitasHospitales, { as: "VisitasHospitales", foreignKey: "IdTipoVisita"});
  VisitasHospitales.belongsTo(pacientes, { as: "idPaciente_paciente", foreignKey: "idPaciente"});
  pacientes.hasMany(VisitasHospitales, { as: "VisitasHospitales", foreignKey: "idPaciente"});
  SolicitudInsumosEnca.belongsTo(terapeutas, { as: "IdTerapeuta_terapeuta", foreignKey: "IdTerapeuta"});
  terapeutas.hasMany(SolicitudInsumosEnca, { as: "SolicitudInsumosEncas", foreignKey: "IdTerapeuta"});
  VisitasHospitales.belongsTo(terapeutas, { as: "IdTerapeuta_terapeuta", foreignKey: "IdTerapeuta"});
  terapeutas.hasMany(VisitasHospitales, { as: "VisitasHospitales", foreignKey: "IdTerapeuta"});

  return {
    ARTICULOS: ARTICULOS,
    ActividadEconomica: ActividadEconomica,
    Analytics: Analytics,
    AnalyticsAsignaciones: AnalyticsAsignaciones,
    Aprobaciones: Aprobaciones,
    AprobacionesHistorico: AprobacionesHistorico,
    AsuntosMsg: AsuntosMsg,
    CADUCIDAD: CADUCIDAD,
    CantonDistritoProvincia: CantonDistritoProvincia,
    Categorias: Categorias,
    Categorias$: Categorias$,
    HOMOL_CATINTEGRA: HOMOL_CATINTEGRA,
    Hoja1$: Hoja1$,
    Items: Items,
    ItemsApi: ItemsApi,
    ItemsApl: ItemsApl,
    Marca: Marca,
    MercadoOrigen: MercadoOrigen,
    PlazosPago: PlazosPago,
    ProveeSolicitantes: ProveeSolicitantes,
    Proveedores: Proveedores,
    PublicadorImagenes: PublicadorImagenes,
    Puestos: Puestos,
    PuntosVenta: PuntosVenta,
    ReferenciasVisitas: ReferenciasVisitas,
    RelacionAsistenteCategorias: RelacionAsistenteCategorias,
 
    RelacionProveedorCategorias: RelacionProveedorCategorias,
    RuleCodeTypes: RuleCodeTypes,
    SegmentacionArticulo: SegmentacionArticulo,
    SubCategorias: SubCategorias,
    TipoCompra: TipoCompra,
    TipoRegistro: TipoRegistro,
    TiposGravados: TiposGravados,
    UnidadEmpaque: UnidadEmpaque,
    UserTypes: UserTypes,
    Users: Users,
    ValidacionCostos: ValidacionCostos,
    Vmensajes: Vmensajes,
    categoriasInf: categoriasInf,
    descto_fijoprov: descto_fijoprov,
    homol_marcaintegra: homol_marcaintegra,
    homol_subcatintegra: homol_subcatintegra,
    itemDiscounts: itemDiscounts,
    itemDiscountsApi: itemDiscountsApi,
    marca_holom_marcaintegra: marca_holom_marcaintegra,
    marcas: marcas,
    proveedoresInf: proveedoresInf,
    publibak: publibak,
    subcategoriasInf: subcategoriasInf,

    EstadosEquipos: EstadosEquipos,
    EvaluacionesVisitas: EvaluacionesVisitas,
    Hospitales: Hospitales,
    Insumos: Insumos,
    MesesVisitas: MesesVisitas,
    Padron: Padron,
    SolicitudInsumosDeta: SolicitudInsumosDeta,
    SolicitudInsumosEnca: SolicitudInsumosEnca,
    TiposEquipos: TiposEquipos,
    TiposEstudio: TiposEstudio,
    TiposVisitas: TiposVisitas,
   
    VisitasEnca: VisitasEnca,
    VisitasHospitales: VisitasHospitales,
    pacientes: pacientes,
    referencias: referencias,
    terapeutas: terapeutas,
    usuario: usuario,
    visitashm: visitashm,
  };
}

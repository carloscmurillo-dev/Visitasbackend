import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface proveedoresInfAttributes {
  proveedor_id: string;
  proveedor_dsc?: string;
  gln?: string;
  fechaSolicitud?: Date;
  CedJuridica?: string;
  RazonSocial?: string;
  RepreLegal?: string;
  GerenteGeneral?: string;
  GerenteVentas?: string;
  AgenteVentas?: string;
  ContactoFinanc?: string;
  Direccion?: string;
  canton_id?: number;
  Barrio?: string;
  Tel1?: string;
  Tel2?: string;
  NombreContactoFactElec?: string;
  TelContactoFactElec?: string;
  EmailContactoFactElec?: string;
  EmailReciboContactoFactElec?: string;
  CantidadLineasXFactura?: number;
  TipoEntrega?: number;
  AceptaDevoluc?: boolean;
  OrdenCompra?: boolean;
  DescuentoFijo?: boolean;
  PorDescuentofijo?: number;
  DescuentoConfidencial?: boolean;
  PorcDescuentoConfidencial?: number;
  DescuentoIntroduccion?: boolean;
  PorcDescuentoIntroduccion?: number;
  PartDinamicasComerciales?: boolean;
  PartEspaciosPromocionales?: boolean;
  PartDisplays?: boolean;
  FrecuenciaVisitaTiendas?: number;
  AportaCodigoCABYS?: boolean;
  CodigoCABYS?: string;
  ActividadEconomicaID?: number;
  PlazoPagoID?: number;
  DocEntregaFacElect?: boolean;
  DocEntregaGuiaDespacho?: boolean;
}

export type proveedoresInfOptionalAttributes = "proveedor_dsc" | "gln" | "fechaSolicitud" | "CedJuridica" | "RazonSocial" | "RepreLegal" | "GerenteGeneral" | "GerenteVentas" | "AgenteVentas" | "ContactoFinanc" | "Direccion" | "canton_id" | "Barrio" | "Tel1" | "Tel2" | "NombreContactoFactElec" | "TelContactoFactElec" | "EmailContactoFactElec" | "EmailReciboContactoFactElec" | "CantidadLineasXFactura" | "TipoEntrega" | "AceptaDevoluc" | "OrdenCompra" | "DescuentoFijo" | "PorDescuentofijo" | "DescuentoConfidencial" | "PorcDescuentoConfidencial" | "DescuentoIntroduccion" | "PorcDescuentoIntroduccion" | "PartDinamicasComerciales" | "PartEspaciosPromocionales" | "PartDisplays" | "FrecuenciaVisitaTiendas" | "AportaCodigoCABYS" | "CodigoCABYS" | "ActividadEconomicaID" | "PlazoPagoID" | "DocEntregaFacElect" | "DocEntregaGuiaDespacho";
export type proveedoresInfCreationAttributes = Optional<proveedoresInfAttributes, proveedoresInfOptionalAttributes>;

export class proveedoresInf extends Model<proveedoresInfAttributes, proveedoresInfCreationAttributes> implements proveedoresInfAttributes {
  proveedor_id!: string;
  proveedor_dsc?: string;
  gln?: string;
  fechaSolicitud?: Date;
  CedJuridica?: string;
  RazonSocial?: string;
  RepreLegal?: string;
  GerenteGeneral?: string;
  GerenteVentas?: string;
  AgenteVentas?: string;
  ContactoFinanc?: string;
  Direccion?: string;
  canton_id?: number;
  Barrio?: string;
  Tel1?: string;
  Tel2?: string;
  NombreContactoFactElec?: string;
  TelContactoFactElec?: string;
  EmailContactoFactElec?: string;
  EmailReciboContactoFactElec?: string;
  CantidadLineasXFactura?: number;
  TipoEntrega?: number;
  AceptaDevoluc?: boolean;
  OrdenCompra?: boolean;
  DescuentoFijo?: boolean;
  PorDescuentofijo?: number;
  DescuentoConfidencial?: boolean;
  PorcDescuentoConfidencial?: number;
  DescuentoIntroduccion?: boolean;
  PorcDescuentoIntroduccion?: number;
  PartDinamicasComerciales?: boolean;
  PartEspaciosPromocionales?: boolean;
  PartDisplays?: boolean;
  FrecuenciaVisitaTiendas?: number;
  AportaCodigoCABYS?: boolean;
  CodigoCABYS?: string;
  ActividadEconomicaID?: number;
  PlazoPagoID?: number;
  DocEntregaFacElect?: boolean;
  DocEntregaGuiaDespacho?: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof proveedoresInf {
    return proveedoresInf.init({
    proveedor_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    proveedor_dsc: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    gln: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fechaSolicitud: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CedJuridica: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    RazonSocial: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    RepreLegal: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    GerenteGeneral: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    GerenteVentas: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    AgenteVentas: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ContactoFinanc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Direccion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    canton_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Barrio: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Tel1: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Tel2: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    NombreContactoFactElec: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TelContactoFactElec: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    EmailContactoFactElec: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    EmailReciboContactoFactElec: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CantidadLineasXFactura: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TipoEntrega: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AceptaDevoluc: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    OrdenCompra: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DescuentoFijo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PorDescuentofijo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    DescuentoConfidencial: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PorcDescuentoConfidencial: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    DescuentoIntroduccion: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PorcDescuentoIntroduccion: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    PartDinamicasComerciales: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PartEspaciosPromocionales: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PartDisplays: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    FrecuenciaVisitaTiendas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AportaCodigoCABYS: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CodigoCABYS: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ActividadEconomicaID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PlazoPagoID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DocEntregaFacElect: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DocEntregaGuiaDespacho: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'proveedoresInf',
    schema: 'dbo',
    timestamps: false
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Marca, MarcaId } from './Marca';
import type { PlazosPago, PlazosPagoId } from './PlazosPago';
import type { SubCategorias, SubCategoriasId } from './SubCategorias';
import type { TipoCompra, TipoCompraId } from './TipoCompra';
import type { TiposGravados, TiposGravadosId } from './TiposGravados';
import type { UnidadEmpaque, UnidadEmpaqueId } from './UnidadEmpaque';

export interface ARTICULOSAttributes {
  ProveedorID?: string;
  ArticuloID: number;
  DescripcionProducto?: string;
  MarcaID?: number;
  TamanoGessa?: string;
  IdUnidadEmpaque?: string;
  EAN13?: string;
  DUN14?: string;
  CompraEnUnidades?: boolean;
  DescripcionLarga?: string;
  DescripcionPublicacion?: string;
  UnidadMedida?: string;
  SaborAroma?: string;
  categoria_id?: number;
  subcategoria_id?: number;
  SegmentoID?: number;
  PlazoPagoID?: number;
  tipoCompra_id?: number;
  CabysCodigo?: string;
  CostoEmpaque?: number;
  CostoUnitario?: number;
  GravadoID?: number;
  GravadoOExento?: boolean;
  PorcImpConsumo?: number;
  TiempoVigencia?: number;
  MedProdAnchoProducto?: number;
  MedProdAltoProducto?: number;
  MedProdLargoProducto?: number;
  MedProdPesoNeto?: number;
  MedProdPesoBruto?: number;
  MedProdPesoEscurrido?: number;
  MedProdDiametro?: number;
  MedCajaAnchoProducto?: number;
  MedCajaAltoProducto?: number;
  MedCajaLargoProducto?: number;
  FotoProductoFrente?: any;
  FotoProductoLado?: any;
  FotoProductoArribaBase?: any;
  FotoProducto4?: any;
  FotoProducto5?: any;
  DescuentoConfidencialDC?: number;
  DescuentoIntroduccionDEI?: number;
  DescuentoFijoDFI?: number;
  DescuentoNoDevolucionDND?: number;
  CentroDistribucionTAE?: number;
  PromocionalPAE?: number;
  status?: string;
  CambioPrecio?: boolean;
}

export type ARTICULOSPk = "ArticuloID";
export type ARTICULOSId = ARTICULOS[ARTICULOSPk];
export type ARTICULOSOptionalAttributes = "ProveedorID" | "ArticuloID" | "DescripcionProducto" | "MarcaID" | "TamanoGessa" | "IdUnidadEmpaque" | "EAN13" | "DUN14" | "CompraEnUnidades" | "DescripcionLarga" | "DescripcionPublicacion" | "UnidadMedida" | "SaborAroma" | "categoria_id" | "subcategoria_id" | "SegmentoID" | "PlazoPagoID" | "tipoCompra_id" | "CabysCodigo" | "CostoEmpaque" | "CostoUnitario" | "GravadoID" | "GravadoOExento" | "PorcImpConsumo" | "TiempoVigencia" | "MedProdAnchoProducto" | "MedProdAltoProducto" | "MedProdLargoProducto" | "MedProdPesoNeto" | "MedProdPesoBruto" | "MedProdPesoEscurrido" | "MedProdDiametro" | "MedCajaAnchoProducto" | "MedCajaAltoProducto" | "MedCajaLargoProducto" | "FotoProductoFrente" | "FotoProductoLado" | "FotoProductoArribaBase" | "FotoProducto4" | "FotoProducto5" | "DescuentoConfidencialDC" | "DescuentoIntroduccionDEI" | "DescuentoFijoDFI" | "DescuentoNoDevolucionDND" | "CentroDistribucionTAE" | "PromocionalPAE" | "status" | "CambioPrecio";
export type ARTICULOSCreationAttributes = Optional<ARTICULOSAttributes, ARTICULOSOptionalAttributes>;

export class ARTICULOS extends Model<ARTICULOSAttributes, ARTICULOSCreationAttributes> implements ARTICULOSAttributes {
  ProveedorID?: string;
  ArticuloID!: number;
  DescripcionProducto?: string;
  MarcaID?: number;
  TamanoGessa?: string;
  IdUnidadEmpaque?: string;
  EAN13?: string;
  DUN14?: string;
  CompraEnUnidades?: boolean;
  DescripcionLarga?: string;
  DescripcionPublicacion?: string;
  UnidadMedida?: string;
  SaborAroma?: string;
  categoria_id?: number;
  subcategoria_id?: number;
  SegmentoID?: number;
  PlazoPagoID?: number;
  tipoCompra_id?: number;
  CabysCodigo?: string;
  CostoEmpaque?: number;
  CostoUnitario?: number;
  GravadoID?: number;
  GravadoOExento?: boolean;
  PorcImpConsumo?: number;
  TiempoVigencia?: number;
  MedProdAnchoProducto?: number;
  MedProdAltoProducto?: number;
  MedProdLargoProducto?: number;
  MedProdPesoNeto?: number;
  MedProdPesoBruto?: number;
  MedProdPesoEscurrido?: number;
  MedProdDiametro?: number;
  MedCajaAnchoProducto?: number;
  MedCajaAltoProducto?: number;
  MedCajaLargoProducto?: number;
  FotoProductoFrente?: any;
  FotoProductoLado?: any;
  FotoProductoArribaBase?: any;
  FotoProducto4?: any;
  FotoProducto5?: any;
  DescuentoConfidencialDC?: number;
  DescuentoIntroduccionDEI?: number;
  DescuentoFijoDFI?: number;
  DescuentoNoDevolucionDND?: number;
  CentroDistribucionTAE?: number;
  PromocionalPAE?: number;
  status?: string;
  CambioPrecio?: boolean;

  // ARTICULOS belongsTo Marca via MarcaID
  Marca!: Marca;
  getMarca!: Sequelize.BelongsToGetAssociationMixin<Marca>;
  setMarca!: Sequelize.BelongsToSetAssociationMixin<Marca, MarcaId>;
  createMarca!: Sequelize.BelongsToCreateAssociationMixin<Marca>;
  // ARTICULOS belongsTo PlazosPago via PlazoPagoID
  PlazoPago!: PlazosPago;
  getPlazoPago!: Sequelize.BelongsToGetAssociationMixin<PlazosPago>;
  setPlazoPago!: Sequelize.BelongsToSetAssociationMixin<PlazosPago, PlazosPagoId>;
  createPlazoPago!: Sequelize.BelongsToCreateAssociationMixin<PlazosPago>;
  // ARTICULOS belongsTo SubCategorias via categoria_id
  categorium!: SubCategorias;
  getCategorium!: Sequelize.BelongsToGetAssociationMixin<SubCategorias>;
  setCategorium!: Sequelize.BelongsToSetAssociationMixin<SubCategorias, SubCategoriasId>;
  createCategorium!: Sequelize.BelongsToCreateAssociationMixin<SubCategorias>;
  // ARTICULOS belongsTo SubCategorias via subcategoria_id
  subcategorium!: SubCategorias;
  getSubcategorium!: Sequelize.BelongsToGetAssociationMixin<SubCategorias>;
  setSubcategorium!: Sequelize.BelongsToSetAssociationMixin<SubCategorias, SubCategoriasId>;
  createSubcategorium!: Sequelize.BelongsToCreateAssociationMixin<SubCategorias>;
  // ARTICULOS belongsTo TipoCompra via tipoCompra_id
  tipoCompra!: TipoCompra;
  getTipoCompra!: Sequelize.BelongsToGetAssociationMixin<TipoCompra>;
  setTipoCompra!: Sequelize.BelongsToSetAssociationMixin<TipoCompra, TipoCompraId>;
  createTipoCompra!: Sequelize.BelongsToCreateAssociationMixin<TipoCompra>;
  // ARTICULOS belongsTo TiposGravados via GravadoID
  Gravado!: TiposGravados;
  getGravado!: Sequelize.BelongsToGetAssociationMixin<TiposGravados>;
  setGravado!: Sequelize.BelongsToSetAssociationMixin<TiposGravados, TiposGravadosId>;
  createGravado!: Sequelize.BelongsToCreateAssociationMixin<TiposGravados>;
  // ARTICULOS belongsTo UnidadEmpaque via IdUnidadEmpaque
  IdUnidadEmpaque_UnidadEmpaque!: UnidadEmpaque;
  getIdUnidadEmpaque_UnidadEmpaque!: Sequelize.BelongsToGetAssociationMixin<UnidadEmpaque>;
  setIdUnidadEmpaque_UnidadEmpaque!: Sequelize.BelongsToSetAssociationMixin<UnidadEmpaque, UnidadEmpaqueId>;
  createIdUnidadEmpaque_UnidadEmpaque!: Sequelize.BelongsToCreateAssociationMixin<UnidadEmpaque>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ARTICULOS {
    return ARTICULOS.init({
    ProveedorID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ArticuloID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DescripcionProducto: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    MarcaID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Marca',
        key: 'MarcaID'
      }
    },
    TamanoGessa: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    IdUnidadEmpaque: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'UnidadEmpaque',
        key: 'IdUnidadEmpaque'
      }
    },
    EAN13: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DUN14: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CompraEnUnidades: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DescripcionLarga: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    DescripcionPublicacion: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    UnidadMedida: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SaborAroma: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SubCategorias',
        key: 'subcategoria_id'
      }
    },
    subcategoria_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SubCategorias',
        key: 'subcategoria_id'
      }
    },
    SegmentoID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PlazoPagoID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PlazosPago',
        key: 'PlazoPagoID'
      }
    },
    tipoCompra_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TipoCompra',
        key: 'tipoCompra_id'
      }
    },
    CabysCodigo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CostoEmpaque: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    CostoUnitario: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    GravadoID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TiposGravados',
        key: 'GravadoID'
      }
    },
    GravadoOExento: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PorcImpConsumo: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    TiempoVigencia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MedProdAnchoProducto: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    MedProdAltoProducto: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    MedProdLargoProducto: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    MedProdPesoNeto: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    MedProdPesoBruto: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    MedProdPesoEscurrido: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    MedProdDiametro: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    MedCajaAnchoProducto: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    MedCajaAltoProducto: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    MedCajaLargoProducto: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    FotoProductoFrente: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    FotoProductoLado: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    FotoProductoArribaBase: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    FotoProducto4: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    FotoProducto5: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    DescuentoConfidencialDC: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    DescuentoIntroduccionDEI: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    DescuentoFijoDFI: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    DescuentoNoDevolucionDND: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    CentroDistribucionTAE: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    PromocionalPAE: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    CambioPrecio: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ARTICULOS',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_ARTICULOS",
        unique: true,
        fields: [
          { name: "ArticuloID" },
        ]
      },
    ]
  });
  }
}

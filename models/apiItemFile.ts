import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface apiItemFileAttributes {
  gtin: string;
  idestado: string;
  ComercialLongDescription?: string;
  ComercialShortDescription?: string;
  IDCATEGORIA: number;
  idsubcategoria: number;
  idmarca: number;
  centro: string;
  factor_conversion?: number;
  unidadempaque?: string;
  tamanonx?: string;
  unidadmedida?: string;
  medida?: number;
  medidaescurrida?: number;
  ComercialPubliDescription?: string;
  ComercialFonetDescription?: string;
  ComercialHablaDescription?: string;
  indsuministro: number;
  indarticuloimportado: number;
  seccion5: number;
  indcanastabasica: number;
  indpagaimpuesto: number;
  indpack: number;
  IndOmitePorcCabys: number;
  indaceptadevoluciones?: boolean;
  idimpuesto: number;
  idimpuestodet?: number;
  cabysCode?: string;
  codigopais: number;
  CantDisp: number;
  RegistroSanitario?: string;
  RegistroSanitarioFecAprobacion?: string;
  RegistroSanitarioFecVencimiento?: string;
  IdTipoProducto?: number;
  IdClasificacionArt: number;
  IdMetodoCompraArt: number;
  idsegmentacionart: number;
  idsegmento?: number;
  CodigoPadre: number;
  textocongelamiento: string;
  observaciones: string;
}

export type apiItemFileOptionalAttributes = "ComercialLongDescription" | "ComercialShortDescription" | "factor_conversion" | "unidadempaque" | "tamanonx" | "unidadmedida" | "medida" | "medidaescurrida" | "ComercialPubliDescription" | "ComercialFonetDescription" | "ComercialHablaDescription" | "indaceptadevoluciones" | "idimpuestodet" | "cabysCode" | "RegistroSanitario" | "RegistroSanitarioFecAprobacion" | "RegistroSanitarioFecVencimiento" | "IdTipoProducto" | "idsegmento";
export type apiItemFileCreationAttributes = Optional<apiItemFileAttributes, apiItemFileOptionalAttributes>;

export class apiItemFile extends Model<apiItemFileAttributes, apiItemFileCreationAttributes> implements apiItemFileAttributes {
  gtin!: string;
  idestado!: string;
  ComercialLongDescription?: string;
  ComercialShortDescription?: string;
  IDCATEGORIA!: number;
  idsubcategoria!: number;
  idmarca!: number;
  centro!: string;
  factor_conversion?: number;
  unidadempaque?: string;
  tamanonx?: string;
  unidadmedida?: string;
  medida?: number;
  medidaescurrida?: number;
  ComercialPubliDescription?: string;
  ComercialFonetDescription?: string;
  ComercialHablaDescription?: string;
  indsuministro!: number;
  indarticuloimportado!: number;
  seccion5!: number;
  indcanastabasica!: number;
  indpagaimpuesto!: number;
  indpack!: number;
  IndOmitePorcCabys!: number;
  indaceptadevoluciones?: boolean;
  idimpuesto!: number;
  idimpuestodet?: number;
  cabysCode?: string;
  codigopais!: number;
  CantDisp!: number;
  RegistroSanitario?: string;
  RegistroSanitarioFecAprobacion?: string;
  RegistroSanitarioFecVencimiento?: string;
  IdTipoProducto?: number;
  IdClasificacionArt!: number;
  IdMetodoCompraArt!: number;
  idsegmentacionart!: number;
  idsegmento?: number;
  CodigoPadre!: number;
  textocongelamiento!: string;
  observaciones!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof apiItemFile {
    return apiItemFile.init({
    gtin: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idestado: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ComercialLongDescription: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ComercialShortDescription: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    IDCATEGORIA: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idsubcategoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idmarca: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    centro: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    factor_conversion: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    unidadempaque: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tamanonx: {
      type: DataTypes.STRING(71),
      allowNull: true
    },
    unidadmedida: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    medida: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    medidaescurrida: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    ComercialPubliDescription: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ComercialFonetDescription: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ComercialHablaDescription: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    indsuministro: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    indarticuloimportado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seccion5: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    indcanastabasica: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    indpagaimpuesto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    indpack: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IndOmitePorcCabys: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    indaceptadevoluciones: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    idimpuesto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idimpuestodet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cabysCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    codigopais: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CantDisp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RegistroSanitario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RegistroSanitarioFecAprobacion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RegistroSanitarioFecVencimiento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IdTipoProducto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdClasificacionArt: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IdMetodoCompraArt: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idsegmentacionart: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idsegmento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CodigoPadre: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    textocongelamiento: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    observaciones: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'apiItemFile',
    schema: 'dbo',
    timestamps: false
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ValidacionCostosAttributes {
  cod_barras?: string;
  codinterno: number;
  costo: number;
  categoria_id?: number;
}

export type ValidacionCostosOptionalAttributes = "cod_barras" | "categoria_id";
export type ValidacionCostosCreationAttributes = Optional<ValidacionCostosAttributes, ValidacionCostosOptionalAttributes>;

export class ValidacionCostos extends Model<ValidacionCostosAttributes, ValidacionCostosCreationAttributes> implements ValidacionCostosAttributes {
  cod_barras?: string;
  codinterno!: number;
  costo!: number;
  categoria_id?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ValidacionCostos {
    return ValidacionCostos.init({
    cod_barras: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    codinterno: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    costo: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ValidacionCostos',
    schema: 'dbo',
    timestamps: false
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface subcategoriasInfAttributes {
  categoria_id: number;
  subcategoria_id: number;
  subcategoria_dsc?: string;
}

export type subcategoriasInfOptionalAttributes = "subcategoria_dsc";
export type subcategoriasInfCreationAttributes = Optional<subcategoriasInfAttributes, subcategoriasInfOptionalAttributes>;

export class subcategoriasInf extends Model<subcategoriasInfAttributes, subcategoriasInfCreationAttributes> implements subcategoriasInfAttributes {
  categoria_id!: number;
  subcategoria_id!: number;
  subcategoria_dsc?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof subcategoriasInf {
    return subcategoriasInf.init({
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subcategoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subcategoria_dsc: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'subcategoriasInf',
    schema: 'dbo',
    timestamps: false
  });
  }
}

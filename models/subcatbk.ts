import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface subcatbkAttributes {
  categoria_id: number;
  subcategoria_id: number;
  subcategoria_dsc?: string;
}

export type subcatbkOptionalAttributes = "subcategoria_dsc";
export type subcatbkCreationAttributes = Optional<subcatbkAttributes, subcatbkOptionalAttributes>;

export class subcatbk extends Model<subcatbkAttributes, subcatbkCreationAttributes> implements subcatbkAttributes {
  categoria_id!: number;
  subcategoria_id!: number;
  subcategoria_dsc?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof subcatbk {
    return subcatbk.init({
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
    tableName: 'subcatbk',
    schema: 'dbo',
    timestamps: false
  });
  }
}

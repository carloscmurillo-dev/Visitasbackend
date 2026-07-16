import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface homol_subcatintegraAttributes {
  categoria_id: number;
  subcategoria_id: number;
  idcategoria: number;
  idsubcategoria: number;
}

export type homol_subcatintegraCreationAttributes = homol_subcatintegraAttributes;

export class homol_subcatintegra extends Model<homol_subcatintegraAttributes, homol_subcatintegraCreationAttributes> implements homol_subcatintegraAttributes {
  categoria_id!: number;
  subcategoria_id!: number;
  idcategoria!: number;
  idsubcategoria!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof homol_subcatintegra {
    return homol_subcatintegra.init({
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subcategoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idcategoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idsubcategoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'homol_subcatintegra',
    schema: 'dbo',
    timestamps: false
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface marcasAttributes {
  marca_id: number;
  marca_dsc?: string;
}

export type marcasOptionalAttributes = "marca_dsc";
export type marcasCreationAttributes = Optional<marcasAttributes, marcasOptionalAttributes>;

export class marcas extends Model<marcasAttributes, marcasCreationAttributes> implements marcasAttributes {
  marca_id!: number;
  marca_dsc?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof marcas {
    return marcas.init({
    marca_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    marca_dsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'marcas',
    schema: 'dbo',
    timestamps: false
  });
  }
}

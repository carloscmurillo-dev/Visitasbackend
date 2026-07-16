import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MercadoOrigenAttributes {
  MercadoOrigenID: number;
  MercadoOrigenDsc?: string;
  ewaycode?: string;
}

export type MercadoOrigenPk = "MercadoOrigenID";
export type MercadoOrigenId = MercadoOrigen[MercadoOrigenPk];
export type MercadoOrigenOptionalAttributes = "MercadoOrigenID" | "MercadoOrigenDsc" | "ewaycode";
export type MercadoOrigenCreationAttributes = Optional<MercadoOrigenAttributes, MercadoOrigenOptionalAttributes>;

export class MercadoOrigen extends Model<MercadoOrigenAttributes, MercadoOrigenCreationAttributes> implements MercadoOrigenAttributes {
  MercadoOrigenID!: number;
  MercadoOrigenDsc?: string;
  ewaycode?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof MercadoOrigen {
    return MercadoOrigen.init({
    MercadoOrigenID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MercadoOrigenDsc: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ewaycode: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MercadoOrigen',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MercadoOrigen",
        unique: true,
        fields: [
          { name: "MercadoOrigenID" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AprobacionesHistoricoAttributes {
  gtin: string;
  UserId: number;
  Status: number;
  RegisterDate: Date;
  NivelAprobacion: number;
}

export type AprobacionesHistoricoPk = "gtin" | "UserId" | "Status" | "RegisterDate";
export type AprobacionesHistoricoId = AprobacionesHistorico[AprobacionesHistoricoPk];
export type AprobacionesHistoricoCreationAttributes = AprobacionesHistoricoAttributes;

export class AprobacionesHistorico extends Model<AprobacionesHistoricoAttributes, AprobacionesHistoricoCreationAttributes> implements AprobacionesHistoricoAttributes {
  gtin!: string;
  UserId!: number;
  Status!: number;
  RegisterDate!: Date;
  NivelAprobacion!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof AprobacionesHistorico {
    return AprobacionesHistorico.init({
    gtin: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RegisterDate: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    NivelAprobacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'AprobacionesHistorico',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AprobacionesHistorico",
        unique: true,
        fields: [
          { name: "gtin" },
          { name: "UserId" },
          { name: "Status" },
          { name: "RegisterDate" },
        ]
      },
    ]
  });
  }
}

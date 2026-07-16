import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AprobacionesAttributes {
  gtin: string;
  UserId: number;
  Status: number;
  RegisterDate?: Date;
  NivelAprobacion: number;
}

export type AprobacionesPk = "gtin" | "UserId" | "NivelAprobacion";
export type AprobacionesId = Aprobaciones[AprobacionesPk];
export type AprobacionesOptionalAttributes = "RegisterDate";
export type AprobacionesCreationAttributes = Optional<AprobacionesAttributes, AprobacionesOptionalAttributes>;

export class Aprobaciones extends Model<AprobacionesAttributes, AprobacionesCreationAttributes> implements AprobacionesAttributes {
  gtin!: string;
  UserId!: number;
  Status!: number;
  RegisterDate?: Date;
  NivelAprobacion!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof Aprobaciones {
    return Aprobaciones.init({
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
      allowNull: false
    },
    RegisterDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    NivelAprobacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'Aprobaciones',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Aprobaciones_PK",
        unique: true,
        fields: [
          { name: "gtin" },
          { name: "UserId" },
          { name: "NivelAprobacion" },
        ]
      },
    ]
  });
  }
}

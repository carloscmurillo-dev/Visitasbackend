import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface PadronAttributes {
  CedulaM: string;
  NombreCompleto?: string;
  Pro?: string;
  Can?: string;
  Dis?: string;
}

export type PadronPk = "CedulaM";
export type PadronId = Padron[PadronPk];
export type PadronOptionalAttributes = "NombreCompleto" | "Pro" | "Can" | "Dis";
export type PadronCreationAttributes = Optional<PadronAttributes, PadronOptionalAttributes>;

export class Padron extends Model<PadronAttributes, PadronCreationAttributes> implements PadronAttributes {
  CedulaM!: string;
  NombreCompleto?: string;
  Pro?: string;
  Can?: string;
  Dis?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Padron {
    return Padron.init({
    CedulaM: {
      type: DataTypes.CHAR(11),
      allowNull: false,
      primaryKey: true
    },
    NombreCompleto: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Pro: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    Can: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    Dis: {
      type: DataTypes.CHAR(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Padron',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Padron",
        unique: true,
        fields: [
          { name: "CedulaM" },
        ]
      },
    ]
  });
  }
}

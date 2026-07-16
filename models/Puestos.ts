import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface PuestosAttributes {
  IdPuesto: number;
  DescripcionPuesto?: string;
}

export type PuestosPk = "IdPuesto";
export type PuestosId = Puestos[PuestosPk];
export type PuestosOptionalAttributes = "IdPuesto" | "DescripcionPuesto";
export type PuestosCreationAttributes = Optional<PuestosAttributes, PuestosOptionalAttributes>;

export class Puestos extends Model<PuestosAttributes, PuestosCreationAttributes> implements PuestosAttributes {
  IdPuesto!: number;
  DescripcionPuesto?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Puestos {
    return Puestos.init({
    IdPuesto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DescripcionPuesto: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Puestos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Puestos",
        unique: true,
        fields: [
          { name: "IdPuesto" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface PuntosVentaAttributes {
  puntoVenta_id: number;
  puntoVenta_dsc?: string;
  tipoPDV?: string;
}

export type PuntosVentaPk = "puntoVenta_id";
export type PuntosVentaId = PuntosVenta[PuntosVentaPk];
export type PuntosVentaOptionalAttributes = "puntoVenta_dsc" | "tipoPDV";
export type PuntosVentaCreationAttributes = Optional<PuntosVentaAttributes, PuntosVentaOptionalAttributes>;

export class PuntosVenta extends Model<PuntosVentaAttributes, PuntosVentaCreationAttributes> implements PuntosVentaAttributes {
  puntoVenta_id!: number;
  puntoVenta_dsc?: string;
  tipoPDV?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof PuntosVenta {
    return PuntosVenta.init({
    puntoVenta_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    puntoVenta_dsc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    tipoPDV: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PuntosVenta',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PuntosVenta",
        unique: true,
        fields: [
          { name: "puntoVenta_id" },
        ]
      },
    ]
  });
  }
}

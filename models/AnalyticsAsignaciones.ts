import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AnalyticsAsignacionesAttributes {
  ASIGNACION_ID: number;
  REPORTE_ID?: number;
  CEDJURIDICA?: string;
  ESTADO?: boolean;
}

export type AnalyticsAsignacionesPk = "ASIGNACION_ID";
export type AnalyticsAsignacionesId = AnalyticsAsignaciones[AnalyticsAsignacionesPk];
export type AnalyticsAsignacionesOptionalAttributes = "ASIGNACION_ID" | "REPORTE_ID" | "CEDJURIDICA" | "ESTADO";
export type AnalyticsAsignacionesCreationAttributes = Optional<AnalyticsAsignacionesAttributes, AnalyticsAsignacionesOptionalAttributes>;

export class AnalyticsAsignaciones extends Model<AnalyticsAsignacionesAttributes, AnalyticsAsignacionesCreationAttributes> implements AnalyticsAsignacionesAttributes {
  ASIGNACION_ID!: number;
  REPORTE_ID?: number;
  CEDJURIDICA?: string;
  ESTADO?: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof AnalyticsAsignaciones {
    return AnalyticsAsignaciones.init({
    ASIGNACION_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    REPORTE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CEDJURIDICA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AnalyticsAsignaciones',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AnalyticsAsignaciones",
        unique: true,
        fields: [
          { name: "ASIGNACION_ID" },
        ]
      },
    ]
  });
  }
}

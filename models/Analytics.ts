import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AnalyticsAttributes {
  REPORTE_ID: number;
  REPORTE_DSC?: string;
  LINK?: string;
  ESTADO?: boolean;
}

export type AnalyticsPk = "REPORTE_ID";
export type AnalyticsId = Analytics[AnalyticsPk];
export type AnalyticsOptionalAttributes = "REPORTE_ID" | "REPORTE_DSC" | "LINK" | "ESTADO";
export type AnalyticsCreationAttributes = Optional<AnalyticsAttributes, AnalyticsOptionalAttributes>;

export class Analytics extends Model<AnalyticsAttributes, AnalyticsCreationAttributes> implements AnalyticsAttributes {
  REPORTE_ID!: number;
  REPORTE_DSC?: string;
  LINK?: string;
  ESTADO?: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof Analytics {
    return Analytics.init({
    REPORTE_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    REPORTE_DSC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LINK: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Analytics',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Analytics",
        unique: true,
        fields: [
          { name: "REPORTE_ID" },
        ]
      },
    ]
  });
  }
}

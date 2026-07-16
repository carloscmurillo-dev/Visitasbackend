import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ReferenciasVisitasAttributes {
  IdReferencia: number;
  IdTipoReferencia: string;
  DsReferencica?: string;
}

export type ReferenciasVisitasPk = "IdReferencia" | "IdTipoReferencia";
export type ReferenciasVisitasId = ReferenciasVisitas[ReferenciasVisitasPk];
export type ReferenciasVisitasOptionalAttributes = "DsReferencica";
export type ReferenciasVisitasCreationAttributes = Optional<ReferenciasVisitasAttributes, ReferenciasVisitasOptionalAttributes>;

export class ReferenciasVisitas extends Model<ReferenciasVisitasAttributes, ReferenciasVisitasCreationAttributes> implements ReferenciasVisitasAttributes {
  IdReferencia!: number;
  IdTipoReferencia!: string;
  DsReferencica?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ReferenciasVisitas {
    return ReferenciasVisitas.init({
    IdReferencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdTipoReferencia: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    DsReferencica: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ReferenciasVisitas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ReferenciasVisitas",
        unique: true,
        fields: [
          { name: "IdReferencia" },
          { name: "IdTipoReferencia" },
        ]
      },
    ]
  });
  }
}

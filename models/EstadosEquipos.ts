import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { VisitasHospitales, VisitasHospitalesId } from './VisitasHospitales';

export interface EstadosEquiposAttributes {
  IdEstadoEquipo: string;
  DscEstadoEquipo?: string;
}

export type EstadosEquiposPk = "IdEstadoEquipo";
export type EstadosEquiposId = EstadosEquipos[EstadosEquiposPk];
export type EstadosEquiposOptionalAttributes = "DscEstadoEquipo";
export type EstadosEquiposCreationAttributes = Optional<EstadosEquiposAttributes, EstadosEquiposOptionalAttributes>;

export class EstadosEquipos extends Model<EstadosEquiposAttributes, EstadosEquiposCreationAttributes> implements EstadosEquiposAttributes {
  IdEstadoEquipo!: string;
  DscEstadoEquipo?: string;

  // EstadosEquipos hasMany VisitasHospitales via IdEstadoEquipo
  VisitasHospitales!: VisitasHospitales[];
  getVisitasHospitales!: Sequelize.HasManyGetAssociationsMixin<VisitasHospitales>;
  setVisitasHospitales!: Sequelize.HasManySetAssociationsMixin<VisitasHospitales, VisitasHospitalesId>;
  addVisitasHospitale!: Sequelize.HasManyAddAssociationMixin<VisitasHospitales, VisitasHospitalesId>;
  addVisitasHospitales!: Sequelize.HasManyAddAssociationsMixin<VisitasHospitales, VisitasHospitalesId>;
  createVisitasHospitale!: Sequelize.HasManyCreateAssociationMixin<VisitasHospitales>;
  removeVisitasHospitale!: Sequelize.HasManyRemoveAssociationMixin<VisitasHospitales, VisitasHospitalesId>;
  removeVisitasHospitales!: Sequelize.HasManyRemoveAssociationsMixin<VisitasHospitales, VisitasHospitalesId>;
  hasVisitasHospitale!: Sequelize.HasManyHasAssociationMixin<VisitasHospitales, VisitasHospitalesId>;
  hasVisitasHospitales!: Sequelize.HasManyHasAssociationsMixin<VisitasHospitales, VisitasHospitalesId>;
  countVisitasHospitales!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof EstadosEquipos {
    return EstadosEquipos.init({
    IdEstadoEquipo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    DscEstadoEquipo: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EstadosEquipos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_EstadosEquipos",
        unique: true,
        fields: [
          { name: "IdEstadoEquipo" },
        ]
      },
    ]
  });
  }
}

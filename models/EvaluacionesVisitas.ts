import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { VisitasHospitales, VisitasHospitalesId } from './VisitasHospitales';

export interface EvaluacionesVisitasAttributes {
  IdEvaluacionVisita: string;
  DscEvaluacionVisitas?: string;
}

export type EvaluacionesVisitasPk = "IdEvaluacionVisita";
export type EvaluacionesVisitasId = EvaluacionesVisitas[EvaluacionesVisitasPk];
export type EvaluacionesVisitasOptionalAttributes = "DscEvaluacionVisitas";
export type EvaluacionesVisitasCreationAttributes = Optional<EvaluacionesVisitasAttributes, EvaluacionesVisitasOptionalAttributes>;

export class EvaluacionesVisitas extends Model<EvaluacionesVisitasAttributes, EvaluacionesVisitasCreationAttributes> implements EvaluacionesVisitasAttributes {
  IdEvaluacionVisita!: string;
  DscEvaluacionVisitas?: string;

  // EvaluacionesVisitas hasMany VisitasHospitales via IdEvaluacionVisita
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

  static initModel(sequelize: Sequelize.Sequelize): typeof EvaluacionesVisitas {
    return EvaluacionesVisitas.init({
    IdEvaluacionVisita: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    DscEvaluacionVisitas: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EvaluacionesVisitas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_EvaluacionesVisitas",
        unique: true,
        fields: [
          { name: "IdEvaluacionVisita" },
        ]
      },
    ]
  });
  }
}

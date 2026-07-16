import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { VisitasHospitales, VisitasHospitalesId } from './VisitasHospitales';

export interface MesesVisitasAttributes {
  IdMesVisita: string;
  DscMesVisita?: string;
}

export type MesesVisitasPk = "IdMesVisita";
export type MesesVisitasId = MesesVisitas[MesesVisitasPk];
export type MesesVisitasOptionalAttributes = "DscMesVisita";
export type MesesVisitasCreationAttributes = Optional<MesesVisitasAttributes, MesesVisitasOptionalAttributes>;

export class MesesVisitas extends Model<MesesVisitasAttributes, MesesVisitasCreationAttributes> implements MesesVisitasAttributes {
  IdMesVisita!: string;
  DscMesVisita?: string;

  // MesesVisitas hasMany VisitasHospitales via IdMesVisita
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

  static initModel(sequelize: Sequelize.Sequelize): typeof MesesVisitas {
    return MesesVisitas.init({
    IdMesVisita: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    DscMesVisita: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MesesVisitas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MesesVisitas",
        unique: true,
        fields: [
          { name: "IdMesVisita" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { VisitasHospitales, VisitasHospitalesId } from './VisitasHospitales';

export interface terapeutasAttributes {
  IdTerapeuta: string;
  NombreTerapeuta: string;
  'Contraseña': string;
  email?: string;
  IdPacientes?: string;
}

export type terapeutasPk = "IdTerapeuta";
export type terapeutasId = terapeutas[terapeutasPk];
export type terapeutasOptionalAttributes = "email" | "IdPacientes";
export type terapeutasCreationAttributes = Optional<terapeutasAttributes, terapeutasOptionalAttributes>;

export class terapeutas extends Model<terapeutasAttributes, terapeutasCreationAttributes> implements terapeutasAttributes {
  IdTerapeuta!: string;
  NombreTerapeuta!: string;
  'Contraseña'!: string;
  email?: string;
  IdPacientes?: string;

  // terapeutas hasMany VisitasHospitales via IdTerapeuta
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

  static initModel(sequelize: Sequelize.Sequelize): typeof terapeutas {
    return terapeutas.init({
    IdTerapeuta: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    NombreTerapeuta: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    'Contraseña': {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    IdPacientes: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'terapeutas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__terapeut__A9FE2957F40BFCC6",
        unique: true,
        fields: [
          { name: "IdTerapeuta" },
        ]
      },
    ]
  });
  }
}

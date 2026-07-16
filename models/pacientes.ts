import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { VisitasHospitales, VisitasHospitalesId } from './VisitasHospitales';

export interface pacientesAttributes {
  idPaciente: string;
  Modalidad?: string;
  FechaNacimiento?: string;
  Cedula?: string;
  TelCel?: string;
  FechaInicioPrograma?: string;
  Equipo?: string;
  TipoEquipo?: string;
  MarcaEquipo?: string;
  ModeloEquipo?: string;
  SerieEquipo?: string;
  MarcaMascarilla?: string;
  TallaMascarilla?: string;
  ModeloMascarilla?: string;
  NoContrato?: string;
  IdTerapeuta?: string;
  MedicoTratante?: string;
  Observaciones?: string;
  NombrePaciente?: string;
  Direccion?: string;
  Hospital?: string;
  FotoPaciente?: any;
}

export type pacientesPk = "idPaciente";
export type pacientesId = pacientes[pacientesPk];
export type pacientesOptionalAttributes = "Modalidad" | "FechaNacimiento" | "Cedula" | "TelCel" | "FechaInicioPrograma" | "Equipo" | "TipoEquipo" | "MarcaEquipo" | "ModeloEquipo" | "SerieEquipo" | "MarcaMascarilla" | "TallaMascarilla" | "ModeloMascarilla" | "NoContrato" | "IdTerapeuta" | "MedicoTratante" | "Observaciones" | "NombrePaciente" | "Direccion" | "Hospital" | "FotoPaciente";
export type pacientesCreationAttributes = Optional<pacientesAttributes, pacientesOptionalAttributes>;

export class pacientes extends Model<pacientesAttributes, pacientesCreationAttributes> implements pacientesAttributes {
  idPaciente!: string;
  Modalidad?: string;
  FechaNacimiento?: string;
  Cedula?: string;
  TelCel?: string;
  FechaInicioPrograma?: string;
  Equipo?: string;
  TipoEquipo?: string;
  MarcaEquipo?: string;
  ModeloEquipo?: string;
  SerieEquipo?: string;
  MarcaMascarilla?: string;
  TallaMascarilla?: string;
  ModeloMascarilla?: string;
  NoContrato?: string;
  IdTerapeuta?: string;
  MedicoTratante?: string;
  Observaciones?: string;
  NombrePaciente?: string;
  Direccion?: string;
  Hospital?: string;
  FotoPaciente?: any;

  // pacientes hasMany VisitasHospitales via idPaciente
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

  static initModel(sequelize: Sequelize.Sequelize): typeof pacientes {
    return pacientes.init({
    idPaciente: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    },
    Modalidad: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Cedula: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TelCel: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FechaInicioPrograma: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Equipo: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    TipoEquipo: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    MarcaEquipo: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    ModeloEquipo: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    SerieEquipo: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    MarcaMascarilla: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    TallaMascarilla: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    ModeloMascarilla: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    NoContrato: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    IdTerapeuta: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    MedicoTratante: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Observaciones: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    NombrePaciente: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Direccion: {
      type: DataTypes.STRING(550),
      allowNull: true
    },
    Hospital: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FotoPaciente: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pacientes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__paciente__F48A08F2F4AB7EF0",
        unique: true,
        fields: [
          { name: "idPaciente" },
        ]
      },
    ]
  });
  }
}

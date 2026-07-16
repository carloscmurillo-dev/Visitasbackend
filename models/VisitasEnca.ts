import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VisitasEncaAttributes {
  Id: string;
  createdAt?: Date;
  updatedAt?: Date;
  deleted?: string;
  IdHospital?: string;
  DscHospital?: string;
  idPaciente?: string;
  NombrePaciente?: string;
  IdTerapeuta: string;
  NombreTerapeuta: string;
  IdMesVisita?: string;
  DscMesVisita?: string;
  FechaVisita?: Date;
  IdTipoVisita?: string;
  DscTipoVisita?: string;
  IdTipoEquipo?: string;
  DscTipoEquipo?: string;
  FrecuenciaCardiaca?: string;
  PresionArterialSistolica?: string;
  PresionArterialDiastolica?: string;
  SaturacionOxigeno?: string;
  HoraUsoPromDia?: string;
  HorasTotalMensuales?: string;
  DiasUsoSobreTotal?: string;
  FugaLmin?: string;
  IndiceApnea?: string;
  PresionUtilizadaEpap?: string;
  PresionUtilizadaIPAP?: string;
  PresionUtilizadaCPAP?: string;
  CambioEquipo?: boolean;
  NumSerieEquipoyDN?: string;
  IdEstadoEquipo?: string;
  DscEstadoEquipo?: string;
  IdEvaluacionVisita?: string;
  DscEvaluacionVisitas?: string;
  ObservacionesClinicas?: string;
  ComentariosAdministrativos?: string;
  SharePoint?: boolean;
}

export type VisitasEncaPk = "Id";
export type VisitasEncaId = VisitasEnca[VisitasEncaPk];
export type VisitasEncaOptionalAttributes = "createdAt" | "updatedAt" | "deleted" | "IdHospital" | "DscHospital" | "idPaciente" | "NombrePaciente" | "IdMesVisita" | "DscMesVisita" | "FechaVisita" | "IdTipoVisita" | "DscTipoVisita" | "IdTipoEquipo" | "DscTipoEquipo" | "FrecuenciaCardiaca" | "PresionArterialSistolica" | "PresionArterialDiastolica" | "SaturacionOxigeno" | "HoraUsoPromDia" | "HorasTotalMensuales" | "DiasUsoSobreTotal" | "FugaLmin" | "IndiceApnea" | "PresionUtilizadaEpap" | "PresionUtilizadaIPAP" | "PresionUtilizadaCPAP" | "CambioEquipo" | "NumSerieEquipoyDN" | "IdEstadoEquipo" | "DscEstadoEquipo" | "IdEvaluacionVisita" | "DscEvaluacionVisitas" | "ObservacionesClinicas" | "ComentariosAdministrativos" | "SharePoint";
export type VisitasEncaCreationAttributes = Optional<VisitasEncaAttributes, VisitasEncaOptionalAttributes>;

export class VisitasEnca extends Model<VisitasEncaAttributes, VisitasEncaCreationAttributes> implements VisitasEncaAttributes {
  Id!: string;
  createdAt?: Date;
  updatedAt?: Date;
  deleted?: string;
  IdHospital?: string;
  DscHospital?: string;
  idPaciente?: string;
  NombrePaciente?: string;
  IdTerapeuta!: string;
  NombreTerapeuta!: string;
  IdMesVisita?: string;
  DscMesVisita?: string;
  FechaVisita?: Date;
  IdTipoVisita?: string;
  DscTipoVisita?: string;
  IdTipoEquipo?: string;
  DscTipoEquipo?: string;
  FrecuenciaCardiaca?: string;
  PresionArterialSistolica?: string;
  PresionArterialDiastolica?: string;
  SaturacionOxigeno?: string;
  HoraUsoPromDia?: string;
  HorasTotalMensuales?: string;
  DiasUsoSobreTotal?: string;
  FugaLmin?: string;
  IndiceApnea?: string;
  PresionUtilizadaEpap?: string;
  PresionUtilizadaIPAP?: string;
  PresionUtilizadaCPAP?: string;
  CambioEquipo?: boolean;
  NumSerieEquipoyDN?: string;
  IdEstadoEquipo?: string;
  DscEstadoEquipo?: string;
  IdEvaluacionVisita?: string;
  DscEvaluacionVisitas?: string;
  ObservacionesClinicas?: string;
  ComentariosAdministrativos?: string;
  SharePoint?: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof VisitasEnca {
    return VisitasEnca.init({
    Id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    deleted: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    IdHospital: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    DscHospital: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    idPaciente: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    NombrePaciente: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    IdTerapeuta: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    NombreTerapeuta: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    IdMesVisita: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DscMesVisita: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FechaVisita: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IdTipoVisita: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DscTipoVisita: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IdTipoEquipo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DscTipoEquipo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FrecuenciaCardiaca: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PresionArterialSistolica: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PresionArterialDiastolica: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SaturacionOxigeno: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HoraUsoPromDia: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HorasTotalMensuales: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DiasUsoSobreTotal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FugaLmin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IndiceApnea: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PresionUtilizadaEpap: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PresionUtilizadaIPAP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PresionUtilizadaCPAP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CambioEquipo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    NumSerieEquipoyDN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IdEstadoEquipo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DscEstadoEquipo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IdEvaluacionVisita: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DscEvaluacionVisitas: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ObservacionesClinicas: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ComentariosAdministrativos: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SharePoint: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VisitasEnca',
    schema: 'dbo',
    timestamps: true
  });
  }
}

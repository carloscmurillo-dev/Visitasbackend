import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VisitasHospitalesAttributes {
  Id: string;
  IdHospital: string;
  idPaciente: string;
  IdTerapeuta: string;
  IdMesVisita: string;
  FechaVisita?: string;
  IdTipoVisita?: string;
  IdTipoEquipo?: string;
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
  IdEvaluacionVisita?: string;
  ObservacionesClinicas?: string;
  ComentariosAdministrativos?: string;
  SharePoint?: boolean;
  EstadoPaciente?: string;
  AdherenciaUsoTratamiento?: string;
  CambEquiInsuTrata?: string;
  CondTrataYParam?: string;
  SituaEspecYCoordi?: string;
  MtoPreventivo?: string;
}

export type VisitasHospitalesPk = "Id";
export type VisitasHospitalesId = VisitasHospitales[VisitasHospitalesPk];
export type VisitasHospitalesOptionalAttributes = "FechaVisita" | "IdTipoVisita" | "IdTipoEquipo" | "FrecuenciaCardiaca" | "PresionArterialSistolica" | "PresionArterialDiastolica" | "SaturacionOxigeno" | "HoraUsoPromDia" | "HorasTotalMensuales" | "DiasUsoSobreTotal" | "FugaLmin" | "IndiceApnea" | "PresionUtilizadaEpap" | "PresionUtilizadaIPAP" | "PresionUtilizadaCPAP" | "CambioEquipo" | "NumSerieEquipoyDN" | "IdEstadoEquipo" | "IdEvaluacionVisita" | "ObservacionesClinicas" | "ComentariosAdministrativos" | "SharePoint" | "EstadoPaciente" | "AdherenciaUsoTratamiento" | "CambEquiInsuTrata" | "CondTrataYParam" | "SituaEspecYCoordi" |"MtoPreventivo";
export type VisitasHospitalesCreationAttributes = Optional<VisitasHospitalesAttributes, VisitasHospitalesOptionalAttributes>;

export class VisitasHospitales extends Model<VisitasHospitalesAttributes, VisitasHospitalesCreationAttributes> implements VisitasHospitalesAttributes {
  Id!: string;
  IdHospital!: string;
  idPaciente!: string;
  IdTerapeuta!: string;
  IdMesVisita!: string;
  FechaVisita?: string;
  IdTipoVisita?: string;
  IdTipoEquipo?: string;
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
  IdEvaluacionVisita?: string;
  ObservacionesClinicas?: string;
  ComentariosAdministrativos?: string;
  SharePoint?: boolean;
  EstadoPaciente?: string;
  AdherenciaUsoTratamiento?: string;
  CambEquiInsuTrata?: string;
  CondTrataYParam?: string;
  SituaEspecYCoordi?: string;
  MtoPreventivo?: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof VisitasHospitales {
    return VisitasHospitales.init({
    Id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    IdHospital: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    idPaciente: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    IdTerapeuta: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    IdMesVisita: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    FechaVisita: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    IdTipoVisita: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IdTipoEquipo: {
      type: DataTypes.STRING(10),
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
    IdEvaluacionVisita: {
      type: DataTypes.STRING(10),
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
    },
    EstadoPaciente: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AdherenciaUsoTratamiento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CambEquiInsuTrata: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CondTrataYParam: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SituaEspecYCoordi: {     
      type: DataTypes.STRING(50),
      allowNull: true
    },
     MtoPreventivo: {      
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VisitasHospitales',
    schema: 'dbo',
    timestamps: false
  });
  }
}

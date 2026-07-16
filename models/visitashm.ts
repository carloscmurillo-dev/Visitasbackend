import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface visitashmAttributes {
  Id: string;
  createdAt?: Date;
  updatedAt?: Date;
  deleted?: string;
  idPaciente?: string;
  FechaVisita?: Date;
  MesVisita?: string;
  TipoVisita?: string;
  VisitaCoordinada?: string;
  FrecuenciaCardiaca?: string;
  PresionArterialDiastolica?: string;
  PresionArterialSistolica?: string;
  SaturacionOxigeno?: string;
  Modo?: string;
  PresionUtilizadaIPAP?: string;
  PresionUtilizadaCPAP?: string;
  HorasUsadasMensual?: string;
  HoraUsoPromDia?: string;
  DiasUtilizMes?: string;
  FugaLmin?: string;
  NivelHumedad?: string;
  IndiceApnea?: string;
  CambioInsumos?: string;
  CambioEquipo?: string;
  CambioParametros?: string;
  EstadoEquipo?: string;
  Observaciones?: string;
  ReqsProxMes?: string;
  IdTerapeuta?: string;
  EvaluacionVisita?: string;
  Revisado?: string;
  LogroVisita?: string;
  ComentariosAbierto?: string;
  TotalDiasUtilizadosMes?: string;
  NuevoEquipo?: string;
  NoSerieEquipo?: string;
  DN?: string;
  Hospital?: string;
  SharePoint?: boolean;
  SReqsProxMes?: string;
}

export type visitashmPk = "Id";
export type visitashmId = visitashm[visitashmPk];
export type visitashmOptionalAttributes = "createdAt" | "updatedAt" | "deleted" | "idPaciente" | "FechaVisita" | "MesVisita" | "TipoVisita" | "VisitaCoordinada" | "FrecuenciaCardiaca" | "PresionArterialDiastolica" | "PresionArterialSistolica" | "SaturacionOxigeno" | "Modo" | "PresionUtilizadaIPAP" | "PresionUtilizadaCPAP" | "HorasUsadasMensual" | "HoraUsoPromDia" | "DiasUtilizMes" | "FugaLmin" | "NivelHumedad" | "IndiceApnea" | "CambioInsumos" | "CambioEquipo" | "CambioParametros" | "EstadoEquipo" | "Observaciones" | "ReqsProxMes" | "IdTerapeuta" | "EvaluacionVisita" | "Revisado" | "LogroVisita" | "ComentariosAbierto" | "TotalDiasUtilizadosMes" | "NuevoEquipo" | "NoSerieEquipo" | "DN" | "Hospital" | "SharePoint" | "SReqsProxMes";
export type visitashmCreationAttributes = Optional<visitashmAttributes, visitashmOptionalAttributes>;

export class visitashm extends Model<visitashmAttributes, visitashmCreationAttributes> implements visitashmAttributes {
  Id!: string;
  createdAt?: Date;
  updatedAt?: Date;
  deleted?: string;
  idPaciente?: string;
  FechaVisita?: Date;
  MesVisita?: string;
  TipoVisita?: string;
  VisitaCoordinada?: string;
  FrecuenciaCardiaca?: string;
  PresionArterialDiastolica?: string;
  PresionArterialSistolica?: string;
  SaturacionOxigeno?: string;
  Modo?: string;
  PresionUtilizadaIPAP?: string;
  PresionUtilizadaCPAP?: string;
  HorasUsadasMensual?: string;
  HoraUsoPromDia?: string;
  DiasUtilizMes?: string;
  FugaLmin?: string;
  NivelHumedad?: string;
  IndiceApnea?: string;
  CambioInsumos?: string;
  CambioEquipo?: string;
  CambioParametros?: string;
  EstadoEquipo?: string;
  Observaciones?: string;
  ReqsProxMes?: string;
  IdTerapeuta?: string;
  EvaluacionVisita?: string;
  Revisado?: string;
  LogroVisita?: string;
  ComentariosAbierto?: string;
  TotalDiasUtilizadosMes?: string;
  NuevoEquipo?: string;
  NoSerieEquipo?: string;
  DN?: string;
  Hospital?: string;
  SharePoint?: boolean;
  SReqsProxMes?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof visitashm {
    return visitashm.init({
    Id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    deleted: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    idPaciente: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FechaVisita: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MesVisita: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TipoVisita: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    VisitaCoordinada: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FrecuenciaCardiaca: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PresionArterialDiastolica: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PresionArterialSistolica: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SaturacionOxigeno: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Modo: {
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
    HorasUsadasMensual: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HoraUsoPromDia: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DiasUtilizMes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FugaLmin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NivelHumedad: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IndiceApnea: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CambioInsumos: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CambioEquipo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CambioParametros: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EstadoEquipo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Observaciones: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ReqsProxMes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IdTerapeuta: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EvaluacionVisita: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Revisado: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LogroVisita: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ComentariosAbierto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TotalDiasUtilizadosMes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NuevoEquipo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NoSerieEquipo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Hospital: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SharePoint: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SReqsProxMes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'visitashm',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__visitash__3214EC0770D49652",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}

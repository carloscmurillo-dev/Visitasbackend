import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { SolicitudInsumosDeta, SolicitudInsumosDetaId } from './SolicitudInsumosDeta';
import type { terapeutas, terapeutasId } from './terapeutas';

export interface SolicitudInsumosEncaAttributes {
  IdSoliInsumo: string;
  FechaSoliInsumo?: string;
  IdTerapeuta?: string;
  SolilnsumoEnviada?: boolean;
  SoliInsumoRecibida?: boolean;
  SoliInsumoDespachada?: boolean;
  IdUsuario?: string;
}

export type SolicitudInsumosEncaPk = "IdSoliInsumo";
export type SolicitudInsumosEncaId = SolicitudInsumosEnca[SolicitudInsumosEncaPk];
export type SolicitudInsumosEncaOptionalAttributes = "FechaSoliInsumo" | "IdTerapeuta" | "SolilnsumoEnviada" | "SoliInsumoRecibida" | "SoliInsumoDespachada" | "IdUsuario";
export type SolicitudInsumosEncaCreationAttributes = Optional<SolicitudInsumosEncaAttributes, SolicitudInsumosEncaOptionalAttributes>;

export class SolicitudInsumosEnca extends Model<SolicitudInsumosEncaAttributes, SolicitudInsumosEncaCreationAttributes> implements SolicitudInsumosEncaAttributes {
  IdSoliInsumo!: string;
  FechaSoliInsumo?: string;
  IdTerapeuta?: string;
  SolilnsumoEnviada?: boolean;
  SoliInsumoRecibida?: boolean;
  SoliInsumoDespachada?: boolean;
  IdUsuario?: string;

  // SolicitudInsumosEnca hasMany SolicitudInsumosDeta via IdSoliInsumo
  SolicitudInsumosDeta!: SolicitudInsumosDeta[];
  getSolicitudInsumosDeta!: Sequelize.HasManyGetAssociationsMixin<SolicitudInsumosDeta>;
  setSolicitudInsumosDeta!: Sequelize.HasManySetAssociationsMixin<SolicitudInsumosDeta, SolicitudInsumosDetaId>;
  addSolicitudInsumosDetum!: Sequelize.HasManyAddAssociationMixin<SolicitudInsumosDeta, SolicitudInsumosDetaId>;
  addSolicitudInsumosDeta!: Sequelize.HasManyAddAssociationsMixin<SolicitudInsumosDeta, SolicitudInsumosDetaId>;
  createSolicitudInsumosDetum!: Sequelize.HasManyCreateAssociationMixin<SolicitudInsumosDeta>;
  removeSolicitudInsumosDetum!: Sequelize.HasManyRemoveAssociationMixin<SolicitudInsumosDeta, SolicitudInsumosDetaId>;
  removeSolicitudInsumosDeta!: Sequelize.HasManyRemoveAssociationsMixin<SolicitudInsumosDeta, SolicitudInsumosDetaId>;
  hasSolicitudInsumosDetum!: Sequelize.HasManyHasAssociationMixin<SolicitudInsumosDeta, SolicitudInsumosDetaId>;
  hasSolicitudInsumosDeta!: Sequelize.HasManyHasAssociationsMixin<SolicitudInsumosDeta, SolicitudInsumosDetaId>;
  countSolicitudInsumosDeta!: Sequelize.HasManyCountAssociationsMixin;
  // SolicitudInsumosEnca belongsTo terapeutas via IdTerapeuta
  IdTerapeuta_terapeuta!: terapeutas;
  getIdTerapeuta_terapeuta!: Sequelize.BelongsToGetAssociationMixin<terapeutas>;
  setIdTerapeuta_terapeuta!: Sequelize.BelongsToSetAssociationMixin<terapeutas, terapeutasId>;
  createIdTerapeuta_terapeuta!: Sequelize.BelongsToCreateAssociationMixin<terapeutas>;

  static initModel(sequelize: Sequelize.Sequelize): typeof SolicitudInsumosEnca {
    return SolicitudInsumosEnca.init({
    IdSoliInsumo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    FechaSoliInsumo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    IdTerapeuta: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'terapeutas',
        key: 'IdTerapeuta'
      }
    },
    SolilnsumoEnviada: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SoliInsumoRecibida: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SoliInsumoDespachada: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IdUsuario: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SolicitudInsumosEnca',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SolicitudInsumosEnca",
        unique: true,
        fields: [
          { name: "IdSoliInsumo" },
        ]
      },
    ]
  });
  }
}

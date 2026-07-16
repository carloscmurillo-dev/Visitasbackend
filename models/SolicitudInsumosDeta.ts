import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Insumos, InsumosId } from './insumos';
import type { SolicitudInsumosEnca, SolicitudInsumosEncaId } from './SolicitudInsumosEnca';

export interface SolicitudInsumosDetaAttributes {
  IdSoliInsumo: string;
  IdLineaSoliInsumo: string;
  IdInsumo?: string;
  qtySolicitada?: number;
  qtyDespachada?: number;
}

export type SolicitudInsumosDetaPk = "IdSoliInsumo" | "IdLineaSoliInsumo";
export type SolicitudInsumosDetaId = SolicitudInsumosDeta[SolicitudInsumosDetaPk];
export type SolicitudInsumosDetaOptionalAttributes = "IdInsumo" | "qtySolicitada" | "qtyDespachada";
export type SolicitudInsumosDetaCreationAttributes = Optional<SolicitudInsumosDetaAttributes, SolicitudInsumosDetaOptionalAttributes>;

export class SolicitudInsumosDeta extends Model<SolicitudInsumosDetaAttributes, SolicitudInsumosDetaCreationAttributes> implements SolicitudInsumosDetaAttributes {
  IdSoliInsumo!: string;
  IdLineaSoliInsumo!: string;
  IdInsumo?: string;
  qtySolicitada?: number;
  qtyDespachada?: number;

  // SolicitudInsumosDeta belongsTo Insumos via IdInsumo
  IdInsumo_Insumo!: Insumos;
  getIdInsumo_Insumo!: Sequelize.BelongsToGetAssociationMixin<Insumos>;
  setIdInsumo_Insumo!: Sequelize.BelongsToSetAssociationMixin<Insumos, InsumosId>;
  createIdInsumo_Insumo!: Sequelize.BelongsToCreateAssociationMixin<Insumos>;
  // SolicitudInsumosDeta belongsTo SolicitudInsumosEnca via IdSoliInsumo
  IdSoliInsumo_SolicitudInsumosEnca!: SolicitudInsumosEnca;
  getIdSoliInsumo_SolicitudInsumosEnca!: Sequelize.BelongsToGetAssociationMixin<SolicitudInsumosEnca>;
  setIdSoliInsumo_SolicitudInsumosEnca!: Sequelize.BelongsToSetAssociationMixin<SolicitudInsumosEnca, SolicitudInsumosEncaId>;
  createIdSoliInsumo_SolicitudInsumosEnca!: Sequelize.BelongsToCreateAssociationMixin<SolicitudInsumosEnca>;

  static initModel(sequelize: Sequelize.Sequelize): typeof SolicitudInsumosDeta {
    return SolicitudInsumosDeta.init({
    IdSoliInsumo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SolicitudInsumosEnca',
        key: 'IdSoliInsumo'
      }
    },
    IdLineaSoliInsumo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    IdInsumo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'Insumos',
        key: 'IdInsumo'
      }
    },
    qtySolicitada: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    qtyDespachada: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SolicitudInsumosDeta',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SolicitudInsumosDeta",
        unique: true,
        fields: [
          { name: "IdSoliInsumo" },
          { name: "IdLineaSoliInsumo" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { SolicitudInsumosDeta, SolicitudInsumosDetaId } from './SolicitudInsumosDeta';

export interface InsumosAttributes {
  IdInsumo: string;
  DescInsumo?: string;
}

export type InsumosPk = "IdInsumo";
export type InsumosId = Insumos[InsumosPk];
export type InsumosOptionalAttributes = "DescInsumo";
export type InsumosCreationAttributes = Optional<InsumosAttributes, InsumosOptionalAttributes>;

export class Insumos extends Model<InsumosAttributes, InsumosCreationAttributes> implements InsumosAttributes {
  IdInsumo!: string;
  DescInsumo?: string;

  // Insumos hasMany SolicitudInsumosDeta via IdInsumo
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Insumos {
    return Insumos.init({
    IdInsumo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    DescInsumo: {
      type: DataTypes.STRING(550),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Insumos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Insumos",
        unique: true,
        fields: [
          { name: "IdInsumo" },
        ]
      },
    ]
  });
  }
}

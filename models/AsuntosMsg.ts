import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Vmensajes, VmensajesId } from './Vmensajes';

export interface AsuntosMsgAttributes {
  asunto_id: number;
  asunto_dsc?: string;
  tipoAsunto?: string;
}

export type AsuntosMsgPk = "asunto_id";
export type AsuntosMsgId = AsuntosMsg[AsuntosMsgPk];
export type AsuntosMsgOptionalAttributes = "asunto_id" | "asunto_dsc" | "tipoAsunto";
export type AsuntosMsgCreationAttributes = Optional<AsuntosMsgAttributes, AsuntosMsgOptionalAttributes>;

export class AsuntosMsg extends Model<AsuntosMsgAttributes, AsuntosMsgCreationAttributes> implements AsuntosMsgAttributes {
  asunto_id!: number;
  asunto_dsc?: string;
  tipoAsunto?: string;

  // AsuntosMsg hasMany Vmensajes via asunto_id
  Vmensajes!: Vmensajes[];
  getVmensajes!: Sequelize.HasManyGetAssociationsMixin<Vmensajes>;
  setVmensajes!: Sequelize.HasManySetAssociationsMixin<Vmensajes, VmensajesId>;
  addVmensaje!: Sequelize.HasManyAddAssociationMixin<Vmensajes, VmensajesId>;
  addVmensajes!: Sequelize.HasManyAddAssociationsMixin<Vmensajes, VmensajesId>;
  createVmensaje!: Sequelize.HasManyCreateAssociationMixin<Vmensajes>;
  removeVmensaje!: Sequelize.HasManyRemoveAssociationMixin<Vmensajes, VmensajesId>;
  removeVmensajes!: Sequelize.HasManyRemoveAssociationsMixin<Vmensajes, VmensajesId>;
  hasVmensaje!: Sequelize.HasManyHasAssociationMixin<Vmensajes, VmensajesId>;
  hasVmensajes!: Sequelize.HasManyHasAssociationsMixin<Vmensajes, VmensajesId>;
  countVmensajes!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof AsuntosMsg {
    return AsuntosMsg.init({
    asunto_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    asunto_dsc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    tipoAsunto: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AsuntosMsg',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AsuntosMsg",
        unique: true,
        fields: [
          { name: "asunto_id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AsuntosMsg, AsuntosMsgId } from './AsuntosMsg';
import type { Categorias, CategoriasId } from './Categorias';

export interface VmensajesAttributes {
  mensaje_id: number;
  mensajeResp_id?: number;
  UsuarioSend?: string;
  UsuarioRecep?: string;
  msgDate?: Date;
  msgDateCita?: Date;
  asunto_id?: number;
  msgMensaje?: string;
  msgMensajeRespuesta?: string;
  msgUsuarioRecepOk?: boolean;
  msgEliminado?: boolean;
  IdMensajeOriginal?: number;
  categoria_id?: number;
  participantes?: string;
  participantesCia?: string;
  tipoMensaje?: string;
  status?: string;
  Foto?: any;
  titulo?: string;
  fechaCita?: string;
}

export type VmensajesPk = "mensaje_id";
export type VmensajesId = Vmensajes[VmensajesPk];
export type VmensajesOptionalAttributes = "mensaje_id" | "mensajeResp_id" | "UsuarioSend" | "UsuarioRecep" | "msgDate" | "msgDateCita" | "asunto_id" | "msgMensaje" | "msgMensajeRespuesta" | "msgUsuarioRecepOk" | "msgEliminado" | "IdMensajeOriginal" | "categoria_id" | "participantes" | "participantesCia" | "tipoMensaje" | "status" | "Foto" | "titulo" | "fechaCita";
export type VmensajesCreationAttributes = Optional<VmensajesAttributes, VmensajesOptionalAttributes>;

export class Vmensajes extends Model<VmensajesAttributes, VmensajesCreationAttributes> implements VmensajesAttributes {
  mensaje_id!: number;
  mensajeResp_id?: number;
  UsuarioSend?: string;
  UsuarioRecep?: string;
  msgDate?: Date;
  msgDateCita?: Date;
  asunto_id?: number;
  msgMensaje?: string;
  msgMensajeRespuesta?: string;
  msgUsuarioRecepOk?: boolean;
  msgEliminado?: boolean;
  IdMensajeOriginal?: number;
  categoria_id?: number;
  participantes?: string;
  participantesCia?: string;
  tipoMensaje?: string;
  status?: string;
  Foto?: any;
  titulo?: string;
  fechaCita?: string;

  // Vmensajes belongsTo AsuntosMsg via asunto_id
  asunto!: AsuntosMsg;
  getAsunto!: Sequelize.BelongsToGetAssociationMixin<AsuntosMsg>;
  setAsunto!: Sequelize.BelongsToSetAssociationMixin<AsuntosMsg, AsuntosMsgId>;
  createAsunto!: Sequelize.BelongsToCreateAssociationMixin<AsuntosMsg>;
  // Vmensajes belongsTo Categorias via categoria_id
  categorium!: Categorias;
  getCategorium!: Sequelize.BelongsToGetAssociationMixin<Categorias>;
  setCategorium!: Sequelize.BelongsToSetAssociationMixin<Categorias, CategoriasId>;
  createCategorium!: Sequelize.BelongsToCreateAssociationMixin<Categorias>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Vmensajes {
    return Vmensajes.init({
    mensaje_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mensajeResp_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UsuarioSend: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    UsuarioRecep: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    msgDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    msgDateCita: {
      type: DataTypes.DATE,
      allowNull: true
    },
    asunto_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'AsuntosMsg',
        key: 'asunto_id'
      }
    },
    msgMensaje: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    msgMensajeRespuesta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    msgUsuarioRecepOk: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    msgEliminado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IdMensajeOriginal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Categorias',
        key: 'categoria_id'
      }
    },
    participantes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    participantesCia: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tipoMensaje: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Foto: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    titulo: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    fechaCita: {
      type: DataTypes.STRING(75),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Vmensajes',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_Vmensajes_1",
        unique: true,
        fields: [
          { name: "mensaje_id" },
        ]
      },
    ]
  });
  }
}

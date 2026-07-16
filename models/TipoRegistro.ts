import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TipoRegistroAttributes {
  TipoRegistro_ID: number;
  DescripcionTR?: string;
}

export type TipoRegistroPk = "TipoRegistro_ID";
export type TipoRegistroId = TipoRegistro[TipoRegistroPk];
export type TipoRegistroOptionalAttributes = "DescripcionTR";
export type TipoRegistroCreationAttributes = Optional<TipoRegistroAttributes, TipoRegistroOptionalAttributes>;

export class TipoRegistro extends Model<TipoRegistroAttributes, TipoRegistroCreationAttributes> implements TipoRegistroAttributes {
  TipoRegistro_ID!: number;
  DescripcionTR?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof TipoRegistro {
    return TipoRegistro.init({
    TipoRegistro_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DescripcionTR: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TipoRegistro',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TipoRegistro",
        unique: true,
        fields: [
          { name: "TipoRegistro_ID" },
        ]
      },
    ]
  });
  }
}

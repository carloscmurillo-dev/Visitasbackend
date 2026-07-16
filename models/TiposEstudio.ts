import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TiposEstudioAttributes {
  TipoEstudio: string;
  DescEstudio?: string;
}

export type TiposEstudioPk = "TipoEstudio";
export type TiposEstudioId = TiposEstudio[TiposEstudioPk];
export type TiposEstudioOptionalAttributes = "DescEstudio";
export type TiposEstudioCreationAttributes = Optional<TiposEstudioAttributes, TiposEstudioOptionalAttributes>;

export class TiposEstudio extends Model<TiposEstudioAttributes, TiposEstudioCreationAttributes> implements TiposEstudioAttributes {
  TipoEstudio!: string;
  DescEstudio?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof TiposEstudio {
    return TiposEstudio.init({
    TipoEstudio: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    DescEstudio: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TiposEstudio',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TiposEstudio",
        unique: true,
        fields: [
          { name: "TipoEstudio" },
        ]
      },
    ]
  });
  }
}

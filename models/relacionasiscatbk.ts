import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface relacionasiscatbkAttributes {
  IdRelacion: number;
  EmailAsistente?: string;
  categoria_id?: number;
}

export type relacionasiscatbkOptionalAttributes = "IdRelacion" | "EmailAsistente" | "categoria_id";
export type relacionasiscatbkCreationAttributes = Optional<relacionasiscatbkAttributes, relacionasiscatbkOptionalAttributes>;

export class relacionasiscatbk extends Model<relacionasiscatbkAttributes, relacionasiscatbkCreationAttributes> implements relacionasiscatbkAttributes {
  IdRelacion!: number;
  EmailAsistente?: string;
  categoria_id?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof relacionasiscatbk {
    return relacionasiscatbk.init({
    IdRelacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    EmailAsistente: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'relacionasiscatbk',
    schema: 'dbo',
    timestamps: false
  });
  }
}

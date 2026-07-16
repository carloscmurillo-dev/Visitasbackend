import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface Categorias$Attributes {
  categoria_id?: string;
  categoria_dsc?: string;
}

export type Categorias$OptionalAttributes = "categoria_id" | "categoria_dsc";
export type Categorias$CreationAttributes = Optional<Categorias$Attributes, Categorias$OptionalAttributes>;

export class Categorias$ extends Model<Categorias$Attributes, Categorias$CreationAttributes> implements Categorias$Attributes {
  categoria_id?: string;
  categoria_dsc?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Categorias$ {
    return Categorias$.init({
    categoria_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    categoria_dsc: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Categorias$',
    schema: 'dbo',
    timestamps: false
  });
  }
}

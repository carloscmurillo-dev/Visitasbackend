import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RelacionAsistenteCategoriasAttributes {
  IdRelacion: number;
  EmailAsistente?: string;
  categoria_id?: number;
}

export type RelacionAsistenteCategoriasPk = "IdRelacion";
export type RelacionAsistenteCategoriasId = RelacionAsistenteCategorias[RelacionAsistenteCategoriasPk];
export type RelacionAsistenteCategoriasOptionalAttributes = "IdRelacion" | "EmailAsistente" | "categoria_id";
export type RelacionAsistenteCategoriasCreationAttributes = Optional<RelacionAsistenteCategoriasAttributes, RelacionAsistenteCategoriasOptionalAttributes>;

export class RelacionAsistenteCategorias extends Model<RelacionAsistenteCategoriasAttributes, RelacionAsistenteCategoriasCreationAttributes> implements RelacionAsistenteCategoriasAttributes {
  IdRelacion!: number;
  EmailAsistente?: string;
  categoria_id?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof RelacionAsistenteCategorias {
    return RelacionAsistenteCategorias.init({
    IdRelacion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: 'RelacionAsistenteCategorias',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_RelacionAsistenteCategorias",
        unique: true,
        fields: [
          { name: "IdRelacion" },
        ]
      },
    ]
  });
  }
}

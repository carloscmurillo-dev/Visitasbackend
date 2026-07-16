import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RelacionProveedorCategoriasAttributes {
  proveedor_id: string;
  categoria_id: number;
}

export type RelacionProveedorCategoriasPk = "proveedor_id" | "categoria_id";
export type RelacionProveedorCategoriasId = RelacionProveedorCategorias[RelacionProveedorCategoriasPk];
export type RelacionProveedorCategoriasCreationAttributes = RelacionProveedorCategoriasAttributes;

export class RelacionProveedorCategorias extends Model<RelacionProveedorCategoriasAttributes, RelacionProveedorCategoriasCreationAttributes> implements RelacionProveedorCategoriasAttributes {
  proveedor_id!: string;
  categoria_id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof RelacionProveedorCategorias {
    return RelacionProveedorCategorias.init({
    proveedor_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'RelacionProveedorCategorias',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_RelacionProveedorCategorias",
        unique: true,
        fields: [
          { name: "proveedor_id" },
          { name: "categoria_id" },
        ]
      },
    ]
  });
  }
}

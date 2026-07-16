import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ARTICULOS, ARTICULOSId } from './ARTICULOS';
import type { Categorias, CategoriasId } from './Categorias';

export interface SubCategoriasAttributes {
  categoria_id: number;
  subcategoria_id: number;
  subcategoria_dsc?: string;
}

export type SubCategoriasPk = "categoria_id" | "subcategoria_id";
export type SubCategoriasId = SubCategorias[SubCategoriasPk];
export type SubCategoriasOptionalAttributes = "subcategoria_dsc";
export type SubCategoriasCreationAttributes = Optional<SubCategoriasAttributes, SubCategoriasOptionalAttributes>;

export class SubCategorias extends Model<SubCategoriasAttributes, SubCategoriasCreationAttributes> implements SubCategoriasAttributes {
  categoria_id!: number;
  subcategoria_id!: number;
  subcategoria_dsc?: string;

  // SubCategorias belongsTo Categorias via categoria_id
  categorium!: Categorias;
  getCategorium!: Sequelize.BelongsToGetAssociationMixin<Categorias>;
  setCategorium!: Sequelize.BelongsToSetAssociationMixin<Categorias, CategoriasId>;
  createCategorium!: Sequelize.BelongsToCreateAssociationMixin<Categorias>;
  // SubCategorias hasMany ARTICULOS via categoria_id
  ARTICULOs!: ARTICULOS[];
  getARTICULOs!: Sequelize.HasManyGetAssociationsMixin<ARTICULOS>;
  setARTICULOs!: Sequelize.HasManySetAssociationsMixin<ARTICULOS, ARTICULOSId>;
  addARTICULO!: Sequelize.HasManyAddAssociationMixin<ARTICULOS, ARTICULOSId>;
  addARTICULOs!: Sequelize.HasManyAddAssociationsMixin<ARTICULOS, ARTICULOSId>;
  createARTICULO!: Sequelize.HasManyCreateAssociationMixin<ARTICULOS>;
  removeARTICULO!: Sequelize.HasManyRemoveAssociationMixin<ARTICULOS, ARTICULOSId>;
  removeARTICULOs!: Sequelize.HasManyRemoveAssociationsMixin<ARTICULOS, ARTICULOSId>;
  hasARTICULO!: Sequelize.HasManyHasAssociationMixin<ARTICULOS, ARTICULOSId>;
  hasARTICULOs!: Sequelize.HasManyHasAssociationsMixin<ARTICULOS, ARTICULOSId>;
  countARTICULOs!: Sequelize.HasManyCountAssociationsMixin;
  // SubCategorias hasMany ARTICULOS via subcategoria_id
  subcategoria_ARTICULOs!: ARTICULOS[];
  getSubcategoria_ARTICULOs!: Sequelize.HasManyGetAssociationsMixin<ARTICULOS>;
  setSubcategoria_ARTICULOs!: Sequelize.HasManySetAssociationsMixin<ARTICULOS, ARTICULOSId>;
  addSubcategoria_ARTICULO!: Sequelize.HasManyAddAssociationMixin<ARTICULOS, ARTICULOSId>;
  addSubcategoria_ARTICULOs!: Sequelize.HasManyAddAssociationsMixin<ARTICULOS, ARTICULOSId>;
  createSubcategoria_ARTICULO!: Sequelize.HasManyCreateAssociationMixin<ARTICULOS>;
  removeSubcategoria_ARTICULO!: Sequelize.HasManyRemoveAssociationMixin<ARTICULOS, ARTICULOSId>;
  removeSubcategoria_ARTICULOs!: Sequelize.HasManyRemoveAssociationsMixin<ARTICULOS, ARTICULOSId>;
  hasSubcategoria_ARTICULO!: Sequelize.HasManyHasAssociationMixin<ARTICULOS, ARTICULOSId>;
  hasSubcategoria_ARTICULOs!: Sequelize.HasManyHasAssociationsMixin<ARTICULOS, ARTICULOSId>;
  countSubcategoria_ARTICULOs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof SubCategorias {
    return SubCategorias.init({
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Categorias',
        key: 'categoria_id'
      }
    },
    subcategoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subcategoria_dsc: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SubCategorias',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SubCategorias",
        unique: true,
        fields: [
          { name: "categoria_id" },
          { name: "subcategoria_id" },
        ]
      },
    ]
  });
  }
}

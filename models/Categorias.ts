import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { SubCategorias, SubCategoriasId } from './SubCategorias';
import type { Vmensajes, VmensajesId } from './Vmensajes';

export interface CategoriasAttributes {
  categoria_id: number;
  categoria_dsc: string;
}

export type CategoriasPk = "categoria_id";
export type CategoriasId = Categorias[CategoriasPk];
export type CategoriasCreationAttributes = CategoriasAttributes;

export class Categorias extends Model<CategoriasAttributes, CategoriasCreationAttributes> implements CategoriasAttributes {
  categoria_id!: number;
  categoria_dsc!: string;

  // Categorias hasMany SubCategorias via categoria_id
  SubCategoria!: SubCategorias[];
  getSubCategoria!: Sequelize.HasManyGetAssociationsMixin<SubCategorias>;
  setSubCategoria!: Sequelize.HasManySetAssociationsMixin<SubCategorias, SubCategoriasId>;
  addSubCategorium!: Sequelize.HasManyAddAssociationMixin<SubCategorias, SubCategoriasId>;
  addSubCategoria!: Sequelize.HasManyAddAssociationsMixin<SubCategorias, SubCategoriasId>;
  createSubCategorium!: Sequelize.HasManyCreateAssociationMixin<SubCategorias>;
  removeSubCategorium!: Sequelize.HasManyRemoveAssociationMixin<SubCategorias, SubCategoriasId>;
  removeSubCategoria!: Sequelize.HasManyRemoveAssociationsMixin<SubCategorias, SubCategoriasId>;
  hasSubCategorium!: Sequelize.HasManyHasAssociationMixin<SubCategorias, SubCategoriasId>;
  hasSubCategoria!: Sequelize.HasManyHasAssociationsMixin<SubCategorias, SubCategoriasId>;
  countSubCategoria!: Sequelize.HasManyCountAssociationsMixin;
  // Categorias hasMany Vmensajes via categoria_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Categorias {
    return Categorias.init({
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    categoria_dsc: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Categorias',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Categorias",
        unique: true,
        fields: [
          { name: "categoria_id" },
        ]
      },
    ]
  });
  }
}

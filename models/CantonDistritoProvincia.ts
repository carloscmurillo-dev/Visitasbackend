import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Proveedores, ProveedoresId } from './Proveedores';

export interface CantonDistritoProvinciaAttributes {
  CantonID: number;
  Distrito?: string;
  Canton?: string;
  Provincia?: string;
  CodigoPostal?: number;
}

export type CantonDistritoProvinciaPk = "CantonID";
export type CantonDistritoProvinciaId = CantonDistritoProvincia[CantonDistritoProvinciaPk];
export type CantonDistritoProvinciaOptionalAttributes = "CantonID" | "Distrito" | "Canton" | "Provincia" | "CodigoPostal";
export type CantonDistritoProvinciaCreationAttributes = Optional<CantonDistritoProvinciaAttributes, CantonDistritoProvinciaOptionalAttributes>;

export class CantonDistritoProvincia extends Model<CantonDistritoProvinciaAttributes, CantonDistritoProvinciaCreationAttributes> implements CantonDistritoProvinciaAttributes {
  CantonID!: number;
  Distrito?: string;
  Canton?: string;
  Provincia?: string;
  CodigoPostal?: number;

  // CantonDistritoProvincia hasMany Proveedores via canton_id
  Proveedores!: Proveedores[];
  getProveedores!: Sequelize.HasManyGetAssociationsMixin<Proveedores>;
  setProveedores!: Sequelize.HasManySetAssociationsMixin<Proveedores, ProveedoresId>;
  addProveedore!: Sequelize.HasManyAddAssociationMixin<Proveedores, ProveedoresId>;
  addProveedores!: Sequelize.HasManyAddAssociationsMixin<Proveedores, ProveedoresId>;
  createProveedore!: Sequelize.HasManyCreateAssociationMixin<Proveedores>;
  removeProveedore!: Sequelize.HasManyRemoveAssociationMixin<Proveedores, ProveedoresId>;
  removeProveedores!: Sequelize.HasManyRemoveAssociationsMixin<Proveedores, ProveedoresId>;
  hasProveedore!: Sequelize.HasManyHasAssociationMixin<Proveedores, ProveedoresId>;
  hasProveedores!: Sequelize.HasManyHasAssociationsMixin<Proveedores, ProveedoresId>;
  countProveedores!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof CantonDistritoProvincia {
    return CantonDistritoProvincia.init({
    CantonID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Distrito: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Canton: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Provincia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoPostal: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CantonDistritoProvincia',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CantonDistritoProvincia",
        unique: true,
        fields: [
          { name: "CantonID" },
        ]
      },
    ]
  });
  }
}

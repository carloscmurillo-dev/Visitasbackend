import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Proveedores, ProveedoresId } from './Proveedores';

export interface ActividadEconomicaAttributes {
  ActividadEconomicaID: number;
  ActividadEconomicaDsc?: string;
}

export type ActividadEconomicaPk = "ActividadEconomicaID";
export type ActividadEconomicaId = ActividadEconomica[ActividadEconomicaPk];
export type ActividadEconomicaOptionalAttributes = "ActividadEconomicaDsc";
export type ActividadEconomicaCreationAttributes = Optional<ActividadEconomicaAttributes, ActividadEconomicaOptionalAttributes>;

export class ActividadEconomica extends Model<ActividadEconomicaAttributes, ActividadEconomicaCreationAttributes> implements ActividadEconomicaAttributes {
  ActividadEconomicaID!: number;
  ActividadEconomicaDsc?: string;

  // ActividadEconomica hasMany Proveedores via ActividadEconomicaID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ActividadEconomica {
    return ActividadEconomica.init({
    ActividadEconomicaID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ActividadEconomicaDsc: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ActividadEconomica',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ActividadEconomica",
        unique: true,
        fields: [
          { name: "ActividadEconomicaID" },
        ]
      },
    ]
  });
  }
}

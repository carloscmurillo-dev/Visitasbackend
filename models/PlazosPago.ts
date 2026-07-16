import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ARTICULOS, ARTICULOSId } from './ARTICULOS';
import type { Proveedores, ProveedoresId } from './Proveedores';

export interface PlazosPagoAttributes {
  PlazoPagoID: number;
  PlazoPagoDsc?: string;
}

export type PlazosPagoPk = "PlazoPagoID";
export type PlazosPagoId = PlazosPago[PlazosPagoPk];
export type PlazosPagoOptionalAttributes = "PlazoPagoDsc";
export type PlazosPagoCreationAttributes = Optional<PlazosPagoAttributes, PlazosPagoOptionalAttributes>;

export class PlazosPago extends Model<PlazosPagoAttributes, PlazosPagoCreationAttributes> implements PlazosPagoAttributes {
  PlazoPagoID!: number;
  PlazoPagoDsc?: string;

  // PlazosPago hasMany ARTICULOS via PlazoPagoID
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
  // PlazosPago hasMany Proveedores via PlazoPagoID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof PlazosPago {
    return PlazosPago.init({
    PlazoPagoID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PlazoPagoDsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PlazosPago',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PlazosPago",
        unique: true,
        fields: [
          { name: "PlazoPagoID" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ARTICULOS, ARTICULOSId } from './ARTICULOS';

export interface TipoCompraAttributes {
  tipoCompra_id: number;
  tipoCompra_dsc?: string;
}

export type TipoCompraPk = "tipoCompra_id";
export type TipoCompraId = TipoCompra[TipoCompraPk];
export type TipoCompraOptionalAttributes = "tipoCompra_dsc";
export type TipoCompraCreationAttributes = Optional<TipoCompraAttributes, TipoCompraOptionalAttributes>;

export class TipoCompra extends Model<TipoCompraAttributes, TipoCompraCreationAttributes> implements TipoCompraAttributes {
  tipoCompra_id!: number;
  tipoCompra_dsc?: string;

  // TipoCompra hasMany ARTICULOS via tipoCompra_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof TipoCompra {
    return TipoCompra.init({
    tipoCompra_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipoCompra_dsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TipoCompra',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TipoCompra",
        unique: true,
        fields: [
          { name: "tipoCompra_id" },
        ]
      },
    ]
  });
  }
}

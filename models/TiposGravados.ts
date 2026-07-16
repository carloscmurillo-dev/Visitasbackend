import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ARTICULOS, ARTICULOSId } from './ARTICULOS';

export interface TiposGravadosAttributes {
  GravadoID: number;
  GravadoDsc?: string;
}

export type TiposGravadosPk = "GravadoID";
export type TiposGravadosId = TiposGravados[TiposGravadosPk];
export type TiposGravadosOptionalAttributes = "GravadoDsc";
export type TiposGravadosCreationAttributes = Optional<TiposGravadosAttributes, TiposGravadosOptionalAttributes>;

export class TiposGravados extends Model<TiposGravadosAttributes, TiposGravadosCreationAttributes> implements TiposGravadosAttributes {
  GravadoID!: number;
  GravadoDsc?: string;

  // TiposGravados hasMany ARTICULOS via GravadoID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof TiposGravados {
    return TiposGravados.init({
    GravadoID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GravadoDsc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TiposGravados',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TiposGravados",
        unique: true,
        fields: [
          { name: "GravadoID" },
        ]
      },
    ]
  });
  }
}

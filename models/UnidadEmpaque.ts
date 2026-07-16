import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ARTICULOS, ARTICULOSId } from './ARTICULOS';

export interface UnidadEmpaqueAttributes {
  IdUnidadEmpaque: string;
  DescriUnidadEmpaque: string;
}

export type UnidadEmpaquePk = "IdUnidadEmpaque";
export type UnidadEmpaqueId = UnidadEmpaque[UnidadEmpaquePk];
export type UnidadEmpaqueCreationAttributes = UnidadEmpaqueAttributes;

export class UnidadEmpaque extends Model<UnidadEmpaqueAttributes, UnidadEmpaqueCreationAttributes> implements UnidadEmpaqueAttributes {
  IdUnidadEmpaque!: string;
  DescriUnidadEmpaque!: string;

  // UnidadEmpaque hasMany ARTICULOS via IdUnidadEmpaque
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

  static initModel(sequelize: Sequelize.Sequelize): typeof UnidadEmpaque {
    return UnidadEmpaque.init({
    IdUnidadEmpaque: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    DescriUnidadEmpaque: {
      type: DataTypes.STRING(12),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'UnidadEmpaque',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_UnidadEmpaque_1",
        unique: true,
        fields: [
          { name: "IdUnidadEmpaque" },
        ]
      },
    ]
  });
  }
}

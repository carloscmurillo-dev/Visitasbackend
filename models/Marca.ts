import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ARTICULOS, ARTICULOSId } from './ARTICULOS';

export interface MarcaAttributes {
  MarcaID: number;
  MarcaDsc?: string;
}

export type MarcaPk = "MarcaID";
export type MarcaId = Marca[MarcaPk];
export type MarcaOptionalAttributes = "MarcaID" | "MarcaDsc";
export type MarcaCreationAttributes = Optional<MarcaAttributes, MarcaOptionalAttributes>;

export class Marca extends Model<MarcaAttributes, MarcaCreationAttributes> implements MarcaAttributes {
  MarcaID!: number;
  MarcaDsc?: string;

  // Marca hasMany ARTICULOS via MarcaID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Marca {
    return Marca.init({
    MarcaID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MarcaDsc: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Marca',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Marca",
        unique: true,
        fields: [
          { name: "MarcaID" },
        ]
      },
    ]
  });
  }
}

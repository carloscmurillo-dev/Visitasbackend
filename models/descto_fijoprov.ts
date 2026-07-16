import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface descto_fijoprovAttributes {
  proveedor_id?: string;
  categoria_id: number;
  descfijo: number;
}

export type descto_fijoprovOptionalAttributes = "proveedor_id";
export type descto_fijoprovCreationAttributes = Optional<descto_fijoprovAttributes, descto_fijoprovOptionalAttributes>;

export class descto_fijoprov extends Model<descto_fijoprovAttributes, descto_fijoprovCreationAttributes> implements descto_fijoprovAttributes {
  proveedor_id?: string;
  categoria_id!: number;
  descfijo!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof descto_fijoprov {
    return descto_fijoprov.init({
    proveedor_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descfijo: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'descto_fijoprov',
    schema: 'dbo',
    timestamps: false
  });
  }
}

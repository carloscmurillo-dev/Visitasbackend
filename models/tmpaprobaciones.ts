import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tmpaprobacionesAttributes {
  gtin: string;
  UserId: number;
  Status: number;
  RegisterDate: Date;
  NivelAprobacion: number;
}

export type tmpaprobacionesCreationAttributes = tmpaprobacionesAttributes;

export class tmpaprobaciones extends Model<tmpaprobacionesAttributes, tmpaprobacionesCreationAttributes> implements tmpaprobacionesAttributes {
  gtin!: string;
  UserId!: number;
  Status!: number;
  RegisterDate!: Date;
  NivelAprobacion!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tmpaprobaciones {
    return tmpaprobaciones.init({
    gtin: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RegisterDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    NivelAprobacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tmpaprobaciones',
    schema: 'dbo',
    timestamps: false
  });
  }
}

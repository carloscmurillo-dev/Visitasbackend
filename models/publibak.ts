import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface publibakAttributes {
  glnPublicador: string;
  gtin: string;
  nombre: string;
  codigo: string;
  contenido: string;
  gtinImage: any;
}

export type publibakCreationAttributes = publibakAttributes;

export class publibak extends Model<publibakAttributes, publibakCreationAttributes> implements publibakAttributes {
  glnPublicador!: string;
  gtin!: string;
  nombre!: string;
  codigo!: string;
  contenido!: string;
  gtinImage!: any;


  static initModel(sequelize: Sequelize.Sequelize): typeof publibak {
    return publibak.init({
    glnPublicador: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    gtin: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    codigo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    contenido: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    gtinImage: {
      type: DataTypes.BLOB,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'publibak',
    schema: 'dbo',
    timestamps: false
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface PublicadorImagenesAttributes {
  glnPublicador: string;
  gtin: string;
  nombre: string;
  codigo: string;
  contenido: string;
  gtinImage: any;
}

export type PublicadorImagenesPk = "glnPublicador" | "gtin" | "nombre";
export type PublicadorImagenesId = PublicadorImagenes[PublicadorImagenesPk];
export type PublicadorImagenesCreationAttributes = PublicadorImagenesAttributes;

export class PublicadorImagenes extends Model<PublicadorImagenesAttributes, PublicadorImagenesCreationAttributes> implements PublicadorImagenesAttributes {
  glnPublicador!: string;
  gtin!: string;
  nombre!: string;
  codigo!: string;
  contenido!: string;
  gtinImage!: any;


  static initModel(sequelize: Sequelize.Sequelize): typeof PublicadorImagenes {
    return PublicadorImagenes.init({
    glnPublicador: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    gtin: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false,
      primaryKey: true
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
    tableName: 'PublicadorImagenes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PublicadorImagenes_1",
        unique: true,
        fields: [
          { name: "glnPublicador" },
          { name: "gtin" },
          { name: "nombre" },
        ]
      },
    ]
  });
  }
}

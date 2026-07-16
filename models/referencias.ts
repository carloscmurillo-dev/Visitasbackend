import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface referenciasAttributes {
  IdTabla: string;
  IdItem: string;
  Descripcion?: string;
}

export type referenciasPk = "IdTabla" | "IdItem";
export type referenciasId = referencias[referenciasPk];
export type referenciasOptionalAttributes = "Descripcion";
export type referenciasCreationAttributes = Optional<referenciasAttributes, referenciasOptionalAttributes>;

export class referencias extends Model<referenciasAttributes, referenciasCreationAttributes> implements referenciasAttributes {
  IdTabla!: string;
  IdItem!: string;
  Descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof referencias {
    return referencias.init({
    IdTabla: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    IdItem: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'referencias',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__referenc__2243CE7E94D13F4C",
        unique: true,
        fields: [
          { name: "IdTabla" },
          { name: "IdItem" },
        ]
      },
    ]
  });
  }
}

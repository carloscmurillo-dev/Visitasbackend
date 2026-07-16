import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SegmentacionArticuloAttributes {
  idSegmentacion: number;
  dsSegmentacion?: string;
}

export type SegmentacionArticuloPk = "idSegmentacion";
export type SegmentacionArticuloId = SegmentacionArticulo[SegmentacionArticuloPk];
export type SegmentacionArticuloOptionalAttributes = "idSegmentacion" | "dsSegmentacion";
export type SegmentacionArticuloCreationAttributes = Optional<SegmentacionArticuloAttributes, SegmentacionArticuloOptionalAttributes>;

export class SegmentacionArticulo extends Model<SegmentacionArticuloAttributes, SegmentacionArticuloCreationAttributes> implements SegmentacionArticuloAttributes {
  idSegmentacion!: number;
  dsSegmentacion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof SegmentacionArticulo {
    return SegmentacionArticulo.init({
    idSegmentacion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dsSegmentacion: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SegmentacionArticulo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SegmentacionArticulo",
        unique: true,
        fields: [
          { name: "idSegmentacion" },
        ]
      },
    ]
  });
  }
}

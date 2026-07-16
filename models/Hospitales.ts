import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { VisitasHospitales, VisitasHospitalesId } from './VisitasHospitales';

export interface HospitalesAttributes {
  IdHospital: string;
  DscHospital?: string;
}

export type HospitalesPk = "IdHospital";
export type HospitalesId = Hospitales[HospitalesPk];
export type HospitalesOptionalAttributes = "DscHospital";
export type HospitalesCreationAttributes = Optional<HospitalesAttributes, HospitalesOptionalAttributes>;

export class Hospitales extends Model<HospitalesAttributes, HospitalesCreationAttributes> implements HospitalesAttributes {
  IdHospital!: string;
  DscHospital?: string;

  // Hospitales hasMany VisitasHospitales via IdHospital
  VisitasHospitales!: VisitasHospitales[];
  getVisitasHospitales!: Sequelize.HasManyGetAssociationsMixin<VisitasHospitales>;
  setVisitasHospitales!: Sequelize.HasManySetAssociationsMixin<VisitasHospitales, VisitasHospitalesId>;
  addVisitasHospitale!: Sequelize.HasManyAddAssociationMixin<VisitasHospitales, VisitasHospitalesId>;
  addVisitasHospitales!: Sequelize.HasManyAddAssociationsMixin<VisitasHospitales, VisitasHospitalesId>;
  createVisitasHospitale!: Sequelize.HasManyCreateAssociationMixin<VisitasHospitales>;
  removeVisitasHospitale!: Sequelize.HasManyRemoveAssociationMixin<VisitasHospitales, VisitasHospitalesId>;
  removeVisitasHospitales!: Sequelize.HasManyRemoveAssociationsMixin<VisitasHospitales, VisitasHospitalesId>;
  hasVisitasHospitale!: Sequelize.HasManyHasAssociationMixin<VisitasHospitales, VisitasHospitalesId>;
  hasVisitasHospitales!: Sequelize.HasManyHasAssociationsMixin<VisitasHospitales, VisitasHospitalesId>;
  countVisitasHospitales!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Hospitales {
    return Hospitales.init({
    IdHospital: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    },
    DscHospital: {
      type: DataTypes.CHAR(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Hospitales',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Mst_Hospitales",
        unique: true,
        fields: [
          { name: "IdHospital" },
        ]
      },
    ]
  });
  }
}

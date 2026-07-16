import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { VisitasHospitales, VisitasHospitalesId } from './VisitasHospitales';

export interface TiposVisitasAttributes {
  IdTipoVisita: string;
  DscTipoVisita?: string;
}

export type TiposVisitasPk = "IdTipoVisita";
export type TiposVisitasId = TiposVisitas[TiposVisitasPk];
export type TiposVisitasOptionalAttributes = "DscTipoVisita";
export type TiposVisitasCreationAttributes = Optional<TiposVisitasAttributes, TiposVisitasOptionalAttributes>;

export class TiposVisitas extends Model<TiposVisitasAttributes, TiposVisitasCreationAttributes> implements TiposVisitasAttributes {
  IdTipoVisita!: string;
  DscTipoVisita?: string;

  // TiposVisitas hasMany VisitasHospitales via IdTipoVisita
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

  static initModel(sequelize: Sequelize.Sequelize): typeof TiposVisitas {
    return TiposVisitas.init({
    IdTipoVisita: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    DscTipoVisita: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TiposVisitas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TiposVisitas",
        unique: true,
        fields: [
          { name: "IdTipoVisita" },
        ]
      },
    ]
  });
  }
}

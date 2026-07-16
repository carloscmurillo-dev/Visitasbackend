import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { VisitasHospitales, VisitasHospitalesId } from './VisitasHospitales';

export interface TiposEquiposAttributes {
  IdTipoEquipo: string;
  DscTipoEquipo?: string;
}

export type TiposEquiposPk = "IdTipoEquipo";
export type TiposEquiposId = TiposEquipos[TiposEquiposPk];
export type TiposEquiposOptionalAttributes = "DscTipoEquipo";
export type TiposEquiposCreationAttributes = Optional<TiposEquiposAttributes, TiposEquiposOptionalAttributes>;

export class TiposEquipos extends Model<TiposEquiposAttributes, TiposEquiposCreationAttributes> implements TiposEquiposAttributes {
  IdTipoEquipo!: string;
  DscTipoEquipo?: string;

  // TiposEquipos hasMany VisitasHospitales via IdTipoEquipo
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

  static initModel(sequelize: Sequelize.Sequelize): typeof TiposEquipos {
    return TiposEquipos.init({
    IdTipoEquipo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    DscTipoEquipo: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TiposEquipos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TiposEquipos",
        unique: true,
        fields: [
          { name: "IdTipoEquipo" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UserTypesAttributes {
  UserTypeId: string;
  Description: string;
}

export type UserTypesPk = "UserTypeId";
export type UserTypesId = UserTypes[UserTypesPk];
export type UserTypesCreationAttributes = UserTypesAttributes;

export class UserTypes extends Model<UserTypesAttributes, UserTypesCreationAttributes> implements UserTypesAttributes {
  UserTypeId!: string;
  Description!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof UserTypes {
    return UserTypes.init({
    UserTypeId: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'UserTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "UserTypes_PK",
        unique: true,
        fields: [
          { name: "UserTypeId" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UsersAttributes {
  UserId: number;
  Username: string;
  gln: string;
  adc?: number;
  Name?: string;
  passwordHash?: string;
  CategoryId?: number;
  UserType?: string;
}

export type UsersPk = "UserId";
export type UsersId = Users[UsersPk];
export type UsersOptionalAttributes = "UserId" | "adc" | "Name" | "passwordHash" | "CategoryId" | "UserType";
export type UsersCreationAttributes = Optional<UsersAttributes, UsersOptionalAttributes>;

export class Users extends Model<UsersAttributes, UsersCreationAttributes> implements UsersAttributes {
  UserId!: number;
  Username!: string;
  gln!: string;
  adc?: number;
  Name?: string;
  passwordHash?: string;
  CategoryId?: number;
  UserType?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Users {
    return Users.init({
    UserId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Username: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    gln: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    adc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    passwordHash: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UserType: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Users',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Users_PK",
        unique: true,
        fields: [
          { name: "UserId" },
        ]
      },
    ]
  });
  }
}

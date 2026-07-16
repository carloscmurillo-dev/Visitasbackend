import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usersbkAttributes {
  UserId: number;
  Username: string;
  gln: string;
  adc?: number;
  Name?: string;
  passwordHash?: string;
  CategoryId?: number;
  UserType?: string;
}

export type usersbkOptionalAttributes = "UserId" | "adc" | "Name" | "passwordHash" | "CategoryId" | "UserType";
export type usersbkCreationAttributes = Optional<usersbkAttributes, usersbkOptionalAttributes>;

export class usersbk extends Model<usersbkAttributes, usersbkCreationAttributes> implements usersbkAttributes {
  UserId!: number;
  Username!: string;
  gln!: string;
  adc?: number;
  Name?: string;
  passwordHash?: string;
  CategoryId?: number;
  UserType?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof usersbk {
    return usersbk.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
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
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usersbk',
    schema: 'dbo',
    timestamps: false
  });
  }
}

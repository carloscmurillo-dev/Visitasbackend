import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ItemsApiBakAttributes {
  idNivel?: string;
  gln?: string;
  partyName?: string;
  additionalPartyIdentification?: string;
  gtin: string;
  tradeItemUnitDescriptor?: string;
  classificationCategoryCode?: string;
  classificationCategoryDesc?: string;
  startAvailabilityDateTime?: string;
  endAvailabilityDateTime?: string;
  functionalName?: string;
  brandName?: string;
  variantDescription?: string;
  netContent?: number;
  netContentUnitOfMeasure?: string;
  height?: number;
  width?: number;
  depth?: number;
  lengthUnitOfMeasure?: string;
  grossWeight?: number;
  weightUnitOfMeasure?: string;
  packagingTypeDesc?: string;
  tradeItemCountryOfOrigin?: string;
  targetMarketCountryCode?: string;
  tradeItemDescription?: string;
  descriptionShort?: string;
  additionalTradeItemIdentification?: string;
  contactName?: string;
  isPackagingMarkedReturnable?: boolean;
  isPriceOnPack?: boolean;
  isTradeItemADespatchUnit?: boolean;
  packagingTypeCode?: string;
  isTradeItemAnOrderableUnit?: boolean;
  isTradeItemAnInvoiceUnit?: boolean;
  isTradeItemAVariableUnit?: boolean;
  isTradeItemAMinimumUnit?: boolean;
  regulatoryPermitIdentification?: string;
  permitStartDateTime?: string;
  permitEndDateTime?: string;
  invoiceName?: string;
  legibilityStatus?: string;
  gs1TradeItemIdentificationKeyCode?: string;
  nameOfManufacturer?: string;
  glnOfManufacturer?: string;
  isTradeItemAConsumerUnit?: string;
  availabilityType?: string;
  childTradeItem?: string;
  amount?: number;
  priceInformationCurrency?: string;
  cabysCode?: string;
  cabysDesc?: string;
  cambioprecio?: boolean;
}

export type ItemsApiBakOptionalAttributes = "idNivel" | "gln" | "partyName" | "additionalPartyIdentification" | "tradeItemUnitDescriptor" | "classificationCategoryCode" | "classificationCategoryDesc" | "startAvailabilityDateTime" | "endAvailabilityDateTime" | "functionalName" | "brandName" | "variantDescription" | "netContent" | "netContentUnitOfMeasure" | "height" | "width" | "depth" | "lengthUnitOfMeasure" | "grossWeight" | "weightUnitOfMeasure" | "packagingTypeDesc" | "tradeItemCountryOfOrigin" | "targetMarketCountryCode" | "tradeItemDescription" | "descriptionShort" | "additionalTradeItemIdentification" | "contactName" | "isPackagingMarkedReturnable" | "isPriceOnPack" | "isTradeItemADespatchUnit" | "packagingTypeCode" | "isTradeItemAnOrderableUnit" | "isTradeItemAnInvoiceUnit" | "isTradeItemAVariableUnit" | "isTradeItemAMinimumUnit" | "regulatoryPermitIdentification" | "permitStartDateTime" | "permitEndDateTime" | "invoiceName" | "legibilityStatus" | "gs1TradeItemIdentificationKeyCode" | "nameOfManufacturer" | "glnOfManufacturer" | "isTradeItemAConsumerUnit" | "availabilityType" | "childTradeItem" | "amount" | "priceInformationCurrency" | "cabysCode" | "cabysDesc" | "cambioprecio";
export type ItemsApiBakCreationAttributes = Optional<ItemsApiBakAttributes, ItemsApiBakOptionalAttributes>;

export class ItemsApiBak extends Model<ItemsApiBakAttributes, ItemsApiBakCreationAttributes> implements ItemsApiBakAttributes {
  idNivel?: string;
  gln?: string;
  partyName?: string;
  additionalPartyIdentification?: string;
  gtin!: string;
  tradeItemUnitDescriptor?: string;
  classificationCategoryCode?: string;
  classificationCategoryDesc?: string;
  startAvailabilityDateTime?: string;
  endAvailabilityDateTime?: string;
  functionalName?: string;
  brandName?: string;
  variantDescription?: string;
  netContent?: number;
  netContentUnitOfMeasure?: string;
  height?: number;
  width?: number;
  depth?: number;
  lengthUnitOfMeasure?: string;
  grossWeight?: number;
  weightUnitOfMeasure?: string;
  packagingTypeDesc?: string;
  tradeItemCountryOfOrigin?: string;
  targetMarketCountryCode?: string;
  tradeItemDescription?: string;
  descriptionShort?: string;
  additionalTradeItemIdentification?: string;
  contactName?: string;
  isPackagingMarkedReturnable?: boolean;
  isPriceOnPack?: boolean;
  isTradeItemADespatchUnit?: boolean;
  packagingTypeCode?: string;
  isTradeItemAnOrderableUnit?: boolean;
  isTradeItemAnInvoiceUnit?: boolean;
  isTradeItemAVariableUnit?: boolean;
  isTradeItemAMinimumUnit?: boolean;
  regulatoryPermitIdentification?: string;
  permitStartDateTime?: string;
  permitEndDateTime?: string;
  invoiceName?: string;
  legibilityStatus?: string;
  gs1TradeItemIdentificationKeyCode?: string;
  nameOfManufacturer?: string;
  glnOfManufacturer?: string;
  isTradeItemAConsumerUnit?: string;
  availabilityType?: string;
  childTradeItem?: string;
  amount?: number;
  priceInformationCurrency?: string;
  cabysCode?: string;
  cabysDesc?: string;
  cambioprecio?: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof ItemsApiBak {
    return ItemsApiBak.init({
    idNivel: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gln: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    partyName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    additionalPartyIdentification: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gtin: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tradeItemUnitDescriptor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    classificationCategoryCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    classificationCategoryDesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    startAvailabilityDateTime: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    endAvailabilityDateTime: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    functionalName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    brandName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    variantDescription: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    netContent: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    netContentUnitOfMeasure: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    height: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    width: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    depth: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    lengthUnitOfMeasure: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    grossWeight: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    weightUnitOfMeasure: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    packagingTypeDesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tradeItemCountryOfOrigin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    targetMarketCountryCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tradeItemDescription: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    descriptionShort: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    additionalTradeItemIdentification: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contactName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isPackagingMarkedReturnable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isPriceOnPack: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isTradeItemADespatchUnit: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    packagingTypeCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isTradeItemAnOrderableUnit: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isTradeItemAnInvoiceUnit: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isTradeItemAVariableUnit: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isTradeItemAMinimumUnit: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    regulatoryPermitIdentification: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    permitStartDateTime: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    permitEndDateTime: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    invoiceName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    legibilityStatus: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gs1TradeItemIdentificationKeyCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nameOfManufacturer: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    glnOfManufacturer: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isTradeItemAConsumerUnit: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    availabilityType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    childTradeItem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    priceInformationCurrency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cabysCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cabysDesc: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    cambioprecio: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ItemsApiBak',
    schema: 'dbo',
    timestamps: false
  });
  }
}

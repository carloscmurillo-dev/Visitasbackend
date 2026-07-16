import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ItemsAttributes {
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
  CategoryId?: number;
  SubCategoryId?: number;
  TipoRegistro_ID?: number;
  TipoCompraId?: number;
  CompraEnUnidad?: boolean;
  ComercialLongDescription?: string;
  ComercialShortDescription?: string;
  ComercialPubliDescription?: string;
  ComercialFonetDescription?: string;
  ComercialHablaDescription?: string;
  PeriCostUtility?: number;
  SupercomproCostUtility?: number;
  SarettoCostUtility?: number;
  PeriCostSale?: number;
  SupercomproCostSale?: number;
  SarettoCostSale?: number;
  posID?: number;
  PerimercadosPOS?: string;
  SarettoPOS?: string;
  SupercomproPOS?: string;
  PriceFixed?: number;
  gtinItemFile?: string;
  periPrice?: number;
  sarettoPrice?: number;
  superPrice?: number;
  PeriConIVA?: number;
  PeriSinIVA?: number;
  SupercomproSinIVA?: number;
  SupercomproConIVA?: number;
  SarettoSinIVA?: number;
  SarettoConIVA?: number;
  Dun14?: string;
  netContent_logist?: number;
  height_logist?: number;
  width_logist?: number;
  depth_logist?: number;
  grossWeight_logist?: number;
  packagingTypeDesc_logist?: string;
  netContentUnitOfMeasure_logist?: string;
  lengthUnitOfMeasure_logist?: string;
  weightUnitOfMeasure_logist?: string;
  CambioPrecio?: boolean;
  FotoProductoFrente?: any;
  FotoProductoLado?: any;
  FotoProductoArribaBase?: any;
  FotoProducto4?: any;
  FotoProducto5?: any;
  superviquezCostSale?: number;
  superviquezCostUtility?: number;
  superviquezPrice?: number;
  superviquezSinIVA?: number;
  superviquezConIVA?: number;
  SuperViquezPOS?: string;
  SegmentacionArticulo?: number;
  AreaManejo?: number;
  AceptaDevoluciones?: boolean;
  UbicacionCedi?: string;
  ProyMenVtasCol?: number;
  ProyMenVtasUni?: number;
  skuSustitucion?: string;
  quantityOfTradeItemsPerPallet?: number;
  stackingFactor?: number;
  quantityOfTradeItemsPerPalletLayer?: number;
  quantityOfLayersPerPallet?: number;
  RetornoProceso?: string;
}

export type ItemsPk = "gtin";
export type ItemsId = Items[ItemsPk];
export type ItemsOptionalAttributes = "idNivel" | "gln" | "partyName" | "additionalPartyIdentification" | "tradeItemUnitDescriptor" | "classificationCategoryCode" | "classificationCategoryDesc" | "startAvailabilityDateTime" | "endAvailabilityDateTime" | "functionalName" | "brandName" | "variantDescription" | "netContent" | "netContentUnitOfMeasure" | "height" | "width" | "depth" | "lengthUnitOfMeasure" | "grossWeight" | "weightUnitOfMeasure" | "packagingTypeDesc" | "tradeItemCountryOfOrigin" | "targetMarketCountryCode" | "tradeItemDescription" | "descriptionShort" | "additionalTradeItemIdentification" | "contactName" | "isPackagingMarkedReturnable" | "isPriceOnPack" | "isTradeItemADespatchUnit" | "packagingTypeCode" | "isTradeItemAnOrderableUnit" | "isTradeItemAnInvoiceUnit" | "isTradeItemAVariableUnit" | "isTradeItemAMinimumUnit" | "regulatoryPermitIdentification" | "permitStartDateTime" | "permitEndDateTime" | "invoiceName" | "legibilityStatus" | "gs1TradeItemIdentificationKeyCode" | "nameOfManufacturer" | "glnOfManufacturer" | "isTradeItemAConsumerUnit" | "availabilityType" | "childTradeItem" | "amount" | "priceInformationCurrency" | "cabysCode" | "cabysDesc" | "CategoryId" | "SubCategoryId" | "TipoRegistro_ID" | "TipoCompraId" | "CompraEnUnidad" | "ComercialLongDescription" | "ComercialShortDescription" | "ComercialPubliDescription" | "ComercialFonetDescription" | "ComercialHablaDescription" | "PeriCostUtility" | "SupercomproCostUtility" | "SarettoCostUtility" | "PeriCostSale" | "SupercomproCostSale" | "SarettoCostSale" | "posID" | "PerimercadosPOS" | "SarettoPOS" | "SupercomproPOS" | "PriceFixed" | "gtinItemFile" | "periPrice" | "sarettoPrice" | "superPrice" | "PeriConIVA" | "PeriSinIVA" | "SupercomproSinIVA" | "SupercomproConIVA" | "SarettoSinIVA" | "SarettoConIVA" | "Dun14" | "netContent_logist" | "height_logist" | "width_logist" | "depth_logist" | "grossWeight_logist" | "packagingTypeDesc_logist" | "netContentUnitOfMeasure_logist" | "lengthUnitOfMeasure_logist" | "weightUnitOfMeasure_logist" | "CambioPrecio" | "FotoProductoFrente" | "FotoProductoLado" | "FotoProductoArribaBase" | "FotoProducto4" | "FotoProducto5" | "superviquezCostSale" | "superviquezCostUtility" | "superviquezPrice" | "superviquezSinIVA" | "superviquezConIVA" | "SuperViquezPOS" | "SegmentacionArticulo" | "AreaManejo" | "AceptaDevoluciones" | "UbicacionCedi" | "ProyMenVtasCol" | "ProyMenVtasUni" | "skuSustitucion" | "quantityOfTradeItemsPerPallet" | "stackingFactor" | "quantityOfTradeItemsPerPalletLayer" | "quantityOfLayersPerPallet" | "RetornoProceso";
export type ItemsCreationAttributes = Optional<ItemsAttributes, ItemsOptionalAttributes>;

export class Items extends Model<ItemsAttributes, ItemsCreationAttributes> implements ItemsAttributes {
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
  CategoryId?: number;
  SubCategoryId?: number;
  TipoRegistro_ID?: number;
  TipoCompraId?: number;
  CompraEnUnidad?: boolean;
  ComercialLongDescription?: string;
  ComercialShortDescription?: string;
  ComercialPubliDescription?: string;
  ComercialFonetDescription?: string;
  ComercialHablaDescription?: string;
  PeriCostUtility?: number;
  SupercomproCostUtility?: number;
  SarettoCostUtility?: number;
  PeriCostSale?: number;
  SupercomproCostSale?: number;
  SarettoCostSale?: number;
  posID?: number;
  PerimercadosPOS?: string;
  SarettoPOS?: string;
  SupercomproPOS?: string;
  PriceFixed?: number;
  gtinItemFile?: string;
  periPrice?: number;
  sarettoPrice?: number;
  superPrice?: number;
  PeriConIVA?: number;
  PeriSinIVA?: number;
  SupercomproSinIVA?: number;
  SupercomproConIVA?: number;
  SarettoSinIVA?: number;
  SarettoConIVA?: number;
  Dun14?: string;
  netContent_logist?: number;
  height_logist?: number;
  width_logist?: number;
  depth_logist?: number;
  grossWeight_logist?: number;
  packagingTypeDesc_logist?: string;
  netContentUnitOfMeasure_logist?: string;
  lengthUnitOfMeasure_logist?: string;
  weightUnitOfMeasure_logist?: string;
  CambioPrecio?: boolean;
  FotoProductoFrente?: any;
  FotoProductoLado?: any;
  FotoProductoArribaBase?: any;
  FotoProducto4?: any;
  FotoProducto5?: any;
  superviquezCostSale?: number;
  superviquezCostUtility?: number;
  superviquezPrice?: number;
  superviquezSinIVA?: number;
  superviquezConIVA?: number;
  SuperViquezPOS?: string;
  SegmentacionArticulo?: number;
  AreaManejo?: number;
  AceptaDevoluciones?: boolean;
  UbicacionCedi?: string;
  ProyMenVtasCol?: number;
  ProyMenVtasUni?: number;
  skuSustitucion?: string;
  quantityOfTradeItemsPerPallet?: number;
  stackingFactor?: number;
  quantityOfTradeItemsPerPalletLayer?: number;
  quantityOfLayersPerPallet?: number;
  RetornoProceso?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Items {
    return Items.init({
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
      allowNull: false,
      primaryKey: true
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
      type: DataTypes.STRING(50),
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
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TipoRegistro_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TipoCompraId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CompraEnUnidad: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ComercialLongDescription: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ComercialShortDescription: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ComercialPubliDescription: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ComercialFonetDescription: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ComercialHablaDescription: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PeriCostUtility: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    SupercomproCostUtility: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    SarettoCostUtility: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    PeriCostSale: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    SupercomproCostSale: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    SarettoCostSale: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    posID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PerimercadosPOS: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    SarettoPOS: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    SupercomproPOS: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    PriceFixed: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    gtinItemFile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    periPrice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    sarettoPrice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    superPrice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    PeriConIVA: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    PeriSinIVA: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    SupercomproSinIVA: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    SupercomproConIVA: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    SarettoSinIVA: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    SarettoConIVA: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    Dun14: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    netContent_logist: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    height_logist: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    width_logist: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    depth_logist: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    grossWeight_logist: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    packagingTypeDesc_logist: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    netContentUnitOfMeasure_logist: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lengthUnitOfMeasure_logist: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    weightUnitOfMeasure_logist: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CambioPrecio: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    FotoProductoFrente: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    FotoProductoLado: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    FotoProductoArribaBase: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    FotoProducto4: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    FotoProducto5: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    superviquezCostSale: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    superviquezCostUtility: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    superviquezPrice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    superviquezSinIVA: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    superviquezConIVA: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    SuperViquezPOS: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    SegmentacionArticulo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AreaManejo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AceptaDevoluciones: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    UbicacionCedi: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ProyMenVtasCol: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    ProyMenVtasUni: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    skuSustitucion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    quantityOfTradeItemsPerPallet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stackingFactor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quantityOfTradeItemsPerPalletLayer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quantityOfLayersPerPallet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RetornoProceso: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Items',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Items_PK",
        unique: true,
        fields: [
          { name: "gtin" },
        ]
      },
    ]
  });
  }
}

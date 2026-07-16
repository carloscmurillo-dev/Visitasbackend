

import { QueryTypes, Sequelize, Op, json } from "sequelize";
const nodemailer = require('nodemailer');
import { AprobacionesAttributes, initModels, itemDiscountsAttributes, ItemsApiAttributes,ItemsAttributes, pacientesAttributes, VmensajesAttributes } from "../models/init-models";
import { PublicadorImagenesAttributes,  ARTICULOSAttributes, ProveedoresAttributes, ProveeSolicitantesAttributes,VisitasHospitalesAttributes} from "../models/init-models";
import { v2 as cloudinary } from "cloudinary";
//import sequelize from "sequelize/types/sequelize";
require('dotenv').config({ path: '../../variables.env' });




exports.addItemStatus = async (item: AprobacionesAttributes) => {
 const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        
            const transporter = nodemailer.createTransport({
                host: "smtp.office365.com",
                port: 25,
                secure: false, // upgrade later with STARTTLS
                auth: {
                    user: "contacto@conexiongessa.com",
                    pass: "1Tsupp0rt01%",
                },
            });

            // const UsuarioSend = await models.Users.findOne({ where: { UserId: item.UserId } });

            let UserNameEnviar = ''

          if (item.NivelAprobacion == 0)  
          {
          const UsuarioSend: any[]  = await sequelize.query(`select u.username,u.UserId,u.Name from Users u inner join Users u2 on u.UserId = u2.adc where u2.UserId = ${item.UserId};`, { type: QueryTypes.SELECT });
          UserNameEnviar = UsuarioSend[0].username;
        }
        else
        if (item.NivelAprobacion == 1)
        {
            const UsuarioSend: any[] = await sequelize.query(` select top 1 * from Users where UserType = 4;`, { type: QueryTypes.SELECT });
            UserNameEnviar = UsuarioSend[0].userName;
          }

          if (item.NivelAprobacion == 2)
          {
              const UsuarioSend: any[] = await sequelize.query(` select top 1 * from Users where UserType = 5;`, { type: QueryTypes.SELECT });
              UserNameEnviar = UsuarioSend[0].userName;
            }



          console.log('Usuario id',item.UserId)
          console.log('Username',UserNameEnviar)
          

          if (UserNameEnviar)

         {

            const itemResult = await models.Items.findOne({ where: { gtin: item.gtin } });
          

            if (itemResult) {

                console.log('---------------------------------datos',itemResult.partyName)

            transporter.sendMail({
                from: '"conexiongessa" <contacto@conexiongessa.com>', // sender address
                to: UserNameEnviar, // list of receivers
                subject: `El producto ${itemResult.descriptionShort} esta en su casillero de Conexion para su revision y-o aprobacion `, // Subject line
                text: `Estimado Usuario :\nHay productos en su casillero de Conexion Gessa del proveedor ${itemResult.partyName} y el producto ${itemResult.gtin} (${itemResult.descriptionShort}) \n\n\nFavor no responder a este correo!`, // html body
            }).then((info: any) => {
                console.log({ info });
            }).catch(console.error);

        }
            
        }

           const itemResult = await models.Items.findOne({ where: { gtin: item.gtin } });
           

           const Descuentos: any[] = await sequelize.query(`select * from ItemDiscountsVta where gtin = '${item.gtin}';`, { type: QueryTypes.SELECT });
           console.log('LOS DESCUENTOS SON:',Descuentos[0].gtin)

           //const TipoCompra: string = await sequelize.query(`select tipoCompra_dsc from TipoCompra where tipoCompra_id = ${itemResult?.TipoCompraId};`,{ type: QueryTypes.SELECT });

           const tipoCompraResult = await models.TipoCompra.findOne({ where: { tipoCompra_id: itemResult?.TipoCompraId}});
          
            console.log('Atributos:---------------------------------------------->',item)
           // console.log('EL RESULTADO:------------------------------------------->' ,itemResult)
            if (itemResult) {
                const userProvider = await models.Users.findOne({ where: { gln: itemResult.gln } });
               
                //console.log('Usuario------------------------------------------------->',userProvider)
               
                if (item.NivelAprobacion == 0)
                {
                    transporter.sendMail({
                        from: '"conexiongessa" <contacto@conexiongessa.com>', // sender address
                        to: userProvider?.Username, // list of receivers
                        subject: `El producto ${itemResult.descriptionShort} ha sido cambiado de estado a Aprobado considerado dentro de la ventana de revisión `, // Subject line
                        text: `Estimado proveedor:\nGracias por tomarnos en cuenta, le informamos que su solicitud de ingreso del UPC ${itemResult.descriptionShort} está siendo evaluada en su respectiva ventana.` + `\n\n\nFavor no responder a este correo!`, // html body
                    }).then((info: any) => {
                        console.log({ info });
                    }).catch(console.error);
                }
                else if (item.NivelAprobacion == 1)
                {
                    let texto : string
                    if (item.Status == -1)
                      { texto = `Estimado proveedor gracias por tomarnos en cuenta,\nLe informamos que su solicitud de ingreso del UPC ${itemResult.gtin}, ${itemResult.descriptionShort} no ha sido aprobada` + `\n\n\nFavor no responder a este correo!` 
                      transporter.sendMail({
                        from: '"conexiongessa" <contacto@conexiongessa.com>', // sender address
                        to: userProvider?.Username, // list of receivers
                        subject: `El producto ${itemResult.descriptionShort} ha sido cambiado de estado a ${item.Status == -1 ? "rechazado" : "Aprobado"}`, // Subject line
                      
                        text: texto + `\n\n\nFavor no responder a este correo!`
    
                        
                    }).then((info: any) => {
                        console.log({ info });
                    }).catch(console.error);
                    console.log('TEXTO----------------->',texto)
    
                }

                }
                else if (item.NivelAprobacion == 2)
                 {
                    let texto : string
                    if (item.Status == -1)
                      { texto = `Estimado proveedor gracias por tomarnos en cuenta!,\nLe informamos que su solicitud de ingreso del UPC ${itemResult.gtin}, ${itemResult.descriptionShort} no ha sido aprobada` + `\n\n\nFavor no responder a este correo!` }
                      else
                      {

                        texto = `Estimado proveedor gracias por tomarnos en cuenta.\nLe informamos que su solicitud de ingreso del UPC ${itemResult.gtin}, ${itemResult.descriptionShort} ha sido aprobada por Administrador de Categoria y por la Gerencia Comercial.\n\nCon las siguientes condiciones comerciales: \n\nCOSTO: ${itemResult.amount}  \n\nDESCUENTOS:\n\nCONFIDENCIAL ${Descuentos[0].DC}, \nINTRODUCCION ${Descuentos[0].DEI}, \nFIJO ${Descuentos[0].DFI}, \nPROMOCIONAL ${Descuentos[0].PAE}, \nDDC ${Descuentos[0].DDC}, \nNO DEVOLUCION ${Descuentos[0].DND}, \nIMPUESTO ${Descuentos[0].IMP} \n\nLas Tiendas incluidas son las siguientes:\n\nPeri\n${itemResult.PerimercadosPOS}\n\nSuper Compro:\n${itemResult.SupercomproPOS}\n\nSaretto:\n${itemResult.SarettoPOS}\n\nSuper Viquez:\n${itemResult.SuperViquezPOS}\n\nTipo Compra establecido: ${tipoCompraResult?.tipoCompra_dsc}    ` + `\n\n\nFavor no responder a este correo!`
                      }
                      
                transporter.sendMail({
                    from: '"conexiongessa" <contacto@conexiongessa.com>', // sender address
                    to: userProvider?.Username, // list of receivers
                    subject: `El producto ${itemResult.descriptionShort} ha sido cambiado de estado a ${item.Status == -1 ? "rechazado" : "Aprobado"}`, // Subject line
                  
                    text: texto + `\n\n\nFavor no responder a este correo!`

                    
                }).then((info: any) => {
                    console.log({ info });
                }).catch(console.error);
                console.log('TEXTO----------------->',texto)
            }

            
            }
        
        const result = await models.Aprobaciones.create(item);
        return null;

    } catch (error) {
        console.error('Error grabando producto:', error);
    }

}

exports.createDiscount = async (item: itemDiscountsAttributes) => {
    const sequelize = require('./database');

    //return null 
    try {
        const models = initModels(sequelize);
        console.log('descuentos',item.value)
        const exists = await models.itemDiscounts.findOne({ where: { gtin: item.gtin, type: item.type, ruleCode: item.ruleCode, ruleType: item.ruleType } });
        if (exists) {
            const itemUp = await models.itemDiscounts.update(item, { where: { gtin: item.gtin, type: item.type, ruleCode: item.ruleCode, ruleType: item.ruleType } });
            return itemUp;
        }
        else {
            const itemUp = await models.itemDiscounts.create(item);
            return itemUp;
        }
    } catch (error) {
        console.error('error grabando descuentos:', error);
    }

}

exports.createItem = async (item: ItemsApiAttributes) => {
     const sequelize = require('./database');
    console.log('En DB:',item)
    try {
        const models = initModels(sequelize);
        const exists = await models.ItemsApi.findOne({ where: { gtin: item.gtin } });
        if (exists) {
            const items = await models.ItemsApi.update(item, { where: { gtin: item.gtin } });
            return items;
        }
        else {
            const items = await models.ItemsApi.create(item);
            return items;
        }

    } catch (error) {
        console.error('Error grabando Item Api:', error);
    }
}
exports.addCategory = async (category: string) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const maxCategoryId = await models.Categorias.max('categoria_id');
        const Categories = await models.Categorias.create({ categoria_dsc: category, categoria_id: Number(maxCategoryId) + 1 });
        return Categories;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}
exports.NewUser = async (Username: string, Gln: string, Name: string, Password: string, selectedUserType: string, ADC?: string) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const user = await models.Users.findOne({where: { Username: Username} }) ;
        if(user){
            console.log('SI ENCONTRO REGISTRO>>>>>',user.UserId)
            const models = initModels(sequelize);


                if (Password == '') { 

                    const Usuarios = await models.Users.update(
                        {
                            Username: Username, 
                            gln: Gln, 
                            Name: Name,
                       
                            adc: ADC, 
                            UserType: selectedUserType
    
                        }, {where: {UserId:user.UserId}});
                        return Usuarios;
                }

                else {
                const Usuarios = await models.Users.update(
                    {
                        Username: Username, 
                        gln: Gln, 
                        Name: Name,
                        passwordHash: Password, 
                        adc: ADC, 
                        UserType: selectedUserType

                    }, {where: {UserId:user.UserId}});
                    return Usuarios;
                }
                

            
        }
        else
        {
        const models = initModels(sequelize);
        const Usuarios = await models.Users.create({
            Username: Username, gln: Gln, Name: Name,
            passwordHash: Password, adc: ADC, UserType: selectedUserType
        });
        
        return Usuarios;
    }
    }

    catch (error) {
        console.warn(error);
    }
}
exports.getUserByUsername = async (username: string) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const User = await models.Users.findOne({ where: { Username: username } });
        return User;
    } catch (error) {
        console.error('Usuario o contraseña incorrecta! ', error);
    }
}


exports.getRuleCodeType = async (id: string) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const RuleCodeType = await models.RuleCodeTypes.findOne({ where: { Id: id } });
        return RuleCodeType;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}
exports.getUsers = async () => {
     const sequelize = require('./database');
    try {
        const Users = await sequelize.query(`SELECT proveedor_id, proveedor_dsc, p.gln, u.UserId, u.Username, u.Name, ut.Description UserTypeDescription, ut.UserTypeId 
        FROM dbo.Proveedores p 
        inner join dbo.Users u on u.gln = p.gln
        inner join dbo.UserTypes ut on ut.UserTypeId = u.UserType;`, { type: QueryTypes.SELECT });
        //console.log('Usuarios:',Users)
        return Users;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getUser = async (UserId: number) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        //const User = await models.Users.findOne({ where: { UserId: UserId } });

        const User = await sequelize.query(`SELECT proveedor_id, proveedor_dsc, p.gln, u.UserId, u.Username, u.Name, ut.Description UserTypeDescription, ut.UserTypeId ,u.adc
        ,ADCname = (select Username from Users where UserId = u.adc),descuentoFijoProv
        FROM dbo.Proveedores p 
        inner join dbo.Users u on u.gln = p.gln
        inner join dbo.UserTypes ut on ut.UserTypeId = u.UserType  where u.UserId = '${UserId}';`, { type: QueryTypes.SELECT });



        
        console.log('USUARIO:>>>>>>>>>>>>>>>>>>>>>>',User)
        return User[0];
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.deleteUser = async (userId: number) => {
     const sequelize = require('./database');
    try {
        console.log('id usuario a borrar:------------------------------------>>>>>>>>>>>>>>>',userId)
        const models = initModels(sequelize);
        const Count = await models.Users.destroy({ where: { UserId: userId } });

       
        
        
        return Count
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}



exports.addSubCategory = async (category: string, categoryId: number) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const maxCategoryId = await models.SubCategorias.max('subcategoria_id');
        const SubCategories = await models.SubCategorias.create({ subcategoria_dsc: category, subcategoria_id: Number(maxCategoryId) + 1, categoria_id: categoryId });
        return SubCategories;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}
exports.getProviders = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const Providers = await models.Proveedores.findAll({ where: { gln: { [Op.not]: '' } } });
        return Providers;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}
exports.getCategories = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const Categories = await models.Categorias.findAll();
       // console.log(Categories)
        return Categories;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}
exports.getBuyerTypes = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const TipoCompra = await models.TipoCompra.findAll();
        return TipoCompra;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}
exports.getPOS = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const PuntosVenta = await models.PuntosVenta.findAll();
        return PuntosVenta;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}
exports.getSubCategories = async (categoryId: number) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const SubCategories = await models.SubCategorias.findAll({ where: { categoria_id: categoryId } });
        return SubCategories;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}
exports.getitemDiscounts = async (gtin: string) => {
     const sequelize = require('./database');
    try {
        const response = await sequelize.query(`select * from dbo.itemDiscountsView where gtin = '${gtin}';`, { type: QueryTypes.SELECT });
        return response;

    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getDescFijo = async (proveedor_id: string,categoria_id:number) => {
     const sequelize = require('./database');
    try {
        
 
        
        const response = await sequelize.query(` select proveedor_id,categoria_id, MAX(descfijo) as descfijo from dbo.descto_fijoprov where proveedor_id = (select top 1 proveedor_id from Proveedores where gln = '${proveedor_id}') and categoria_id = (select top 1 IDCATEGORIA from HOMOL_CATINTEGRA where CATEGORIA_ID = ${categoria_id}) group by proveedor_id,categoria_id`, { type: QueryTypes.SELECT });
     
        
        return response;

    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}


exports.getFotos = async (gln: string,gtin: string,CambioPrecios:boolean) => {
     const sequelize = require('./database');
    console.log(gln,gtin,CambioPrecios)
    
    let dbItems = CambioPrecios==true ? 'dbo.itemsApl' : 'dbo.items'

    console.log('la tabla itemsss',dbItems)
    try {
        const response = await sequelize.query(`select  FotoProductoFrente,FotoProductoLado,FotoProductoArribaBase,FotoProducto4,FotoProducto5  
                                                        from ${dbItems} where glnOfManufacturer = '${gln}' and gtin = '${gtin}';`, { type: QueryTypes.SELECT });
       
       console.log('FOTOS FOTOS',response)
        return response;

    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}




exports.getItems = async (user: any) => {
     const sequelize = require('./database');
    try {

        let itemsList: any[];
        switch (user.UserType) {
            case "1":
                itemsList = await sequelize.query(`SELECT 
                i.idNivel ,i.gln ,i.partyName ,i.additionalPartyIdentification ,i.gtin ,i.tradeItemUnitDescriptor ,i.classificationCategoryCode ,i.classificationCategoryDesc 
      ,i.startAvailabilityDateTime ,i.endAvailabilityDateTime ,i.functionalName ,i.brandName,i.variantDescription,i.netContent ,i.netContentUnitOfMeasure ,i.height 
      ,i.width,i.depth,i.lengthUnitOfMeasure,i.grossWeight,i.weightUnitOfMeasure ,i.packagingTypeDesc ,i.tradeItemCountryOfOrigin,i.targetMarketCountryCode 
      ,i.tradeItemDescription ,i.descriptionShort ,i.additionalTradeItemIdentification,i.contactName ,i.isPackagingMarkedReturnable  ,i.isPriceOnPack ,i.isTradeItemADespatchUnit 
      ,i.packagingTypeCode ,i.isTradeItemAnOrderableUnit,i.isTradeItemAnInvoiceUnit ,i.isTradeItemAVariableUnit ,i.isTradeItemAMinimumUnit,i.regulatoryPermitIdentification 
      ,i.permitStartDateTime,i.permitEndDateTime ,i.invoiceName,i.legibilityStatus,i.gs1TradeItemIdentificationKeyCode ,i.nameOfManufacturer ,i.glnOfManufacturer ,i.isTradeItemAConsumerUnit 
      ,i.availabilityType ,i.childtradeitem,i.amount,i.priceInformationCurrency,i.cabysCode,i.cabysDesc ,i.CategoryId ,i.SubCategoryId,i.TipoRegistro_ID  ,i.TipoCompraId 
      ,i.CompraEnUnidad ,i.ComercialLongDescription ,i.ComercialShortDescription,i.ComercialPubliDescription,i.ComercialFonetDescription,i.ComercialHablaDescription,i.PeriCostUtility ,i.SupercomproCostUtility ,i.SarettoCostUtility 
      ,i.PeriCostSale ,i.SupercomproCostSale,i.SarettoCostSale ,i.posID ,i.PerimercadosPOS,i.SarettoPOS ,i.SupercomproPOS ,i.PriceFixed ,i.gtinItemFile ,i.periPrice ,i.sarettoPrice 
      ,i.superPrice ,i.PeriConIVA,i.PeriSinIVA ,i.SupercomproSinIVA,i.SupercomproConIVA ,i.SarettoSinIVA ,i.SarettoConIVA ,i.Dun14 ,i.netContent_logist,i.height_logist ,i.width_logist 
      ,i.depth_logist ,i.grossWeight_logist ,i.packagingTypeDesc_logist  ,i.netContentUnitOfMeasure_logist ,i.lengthUnitOfMeasure_logist  ,i.weightUnitOfMeasure_logist 
      ,i.CambioPrecio ,i.superviquezCostSale ,i.superviquezCostUtility ,i.superviquezPrice ,i.superviquezSinIVA ,i.superviquezConIVA ,i.SuperViquezPOS
      ,SegmentacionArticulo,AreaManejo,UbicacionCedi, ProyMenVtasCol,ProyMenVtasUni,skuSustitucion,RetornoProceso,isnull(gtinitemfile,'') as gtinitemfile
                
                , sc.subcategoria_dsc, c.categoria_dsc, tc.tipoCompra_dsc, pv.puntoVenta_dsc,  a.Status ,quantityOfTradeItemsPerPallet,stackingFactor,quantityOfTradeItemsPerPalletLayer,quantityOfLayersPerPallet  
                FROM dbo.items i left join dbo.Categorias c  on c.categoria_id = i.CategoryId left join PuntosVenta pv on pv.puntoVenta_id = i.posID 
                left join dbo.SubCategorias sc on sc.categoria_id = i.CategoryId  and sc.subcategoria_id =i.SubCategoryId 
                inner join dbo.Users u on u.adc = ${user.userId}  
                inner join dbo.RelacionAsistenteCategorias rac on rac.EmailAsistente = u.Username  and rac.categoria_id = i.CategoryId
                left join TipoCompra tc on tc.tipoCompra_id = i.TipoCompraId inner join Aprobaciones a on a.gtin = i.gtin and a.NivelAprobacion = 0 and a.Status = 1
                left join Aprobaciones a2 on a2.gtin = i.gtin and a2.NivelAprobacion > 0
                where a2.gtin is null  or RetornoProceso='1';`, { type: QueryTypes.SELECT });
                break;
            case "2":
                itemsList = await sequelize.query(`SELECT 
                i.idNivel ,i.gln ,i.partyName ,i.additionalPartyIdentification ,i.gtin ,i.tradeItemUnitDescriptor ,i.classificationCategoryCode ,i.classificationCategoryDesc 
      ,i.startAvailabilityDateTime ,i.endAvailabilityDateTime ,i.functionalName ,i.brandName,i.variantDescription,i.netContent ,i.netContentUnitOfMeasure ,i.height 
      ,i.width,i.depth,i.lengthUnitOfMeasure,i.grossWeight,i.weightUnitOfMeasure ,i.packagingTypeDesc ,i.tradeItemCountryOfOrigin,i.targetMarketCountryCode 
      ,i.tradeItemDescription ,i.descriptionShort ,i.additionalTradeItemIdentification,i.contactName ,i.isPackagingMarkedReturnable  ,i.isPriceOnPack ,i.isTradeItemADespatchUnit 
      ,i.packagingTypeCode ,i.isTradeItemAnOrderableUnit,i.isTradeItemAnInvoiceUnit ,i.isTradeItemAVariableUnit ,i.isTradeItemAMinimumUnit,i.regulatoryPermitIdentification 
      ,i.permitStartDateTime,i.permitEndDateTime ,i.invoiceName,i.legibilityStatus,i.gs1TradeItemIdentificationKeyCode ,i.nameOfManufacturer ,i.glnOfManufacturer ,i.isTradeItemAConsumerUnit 
      ,i.availabilityType ,i.childtradeitem,i.amount,i.priceInformationCurrency,i.cabysCode,i.cabysDesc ,i.CategoryId ,i.SubCategoryId,i.TipoRegistro_ID  ,i.TipoCompraId 
      ,i.CompraEnUnidad ,i.ComercialLongDescription ,i.ComercialShortDescription,i.ComercialPubliDescription,i.ComercialFonetDescription,i.ComercialHablaDescription,i.PeriCostUtility ,i.SupercomproCostUtility ,i.SarettoCostUtility 
      ,i.PeriCostSale ,i.SupercomproCostSale,i.SarettoCostSale ,i.posID ,i.PerimercadosPOS,i.SarettoPOS ,i.SupercomproPOS ,i.PriceFixed ,i.gtinItemFile ,i.periPrice ,i.sarettoPrice 
      ,i.superPrice ,i.PeriConIVA,i.PeriSinIVA ,i.SupercomproSinIVA,i.SupercomproConIVA ,i.SarettoSinIVA ,i.SarettoConIVA ,i.Dun14 ,i.netContent_logist,i.height_logist ,i.width_logist 
      ,i.depth_logist ,i.grossWeight_logist ,i.packagingTypeDesc_logist  ,i.netContentUnitOfMeasure_logist ,i.lengthUnitOfMeasure_logist  ,i.weightUnitOfMeasure_logist 
      ,i.CambioPrecio ,i.superviquezCostSale ,i.superviquezCostUtility ,i.superviquezPrice ,i.superviquezSinIVA ,i.superviquezConIVA ,i.SuperViquezPOS 
      ,SegmentacionArticulo,AreaManejo,UbicacionCedi, ProyMenVtasCol,ProyMenVtasUni,skuSustitucion,RetornoProceso,isnull(gtinitemfile,' ') as gtinitemfile
                , sc.subcategoria_dsc, c.categoria_dsc, tc.tipoCompra_dsc, pv.puntoVenta_dsc,  a.Status  ,quantityOfTradeItemsPerPallet,stackingFactor,quantityOfTradeItemsPerPalletLayer,quantityOfLayersPerPallet 
            FROM dbo.items i left join dbo.Categorias c  on c.categoria_id = i.CategoryId left join PuntosVenta pv on pv.puntoVenta_id = i.posID 
            left join dbo.SubCategorias sc on sc.categoria_id = i.CategoryId  and sc.subcategoria_id =i.SubCategoryId 
            inner join dbo.RelacionAsistenteCategorias rac on rac.EmailAsistente = '${user.userName}' and rac.categoria_id = i.CategoryId
            left join TipoCompra tc on tc.tipoCompra_id = i.TipoCompraId left join Aprobaciones a on a.gtin = i.gtin and a.NivelAprobacion = 0
            left join Aprobaciones a2 on a2.gtin = i.gtin and a2.NivelAprobacion > 0
            where (a2.gtin is null and a.gtin is null  and (gtinItemFile is null or gtinItemFile = '') or RetornoProceso='2')  ;`, { type: QueryTypes.SELECT });
                break;
            case "3":
                itemsList = await sequelize.query(`SELECT 
                i.idNivel ,i.gln ,i.partyName ,i.additionalPartyIdentification ,i.gtin ,i.tradeItemUnitDescriptor ,i.classificationCategoryCode ,i.classificationCategoryDesc 
      ,i.startAvailabilityDateTime ,i.endAvailabilityDateTime ,i.functionalName ,i.brandName,i.variantDescription,i.netContent ,i.netContentUnitOfMeasure ,i.height 
      ,i.width,i.depth,i.lengthUnitOfMeasure,i.grossWeight,i.weightUnitOfMeasure ,i.packagingTypeDesc ,i.tradeItemCountryOfOrigin,i.targetMarketCountryCode 
      ,i.tradeItemDescription ,i.descriptionShort ,i.additionalTradeItemIdentification,i.contactName ,i.isPackagingMarkedReturnable  ,i.isPriceOnPack ,i.isTradeItemADespatchUnit 
      ,i.packagingTypeCode ,i.isTradeItemAnOrderableUnit,i.isTradeItemAnInvoiceUnit ,i.isTradeItemAVariableUnit ,i.isTradeItemAMinimumUnit,i.regulatoryPermitIdentification 
      ,i.permitStartDateTime,i.permitEndDateTime ,i.invoiceName,i.legibilityStatus,i.gs1TradeItemIdentificationKeyCode ,i.nameOfManufacturer ,i.glnOfManufacturer ,i.isTradeItemAConsumerUnit 
      ,i.availabilityType ,i.childtradeitem,i.amount,i.priceInformationCurrency,i.cabysCode,i.cabysDesc ,i.CategoryId ,i.SubCategoryId,i.TipoRegistro_ID  ,i.TipoCompraId 
      ,i.CompraEnUnidad ,i.ComercialLongDescription ,i.ComercialShortDescription,i.ComercialPubliDescription,i.ComercialFonetDescription,i.ComercialHablaDescription,i.PeriCostUtility ,i.SupercomproCostUtility ,i.SarettoCostUtility 
      ,i.PeriCostSale ,i.SupercomproCostSale,i.SarettoCostSale ,i.posID ,i.PerimercadosPOS,i.SarettoPOS ,i.SupercomproPOS ,i.PriceFixed ,i.gtinItemFile ,i.periPrice ,i.sarettoPrice 
      ,i.superPrice ,i.PeriConIVA,i.PeriSinIVA ,i.SupercomproSinIVA,i.SupercomproConIVA ,i.SarettoSinIVA ,i.SarettoConIVA ,i.Dun14 ,i.netContent_logist,i.height_logist ,i.width_logist 
      ,i.depth_logist ,i.grossWeight_logist ,i.packagingTypeDesc_logist  ,i.netContentUnitOfMeasure_logist ,i.lengthUnitOfMeasure_logist  ,i.weightUnitOfMeasure_logist 
      ,i.CambioPrecio ,i.superviquezCostSale ,i.superviquezCostUtility ,i.superviquezPrice ,i.superviquezSinIVA ,i.superviquezConIVA ,i.SuperViquezPOS 
      ,SegmentacionArticulo,AreaManejo,UbicacionCedi, ProyMenVtasCol,ProyMenVtasUni,skuSustitucion,RetornoProceso,isnull(gtinitemfile,' ') as gtinitemfile
                , sc.subcategoria_dsc, c.categoria_dsc, tc.tipoCompra_dsc, pv.puntoVenta_dsc,  a.Status   ,quantityOfTradeItemsPerPallet,stackingFactor,quantityOfTradeItemsPerPalletLayer,quantityOfLayersPerPallet
                FROM dbo.items i left join dbo.Categorias c  on c.categoria_id = i.CategoryId left join PuntosVenta pv on pv.puntoVenta_id = i.posID left join dbo.SubCategorias sc on sc.categoria_id = i.CategoryId  
                and sc.subcategoria_id =i.SubCategoryId left join TipoCompra tc on tc.tipoCompra_id = i.TipoCompraId left join Aprobaciones a on a.gtin = i.gtin and a.NivelAprobacion = 0 
                where ( glnOfManufacturer = '${user.gln}' and SubCategoryId is null and CategoryId is null) or RetornoProceso='3'`, { type: QueryTypes.SELECT });
                break;
            case "4":
                itemsList = await sequelize.query(`SELECT 
                i.idNivel ,i.gln ,i.partyName ,i.additionalPartyIdentification ,i.gtin ,i.tradeItemUnitDescriptor ,i.classificationCategoryCode ,i.classificationCategoryDesc 
      ,i.startAvailabilityDateTime ,i.endAvailabilityDateTime ,i.functionalName ,i.brandName,i.variantDescription,i.netContent ,i.netContentUnitOfMeasure ,i.height 
      ,i.width,i.depth,i.lengthUnitOfMeasure,i.grossWeight,i.weightUnitOfMeasure ,i.packagingTypeDesc ,i.tradeItemCountryOfOrigin,i.targetMarketCountryCode 
      ,i.tradeItemDescription ,i.descriptionShort ,i.additionalTradeItemIdentification,i.contactName ,i.isPackagingMarkedReturnable  ,i.isPriceOnPack ,i.isTradeItemADespatchUnit 
      ,i.packagingTypeCode ,i.isTradeItemAnOrderableUnit,i.isTradeItemAnInvoiceUnit ,i.isTradeItemAVariableUnit ,i.isTradeItemAMinimumUnit,i.regulatoryPermitIdentification 
      ,i.permitStartDateTime,i.permitEndDateTime ,i.invoiceName,i.legibilityStatus,i.gs1TradeItemIdentificationKeyCode ,i.nameOfManufacturer ,i.glnOfManufacturer ,i.isTradeItemAConsumerUnit 
      ,i.availabilityType ,i.childtradeitem,i.amount,i.priceInformationCurrency,i.cabysCode,i.cabysDesc ,i.CategoryId ,i.SubCategoryId,i.TipoRegistro_ID  ,i.TipoCompraId 
      ,i.CompraEnUnidad ,i.ComercialLongDescription ,i.ComercialShortDescription,i.ComercialPubliDescription,i.ComercialFonetDescription,i.ComercialHablaDescription,i.PeriCostUtility ,i.SupercomproCostUtility ,i.SarettoCostUtility 
      ,i.PeriCostSale ,i.SupercomproCostSale,i.SarettoCostSale ,i.posID ,i.PerimercadosPOS,i.SarettoPOS ,i.SupercomproPOS ,i.PriceFixed ,i.gtinItemFile ,i.periPrice ,i.sarettoPrice 
      ,i.superPrice ,i.PeriConIVA,i.PeriSinIVA ,i.SupercomproSinIVA,i.SupercomproConIVA ,i.SarettoSinIVA ,i.SarettoConIVA ,i.Dun14 ,i.netContent_logist,i.height_logist ,i.width_logist 
      ,i.depth_logist ,i.grossWeight_logist ,i.packagingTypeDesc_logist  ,i.netContentUnitOfMeasure_logist ,i.lengthUnitOfMeasure_logist  ,i.weightUnitOfMeasure_logist 
      ,i.CambioPrecio ,i.superviquezCostSale ,i.superviquezCostUtility ,i.superviquezPrice ,i.superviquezSinIVA ,i.superviquezConIVA ,i.SuperViquezPOS 
      ,SegmentacionArticulo,AreaManejo,UbicacionCedi, ProyMenVtasCol,ProyMenVtasUni,skuSustitucion,RetornoProceso,isnull(gtinitemfile,' ') as gtinitemfile
                , sc.subcategoria_dsc, c.categoria_dsc, tc.tipoCompra_dsc, pv.puntoVenta_dsc,  a.Status   ,quantityOfTradeItemsPerPallet,stackingFactor,quantityOfTradeItemsPerPalletLayer,quantityOfLayersPerPallet
                FROM dbo.items i left join dbo.Categorias c  on c.categoria_id = i.CategoryId left join PuntosVenta pv on pv.puntoVenta_id = i.posID 
                left join dbo.SubCategorias sc on sc.categoria_id = i.CategoryId  and sc.subcategoria_id =i.SubCategoryId   
                inner join TipoCompra tc on tc.tipoCompra_id = i.TipoCompraId inner join Aprobaciones a on a.gtin = i.gtin and a.NivelAprobacion > 0 and a.Status = 1
                left join Aprobaciones a2 on a2.gtin = i.gtin and a2.NivelAprobacion > 1
                where a2.gtin is null;
                `, { type: QueryTypes.SELECT });
                break;
            case "5":
                itemsList = await sequelize.query(`SELECT 
                i.idNivel ,i.gln ,i.partyName ,i.additionalPartyIdentification ,i.gtin ,i.tradeItemUnitDescriptor ,i.classificationCategoryCode ,i.classificationCategoryDesc 
      ,i.startAvailabilityDateTime ,i.endAvailabilityDateTime ,i.functionalName ,i.brandName,i.variantDescription,i.netContent ,i.netContentUnitOfMeasure ,i.height 
      ,i.width,i.depth,i.lengthUnitOfMeasure,i.grossWeight,i.weightUnitOfMeasure ,i.packagingTypeDesc ,i.tradeItemCountryOfOrigin,i.targetMarketCountryCode 
      ,i.tradeItemDescription ,i.descriptionShort ,i.additionalTradeItemIdentification,i.contactName ,i.isPackagingMarkedReturnable  ,i.isPriceOnPack ,i.isTradeItemADespatchUnit 
      ,i.packagingTypeCode ,i.isTradeItemAnOrderableUnit,i.isTradeItemAnInvoiceUnit ,i.isTradeItemAVariableUnit ,i.isTradeItemAMinimumUnit,i.regulatoryPermitIdentification 
      ,i.permitStartDateTime,i.permitEndDateTime ,i.invoiceName,i.legibilityStatus,i.gs1TradeItemIdentificationKeyCode ,i.nameOfManufacturer ,i.glnOfManufacturer ,i.isTradeItemAConsumerUnit 
      ,i.availabilityType ,i.childtradeitem,i.amount,i.priceInformationCurrency,i.cabysCode,i.cabysDesc ,i.CategoryId ,i.SubCategoryId,i.TipoRegistro_ID  ,i.TipoCompraId 
      ,i.CompraEnUnidad ,i.ComercialLongDescription ,i.ComercialShortDescription,i.ComercialPubliDescription,i.ComercialFonetDescription,i.ComercialHablaDescription,i.PeriCostUtility ,i.SupercomproCostUtility ,i.SarettoCostUtility 
      ,i.PeriCostSale ,i.SupercomproCostSale,i.SarettoCostSale ,i.posID ,i.PerimercadosPOS,i.SarettoPOS ,i.SupercomproPOS ,i.PriceFixed ,i.gtinItemFile ,i.periPrice ,i.sarettoPrice 
      ,i.superPrice ,i.PeriConIVA,i.PeriSinIVA ,i.SupercomproSinIVA,i.SupercomproConIVA ,i.SarettoSinIVA ,i.SarettoConIVA ,i.Dun14 ,i.netContent_logist,i.height_logist ,i.width_logist 
      ,i.depth_logist ,i.grossWeight_logist ,i.packagingTypeDesc_logist  ,i.netContentUnitOfMeasure_logist ,i.lengthUnitOfMeasure_logist  ,i.weightUnitOfMeasure_logist 
      ,i.CambioPrecio ,i.superviquezCostSale ,i.superviquezCostUtility ,i.superviquezPrice ,i.superviquezSinIVA ,i.superviquezConIVA ,i.SuperViquezPOS 
      ,SegmentacionArticulo,AreaManejo,UbicacionCedi, ProyMenVtasCol,ProyMenVtasUni,skuSustitucion,RetornoProceso,isnull(gtinitemfile,' ') as gtinitemfile
                , sc.subcategoria_dsc, c.categoria_dsc, tc.tipoCompra_dsc, pv.puntoVenta_dsc,  a.Status   ,quantityOfTradeItemsPerPallet,stackingFactor,quantityOfTradeItemsPerPalletLayer,quantityOfLayersPerPallet
                FROM dbo.items i left join dbo.Categorias c  on c.categoria_id = i.CategoryId left join PuntosVenta pv on pv.puntoVenta_id = i.posID 
                left join dbo.SubCategorias sc on sc.categoria_id = i.CategoryId  and sc.subcategoria_id =i.SubCategoryId   
                inner join TipoCompra tc on tc.tipoCompra_id = i.TipoCompraId inner join Aprobaciones a on a.gtin = i.gtin and a.NivelAprobacion > 1 and a.Status = 1
                left join Aprobaciones a2 on a2.gtin = i.gtin and a2.NivelAprobacion > 2
                where a2.gtin is null and  (i.gtinItemFile is null or i.gtinItemFile = '' or i.CambioPrecio = 1);
                `, { type: QueryTypes.SELECT });

               // where a2.gtin is null and  (i.gtinItemFile is null or i.CambioPrecio = 1);
               //inner join TipoCompra tc on tc.tipoCompra_id = i.TipoCompraId inner join Aprobaciones a on a.gtin = i.gtin and a.NivelAprobacion > 1 and a.Status = 1
               
                break;
            default:
                itemsList = await sequelize.query(`SELECT 
                i.idNivel ,i.gln ,i.partyName ,i.additionalPartyIdentification ,i.gtin ,i.tradeItemUnitDescriptor ,i.classificationCategoryCode ,i.classificationCategoryDesc 
      ,i.startAvailabilityDateTime ,i.endAvailabilityDateTime ,i.functionalName ,i.brandName,i.variantDescription,i.netContent ,i.netContentUnitOfMeasure ,i.height 
      ,i.width,i.depth,i.lengthUnitOfMeasure,i.grossWeight,i.weightUnitOfMeasure ,i.packagingTypeDesc ,i.tradeItemCountryOfOrigin,i.targetMarketCountryCode 
      ,i.tradeItemDescription ,i.descriptionShort ,i.additionalTradeItemIdentification,i.contactName ,i.isPackagingMarkedReturnable  ,i.isPriceOnPack ,i.isTradeItemADespatchUnit 
      ,i.packagingTypeCode ,i.isTradeItemAnOrderableUnit,i.isTradeItemAnInvoiceUnit ,i.isTradeItemAVariableUnit ,i.isTradeItemAMinimumUnit,i.regulatoryPermitIdentification 
      ,i.permitStartDateTime,i.permitEndDateTime ,i.invoiceName,i.legibilityStatus,i.gs1TradeItemIdentificationKeyCode ,i.nameOfManufacturer ,i.glnOfManufacturer ,i.isTradeItemAConsumerUnit 
      ,i.availabilityType ,i.childtradeitem,i.amount,i.priceInformationCurrency,i.cabysCode,i.cabysDesc ,i.CategoryId ,i.SubCategoryId,i.TipoRegistro_ID  ,i.TipoCompraId 
      ,i.CompraEnUnidad ,i.ComercialLongDescription ,i.ComercialShortDescription,i.ComercialPubliDescription,i.ComercialFonetDescription,i.ComercialHablaDescription,i.PeriCostUtility ,i.SupercomproCostUtility ,i.SarettoCostUtility 
      ,i.PeriCostSale ,i.SupercomproCostSale,i.SarettoCostSale ,i.posID ,i.PerimercadosPOS,i.SarettoPOS ,i.SupercomproPOS ,i.PriceFixed ,i.gtinItemFile ,i.periPrice ,i.sarettoPrice 
      ,i.superPrice ,i.PeriConIVA,i.PeriSinIVA ,i.SupercomproSinIVA,i.SupercomproConIVA ,i.SarettoSinIVA ,i.SarettoConIVA ,i.Dun14 ,i.netContent_logist,i.height_logist ,i.width_logist 
      ,i.depth_logist ,i.grossWeight_logist ,i.packagingTypeDesc_logist  ,i.netContentUnitOfMeasure_logist ,i.lengthUnitOfMeasure_logist  ,i.weightUnitOfMeasure_logist 
      ,i.CambioPrecio ,i.superviquezCostSale ,i.superviquezCostUtility ,i.superviquezPrice ,i.superviquezSinIVA ,i.superviquezConIVA ,i.SuperViquezPOS
      ,SegmentacionArticulo ,AreaManejo,UbicacionCedi, ProyMenVtasCol,ProyMenVtasUni,skuSustitucion,RetornoProceso,isnull(gtinitemfile,' ') as gtinitemfile
                , sc.subcategoria_dsc, c.categoria_dsc, tc.tipoCompra_dsc, pv.puntoVenta_dsc,  a.Status   ,quantityOfTradeItemsPerPallet,stackingFactor,quantityOfTradeItemsPerPalletLayer,quantityOfLayersPerPallet
                FROM dbo.items i left join dbo.Categorias c  on c.categoria_id = i.CategoryId left join PuntosVenta pv on pv.puntoVenta_id = i.posID 
                left join dbo.SubCategorias sc on sc.categoria_id = i.CategoryId  and sc.subcategoria_id =i.SubCategoryId 
                left join TipoCompra tc on tc.tipoCompra_id = i.TipoCompraId left join Aprobaciones a on a.gtin = i.gtin and a.NivelAprobacion = 0 
                where glnOfManufacturer = '${user.gln}' and SubCategoryId is null and CategoryId is null`, { type: QueryTypes.SELECT });
                break;
        }



        return itemsList;
    } catch (error) {
        console.error('Error recuperando items:', error);
    }
}

exports.getItemsCambPrecios = async (gln: string) => {
     const sequelize = require('./database');
    try {
//console.log('CAMBIO PRECIOS',user.userName)
        let itemsList: any[];
     
        
               
                
                itemsList = await sequelize.query(`
                SELECT i.gtinItemFile,i.*, sc.subcategoria_dsc, c.categoria_dsc, tc.tipoCompra_dsc, pv.puntoVenta_dsc 
                FROM dbo.itemsApl i left join dbo.Categorias c  on c.categoria_id = i.CategoryId left join PuntosVenta pv on pv.puntoVenta_id = i.posID 
                left join dbo.SubCategorias sc on sc.categoria_id = i.CategoryId  and sc.subcategoria_id =i.SubCategoryId   
                inner join TipoCompra tc on tc.tipoCompra_id = i.TipoCompraId 
				where glnOfManufacturer = '${gln}' and i.gtinItemFile is not null and i.CambioPrecio = 0`, { type: QueryTypes.SELECT });
        



        return itemsList;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}







exports.updateCode = async (gtin: string, GtinItemFile: string) => {
     const sequelize = require('./database');
 try 
 {
        
        console.log('EL ITEM CODE ES',GtinItemFile)
        let UsuarioId = 99991 // user.UserId
        const transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 25,
            secure: false, // upgrade later with STARTTLS
            auth: {
                user: "contacto@conexiongessa.com",
                pass: "1Tsupp0rt01%",
            }, });




        const models = initModels(sequelize);
        const itemResulta = await models.Items.findOne({ where: { gtin: gtin } });
        if(itemResulta)
        {

                


            const items = await models.Items.update(
            { gtinItemFile: GtinItemFile,CambioPrecio:false },    // se supone cambia gtinitemfile a esa literal para filtrar para integra
            { where: { gtin: gtin } });

            if(items)
            {

            

                const itemResult = await models.Items.findOne({ where: { gtin: gtin } });
                // NO MODIFICA LA APROBACION PORQUE ESO LO HACE EL PROCESO DE CARGA DE ITEMFILE CODE

           
         
                try 
                
                {

                    const statusUpdate: AprobacionesAttributes = {
                    gtin:gtin, Status:1, UserId: UsuarioId, NivelAprobacion: 3 };
    
                    console.log('APROBACIONES',statusUpdate)
    
                    const result = await models.Aprobaciones.create(statusUpdate); // 
                
                        // AGREGA REGISTRO EN ITEMSAPL    

                    const [resultitem, created]  = await models.ItemsApl.findOrCreate({ 
                        where: { gtin: gtin },
                        defaults: {
                        idNivel:itemResult!.idNivel
                        ,gln:	itemResult!.gln
                        ,partyName:	itemResult!.partyName
                        ,additionalPartyIdentification: itemResult!.additionalPartyIdentification
                        ,gtin:itemResult!.gtin
                        ,tradeItemUnitDescriptor: itemResult!.tradeItemUnitDescriptor
                        ,classificationCategoryCode: itemResult!.classificationCategoryCode
                        ,classificationCategoryDesc:itemResult!.classificationCategoryDesc
                        ,startAvailabilityDateTime: itemResult!.startAvailabilityDateTime
                        ,endAvailabilityDateTime:itemResult!.endAvailabilityDateTime
                        ,functionalName:itemResult!.functionalName
                        ,brandName:	itemResult!.brandName
                        ,variantDescription:	itemResult!.variantDescription
                        ,netContent:itemResult!.netContent
                        ,netContentUnitOfMeasure: itemResult!.netContentUnitOfMeasure
                        ,height: itemResult!.height
                        ,width: itemResult!.width
                        ,depth:	itemResult!.depth
                        ,lengthUnitOfMeasure: itemResult!.lengthUnitOfMeasure
                        ,grossWeight: itemResult!.grossWeight
                        ,weightUnitOfMeasure:	      itemResult!.weightUnitOfMeasure
                        ,packagingTypeDesc:	      itemResult!.packagingTypeDesc
                        ,tradeItemCountryOfOrigin:	      itemResult!.tradeItemCountryOfOrigin
                        ,targetMarketCountryCode:	      itemResult!.targetMarketCountryCode
                        ,tradeItemDescription:	      itemResult!.tradeItemDescription
                        ,descriptionShort:	      itemResult!.descriptionShort
                        ,additionalTradeItemIdentification:	      itemResult!.additionalTradeItemIdentification
                        ,contactName:	      itemResult!.contactName
                        ,isPackagingMarkedReturnable:	      itemResult!.isPackagingMarkedReturnable
                        ,isPriceOnPack:	      itemResult!.isPriceOnPack
                        ,isTradeItemADespatchUnit:	      itemResult!.isTradeItemADespatchUnit
                        ,packagingTypeCode:	      itemResult!.packagingTypeCode
                        ,isTradeItemAnOrderableUnit:	      itemResult!.isTradeItemAnOrderableUnit
                        ,isTradeItemAnInvoiceUnit:	      itemResult!.isTradeItemAnInvoiceUnit
                        ,isTradeItemAVariableUnit:	      itemResult!.isTradeItemAVariableUnit
                        ,isTradeItemAMinimumUnit:	      itemResult!.isTradeItemAMinimumUnit
                        ,regulatoryPermitIdentification:	      itemResult!.regulatoryPermitIdentification
                        ,permitStartDateTime:	      itemResult!.permitStartDateTime
                        ,permitEndDateTime:	      itemResult!.permitEndDateTime
                        ,invoiceName:	      itemResult!.invoiceName
                        ,legibilityStatus:	      itemResult!.legibilityStatus
                        ,gs1TradeItemIdentificationKeyCode:	      itemResult!.gs1TradeItemIdentificationKeyCode
                        ,nameOfManufacturer:	      itemResult!.nameOfManufacturer
                        ,glnOfManufacturer:	      itemResult!.glnOfManufacturer
                        ,isTradeItemAConsumerUnit:	      itemResult!.isTradeItemAConsumerUnit
                        ,availabilityType:	      itemResult!.availabilityType
                        ,childTradeItem: itemResult!.childTradeItem
                        ,amount:	      itemResult!.amount
                        ,priceInformationCurrency:	      itemResult!.priceInformationCurrency
                        ,cabysCode:	      itemResult!.cabysCode
                        ,cabysDesc:	      itemResult!.cabysDesc
                        ,CategoryId:	      itemResult!.CategoryId
                        ,SubCategoryId:	      itemResult!.SubCategoryId
                        ,TipoRegistro_ID:	      itemResult!.TipoRegistro_ID
                        ,TipoCompraId:	      itemResult!.TipoCompraId
                        ,CompraEnUnidad:	      itemResult!.CompraEnUnidad
                        ,ComercialLongDescription:	      itemResult!.ComercialLongDescription
                        ,ComercialShortDescription:	      itemResult!.ComercialShortDescription
                        ,ComercialPubliDescription:	      itemResult!.ComercialPubliDescription
                        ,ComercialFonetDescription:	      itemResult!.ComercialFonetDescription
                        ,ComercialHablaDescription:	      itemResult!.ComercialHablaDescription
                        ,PeriCostUtility:	      itemResult!.PeriCostUtility
                        ,SupercomproCostUtility:	      itemResult!.SupercomproCostUtility
                        ,SarettoCostUtility:	      itemResult!.SarettoCostUtility
                        ,PeriCostSale:	      itemResult!.PeriCostSale
                        ,SupercomproCostSale:	      itemResult!.SupercomproCostSale
                        ,SarettoCostSale:	      itemResult!.SarettoCostSale
                        ,posID:	      itemResult!.posID
                        ,PerimercadosPOS:	      itemResult!.PerimercadosPOS
                        ,SarettoPOS:	      itemResult!.SarettoPOS
                        ,SupercomproPOS:	      itemResult!.SupercomproPOS
                        ,PriceFixed:	      itemResult!.PriceFixed
                        ,gtinItemFile:	      itemResult!.gtinItemFile
                        ,periPrice:	      itemResult!.periPrice
                        ,sarettoPrice:	      itemResult!.sarettoPrice
                        ,superPrice:	      itemResult!.superPrice
                        ,PeriConIVA:	      itemResult!.PeriConIVA
                        ,PeriSinIVA:	      itemResult!.PeriSinIVA
                        ,SupercomproSinIVA:	      itemResult!.SupercomproSinIVA
                        ,SupercomproConIVA:	      itemResult!.SupercomproConIVA
                        ,SarettoSinIVA:	      itemResult!.SarettoSinIVA
                        ,SarettoConIVA:	      itemResult!.SarettoConIVA
                        ,Dun14:	      itemResult!.Dun14
                        ,netContent_logist:	      itemResult!.netContent_logist
                        ,height_logist:	      itemResult!.height_logist
                        ,width_logist:	      itemResult!.width_logist
                        ,depth_logist:	      itemResult!.depth_logist
                        ,grossWeight_logist:	      itemResult!.grossWeight_logist
                        ,packagingTypeDesc_logist:	      itemResult!.packagingTypeDesc_logist
                        ,netContentUnitOfMeasure_logist:	      itemResult!.netContentUnitOfMeasure_logist
                        ,lengthUnitOfMeasure_logist:	      itemResult!.lengthUnitOfMeasure_logist
                        ,weightUnitOfMeasure_logist:	      itemResult!.weightUnitOfMeasure_logist
                        ,CambioPrecio:	      itemResult!.CambioPrecio
                        ,FotoProductoFrente:	      itemResult!.FotoProductoFrente
                        ,FotoProductoLado:	      itemResult!.FotoProductoLado
                        ,FotoProductoArribaBase:	      itemResult!.FotoProductoArribaBase
                        ,FotoProducto4:	      itemResult!.FotoProducto4
                        ,FotoProducto5:	      itemResult!.FotoProducto5
                        ,superviquezCostSale:	      itemResult!.superviquezCostSale
                        ,superviquezCostUtility:	      itemResult!.superviquezCostUtility
                        ,superviquezPrice:	      itemResult!.superviquezPrice
                        ,superviquezSinIVA:	      itemResult!.superviquezSinIVA
                        ,superviquezConIVA:	      itemResult!.superviquezConIVA
                        ,SuperViquezPOS:	      itemResult!.SuperViquezPOS
                        ,SegmentacionArticulo:	      itemResult!.SegmentacionArticulo
                        ,AreaManejo:	      itemResult!.AreaManejo
                        ,AceptaDevoluciones:	      itemResult!.AceptaDevoluciones
                        ,UbicacionCedi:	      itemResult!.UbicacionCedi
                        ,ProyMenVtasCol:	      itemResult!.ProyMenVtasCol
                        ,ProyMenVtasUni:	      itemResult!.ProyMenVtasUni
                        ,skuSustitucion:	      itemResult!.skuSustitucion 
                        ,quantityOfTradeItemsPerPallet: itemResult!.quantityOfTradeItemsPerPallet
                        ,stackingFactor: itemResult!.stackingFactor
                        ,quantityOfTradeItemsPerPalletLayer: itemResult!.quantityOfTradeItemsPerPalletLayer
                        ,quantityOfLayersPerPallet: itemResult!.quantityOfLayersPerPallet }
                        }  );

                        }
                        catch (error) {
                            console.log('ERROR DE APROBACION',error)
                            return 'ERROR EN APROBACION'
                        }



                    // BORRA REGISTRO DE PRODUCTO DE ITEMS UNA VEZ PASADO A ITEMSAPL

                    const itemDelete = await models.Items.destroy({ where: { gtin: gtin } });

                    //console.log(itemDelete)

                    try {

                      const statusUpdate: AprobacionesAttributes = {
                             gtin:gtin, Status:1, UserId: UsuarioId, NivelAprobacion: 4 };

                            console.log('APROBACIONES',statusUpdate)

                       const result = await models.Aprobaciones.create(statusUpdate);
                    }
                    catch (error) {
                        console.log('ERROR DE APROBACION',error)
                    }

                      //  este block comentado se usara cuand efectivamente se apruebe con codigo interno


                    const userProvider = await models.Users.findOne({ where: { gln: itemResulta.gln } });
                    transporter.sendMail({
                        from: '"conexiongessa" <contacto@conexiongessa.com>', // sender address
                        to: userProvider?.Username, // list of receivers
                        subject: 'Registro de producto con código interno',
                        text: `Estimado proveedor un gusto saludarle.\nLe informamos que su producto UPC ${gtin}  ha sido registrado con el código interno ${GtinItemFile}. Su primera orden de compra o pedido directo en tienda se generará en un plazo de siete días.` + `\n\n\nFavor no responder a este correo!`, // html body
                    }).then((info: any) => {
                        console.log({ info });
                    }).catch(console.error);



                       //        fin de codigo comengado a reutilizar....

        }

    }
        }
            catch (error) {
            console.log('ERROR ACTUALIZANDO ITEMFILE:',error)
            return 'ERROR EN ITEMFILE'
        }
       
}
    
   





exports.CargarProducto = async (gtin: string, GtinItemFile: string) => {
     const sequelize = require('./database');
    try 
    
    {
        let UsuarioId = 99999
        const transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 25,
            secure: false, // upgrade later with STARTTLS
            auth: {
                user: "contacto@conexiongessa.com",
                pass: "1Tsupp0rt01%",
            },
        });
        const models = initModels(sequelize);

        // ESTA PARTE ACTUALIZA EL PRODUCTO CON EL CODIGO, PONE CAMBIOPRECIO FALSE PARA PODER SER UTILIZADO

      




        // ESTA PARTE ENVIA CORREO Y MUEVE REGISTRO DE ITEMS A ITEMSAPL


        const itemResult = await models.Items.findOne({ where: { gtin: gtin } });
        if(itemResult)
        {

            console.log('RESULTADO;',itemResult.gtin)


            const items = await models.Items.update(
                { gtinItemFile: GtinItemFile,CambioPrecio:false },
                { where: { gtin: gtin } });
    
            if(items){
    
    
                                                    // AQUI AGREGA REGISTRO DE APROBACION EN NIVEL 4 = CARGADO POR INTEGRA 
                                                    // DE MOMENTO COMENTADO PARA PRUEBAS UNITARIAS
    
             const statusUpdate: AprobacionesAttributes = {
                gtin:gtin, Status:1, UserId: UsuarioId,
                NivelAprobacion: 4
                                                
                                                        };
                                                    
    
            const result = await models.Aprobaciones.create(statusUpdate); 
    
                                                        // DESCOMENTAR HASTA AQUI
    
                                                    /*      sequelize.query(`Insert into aprobacioneshistorico select * from aprobaciones where gtin ='${gtin}';`, 
                                                            { type: QueryTypes.SELECT }).then(function(results){
                                                                    if(results){
    
                                                                        sequelize.query(`delete from aprobaciones where gtin ='${gtin}';`, 
                                                                        { type: QueryTypes.SELECT })
    
                                                                    }
    
                                                            });
                                                    */
    
    
                                                    
                    }
    



         

            const userProvider = await models.Users.findOne({ where: { gln: itemResult.gln } });
            UsuarioId = userProvider!.UserId
            transporter.sendMail({
                from: '"conexiongessa" <contacto@conexiongessa.com>', // sender address
                to: userProvider?.Username, // list of receivers
                subject: 'Integra registro itemfile',
                text: `Estimado proveedor un gusto saludarle.\nLe informamos que su producto UPC ${gtin}  ha sido registrado con el código interno ${GtinItemFile}. Su primera orden de compra o pedido directo en tienda se generará en un plazo de siete días.` + `\n\n\nFavor no responder a este correo!`, // html body
            }).then((info: any) => {
                console.log({ info });
            }).catch(console.error);


            // AGREGA REGISTRO EN ITEMSAPL    

            const [resultitem, created]  = await models.ItemsApl.findOrCreate({ 
                where: { gtin: gtin },
                defaults: {
                idNivel:itemResult.idNivel
                ,gln:	itemResult.gln
                ,partyName:	itemResult.partyName
                ,additionalPartyIdentification: itemResult.additionalPartyIdentification
                ,gtin:itemResult.gtin
                ,tradeItemUnitDescriptor: itemResult.tradeItemUnitDescriptor
                ,classificationCategoryCode: itemResult.classificationCategoryCode
                ,classificationCategoryDesc:itemResult.classificationCategoryDesc
                ,startAvailabilityDateTime: itemResult.startAvailabilityDateTime
                ,endAvailabilityDateTime:itemResult.endAvailabilityDateTime
                ,functionalName:itemResult.functionalName
                ,brandName:	itemResult.brandName
                ,variantDescription:	itemResult.variantDescription
                ,netContent:itemResult.netContent
                ,netContentUnitOfMeasure: itemResult.netContentUnitOfMeasure
                ,height: itemResult.height
                ,width: itemResult.width
                ,depth:	itemResult.depth
                ,lengthUnitOfMeasure: itemResult.lengthUnitOfMeasure
                ,grossWeight: itemResult.grossWeight
                ,weightUnitOfMeasure:	      itemResult.weightUnitOfMeasure
                ,packagingTypeDesc:	      itemResult.packagingTypeDesc
                ,tradeItemCountryOfOrigin:	      itemResult.tradeItemCountryOfOrigin
                ,targetMarketCountryCode:	      itemResult.targetMarketCountryCode
                ,tradeItemDescription:	      itemResult.tradeItemDescription
                ,descriptionShort:	      itemResult.descriptionShort
                ,additionalTradeItemIdentification:	      itemResult.additionalTradeItemIdentification
                ,contactName:	      itemResult.contactName
                ,isPackagingMarkedReturnable:	      itemResult.isPackagingMarkedReturnable
                ,isPriceOnPack:	      itemResult.isPriceOnPack
                ,isTradeItemADespatchUnit:	      itemResult.isTradeItemADespatchUnit
                ,packagingTypeCode:	      itemResult.packagingTypeCode
                ,isTradeItemAnOrderableUnit:	      itemResult.isTradeItemAnOrderableUnit
                ,isTradeItemAnInvoiceUnit:	      itemResult.isTradeItemAnInvoiceUnit
                ,isTradeItemAVariableUnit:	      itemResult.isTradeItemAVariableUnit
                ,isTradeItemAMinimumUnit:	      itemResult.isTradeItemAMinimumUnit
                ,regulatoryPermitIdentification:	      itemResult.regulatoryPermitIdentification
                ,permitStartDateTime:	      itemResult.permitStartDateTime
                ,permitEndDateTime:	      itemResult.permitEndDateTime
                ,invoiceName:	      itemResult.invoiceName
                ,legibilityStatus:	      itemResult.legibilityStatus
                ,gs1TradeItemIdentificationKeyCode:	      itemResult.gs1TradeItemIdentificationKeyCode
                ,nameOfManufacturer:	      itemResult.nameOfManufacturer
                ,glnOfManufacturer:	      itemResult.glnOfManufacturer
                ,isTradeItemAConsumerUnit:	      itemResult.isTradeItemAConsumerUnit
                ,availabilityType:	      itemResult.availabilityType
                ,childTradeItem: itemResult.childTradeItem
                ,amount:	      itemResult.amount
                ,priceInformationCurrency:	      itemResult.priceInformationCurrency
                ,cabysCode:	      itemResult.cabysCode
                ,cabysDesc:	      itemResult.cabysDesc
                ,CategoryId:	      itemResult.CategoryId
                ,SubCategoryId:	      itemResult.SubCategoryId
                ,TipoRegistro_ID:	      itemResult.TipoRegistro_ID
                ,TipoCompraId:	      itemResult.TipoCompraId
                ,CompraEnUnidad:	      itemResult.CompraEnUnidad
                ,ComercialLongDescription:	      itemResult.ComercialLongDescription
                ,ComercialShortDescription:	      itemResult.ComercialShortDescription
                ,ComercialPubliDescription:	      itemResult.ComercialPubliDescription
                ,ComercialFonetDescription:	      itemResult.ComercialFonetDescription
                ,ComercialHablaDescription:	      itemResult.ComercialHablaDescription
                ,PeriCostUtility:	      itemResult.PeriCostUtility
                ,SupercomproCostUtility:	      itemResult.SupercomproCostUtility
                ,SarettoCostUtility:	      itemResult.SarettoCostUtility
                ,PeriCostSale:	      itemResult.PeriCostSale
                ,SupercomproCostSale:	      itemResult.SupercomproCostSale
                ,SarettoCostSale:	      itemResult.SarettoCostSale
                ,posID:	      itemResult.posID
                ,PerimercadosPOS:	      itemResult.PerimercadosPOS
                ,SarettoPOS:	      itemResult.SarettoPOS
                ,SupercomproPOS:	      itemResult.SupercomproPOS
                ,PriceFixed:	      itemResult.PriceFixed
                ,gtinItemFile:	      itemResult.gtinItemFile
                ,periPrice:	      itemResult.periPrice
                ,sarettoPrice:	      itemResult.sarettoPrice
                ,superPrice:	      itemResult.superPrice
                ,PeriConIVA:	      itemResult.PeriConIVA
                ,PeriSinIVA:	      itemResult.PeriSinIVA
                ,SupercomproSinIVA:	      itemResult.SupercomproSinIVA
                ,SupercomproConIVA:	      itemResult.SupercomproConIVA
                ,SarettoSinIVA:	      itemResult.SarettoSinIVA
                ,SarettoConIVA:	      itemResult.SarettoConIVA
                ,Dun14:	      itemResult.Dun14
                ,netContent_logist:	      itemResult.netContent_logist
                ,height_logist:	      itemResult.height_logist
                ,width_logist:	      itemResult.width_logist
                ,depth_logist:	      itemResult.depth_logist
                ,grossWeight_logist:	      itemResult.grossWeight_logist
                ,packagingTypeDesc_logist:	      itemResult.packagingTypeDesc_logist
                ,netContentUnitOfMeasure_logist:	      itemResult.netContentUnitOfMeasure_logist
                ,lengthUnitOfMeasure_logist:	      itemResult.lengthUnitOfMeasure_logist
                ,weightUnitOfMeasure_logist:	      itemResult.weightUnitOfMeasure_logist
                ,CambioPrecio:	      itemResult.CambioPrecio
                ,FotoProductoFrente:	      itemResult.FotoProductoFrente
                ,FotoProductoLado:	      itemResult.FotoProductoLado
                ,FotoProductoArribaBase:	      itemResult.FotoProductoArribaBase
                ,FotoProducto4:	      itemResult.FotoProducto4
                ,FotoProducto5:	      itemResult.FotoProducto5
                ,superviquezCostSale:	      itemResult.superviquezCostSale
                ,superviquezCostUtility:	      itemResult.superviquezCostUtility
                ,superviquezPrice:	      itemResult.superviquezPrice
                ,superviquezSinIVA:	      itemResult.superviquezSinIVA
                ,superviquezConIVA:	      itemResult.superviquezConIVA
                ,SuperViquezPOS:	      itemResult.SuperViquezPOS
                ,SegmentacionArticulo:	      itemResult.SegmentacionArticulo
                ,AreaManejo:	      itemResult.AreaManejo
                ,AceptaDevoluciones:	      itemResult.AceptaDevoluciones
                ,UbicacionCedi:	      itemResult.UbicacionCedi
                ,ProyMenVtasCol:	      itemResult.ProyMenVtasCol
                ,ProyMenVtasUni:	      itemResult.ProyMenVtasUni
                ,skuSustitucion:	      itemResult.skuSustitucion 
            }
              }  );


              // BORRA REGISTRO DE PRODUCTO DE ITEMS UNA VEZ PASADO A ITEMSAPL

              const itemDelete = await models.Items.destroy({ where: { gtin: gtin } });

              console.log(itemDelete)

              try {

                const statusUpdate: AprobacionesAttributes = {
                    gtin:gtin, Status:1, UserId: UsuarioId, NivelAprobacion: 4 };
    
                    console.log('APROBACIONES',statusUpdate)
    
                    const result = await models.Aprobaciones.create(statusUpdate);
                }
                catch (error) {
                    console.log('ERROR DE APROBACION',error)
                }


                   

                return itemResult;

        }

        else

        {
            console.log('ERROR DE APROBACION')
            return 'No existe este Gtin para cargar'
        }




      
    }
    catch (error) {

        console.log('ERROR ACTUALIZANDO ITEMFILE:',error)
        return error
    }
}



exports.LoadProductos = async (gtin: string) => {
     const sequelize = require('./database');
    try {

        let itemsApiList: any[];
    
       
        const models = initModels(sequelize);
        itemsApiList = await sequelize.query(`SELECT * from ARTICULOS `, { type: QueryTypes.SELECT });
        
        console.log('DATOS PARA EXCEL 33',itemsApiList)


        return itemsApiList;
    }
    catch (error) {
        console.log('ERROR AL EXTRAER DATOS:',error)
    }
}

exports.LoadProductosNlo = async (gtin: string) => {
     const sequelize = require('./database');
    try {

        let itemsApiList: any[];
    
       
        const models = initModels(sequelize);
        itemsApiList = await sequelize.query(`SELECT * from ViewArtNuevoLog_WEBAPI_ITEMFILE where gtin =  '${gtin}'; `, { type: QueryTypes.SELECT });
        
        console.log('DATOS PARA EXCEL 33',itemsApiList)


        return itemsApiList;
    }
    catch (error) {
        console.log('ERROR AL EXTRAER DATOS:',error)
    }
}

exports.LoadProductosPre = async (gtin: string) => {
     const sequelize = require('./database');
    try {

        let itemsApiList: any[];
    
       
        const models = initModels(sequelize);
        itemsApiList = await sequelize.query(`SELECT * from ViewArtPresent_WEBAPI_ITEMFILE where codbarrasprincipal =  '${gtin}';`, { type: QueryTypes.SELECT });
        
        console.log('DATOS PARA EXCEL 33',itemsApiList)


        return itemsApiList;
    }
    catch (error) {
        console.log('ERROR AL EXTRAER DATOS:',error)
    }
}

exports.LoadProductosProv = async (gtin: string) => {
     const sequelize = require('./database');
    try {

        let itemsApiList: any[];
    
       
        const models = initModels(sequelize);
        itemsApiList = await sequelize.query(`SELECT * from ViewArtProveedor_WEBAPI_ITEMFILE where codbarras =  '${gtin}'; `, { type: QueryTypes.SELECT });
        
        console.log('DATOS PARA EXCEL 33',itemsApiList)


        return itemsApiList;
    }
    catch (error) {
        console.log('ERROR AL EXTRAER DATOS:',error)
    }
}

exports.LoadProductosPdv = async (gtin: string) => {
     const sequelize = require('./database');
    try {

        let itemsApiList: any[];
    
       
        const models = initModels(sequelize);
        itemsApiList = await sequelize.query(`SELECT * from ViewTempoPDV where gtin =  '${gtin}'; `, { type: QueryTypes.SELECT });
        
        console.log('DATOS PARA EXCEL 33',itemsApiList)


        return itemsApiList;
    }
    catch (error) {
        console.log('ERROR AL EXTRAER DATOS:',error)
    }
}




exports.updateProduct = async (gtin: string, categoryId: number, subCategoryId: number, TipoRegistro_ID: number,
                               buyerType: number, FotoProductoFrente: any,FotoProductoLado: any,FotoProductoArribaBase: any,
                               FotoProducto4:any,FotoProducto5:any,amountCosto:any,unitBuy: boolean,AceptaDevoluciones:boolean,skuSustitucion:string) => {
     const sequelize = require('./database');

    console.log('acepta devoluciones ***************************',AceptaDevoluciones)
    try {
        const models = initModels(sequelize);
        const itemResult = await models.Items.findOne({ where: { gtin: gtin } });
        if(itemResult)
        {
            const transporter = nodemailer.createTransport({
                host: "smtp.office365.com",
                port: 25,
                secure: false, // upgrade later with STARTTLS
                auth: {
                    user: "contacto@conexiongessa.com",
                    pass: "1Tsupp0rt01%",
                },
            });

            

            const userProvider = await models.Users.findOne({ where: { gln: itemResult.gln } });
            const asistente  = await models.RelacionAsistenteCategorias.findOne({ where: { categoria_id: categoryId } });

            console.log('CORREO DEL ASISTENTE--------------------------------------------:',asistente?.EmailAsistente)

            transporter.sendMail({
                from: '"conexiongessa" <contacto@conexiongessa.com>', // sender address
                to: asistente?.EmailAsistente, // list of receivers
                subject: 'Nuevo producto agregado',
                text: `Estimado asistente:,\nEl UPC ${gtin} ha sido ingresado por el proveedor ${userProvider?.Username} (${userProvider?.Name}) .`+ `\n\n\nFavor no responder a este correo!`, // html body
            }).then((info: any) => {
                console.log({ info });
            }).catch(console.error);





            transporter.sendMail({
                from: '"conexiongessa" <contacto@conexiongessa.com>', // sender address
                to: userProvider?.Username, // list of receivers
                subject: 'solicitud en Proceso',
                text: `Estimado proveedor:,\nSu solicitud de inclusión del UPC ${gtin} ha ingresado. El mismo será revisado de acuerdo con la ventana de tiempo de la categoría a la que pertenece.  En ese momento estaremos comunicándole nuestra decisión.`+ `\n\n\nFavor no responder a este correo!`, // html body
            }).then((info: any) => {
                console.log({ info });
            }).catch(console.error);


            try {

            const statusUpdate: AprobacionesAttributes = {
                gtin:gtin, Status:1, UserId: userProvider!.UserId,
                NivelAprobacion: -1 };

                console.log('APROBACIONES',statusUpdate)

                const result = await models.Aprobaciones.create(statusUpdate);
            }
            catch (error) {
                console.log('ERROR DE APROBACION',error)
            }


            
        }
            //console.log('TIPO DE REGISTRO --------------------------------------->',gtin,TipoRegistro_ID,FotoProductoFrente,FotoProductoLado,FotoProductoArribaBase)
        const items = await models.Items.update(
            { CategoryId: categoryId, SubCategoryId: subCategoryId, TipoRegistro_ID: TipoRegistro_ID, TipoCompraId: buyerType, 
              FotoProductoFrente:FotoProductoFrente, FotoProductoLado:FotoProductoLado,FotoProductoArribaBase:FotoProductoArribaBase,
              FotoProducto4:FotoProducto4,FotoProducto5:FotoProducto5,amount:amountCosto  ,
              CompraEnUnidad: unitBuy,AceptaDevoluciones:AceptaDevoluciones,skuSustitucion:skuSustitucion },
            { where: { gtin: gtin } });
        return items;
       // return null;
    }
    catch (error) {
    }
}

exports.updateProductCambioPrecios = async (gtin: string, amountCosto:any) => {
     const sequelize = require('./database');
    console.log('CAMBIOPRECIOSSS')
    try {
        const models = initModels(sequelize);
        const itemResult = await models.ItemsApl.findOne({ where: { gtin: gtin } });
        if(itemResult)
        {
            const transporter = nodemailer.createTransport({
                host: "smtp.office365.com",
                port: 25,
                secure: false, // upgrade later with STARTTLS
                auth: {
                    user: "contacto@conexiongessa.com",
                    pass: "1Tsupp0rt01%",
                },
            });
          
            const userProvider = await models.Users.findOne({ where: { gln: itemResult.gln } });
            transporter.sendMail({
                from: '"conexiongessa" <contacto@conexiongessa.com>', // sender address
                to: userProvider?.Username, // list of receivers
                subject: 'Solicitud de canbio precio en proceso',
                text: `Estimado proveedor:,\nSu solicitud de cambio de precios del UPC ${gtin} ha ingresado. El mismo será revisado de acuerdo con la ventana de tiempo de la categoría a la que pertenece.  En ese momento estaremos comunicándole nuestra decisión.`+ `\n\n\nFavor no responder a este correo!`, // html body
            }).then((info: any) => {
                console.log({ info });
            }).catch(console.error);
        }
            //console.log('TIPO DE REGISTRO --------------------------------------->',gtin,TipoRegistro_ID,FotoProductoFrente,FotoProductoLado,FotoProductoArribaBase)




            
        const items = await models.ItemsApl.update(
            { amount:amountCosto, CambioPrecio:true  },
            { where: { gtin: gtin } });
      
            console.log('COSTO',amountCosto)


           

            const statusUpdate: AprobacionesAttributes = {
                gtin:gtin, Status:1, UserId: 99999,
                NivelAprobacion: 0
    
            };
           

            // const result = await models.Aprobaciones.create(statusUpdate);
            // console.log(result)


            const [result, created] = await models.Aprobaciones.findOrCreate({
                where: { gtin: gtin },
                defaults: {
                    gtin:gtin, Status:1, UserId: 99999,
                    NivelAprobacion: 0
                }
              });
              
              /* console.log(user.username); // 'sdepold'
              console.log(user.job); // This may or may not be 'Technical Lead JavaScript'
              console.log(created); // The boolean indicating whether this instance was just created */

              if (created) {
                console.log(result.gtin); // This will certainly be 'Technical Lead JavaScript'
              }


            const itemAplResult = await models.ItemsApl.findOne({ where: { gtin: gtin } });
            if(itemAplResult)
            {
                console.log('RESULTADO;',itemAplResult.gtin)



                const [resultitem, created]  = await models.Items.findOrCreate({ 
                    where: { gtin: gtin },
                    defaults: {
                    idNivel:itemAplResult.idNivel
                    ,gln:	itemAplResult.gln
                    ,partyName:	itemAplResult.partyName
                    ,additionalPartyIdentification: itemAplResult.additionalPartyIdentification
                    ,gtin:itemAplResult.gtin
                    ,tradeItemUnitDescriptor: itemAplResult.tradeItemUnitDescriptor
                    ,classificationCategoryCode: itemAplResult.classificationCategoryCode
                    ,classificationCategoryDesc:itemAplResult.classificationCategoryDesc
                    ,startAvailabilityDateTime: itemAplResult.startAvailabilityDateTime
                    ,endAvailabilityDateTime:itemAplResult.endAvailabilityDateTime
                    ,functionalName:itemAplResult.functionalName
                    ,brandName:	itemAplResult.brandName
                    ,variantDescription:	itemAplResult.variantDescription
                    ,netContent:itemAplResult.netContent
                    ,netContentUnitOfMeasure: itemAplResult.netContentUnitOfMeasure
                    ,height: itemAplResult.height
                    ,width: itemAplResult.width
                    ,depth:	itemAplResult.depth
                    ,lengthUnitOfMeasure: itemAplResult.lengthUnitOfMeasure
                    ,grossWeight: itemAplResult.grossWeight
                    ,weightUnitOfMeasure:	      itemAplResult.weightUnitOfMeasure
                    ,packagingTypeDesc:	      itemAplResult.packagingTypeDesc
                    ,tradeItemCountryOfOrigin:	      itemAplResult.tradeItemCountryOfOrigin
                    ,targetMarketCountryCode:	      itemAplResult.targetMarketCountryCode
                    ,tradeItemDescription:	      itemAplResult.tradeItemDescription
                    ,descriptionShort:	      itemAplResult.descriptionShort
                    ,additionalTradeItemIdentification:	      itemAplResult.additionalTradeItemIdentification
                    ,contactName:	      itemAplResult.contactName
                    ,isPackagingMarkedReturnable:	      itemAplResult.isPackagingMarkedReturnable
                    ,isPriceOnPack:	      itemAplResult.isPriceOnPack
                    ,isTradeItemADespatchUnit:	      itemAplResult.isTradeItemADespatchUnit
                    ,packagingTypeCode:	      itemAplResult.packagingTypeCode
                    ,isTradeItemAnOrderableUnit:	      itemAplResult.isTradeItemAnOrderableUnit
                    ,isTradeItemAnInvoiceUnit:	      itemAplResult.isTradeItemAnInvoiceUnit
                    ,isTradeItemAVariableUnit:	      itemAplResult.isTradeItemAVariableUnit
                    ,isTradeItemAMinimumUnit:	      itemAplResult.isTradeItemAMinimumUnit
                    ,regulatoryPermitIdentification:	      itemAplResult.regulatoryPermitIdentification
                    ,permitStartDateTime:	      itemAplResult.permitStartDateTime
                    ,permitEndDateTime:	      itemAplResult.permitEndDateTime
                    ,invoiceName:	      itemAplResult.invoiceName
                    ,legibilityStatus:	      itemAplResult.legibilityStatus
                    ,gs1TradeItemIdentificationKeyCode:	      itemAplResult.gs1TradeItemIdentificationKeyCode
                    ,nameOfManufacturer:	      itemAplResult.nameOfManufacturer
                    ,glnOfManufacturer:	      itemAplResult.glnOfManufacturer
                    ,isTradeItemAConsumerUnit:	      itemAplResult.isTradeItemAConsumerUnit
                    ,availabilityType:	      itemAplResult.availabilityType
                    ,childTradeItem: itemAplResult.childTradeItem
                    ,amount:	      itemAplResult.amount
                    ,priceInformationCurrency:	      itemAplResult.priceInformationCurrency
                    ,cabysCode:	      itemAplResult.cabysCode
                    ,cabysDesc:	      itemAplResult.cabysDesc
                    ,CategoryId:	      itemAplResult.CategoryId
                    ,SubCategoryId:	      itemAplResult.SubCategoryId
                    ,TipoRegistro_ID:	      itemAplResult.TipoRegistro_ID
                    ,TipoCompraId:	      itemAplResult.TipoCompraId
                    ,CompraEnUnidad:	      itemAplResult.CompraEnUnidad
                    ,ComercialLongDescription:	      itemAplResult.ComercialLongDescription
                    ,ComercialShortDescription:	      itemAplResult.ComercialShortDescription
                    ,ComercialPubliDescription:	      itemAplResult.ComercialPubliDescription
                    ,ComercialFonetDescription:	      itemAplResult.ComercialFonetDescription
                    ,ComercialHablaDescription:	      itemAplResult.ComercialHablaDescription
                    ,PeriCostUtility:	      itemAplResult.PeriCostUtility
                    ,SupercomproCostUtility:	      itemAplResult.SupercomproCostUtility
                    ,SarettoCostUtility:	      itemAplResult.SarettoCostUtility
                    ,PeriCostSale:	      itemAplResult.PeriCostSale
                    ,SupercomproCostSale:	      itemAplResult.SupercomproCostSale
                    ,SarettoCostSale:	      itemAplResult.SarettoCostSale
                    ,posID:	      itemAplResult.posID
                    ,PerimercadosPOS:	      itemAplResult.PerimercadosPOS
                    ,SarettoPOS:	      itemAplResult.SarettoPOS
                    ,SupercomproPOS:	      itemAplResult.SupercomproPOS
                    ,PriceFixed:	      itemAplResult.PriceFixed
                    ,gtinItemFile:	      itemAplResult.gtinItemFile
                    ,periPrice:	      itemAplResult.periPrice
                    ,sarettoPrice:	      itemAplResult.sarettoPrice
                    ,superPrice:	      itemAplResult.superPrice
                    ,PeriConIVA:	      itemAplResult.PeriConIVA
                    ,PeriSinIVA:	      itemAplResult.PeriSinIVA
                    ,SupercomproSinIVA:	      itemAplResult.SupercomproSinIVA
                    ,SupercomproConIVA:	      itemAplResult.SupercomproConIVA
                    ,SarettoSinIVA:	      itemAplResult.SarettoSinIVA
                    ,SarettoConIVA:	      itemAplResult.SarettoConIVA
                    ,Dun14:	      itemAplResult.Dun14
                    ,netContent_logist:	      itemAplResult.netContent_logist
                    ,height_logist:	      itemAplResult.height_logist
                    ,width_logist:	      itemAplResult.width_logist
                    ,depth_logist:	      itemAplResult.depth_logist
                    ,grossWeight_logist:	      itemAplResult.grossWeight_logist
                    ,packagingTypeDesc_logist:	      itemAplResult.packagingTypeDesc_logist
                    ,netContentUnitOfMeasure_logist:	      itemAplResult.netContentUnitOfMeasure_logist
                    ,lengthUnitOfMeasure_logist:	      itemAplResult.lengthUnitOfMeasure_logist
                    ,weightUnitOfMeasure_logist:	      itemAplResult.weightUnitOfMeasure_logist
                    ,CambioPrecio:	      itemAplResult.CambioPrecio
                    ,FotoProductoFrente:	      itemAplResult.FotoProductoFrente
                    ,FotoProductoLado:	      itemAplResult.FotoProductoLado
                    ,FotoProductoArribaBase:	      itemAplResult.FotoProductoArribaBase
                    ,FotoProducto4:	      itemAplResult.FotoProducto4
                    ,FotoProducto5:	      itemAplResult.FotoProducto5
                    ,superviquezCostSale:	      itemAplResult.superviquezCostSale
                    ,superviquezCostUtility:	      itemAplResult.superviquezCostUtility
                    ,superviquezPrice:	      itemAplResult.superviquezPrice
                    ,superviquezSinIVA:	      itemAplResult.superviquezSinIVA
                    ,superviquezConIVA:	      itemAplResult.superviquezConIVA
                    ,SuperViquezPOS:	      itemAplResult.SuperViquezPOS
                    ,SegmentacionArticulo:	      itemAplResult.SegmentacionArticulo
                    ,AreaManejo:	      itemAplResult.AreaManejo
                    ,AceptaDevoluciones:	      itemAplResult.AceptaDevoluciones
                    ,UbicacionCedi:	      itemAplResult.UbicacionCedi
                    ,ProyMenVtasCol:	      itemAplResult.ProyMenVtasCol
                    ,ProyMenVtasUni:	      itemAplResult.ProyMenVtasUni
                    ,skuSustitucion:	      itemAplResult.skuSustitucion,
    
                }
            });
            if (created) {
                console.log(resultitem.gtin); // This will certainly be 'Technical Lead JavaScript'
              }
                console.log('RESULTADO;',resultitem)
            }
           
          // poner aqui logica para actualizar el descuento si es diferente de cero... itemsdiscount gtin igual y tipo DEI
        
        return items;
       // return null;
    }
    catch (error) {
        console.log('ERROR:',error)
    }
}




exports.updateProductComercialData = async (gtin: string, comercialLongDescription: string, comercialShortDescription: string,
     comercialPubliDescription: string,comercialFonetDescription: string,comercialHablaDescription: string,periCostSale: number, 
     periCostUtility: number, sarettoCostSale: number, sarettoCostUtility: number,
     supercomproCostUtility: number, PosID: number, supercomproCostSale: number, periSelected: string, sarettoSelected: string, 
     superComproSelected: string, priceFixed: number, superPrice: number, sarettoPrice: number, periPrice: number,PeriSinIVA: number, 
     PeriConIVA: number, SupercomproSinIVA: number, SupercomproConIVA: number, SarettoSinIVA: number, SarettoConIVA: number,
     confidencial: number, introduccion: number, fijo: number, promocional: number, ddc:number,nodevolucion:number,

    superviquezCostSale:number, superviquezCostUtility:number,superviquezPrice:number,superviquezSinIVA:number, superviquezConIVA:number,
    superviquezSelected: string,SegmentacionArticulo:number ,tipoRegistroIdSelected:number,buyerTypeSelected:number,AreaManejo:number,UbicacionCedi:string,
    ProyMenVtasCol: number,ProyMenVtasUni: number,AceptaDevoluciones:boolean
     
     
     
     
     ) => {

        console.log('VALORES NUEVOS',tipoRegistroIdSelected,buyerTypeSelected,AreaManejo,UbicacionCedi,ProyMenVtasCol,ProyMenVtasUni)

     const sequelize = require('./database');
    try {
        console.log('**********',SegmentacionArticulo, tipoRegistroIdSelected,buyerTypeSelected,AreaManejo)
        const models = initModels(sequelize);
        console.warn(SupercomproSinIVA)
        const items = await models.Items.update(
            {
                ComercialLongDescription: comercialLongDescription, 
                ComercialShortDescription: comercialShortDescription, 
                ComercialPubliDescription: comercialPubliDescription,
                ComercialFonetDescription: comercialFonetDescription,
                ComercialHablaDescription: comercialHablaDescription,
                PeriCostSale: periCostSale,
                PeriCostUtility: periCostUtility, 
                SarettoCostSale: sarettoCostSale, 
                SarettoCostUtility: sarettoCostUtility, 
                SupercomproCostUtility: supercomproCostUtility,
                posID: PosID,
                SupercomproCostSale: supercomproCostSale,
                PerimercadosPOS: periSelected,
                SarettoPOS: sarettoSelected, 
                SupercomproPOS: superComproSelected,  
                PriceFixed: priceFixed,
                superPrice: superPrice,
                sarettoPrice: sarettoPrice,
                periPrice: periPrice, 
                PeriSinIVA: PeriSinIVA,PeriConIVA: PeriConIVA,   
                SupercomproConIVA: SupercomproConIVA, SupercomproSinIVA: SupercomproSinIVA,
                SarettoConIVA: SarettoConIVA, SarettoSinIVA:SarettoSinIVA,
                superviquezCostSale:superviquezCostSale,superviquezCostUtility:superviquezCostUtility,
                superviquezPrice:superviquezPrice,superviquezSinIVA:superviquezSinIVA,superviquezConIVA:superviquezConIVA,
                SuperViquezPOS:superviquezSelected,
                SegmentacionArticulo:SegmentacionArticulo,
                TipoRegistro_ID:tipoRegistroIdSelected,
                TipoCompraId:buyerTypeSelected,
                AreaManejo: AreaManejo,
                UbicacionCedi: UbicacionCedi,
                ProyMenVtasCol:ProyMenVtasCol, 
                ProyMenVtasUni:ProyMenVtasUni,
                AceptaDevoluciones:AceptaDevoluciones

                
                                


               
                
            },
            { where: { gtin: gtin } });
            await models.itemDiscounts.update({value: confidencial.toString()}, {where: {gtin: gtin, ruleCode: 'DC'}});
            await models.itemDiscounts.update({value: introduccion.toString()}, {where: {gtin: gtin, ruleCode: 'DEI'}});
            await models.itemDiscounts.update({value: fijo.toString()}, {where: {gtin: gtin, ruleCode: 'DFI'}});
            await models.itemDiscounts.update({value: promocional.toString()}, {where: {gtin: gtin, ruleCode: 'PAE'}});

            await models.itemDiscounts.update({value: ddc.toString()}, {where: {gtin: gtin, ruleCode: 'DDC'}});
            await models.itemDiscounts.update({value: nodevolucion.toString()}, {where: {gtin: gtin, ruleCode: 'DND'}});
            return items;
    }
    catch (error) {
    }

}

exports.getCateXProveedor = async (gln: string) => {
     const sequelize = require('./database');

    
    try {

        let Categories: any[];

         Categories = await sequelize.query(`select categorias.categoria_id,categorias.categoria_dsc from categorias inner join RelacionProveedorCategorias On Categorias.categoria_id = RelacionProveedorCategorias.categoria_id where proveedor_id = '${gln}';`, { type: QueryTypes.SELECT });
        
       // console.log(Categories)
        return Categories;

    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getCategory = async (categoryId: number) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const category = await models.Categorias.findOne({ where: { categoria_id: categoryId } });
        //console.log('cate',category)
        return category;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}
exports.getSubCategory = async (categoryId: number, subCategoryId: number) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const subcategory = await models.SubCategorias.findOne({ where: { categoria_id: categoryId, subcategoria_id: subCategoryId } });
        return subcategory;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}
exports.getItem = async (gtin: string) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const item = await models.Items.findOne({ where: { gtin: gtin } });
        return item;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}


exports.createProveedor = async (prove: ProveedoresAttributes) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        //console.log('Proveedor' ,prove)
        const exists = await models.Proveedores.findOne({ where: { proveedor_id: prove.proveedor_id } });
        if (exists) {
            console.log('Existe? ',exists)
            const proveedores = await models.Proveedores.update(prove, { where: { proveedor_id: prove.proveedor_id } });
            return proveedores;
            return null
        }
        else {
           
            const proveedores = await models.Proveedores.create(prove);
            return proveedores;
        }
return null
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.createArticulo = async (arti: ARTICULOSAttributes) => {
     const sequelize = require('./database');
    console.log('LOS ARTICULOS:',arti)
    try {
        
        const models = initModels(sequelize);
      
        const exists = await models.ARTICULOS.findOne({ where: { ArticuloID: arti.ArticuloID } });
        //console.log('FOTOS =>',arti.FotoProductoFrente,arti.FotoProductoArribaBase)
    
        if (exists) {
            //console.log('Existe? ',exists)
            const articulos = await models.ARTICULOS.update(arti, { where: { ArticuloID: arti.ArticuloID } });
            return articulos;
            
        }
        else {
           console.log('No existe')
            const articulos = await models.ARTICULOS.create(arti);
            return articulos;
        }

    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.createProveedorsol = async (prove:ProveeSolicitantesAttributes ) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        //console.log('Proveedor' ,prove)
        const exists = await models.ProveeSolicitantes.findOne({ where: { proveedor_id: prove.proveedor_id } });
        if (exists) {
            console.log('Existe? ',exists)
            const proveedores = await models.ProveeSolicitantes.update(prove, { where: { proveedor_id: prove.proveedor_id } });
            return proveedores;
            
        }
        else {
           
            const proveedores = await models.ProveeSolicitantes.create(prove);
            return proveedores;
        }
return null
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}



exports.getProveedores = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const Proveedores = await models.Proveedores.findAll();
        return Proveedores;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getProveedor = async (proveedor_id: string) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const proveedor = await models.Proveedores.findOne({ where: { proveedor_id: proveedor_id } });
        return proveedor;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getProveedoresol = async (user: any) => {
     const sequelize = require('./database');
    try {
        let Proveedores : any[];
        Proveedores= await sequelize.query(`
        SELECT        ProveeSolicitantes.proveedor_id, ProveeSolicitantes.proveedor_dsc, ProveeSolicitantes.gln, ProveeSolicitantes.categoria_id, ProveeSolicitantes.fechaSolicitud, ProveeSolicitantes.CedJuridica, ProveeSolicitantes.RazonSocial, 
        ProveeSolicitantes.RepreLegal, ProveeSolicitantes.GerenteGeneral, ProveeSolicitantes.GerenteVentas, ProveeSolicitantes.AgenteVentas, ProveeSolicitantes.ContactoFinanc, ProveeSolicitantes.Direccion, 
        ProveeSolicitantes.canton_id, ProveeSolicitantes.Barrio, ProveeSolicitantes.Tel1, ProveeSolicitantes.Tel2, ProveeSolicitantes.NombreContactoFactElec, ProveeSolicitantes.TelContactoFactElec, 
        ProveeSolicitantes.EmailContactoFactElec, ProveeSolicitantes.EmailReciboContactoFactElec, ProveeSolicitantes.CantidadLineasXFactura, ProveeSolicitantes.TipoEntrega, ProveeSolicitantes.AceptaDevoluc, 
        ProveeSolicitantes.OrdenCompra, ProveeSolicitantes.DescuentoFijo, ProveeSolicitantes.PorDescuentofijo, ProveeSolicitantes.DescuentoConfidencial, ProveeSolicitantes.PorcDescuentoConfidencial, 
        ProveeSolicitantes.DescuentoIntroduccion, ProveeSolicitantes.PorcDescuentoIntroduccion, ProveeSolicitantes.PartDinamicasComerciales, ProveeSolicitantes.PartEspaciosPromocionales, ProveeSolicitantes.PartDisplays, 
        ProveeSolicitantes.FrecuenciaVisitaTiendas, ProveeSolicitantes.AportaCodigoCABYS, ProveeSolicitantes.CodigoCABYS, ProveeSolicitantes.ActividadEconomicaID, ProveeSolicitantes.PlazoPagoID, 
        ProveeSolicitantes.DocEntregaFacElect, ProveeSolicitantes.DocEntregaGuiaDespacho, ProveeSolicitantes.status, Categorias.categoria_dsc, CantonDistritoProvincia.CantonID, CantonDistritoProvincia.Distrito, 
        CantonDistritoProvincia.Canton, CantonDistritoProvincia.Provincia, ActividadEconomica.ActividadEconomicaDsc, PlazosPago.PlazoPagoDsc, TipoCompra.tipoCompra_dsc
        FROM            ProveeSolicitantes LEFT JOIN
        Categorias ON ProveeSolicitantes.categoria_id = Categorias.categoria_id LEFT JOIN
        CantonDistritoProvincia ON ProveeSolicitantes.canton_id = CantonDistritoProvincia.CantonID LEFT JOIN
        ActividadEconomica ON ProveeSolicitantes.ActividadEconomicaID = ActividadEconomica.ActividadEconomicaID LEFT JOIN
        PlazosPago ON ProveeSolicitantes.PlazoPagoID = PlazosPago.PlazoPagoID LEFT JOIN
        TipoCompra ON ProveeSolicitantes.TipoEntrega = TipoCompra.tipoCompra_id inner JOIN
        RelacionAsistenteCategorias rac on rac.categoria_id = ProveeSolicitantes.categoria_id and rac.EmailAsistente = '${user.userName}'
        
        `, { type: QueryTypes.SELECT });
        return Proveedores;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}




exports.getProveedoresol2 = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const Proveedores = await models.ProveeSolicitantes.findAll();
        return Proveedores;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getProveedorsol = async (proveedor_id: string) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const proveedor = await models.ProveeSolicitantes.findOne({ where: { proveedor_id: proveedor_id } });
        return proveedor;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getCantonDistritoProvincia = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const Cantones = await models.CantonDistritoProvincia.findAll();
        return Cantones;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getActividadEconomica = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const ActiEcono = await models.ActividadEconomica.findAll();
        return ActiEcono;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getMarcas = async () => {
   

    const sequelize = new Sequelize(process.env.DB_DATABASE ?? "gessa_dev2" , process.env.DB_USER ?? "devs", process.env.DB_PASSWORD ?? "devs", {
        host: process.env.DB_HOST,
        dialect: 'mssql', port:1434,
       
        dialectOptions: {
          options: { encrypt: false } // Cambiar a true si el servidor requiere SSL
        }
      });
    console.log('BD',process.env.DB_HOST)
    console.log('USER',process.env.DB_USER)
    console.log('PASS',process.env.DB_PASSWORD)
    console.log('PORT',process.env.DB_PORT)

    try {
        const models = initModels(sequelize);
        const Marcas = await models.Marca.findAll();
        return Marcas;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getARTICULOS = async (user: any) => {
     const sequelize = require('./database');
    try {

        let ARTICULOS: any[];
       
        switch (user.UserType) {
                case "6":
                    ARTICULOS = await sequelize.query(`
                    SELECT        ARTICULOS.*, Categorias.categoria_dsc, SubCategorias.subcategoria_dsc, Marca.MarcaDsc, 
                    TipoCompra.tipoCompra_dsc, PlazosPago.PlazoPagoDsc, TiposGravados.GravadoDsc, UnidadEmpaque.DescriUnidadEmpaque
                    FROM            ARTICULOS LEFT JOIN
                    Categorias ON ARTICULOS.categoria_id = Categorias.categoria_id LEFT JOIN
                    SubCategorias ON ARTICULOS.categoria_id = SubCategorias.categoria_id AND ARTICULOS.subcategoria_id = SubCategorias.subcategoria_id LEFT JOIN
                    Marca ON ARTICULOS.MarcaID = Marca.MarcaID LEFT JOIN
                    PlazosPago ON ARTICULOS.PlazoPagoID = PlazosPago.PlazoPagoID LEFT JOIN
                    TipoCompra ON ARTICULOS.tipoCompra_id = TipoCompra.tipoCompra_id LEFT JOIN
                    TiposGravados ON ARTICULOS.GravadoID = TiposGravados.GravadoID LEFT JOIN
                    UnidadEmpaque ON ARTICULOS.IdUnidadEmpaque = UnidadEmpaque.IdUnidadEmpaque  
                    where ProveedorID = '${user.gln}' and status='DIGITADO'`, { type: QueryTypes.SELECT });
                break;
                case "2":
                    ARTICULOS = await sequelize.query(`
                    SELECT        ARTICULOS.*, Categorias.categoria_dsc, SubCategorias.subcategoria_dsc, Marca.MarcaDsc, 
                    TipoCompra.tipoCompra_dsc, PlazosPago.PlazoPagoDsc, TiposGravados.GravadoDsc, UnidadEmpaque.DescriUnidadEmpaque
                    FROM            ARTICULOS LEFT JOIN
                    Categorias ON ARTICULOS.categoria_id = Categorias.categoria_id LEFT JOIN
                    SubCategorias ON ARTICULOS.categoria_id = SubCategorias.categoria_id AND ARTICULOS.subcategoria_id = SubCategorias.subcategoria_id LEFT JOIN
                    Marca ON ARTICULOS.MarcaID = Marca.MarcaID LEFT JOIN
                    PlazosPago ON ARTICULOS.PlazoPagoID = PlazosPago.PlazoPagoID LEFT JOIN
                    TipoCompra ON ARTICULOS.tipoCompra_id = TipoCompra.tipoCompra_id LEFT JOIN
                    TiposGravados ON ARTICULOS.GravadoID = TiposGravados.GravadoID LEFT JOIN
                    UnidadEmpaque ON ARTICULOS.IdUnidadEmpaque = UnidadEmpaque.IdUnidadEmpaque  
					inner join dbo.RelacionAsistenteCategorias rac on rac.EmailAsistente = '${user.userName}' and rac.categoria_id = ARTICULOS.categoria_id
		          where  status='ASISTENTE'`, { type: QueryTypes.SELECT });
                break;
                case "3":
                    ARTICULOS = await sequelize.query(`
                    SELECT        ARTICULOS.*
                    FROM            ARTICULOS order by descripcionproducto`, { type: QueryTypes.SELECT });
                default:
                    ARTICULOS = await sequelize.query(`
                    SELECT        ARTICULOS.*
                    FROM            ARTICULOS order by descripcionproducto `, { type: QueryTypes.SELECT });
                break;

        }

    return ARTICULOS;


    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getARTICULOSCHG = async (user: any) => {
     const sequelize = require('./database');
    try {

        let ARTICULOS: any[];
       
        switch (user.UserType) {
                case "6":
                    ARTICULOS = await sequelize.query(`
                    SELECT        ARTICULOS.*, Categorias.categoria_dsc, SubCategorias.subcategoria_dsc, Marca.MarcaDsc, 
                    TipoCompra.tipoCompra_dsc, PlazosPago.PlazoPagoDsc, TiposGravados.GravadoDsc, UnidadEmpaque.DescriUnidadEmpaque
                    FROM            ARTICULOS LEFT JOIN
                    Categorias ON ARTICULOS.categoria_id = Categorias.categoria_id LEFT JOIN
                    SubCategorias ON ARTICULOS.categoria_id = SubCategorias.categoria_id AND ARTICULOS.subcategoria_id = SubCategorias.subcategoria_id LEFT JOIN
                    Marca ON ARTICULOS.MarcaID = Marca.MarcaID LEFT JOIN
                    PlazosPago ON ARTICULOS.PlazoPagoID = PlazosPago.PlazoPagoID LEFT JOIN
                    TipoCompra ON ARTICULOS.tipoCompra_id = TipoCompra.tipoCompra_id LEFT JOIN
                    TiposGravados ON ARTICULOS.GravadoID = TiposGravados.GravadoID LEFT JOIN
                    UnidadEmpaque ON ARTICULOS.IdUnidadEmpaque = UnidadEmpaque.IdUnidadEmpaque  
                    where ProveedorID = '${user.gln}' and status='VALIDADO'`, { type: QueryTypes.SELECT });
                break;
                case "2":
                    ARTICULOS = await sequelize.query(`
                    SELECT        ARTICULOS.*, Categorias.categoria_dsc, SubCategorias.subcategoria_dsc, Marca.MarcaDsc, 
                    TipoCompra.tipoCompra_dsc, PlazosPago.PlazoPagoDsc, TiposGravados.GravadoDsc, UnidadEmpaque.DescriUnidadEmpaque
                    FROM            ARTICULOS LEFT JOIN
                    Categorias ON ARTICULOS.categoria_id = Categorias.categoria_id LEFT JOIN
                    SubCategorias ON ARTICULOS.categoria_id = SubCategorias.categoria_id AND ARTICULOS.subcategoria_id = SubCategorias.subcategoria_id LEFT JOIN
                    Marca ON ARTICULOS.MarcaID = Marca.MarcaID LEFT JOIN
                    PlazosPago ON ARTICULOS.PlazoPagoID = PlazosPago.PlazoPagoID LEFT JOIN
                    TipoCompra ON ARTICULOS.tipoCompra_id = TipoCompra.tipoCompra_id LEFT JOIN
                    TiposGravados ON ARTICULOS.GravadoID = TiposGravados.GravadoID LEFT JOIN
                    UnidadEmpaque ON ARTICULOS.IdUnidadEmpaque = UnidadEmpaque.IdUnidadEmpaque  
					inner join dbo.RelacionAsistenteCategorias rac on rac.EmailAsistente = '${user.userName}' and rac.categoria_id = ARTICULOS.categoria_id
		          where  status='ASISTENTE2'`, { type: QueryTypes.SELECT });
                break;
                default:
                    ARTICULOS = await sequelize.query(`
                    SELECT        ARTICULOS.*, Categorias.categoria_dsc, SubCategorias.subcategoria_dsc, Marca.MarcaDsc, 
                    TipoCompra.tipoCompra_dsc, PlazosPago.PlazoPagoDsc, TiposGravados.GravadoDsc, UnidadEmpaque.DescriUnidadEmpaque
                    FROM            ARTICULOS LEFT JOIN
                    Categorias ON ARTICULOS.categoria_id = Categorias.categoria_id LEFT JOIN
                    SubCategorias ON ARTICULOS.categoria_id = SubCategorias.categoria_id AND ARTICULOS.subcategoria_id = SubCategorias.subcategoria_id LEFT JOIN
                    Marca ON ARTICULOS.MarcaID = Marca.MarcaID LEFT JOIN
                    PlazosPago ON ARTICULOS.PlazoPagoID = PlazosPago.PlazoPagoID LEFT JOIN
                    TipoCompra ON ARTICULOS.tipoCompra_id = TipoCompra.tipoCompra_id LEFT JOIN
                    TiposGravados ON ARTICULOS.GravadoID = TiposGravados.GravadoID LEFT JOIN
                    UnidadEmpaque ON ARTICULOS.IdUnidadEmpaque = UnidadEmpaque.IdUnidadEmpaque  
                    where ProveedorID = '${user.gln}' and status='DIGITADO'`, { type: QueryTypes.SELECT });
                break;

        }

    return ARTICULOS;


    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getARTICULOS2 = async () => {
     const sequelize = require('./database');
    try {
        let ARTICULOS: any[];
        ARTICULOS = await sequelize.query(`
        SELECT        ARTICULOS.*, Categorias.categoria_dsc, SubCategorias.subcategoria_dsc, Marca.MarcaDsc, 
        TipoCompra.tipoCompra_dsc, PlazosPago.PlazoPagoDsc, TiposGravados.GravadoDsc, UnidadEmpaque.DescriUnidadEmpaque
        FROM            ARTICULOS LEFT JOIN
        Categorias ON ARTICULOS.categoria_id = Categorias.categoria_id LEFT JOIN
        SubCategorias ON ARTICULOS.categoria_id = SubCategorias.categoria_id AND ARTICULOS.subcategoria_id = SubCategorias.subcategoria_id LEFT JOIN
        Marca ON ARTICULOS.MarcaID = Marca.MarcaID LEFT JOIN
        PlazosPago ON ARTICULOS.PlazoPagoID = PlazosPago.PlazoPagoID LEFT JOIN
        TipoCompra ON ARTICULOS.tipoCompra_id = TipoCompra.tipoCompra_id LEFT JOIN
        TiposGravados ON ARTICULOS.GravadoID = TiposGravados.GravadoID LEFT JOIN
        UnidadEmpaque ON ARTICULOS.IdUnidadEmpaque = UnidadEmpaque.IdUnidadEmpaque  
        where ProveedorID <> 'xxx' and status='DIGITADO'`, { type: QueryTypes.SELECT });
        return ARTICULOS;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getArticulo = async (ArticuloID: number) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const articulo = await models.ARTICULOS.findOne({ where: { ArticuloID: ArticuloID } });
        console.log('ARTICULO>>>>>>>>>>>>>',articulo)
        return articulo;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getPlazosPago = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const PlazosPagos = await models.PlazosPago.findAll();
        return PlazosPagos;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}



exports.getInsumos = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const Insumos = await models.ARTICULOS.findAll();
        return Insumos;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getTipoCompra = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const TipoCompra = await models.TipoCompra.findAll();
        return TipoCompra;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getTipoRegistro = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const tiposregistro = await models.TipoRegistro.findAll();
        return tiposregistro;
    } catch (error) {
        console.error('que raro no me pude conectar...:', error);
    }
}

exports.getTiposGravados = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const TiposGravados = await models.TiposGravados.findAll();
        return TiposGravados;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getUnidadEmpaque = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const UnidadEmpaque = await models.UnidadEmpaque.findAll();
        return UnidadEmpaque;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}




exports.getMercadoOrigen = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const MercadoOrigen = await models.MercadoOrigen.findAll();
        return MercadoOrigen;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}


exports.getMensajesXtera = async (user: any) => {
     const sequelize = require('./database');
    try {
        console.log('TIPO MENSAJE EN DB0',user)
        let Mensajes: any[];
        
            Mensajes = await sequelize.query(`
            SELECT mensaje_id,mensajeResp_id,UsuarioSend,UsuarioRecep,msgDate,msgDateCita,Vmensajes.asunto_id,msgMensaje,msgMensajeRespuesta,msgUsuarioRecepOk,
            msgEliminado,IdMensajeOriginal,Vmensajes.categoria_id,participantes,participantesCia,fechaCita,tipoMensaje,status,titulo,AsuntosMsg.asunto_dsc as Asunto, Categorias.categoria_dsc as Categoria 
            FROM Vmensajes left JOIN AsuntosMsg ON Vmensajes.asunto_id = AsuntosMsg.asunto_id left 
            JOIN Categorias ON Vmensajes.categoria_id = Categorias.categoria_id
            where 
            usuariosend like ('%${user}%') `, { type: QueryTypes.SELECT });
            
        console.log('Mensajes',Mensajes)
      
        return Mensajes;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}


exports.getFotoMensaje = async (id: any) => {
     const sequelize = require('./database');
    try {
        console.log('TIPO MENSAJE EN DB0',id)
        let Lafoto: any[];
        
            Lafoto = await sequelize.query(`
            SELECT mensaje_id,foto FROM Vmensajes 
            where 
            mensaje_id like ('%${id}%') `, { type: QueryTypes.SELECT });
            
        
      
        return Lafoto;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}



exports.getMensajes = async (user: any, tipoMsg: string) => {
     const sequelize = require('./database');
    try {
        console.log('TIPO MENSAJE EN DB',tipoMsg)
        let Mensajes: any[];
        if(tipoMsg == 'MENSAJE   '){

            console.log ('CONSULTA PDF',`
           
				SELECT 
				mensaje_id,mensajeResp_id,UsuarioSend,UsuarioRecep,msgDate,msgDateCita,Vmensajes.asunto_id,msgMensaje,msgMensajeRespuesta
			   ,msgUsuarioRecepOk,msgEliminado,IdMensajeOriginal,Vmensajes.categoria_id,participantes,participantesCia,tipoMensaje
			   ,status,titulo,fechaCita,AsuntosMsg.asunto_dsc as Asunto, Categorias.categoria_dsc as Categoria
            FROM Vmensajes left JOIN AsuntosMsg ON Vmensajes.asunto_id = AsuntosMsg.asunto_id left
            JOIN Categorias ON Vmensajes.categoria_id = Categorias.categoria_id where
       
            tipoMensaje = '${tipoMsg}'  `)

   // where rtrim(tipoMensaje) = '${tipoMsg}' and  '${user.userName}' in ( select * from  dbo.SeldestinatariosCitas(usuariorecep,Vmensajes.categoria_id))

            Mensajes = await sequelize.query(`
           
				SELECT 
				mensaje_id,mensajeResp_id,UsuarioSend,UsuarioRecep,msgDate,msgDateCita,Vmensajes.asunto_id,msgMensaje,msgMensajeRespuesta
			   ,msgUsuarioRecepOk,msgEliminado,IdMensajeOriginal,Vmensajes.categoria_id,participantes,participantesCia,tipoMensaje
			   ,status,titulo,fechaCita,AsuntosMsg.asunto_dsc as Asunto, Categorias.categoria_dsc as Categoria
            FROM Vmensajes left JOIN AsuntosMsg ON Vmensajes.asunto_id = AsuntosMsg.asunto_id left
            JOIN Categorias ON Vmensajes.categoria_id = Categorias.categoria_id where
       
            tipoMensaje = '${tipoMsg}'  `, { type: QueryTypes.SELECT });
            }
          else {
        Mensajes = await sequelize.query(`
                SELECT Vmensajes.*, pacientes.NombrePaciente as Asunto, Categorias.categoria_dsc as Categoria, Users.Name FROM Vmensajes 
                left JOIN pacientes ON Vmensajes.asunto_id = pacientes.idPaciente left JOIN Categorias ON Vmensajes.categoria_id = 
                Categorias.categoria_id left join Users on Users.Username = Vmensajes.UsuarioSend
             
                where rtrim(tipoMensaje) = '${tipoMsg}' 
            
            
            `, { type: QueryTypes.SELECT });
  
          }
        //const models = initModels(sequelize);
       // const Mensajes = await models.Vmensajes.findAll();
        return Mensajes;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.createRetorno = async (gtin: string,MotivoRetorno: string, modo: string,UserType: string ) => {
     const sequelize = require('./database');
    try {
        console.log('EL GTIN AQUI')
        console.log(gtin,MotivoRetorno,modo,UserType)
        
        let strInsertMsg =''
        if(modo=='I')
        {
            strInsertMsg =
            ` select isnull((select gtin from retornosItems where gtin = '${gtin}'),'INEXISTENTE')  as gtin `

            let msgResult2: any[];
            msgResult2 = await sequelize.query(strInsertMsg, { type: QueryTypes.SELECT });

                                                        console.log('xxxxxxxxxxxxx',msgResult2[0].gtin)
            if(msgResult2[0].gtin == 'INEXISTENTE')
            {

                    strInsertMsg = ` insert into retornosItems values 
                    ('${gtin}','${MotivoRetorno}',GETDATE(),null,'${UserType}') ; update items set RetornoProceso = '${UserType}' Where gtin = '${gtin}'  `
            }
                     else 
            {
                     return 'YA EXISTE GTIN EN TABLA DE RETORNOS ' 
            }
            
              
                        }
            else  if(modo=='A') 
        {

            strInsertMsg =
            ` select isnull((select gtin from retornosItems where gtin = '${gtin}'),'INEXISTENTE')  as gtin `

            let msgResult2: any[];
            msgResult2 = await sequelize.query(strInsertMsg, { type: QueryTypes.SELECT });

                                                        console.log('xxxxxxxxxxxxx',msgResult2[0].gtin)
            if(msgResult2[0].gtin != 'INEXISTENTE')
            {

                    strInsertMsg =
                        `  update retornosItems set FechaDesRetorno = GETDATE() Where gtin = '${gtin}' ; update items set RetornoProceso = '' Where gtin = '${gtin}' `
            }
                     else 
            {
                     return 'NO EXISTE GTIN QUE ACTUALIZAR' 
            }


        }
                    console.log('INSERTANDO RETORNO',strInsertMsg)

        let msgResult: any[];
        msgResult = await sequelize.query(strInsertMsg, { type: QueryTypes.SELECT });
        
        return 'Retorno Actualizado';
                                       
        
        }
       
       
     catch (error) {
        console.error('Error insertando tabla control retornos:', error);
        return error
    }
}


exports.createMensaje = async (msg: VmensajesAttributes) => {
     const sequelize = require('./database');
    console.log('LOS Mensajes:',msg)
    try {
        
        const models = initModels(sequelize);
      
        const exists = await models.Vmensajes.findOne({ where: { mensaje_id: msg.mensaje_id } });
        console.log('Existe? ',exists)
        if (exists) {
            //console.log('Existe? ',exists)
            const Mensaje = await models.Vmensajes.update(msg, { where: { mensaje_id: msg.mensaje_id } });
            return Mensaje;
            
        }
        else {
           console.log('No existe')



            const Mensaje = await models.Vmensajes.create(msg);
            

            console.log('MENSAJE:',Mensaje)

            

            let msgResult: any[];
            msgResult = await sequelize.query(`
            SELECT Vmensajes.*, Users.Name,NombrePaciente as Asunto,pacientes.Hospital, Categorias.categoria_dsc as Categoria FROM Vmensajes
            left JOIN Pacientes  ON Vmensajes.asunto_id = Pacientes.idPaciente left JOIN Categorias
            ON Vmensajes.categoria_id = Categorias.categoria_id 
            inner join Users on Users.Username = Vmensajes.UsuarioSend where mensaje_id = '${Mensaje.mensaje_id}' `, { type: QueryTypes.SELECT });
    
            if(msgResult)
            {
                console.log('EL MENSAJE A ENVIAR POR CORREO ES',msgResult)
                const transporter = nodemailer.createTransport({
                    host: "smtp.office365.com",
                    port: 587,
                    secure: false, // upgrade later with STARTTLS
                    auth: {
                        user: "carlosmurillo@amimedsaludcr.com",
                        pass: "Nrp60pf65j@",
                    },
                });
              
                    console.log('Id Mensaje:.............>',Mensaje.mensaje_id)
                    console.log('DESTINATARIOS:---------->',msgResult[0]?.UsuarioRecep)

                    let tipoProceso = msgResult[0].tipoMensaje.trim()=='CITA' ? 'SOLICITUD DE INSUMOS' : 'CARGA DE PDFs'

                    let sujeto = `AVISO! del Terapeuta: ${msgResult[0]?.Name} para Amimed Salud `

                console.log('SUJETO',tipoProceso)
                console.log('CITA',msgResult[0]?.Name)
                console.log('OTRO','-' + msgResult[0].tipoMensaje.trim()+'-')

               // const userProvider = await models.Users.findOne({ where: { gln: itemResult.gln } });
                transporter.sendMail({
                    from: '"Info Amimed" <info@amimedsaludcr.com>', // sender address
                   // to: msgResult[0]?.UsuarioRecep, // list of receivers
                    to: 'carlosmurillo@amimedsaludcr.com',
                    cc: msgResult[0]?.UsuarioSend,
                    subject: sujeto ,
                
                    html: tipoProceso +  `\n Hospital:  ${msgResult[0]?.Hospital} \n Insumos para  Pacientes: ${msgResult[0]?.Asunto} \n Mensaje: \n ${msgResult[0].msgMensaje} \n `+ `\n\n\nFavor no responder a este correo!`
                }).then((info: any) => {
                    console.log({ info });
                }).catch(console.error);

               
               
            
        }
        return Mensaje;
    }
     

    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.updateMensaje = async (
      mensaje_id: number ,
      UsuarioSend: string,
      UsuarioRecep: string ,
      msgMensajeRespuesta: string,
      msgEliminado: boolean,        // true si no se acepta la cita
      participantes: string,
      participantesCia: string,
      status: string,
      totalDestinos : string,
      fechaCita: string,
      
) => {
     const sequelize = require('./database');
    try {
        console.log('id',mensaje_id)
        console.log('Destinatarios cia',participantesCia)
        console.log('Respuesta://///////////',msgMensajeRespuesta)
        console.log('estatus:',status)
        console.log('Fecha cita:',fechaCita)
        console.log('Total destinos:',totalDestinos)
        const models = initModels(sequelize);
        const items = await models.Vmensajes.update(
            { UsuarioSend: UsuarioSend,
                UsuarioRecep: UsuarioRecep ,
                msgMensajeRespuesta: msgMensajeRespuesta,
                msgEliminado: msgEliminado,        // true si no se acepta la cita
                participantes: participantes,
                participantesCia: participantesCia,
                status: status,
                fechaCita: fechaCita
                //msgDateCita : sequelize.fn( "convert","datetime", sequelize.col('2022-11-22T17:06:49.680Z'), "101")
            },
            { where: { mensaje_id: mensaje_id } });

           console.log('Los items updated:',items)


            let msgResult: any[];
            msgResult = await sequelize.query(`
            SELECT Vmensajes.*, AsuntosMsg.asunto_dsc as Asunto, Categorias.categoria_dsc as Categoria 
            FROM Vmensajes left JOIN AsuntosMsg ON Vmensajes.asunto_id = AsuntosMsg.asunto_id 
            left JOIN Categorias ON Vmensajes.categoria_id = Categorias.categoria_id 
            where mensaje_id = '${mensaje_id}' `, { type: QueryTypes.SELECT });
    
    
      
        //const msgResult = await models.Vmensajes.findOne({ where: { mensaje_id: mensaje_id } });
        //console.log('resultado mensaje:***********************************',totalDestinos,status)

        if(msgResult)
        {
            const transporter = nodemailer.createTransport({
                host: "smtp.office365.com",
                port: 25,
                secure: false, // upgrade later with STARTTLS
                auth: {
                    user: "info@amimedsaludcr.com",
                    pass: "InfAmimed24%",
                },
            });
            if(msgResult[0].tipoMensaje=='MENSAJE   ')
            {
            
           // const userProvider = await models.Users.findOne({ where: { gln: itemResult.gln } });
            transporter.sendMail({
                from: '"Amimed Salud Administracion" <info@amimedsaludcr.com>', // sender address
                to: msgResult[0]?.UsuarioSend, // list of receivers
                subject: 'Respuesta Mensaje:'+ msgResult[0]?.Asunto,
                //text: `Estimado proveedor:,\nSu solicitud de inclusión del UPC  ha ingresado. El mismo será revisado de acuerdo con la ventana de tiempo de la categoría a la que pertenece.  En ese momento estaremos comunicándole nuestra decisión.`, // html body
                html: `Mensaje Inicial: \n ${msgResult[0].msgMensaje} \n Mensaje Respuesta: \n${msgMensajeRespuesta}`+ `\n\n\nFavor no responder a este correo!`
            }).then((info: any) => {
                console.log({ info });
            }).catch(console.error);
            }
            else

            {
                let texto : string
                let PrnFecha : string
                let hora : number
                let content : string
                content = ''

                if(status == 'RECHAZADA'){
                        texto = `Estimado proveedor: \nSu solicitud de cita o reunion no puede ser tramitada por el momento!\nRespuesta: \n${msgMensajeRespuesta}`
                }
                  else
                  {
                    let acuerdo : string = ''
                    let encabeza : string = 'Su solicitud de cita o reunion sera tramitada en fecha:\n\n'
                    let piepage : string = ''
                    
                    acuerdo =msgMensajeRespuesta
                    if(acuerdo) {
                        
                         encabeza = 'Acuerdos y anotaciones importantes de nuestra reunión del:'
                         piepage = msgResult[0]?.UsuarioRecep
                    }
                    else {
                        encabeza  = 'Su solicitud de cita o reunion sera tramitada en fecha:\n\n'
                        acuerdo= ''
                        piepage = `Su referencia de solicitud de reunión:\n\n${msgResult[0].msgMensaje}\n\n${msgResult[0]?.UsuarioRecep}`
                       
                    }
                    
                    console.log('ACUERDO: ////////////',msgMensajeRespuesta)
                    console.log('fecha cita',fechaCita)

                    

                    PrnFecha =  fechaCita.substr(8,2)+'-'+fechaCita.substr(5,2)+'-'+fechaCita.substr(0,4) + ' Hora: ' 
                    
                    hora = Number(fechaCita.substr(11,2))
                    hora = hora - 6

                    PrnFecha = PrnFecha + hora.toString() + fechaCita.substr(13,3)


                    console.log('Fecha a imprimir:*****************************************',PrnFecha)
                    
                    //texto = `Estimado proveedor: \nSu solicitud de cita o reunion sera tramitada en fecha:\n ${PrnFecha}\n\n${acuerdo}\n\n\n\nMensaje Original:${msgResult[0].msgMensaje}`
                    texto = `Estimado proveedor: \n${encabeza}\n\n${PrnFecha}\n\n${acuerdo}\n${piepage}`
                    console.log('Texto',texto  )

                    const ics = require('ics')
                    const ical = require('ical-generator')

                    content = ical({
                        domain: 'google.com',
                        method: 'PUBLISH',
                        prodId: '//Google Inc//Google Calendar 70.9054//EN',
                        timezone: 'Australia/Brisbane',
                        scale: 'GREGORIAN',
                        events: [
                          {
                            start: fechaCita,
                            status: 'CONFIRMED',
                            end:  fechaCita,
                            summary: 'Cita GESSA ',
                            transparency: 'OPAQUE',
                            organizer: {
                              name: 'GESSA',
                              email: UsuarioSend,
                              mailto: UsuarioRecep
                            },
                            location: 'Zoom/Presencial',
                            attendees: [
                              {
                                email: UsuarioSend,
                                name: '',
                                status: 'NEEDS-ACTION',
                                rsvp: true,
                                type: 'INDIVIDUAL',
                                role: 'REQ-PARTICIPANT'
                              },
                              {
                                email: UsuarioRecep,
                                name: '',
                                status: 'NEEDS-ACTION',
                                rsvp: true,
                                type: 'INDIVIDUAL',
                                role: 'REQ-PARTICIPANT'
                              },
                         
                            ]
                          }
                        ]
                      }).toString();
                    
                }

                console.log(content)
                     
                    
                
                transporter.sendMail({
                    from: '"conexiongessa" <contacto@conexiongessa.com>', // sender address
                    to: msgResult[0]?.UsuarioSend, // list of receivers
                    cc: totalDestinos,
                    subject: 'Respuesta a Solicitud de Cita:'+ msgResult[0]?.Asunto + ' Estatus:' + status,
                    //text: `Estimado proveedor:,\nSu solicitud de inclusión del UPC  ha ingresado. El mismo será revisado de acuerdo con la ventana de tiempo de la categoría a la que pertenece.  En ese momento estaremos comunicándole nuestra decisión.`, // html body
                    // headers: {
                    //     'x-invite': {
                    //       prepared: true,
                          
                    //     }
                    //   },
                    
                    icalEvent: {
                               filename: 'invite.ics',
                               method: 'PUBLISH',
                              content: content
                             },
                    
                   
                    
                    html: texto + `\n\n\nFavor no responder a este correo!`
                    // `Convocatoria a reunion: \n Fecha: Mensaje Inicial: \n ${msgResult[0].msgMensaje} \n Mensaje Respuesta: \n${msgMensajeRespuesta}`
                }).then((info: any) => {
                    console.log({ info });
                }).catch(console.error);

            }
        }
          
        return items;
       // return null;
    }
    catch (error) { console.log('error',error)
    }
}


exports.getReportes = async (proveedor_id: string) => {
     const sequelize = require('./database');
    try {
        let Reportes: any[];
        Reportes = await sequelize.query(`
        SELECT        AnalyticsAsignaciones.CEDJURIDICA, Analytics.REPORTE_DSC, Analytics.LINK
        FROM            Analytics INNER JOIN
                AnalyticsAsignaciones ON Analytics.REPORTE_ID = AnalyticsAsignaciones.REPORTE_ID AND
				Analytics.ESTADO = AnalyticsAsignaciones.ESTADO
				where CEDJURIDICA = '${proveedor_id}'`, { type: QueryTypes.SELECT });
        return Reportes;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}



exports.getAsuntos = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const Asuntos = await models.AsuntosMsg.findAll();
        return Asuntos;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}


exports.getAsunto = async (asunto_id: number) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const Asunto = await models.AsuntosMsg.findOne({ where: { asunto_id:asunto_id } });
        return Asunto;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}


exports.delAsuntos = async (asunto_id: number) => {
     const sequelize = require('./database');
    try {
        //console.log('id reporte a borrar:------------------------------------>>>>>>>>>>>>>>>',reporte_id)
        const models = initModels(sequelize);
        const Count = await models.AsuntosMsg.destroy({ where: { asunto_id: asunto_id } });
        return Count
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.editAsuntos= async (asunto_id: number,asunto_dsc: string, tipoAsunto: string) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const asunto = await models.AsuntosMsg.findOne({where: { asunto_id: asunto_id} }) ;
        if(asunto){
            //console.log('SI ENCONTRO REGISTRO>>>>>',analytics.REPORTE_ID)
            const models = initModels(sequelize);


                

                    const Asunto = await models.AsuntosMsg.update(
                        {
                            asunto_dsc: asunto_dsc, 
                            tipoAsunto: tipoAsunto,

                           
                        }, {where: {asunto_id:asunto.asunto_id}});
                        return Asunto;
                

            
        }
        else
        {
            //console.log('Valor desc ))))))))))))))))))))))',REPORTE_DSC)
        const models = initModels(sequelize);
        const Asunto = await models.AsuntosMsg.create({
            asunto_dsc: asunto_dsc, tipoAsunto: tipoAsunto
        });
        
        return Asunto;
    }
    }

    catch (error) {
        console.warn(error);
    }
}






exports.getPuestos = async () => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const Puestos = await models.Puestos.findAll();
        return Puestos;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}


exports.getPuesto = async (IdPuesto: number) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const Puesto = await models.Puestos.findOne({ where: { IdPuesto:IdPuesto } });
        return Puesto;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}


exports.delPuestos = async (IdPuesto: number) => {
     const sequelize = require('./database');
    try {
        //console.log('id reporte a borrar:------------------------------------>>>>>>>>>>>>>>>',reporte_id)
        const models = initModels(sequelize);
        const Count = await models.Puestos.destroy({ where: { IdPuesto: IdPuesto } });
        return Count
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.editPuestos= async (IdPuesto: number,DescripcionPuesto: string) => {
     const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const puesto = await models.Puestos.findOne({where: { IdPuesto: IdPuesto} }) ;
        if(puesto){
            //console.log('SI ENCONTRO REGISTRO>>>>>',analytics.REPORTE_ID)
            const models = initModels(sequelize);


                

                    const Puestos = await models.Puestos.update(
                        {
                            DescripcionPuesto: DescripcionPuesto, 
                            

                           
                        }, {where: {IdPuesto:puesto.IdPuesto}});
                        return Puestos;
                

            
        }
        else
        {
            //console.log('Valor desc ))))))))))))))))))))))',REPORTE_DSC)
        const models = initModels(sequelize);
        const Puesto = await models.Puestos.create({
            DescripcionPuesto: DescripcionPuesto
        });
        
        return Puesto;
    }
    }

    catch (error) {
        console.warn(error);
    }
}


exports.createImage = async (item: PublicadorImagenesAttributes) => {
     const sequelize = require('./database');
    console.log('En CREACION DE IMAGEN::',item)
    try {
        const models = initModels(sequelize);
        const exists = await models.PublicadorImagenes.findOne({ where: { gtin: item.gtin, glnPublicador: item.glnPublicador, nombre: item.nombre} });
        if (exists) {
            const items = await models.PublicadorImagenes.update(item, { where: { gtin: item.gtin, glnPublicador: item.glnPublicador, nombre: item.nombre } });
            return items;
        }
        else {
            const items = await models.PublicadorImagenes.create(item);
            return items;
        }

    } catch (error) {
        console.error('Error tratando grabar imagen:', error);
    }
}




exports.getPacientes = async () => {
   const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const Pacientes = await models.pacientes.findAll();
        //console.log(Pacientes)
        return Pacientes;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}




exports.getEstadosEquipos= async () => {
  const sequelize = require('./database');
    try {
        const models = initModels(sequelize)
        const estadosequipos = await models.EstadosEquipos.findAll({order: [['IdEstadoEquipo', 'DESC']]});
        console.log(estadosequipos)
        return estadosequipos;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getEvaluacionVisitas= async () => {
    const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const evaluacionvisitas = await models.EvaluacionesVisitas.findAll();
        //(evaluacionvisitas)
        return evaluacionvisitas;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}


exports.getMesesVisitas= async () => {
    const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const mesesvisitas = await models.MesesVisitas.findAll({order: [['IdMesVisita', 'DESC']]});
        //console.log(mesesvisitas)
        return mesesvisitas;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getHospitales= async () => {
    const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const hospitales = await models.Hospitales.findAll();
        //console.log(hospitales)
        return hospitales;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getTiposEquipos= async () => {
   const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const tiposequipos = await models.TiposEquipos.findAll({order: [['IdTipoEquipo', 'DESC']]});
        //console.log(tiposequipos)
        return tiposequipos;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getTiposVisitas= async () => {
    const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const tiposvisitas = await models.TiposVisitas.findAll({order: [['IdTipoVisita', 'DESC']]});
        //console.log(tiposvisitas)
        return tiposvisitas;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}



exports.getTerapeutas= async () => {
    const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const terapeutas = await models.terapeutas.findAll();
        //console.log(terapeutas)
        return terapeutas;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}


exports.getVisitasHospitales= async (Id:string, sn:string='', confirma : number ) => {
   const sequelize = require('./database');
    try {
         console.log(Id,sn)
        console.log('EL ID ES:',Id,confirma)
        const models = initModels(sequelize);

        if (confirma === undefined) {confirma = 1}
     
  
        if(sn) {
            
            console.log('LO QUE QUIERO HACE AQUI ES CAMBIAR EL ESTATUS ',confirma)
           let strupdate = `  update VisitasHospitales set sharepoint = ${confirma} where id   = '${Id}' `
           await sequelize.query(strupdate, { type: QueryTypes.UPDATE });
            let visitas : any[];
            visitas= await sequelize.query(` select * from View_VisitasReferenciadas where ( View_VisitasReferenciadas.Id = '${Id}'   ) `, { type: QueryTypes.SELECT });
            console.log('LA NUEVA VISITA',visitas)
            return visitas;
        

        }

            else {
               
                const visitashospital = await models.VisitasHospitales.findOne({where: { Id: Id }});
                 console.log('VISITAS NORMALES',visitashospital)

                // console.log('VALOR DE VISITAS',visitashospital)
                

                if(!visitashospital)
                {
                    let visitasH : any[];
                    visitasH= await sequelize.query(` select * from ViewVisitasHospitalesH where ( Id = '${Id}'   ) `, { type: QueryTypes.SELECT });
                    console.log('LA NUEVA VISITA TOTALES',visitasH)
                    return visitasH[0];
                 }

                 return visitashospital;
            }


       
      
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getPacientesXTerapeuta2 = async (IdTerapeuta:string) => {
    const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        const Paciente = await models.pacientes.findAll({ where: { IdTerapeuta: IdTerapeuta } });
       // console.log('RETORNA LOS PACIENTES **********************************',Paciente[0])
        return Paciente;
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getPacienteKey = async (IdTerapeuta:string,IdMesVisita:string,idPaciente:string,IdTipoVisita:string,IdTipoEquipo:string) => {
    const sequelize = require('./database');
    try {

       // visitasH= await sequelize.query(` select * from ViewVisitasHospitalesH where ( Id = '${Id}'   ) `, { type: QueryTypes.SELECT });
        let HayVisitaRegistrada: any[];            
        HayVisitaRegistrada= await sequelize.query(` SELECT 
                                                CASE 
                                                    WHEN EXISTS (
                                                        SELECT 1 
                                                        FROM ViewVisitasTotales
                                                        WHERE idTerapeuta = '${IdTerapeuta.trimEnd()}' 
                                                        AND IdMesVisita = '${IdMesVisita.trimEnd()}'
                                                        AND idPaciente = '${idPaciente.trimEnd()}'
                                                        AND IdTipoVisita = '${IdTipoVisita.trimEnd()}'
                                                        AND IdTipoEquipo = '${IdTipoEquipo.trimEnd()}'
                                                    )
                                                    THEN CAST(1 AS BIT)
                                                    ELSE CAST(0 AS BIT)
                                                END AS Existe; `, { type: QueryTypes.SELECT });
             console.log('HAY VISITA REGISTRADA:',HayVisitaRegistrada[0].Existe)
             if(HayVisitaRegistrada[0].Existe== true )
                { return true  } 
             else return false                                           
        
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}



exports.getImagenesCarrousel = async (IdTerapeuta:string='') => {
  const sequelize = require('./database');

    cloudinary.config({
      cloud_name: "dobmsdhws",
      api_key: "974251859628622",
      api_secret: "dAFHTQ_pP7pp7b6BF2_K3I5JxyA",
    });
    
    try {
    const { resources } = await cloudinary.search
      .expression("folder:VisitasAmimedGuide") // Cambia si el nombre de carpeta es otro
      .sort_by("public_id", "asc")
      .max_results(30)
      .execute();

    if (!resources.length) {
      console.warn("⚠ No se encontraron imágenes en la carpeta VisitasAmimedGuide");
    }

    return resources.map((file: any) => file.secure_url);
  } catch (error) {
    console.error("❌ Error consultando Cloudinary:", error);
    return [];
  }
}


exports.getPacientesXTerapeuta = async (IdTerapeuta:string) => {
  const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        let Paciente : any[];

        Paciente= await sequelize.query(`
        
       select * from pacientes where Modalidad = '- REGULAR' and IdTerapeuta in ((select  idterapeutaPaciente from terapeutasPacientes where idterapeuta =  (${IdTerapeuta})  ))
         or IdTerapeuta = 999999 order by NombrePaciente


        `, { type: QueryTypes.SELECT });

      //  console.log(Paciente)
        return Paciente;



     
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}


exports.getReferencias = async (IdReferencia:number) => {
    const sequelize = require('./database');
    try {
        const models = initModels(sequelize);
        if(IdReferencia==0) {
             const Referencias = await models.ReferenciasVisitas.findAll();
             console.log(Referencias)
                 return Referencias;

        }
        else
         
        {
        const Referencias = await models.ReferenciasVisitas.findAll({ where: { IdReferencia: IdReferencia } });
         //   console.log(Referencias)
        return Referencias;

        }
       
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}



exports.getVisitasxTerapeuta= async (idTerapeuta:string, patron : string = '') => {
   const sequelize = require('./database');
    
        
        try {
            console.log(idTerapeuta)
            let filtro = ''
            if(patron.length>0) filtro = `and upper(NombrePaciente) like  '%` + patron + `%'` 

            console.log('patron',patron)
            console.log('EL FILTRO ES',filtro)

            let visitas : any[];
            visitas= await sequelize.query(`
            SELECT        VisitasHospitales.Id, VisitasHospitales.IdHospital, Hospitales.DscHospital, VisitasHospitales.idPaciente, pacientes.NombrePaciente, 
                         VisitasHospitales.IdTerapeuta, terapeutas.NombreTerapeuta, VisitasHospitales.IdMesVisita, MesesVisitas.DscMesVisita, VisitasHospitales.FechaVisita, VisitasHospitales.IdTipoVisita, TiposVisitas.DscTipoVisita, 
                         VisitasHospitales.IdTipoEquipo, TiposEquipos.DscTipoEquipo, VisitasHospitales.FrecuenciaCardiaca, VisitasHospitales.PresionArterialSistolica, VisitasHospitales.PresionArterialDiastolica, 
                         VisitasHospitales.SaturacionOxigeno, VisitasHospitales.HoraUsoPromDia, VisitasHospitales.HorasTotalMensuales, VisitasHospitales.DiasUsoSobreTotal, VisitasHospitales.FugaLmin, VisitasHospitales.IndiceApnea, 
                         VisitasHospitales.PresionUtilizadaEpap, VisitasHospitales.PresionUtilizadaIPAP, VisitasHospitales.PresionUtilizadaCPAP, VisitasHospitales.CambioEquipo, VisitasHospitales.NumSerieEquipoyDN, 
                         VisitasHospitales.IdEstadoEquipo, EstadosEquipos.DscEstadoEquipo, VisitasHospitales.IdEvaluacionVisita, EvaluacionesVisitas.DscEvaluacionVisitas, VisitasHospitales.ObservacionesClinicas, 
                         VisitasHospitales.ComentariosAdministrativos,SharePoint,EstadoPaciente,AdherenciaUsoTratamiento,CambEquiInsuTrata,CondTrataYParam,SituaEspecYCoordi
                        ,MtoPreventivo

                        FROM            VisitasHospitales INNER JOIN
                         pacientes ON VisitasHospitales.idPaciente = pacientes.idPaciente left JOIN
                         EstadosEquipos ON VisitasHospitales.IdEstadoEquipo = EstadosEquipos.IdEstadoEquipo left JOIN
                         EvaluacionesVisitas ON VisitasHospitales.IdEvaluacionVisita = EvaluacionesVisitas.IdEvaluacionVisita 
                         INNER JOIN
                         MesesVisitas ON VisitasHospitales.IdMesVisita = MesesVisitas.IdMesVisita left JOIN
                         TiposEquipos ON VisitasHospitales.IdTipoEquipo = TiposEquipos.IdTipoEquipo left JOIN
                         TiposVisitas ON VisitasHospitales.IdTipoVisita = TiposVisitas.IdTipoVisita INNER JOIN
                         terapeutas ON VisitasHospitales.IdTerapeuta = terapeutas.IdTerapeuta INNER JOIN
                         Hospitales ON VisitasHospitales.IdHospital = Hospitales.IdHospital
						 where ( VisitasHospitales.IdTerapeuta ='${idTerapeuta}' ` + filtro + ` ) order by NombreTerapeuta,DscMesVisita,pacientes.NombrePaciente

            `, { type: QueryTypes.SELECT });
            return visitas;



    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}


exports.getVisitasxTerapeutaHisto= async (idTerapeuta:string) => {
    const sequelize = require('./database');
    
        
        try {
            console.log(idTerapeuta)
            let visitasHistoricas : any[];
            visitasHistoricas= await sequelize.query(`
            SELECT        VisitasHospitales.Id, VisitasHospitales.IdHospital, Hospitales.DscHospital, VisitasHospitales.idPaciente, pacientes.NombrePaciente, 
                         VisitasHospitales.IdTerapeuta, terapeutas.NombreTerapeuta, VisitasHospitales.IdMesVisita, MesesVisitas.DscMesVisita, VisitasHospitales.FechaVisita, VisitasHospitales.IdTipoVisita, TiposVisitas.DscTipoVisita, 
                         VisitasHospitales.IdTipoEquipo, TiposEquipos.DscTipoEquipo, VisitasHospitales.FrecuenciaCardiaca, VisitasHospitales.PresionArterialSistolica, VisitasHospitales.PresionArterialDiastolica, 
                         VisitasHospitales.SaturacionOxigeno, VisitasHospitales.HoraUsoPromDia, VisitasHospitales.HorasTotalMensuales, VisitasHospitales.DiasUsoSobreTotal, VisitasHospitales.FugaLmin, VisitasHospitales.IndiceApnea, 
                         VisitasHospitales.PresionUtilizadaEpap, VisitasHospitales.PresionUtilizadaIPAP, VisitasHospitales.PresionUtilizadaCPAP, VisitasHospitales.CambioEquipo, VisitasHospitales.NumSerieEquipoyDN, 
                         VisitasHospitales.IdEstadoEquipo, EstadosEquipos.DscEstadoEquipo, VisitasHospitales.IdEvaluacionVisita, EvaluacionesVisitas.DscEvaluacionVisitas, VisitasHospitales.ObservacionesClinicas, 
                         VisitasHospitales.ComentariosAdministrativos,SharePoint,EstadoPaciente,AdherenciaUsoTratamiento,CambEquiInsuTrata,CondTrataYParam,SituaEspecYCoordi,MtoPreventivo


                          FROM            VisitasHospitalesHistorico as VisitasHospitales INNER JOIN
                         pacientes ON VisitasHospitales.idPaciente = pacientes.idPaciente left JOIN
                         EstadosEquipos ON VisitasHospitales.IdEstadoEquipo = EstadosEquipos.IdEstadoEquipo left JOIN
                         EvaluacionesVisitas ON VisitasHospitales.IdEvaluacionVisita = EvaluacionesVisitas.IdEvaluacionVisita 
                         INNER JOIN
                         MesesVisitas ON VisitasHospitales.IdMesVisita = MesesVisitas.IdMesVisita left JOIN
                         TiposEquipos ON VisitasHospitales.IdTipoEquipo = TiposEquipos.IdTipoEquipo left JOIN
                         TiposVisitas ON VisitasHospitales.IdTipoVisita = TiposVisitas.IdTipoVisita INNER JOIN
                         terapeutas ON VisitasHospitales.IdTerapeuta = terapeutas.IdTerapeuta INNER JOIN
                         Hospitales ON VisitasHospitales.IdHospital = Hospitales.IdHospital
						 where ( VisitasHospitales.IdTerapeuta ='${idTerapeuta}'   ) order by NombreTerapeuta,DscMesVisita,pacientes.NombrePaciente

            `, { type: QueryTypes.SELECT });
            return visitasHistoricas;



    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.getPacientesVisitas= async (IdTerapeuta:string, IdMesVisita:string='011') => {
    const sequelize = new Sequelize(process.env.DB_DATABASE ?? "tucontad_medimed", process.env.DB_USER ?? "charly", process.env.DB_PASSWORD ?? "Charly2021", {
        host: process.env.DB_HOST ?? '144.126.138.17',
        dialect: 'mssql', port:1434 ,
        dialectOptions: {
        options: {
          encrypt: false,
          trustServerCertificate: true,
          requestTimeout: 120000, // ⏱️ tiempo máximo de ejecución de la consulta (ms)
          connectTimeout: 120000   // ⏱️ tiempo máximo para conectar
        }}
       
    });
    console.log('EL ID MES DE VISITA ES:',IdMesVisita)
        
        try {
            // console.log(idTerapeuta)
            let pacientes : any[];
            pacientes= await sequelize.query(` 
                        SELECT        t .idPaciente, t .NombrePaciente, t .IdTerapeuta, t .IdHospital, t .IdMesVisita, t .FechaVisita, t .SharePoint
                        FROM            ViewVisitasTotales t
                        WHERE        (t .IdMesVisita =  '${IdMesVisita}'   and IdTerapeuta =  '${IdTerapeuta}'  )
                        UNION
                        SELECT        p.idPaciente, p.NombrePaciente, p.IdTerapeuta, hospital, '', '', ''
                        FROM            pacientes p WHERE        idPaciente NOT IN
                        (SELECT        idPaciente FROM            ViewVisitasTotales
                        WHERE        (ViewVisitasTotales.IdMesVisita =('${IdMesVisita}' ))) AND modalidad = '- REGULAR' and IdTerapeuta =  '${IdTerapeuta}'  
                        order by NombrePaciente `, { type: QueryTypes.SELECT });
            return pacientes;

            


    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}



exports.getVisitasXFiltros= async (IdHospital:string,IdMesVisita:string) => {
    const sequelize = new Sequelize(process.env.DB_DATABASE ?? "tucontad_medimed", process.env.DB_USER ?? "charly", process.env.DB_PASSWORD ?? "Charly2021", {
        host: process.env.DB_HOST ?? '144.126.138.17',
        dialect: 'mssql', port:1434 ,
        dialectOptions: {
        options: {
          encrypt: false,
          trustServerCertificate: true,
          requestTimeout: 120000, // ⏱️ tiempo máximo de ejecución de la consulta (ms)
          connectTimeout: 120000   // ⏱️ tiempo máximo para conectar
        }}
       
    });
    
        
        try {
            // console.log(idTerapeuta)
            let visitas : any[];
            visitas= await sequelize.query(` select * from Viewvisitastotales 
            where ( IdHospital ='${IdHospital}'  or  '${IdHospital}' ='*') and (IdMesVisita ='${IdMesVisita}'  or  '${IdMesVisita}' ='*' )  and  sharepoint = 1  order by DscMesVisita,NombrePaciente

            `, { type: QueryTypes.SELECT });
            return visitas;

            


    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}


exports.getVisitasXFiltrosAntes= async (IdHospital:string,IdMesVisita:string) => {
   const sequelize = require('./database');
    
        
        try {
            // console.log(idTerapeuta)
            let visitas : any[];
            visitas= await sequelize.query(`
            SELECT       VisitasHospitales.Id, VisitasHospitales.IdHospital, Hospitales.DscHospital, VisitasHospitales.idPaciente, pacientes.NombrePaciente, 
                         VisitasHospitales.IdTerapeuta, terapeutas.NombreTerapeuta, VisitasHospitales.IdMesVisita, MesesVisitas.DscMesVisita, VisitasHospitales.FechaVisita,
						 VisitasHospitales.IdTipoVisita, ReferenciasVisitas.DsReferencica as DscTipoVisita, 
                         VisitasHospitales.IdTipoEquipo, TiposEquipos.DscTipoEquipo, VisitasHospitales.FrecuenciaCardiaca, VisitasHospitales.PresionArterialSistolica, 
                         VisitasHospitales.PresionArterialDiastolica, 
                         VisitasHospitales.SaturacionOxigeno, VisitasHospitales.HoraUsoPromDia, VisitasHospitales.HorasTotalMensuales, VisitasHospitales.DiasUsoSobreTotal, 
                         VisitasHospitales.FugaLmin, VisitasHospitales.IndiceApnea, 
                         VisitasHospitales.PresionUtilizadaEpap, VisitasHospitales.PresionUtilizadaIPAP, VisitasHospitales.PresionUtilizadaCPAP, 
                         VisitasHospitales.CambioEquipo, VisitasHospitales.NumSerieEquipoyDN, 
                         VisitasHospitales.IdEstadoEquipo, EstadosEquipos.DscEstadoEquipo, VisitasHospitales.IdEvaluacionVisita, 
                         EvaluacionVisitas.DsReferencica as DscEvaluacionVisitas, VisitasHospitales.ObservacionesClinicas, 
                         VisitasHospitales.ComentariosAdministrativos,SharePoint,
						 EstadoPaciente,isnull(EstadoPaciente.DsReferencica,' ') as DsEstadoPaciente,
						 AdherenciaUsoTratamiento,isnull(AdherenciaUsoTratamiento.DsReferencica,' ') as DsAdherenciaUsoTratamiento,
						 CambEquiInsuTrata,isnull(CambEquiInsuTrata.DsReferencica,' ') as DsCambEquiInsuTrata,
						 CondTrataYParam,isnull(CondTrataYParam.DsReferencica,' ') as DsCondTrataYParam,
						 SituaEspecYCoordi,isnull(SituaEspecYCoordi.DsReferencica,' ') as DsSituaEspecYCoordi
						 FROM            VisitasHospitales left JOIN
                         pacientes ON VisitasHospitales.idPaciente = pacientes.idPaciente left JOIN
                         EstadosEquipos ON VisitasHospitales.IdEstadoEquipo = EstadosEquipos.IdEstadoEquipo left JOIN
                         ReferenciasVisitas as EvaluacionVisitas ON VisitasHospitales.IdEvaluacionVisita = EvaluacionVisitas.IdTipoReferencia inner JOIN
                         MesesVisitas ON VisitasHospitales.IdMesVisita = MesesVisitas.IdMesVisita left JOIN
                         TiposEquipos ON VisitasHospitales.IdTipoEquipo = TiposEquipos.IdTipoEquipo left JOIN
                         ReferenciasVisitas ON VisitasHospitales.IdTipoVisita = ReferenciasVisitas.IdTipoReferencia inner JOIN
                         terapeutas ON VisitasHospitales.IdTerapeuta = terapeutas.IdTerapeuta INNER JOIN
                         Hospitales ON VisitasHospitales.IdHospital = Hospitales.IdHospital left JOIN 
						 ReferenciasVisitas as EstadoPaciente ON VisitasHospitales.EstadoPaciente = EstadoPaciente.IdTipoReferencia left join
						 ReferenciasVisitas as AdherenciaUsoTratamiento ON VisitasHospitales.AdherenciaUsoTratamiento = AdherenciaUsoTratamiento.IdTipoReferencia left join
						 ReferenciasVisitas as CambEquiInsuTrata ON VisitasHospitales.CambEquiInsuTrata = CambEquiInsuTrata.IdTipoReferencia left join
						 ReferenciasVisitas as CondTrataYParam ON VisitasHospitales.CondTrataYParam = CondTrataYParam.IdTipoReferencia left join
						 ReferenciasVisitas as SituaEspecYCoordi ON VisitasHospitales.SituaEspecYCoordi = SituaEspecYCoordi.IdTipoReferencia 
						 where ( VisitasHospitales.IdHospital ='${IdHospital}'  and VisitasHospitales.IdMesVisita ='${IdMesVisita}'   and  sharepoint = 1 ) order by DscMesVisita,pacientes.NombrePaciente

            `, { type: QueryTypes.SELECT });
            return visitas;



    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}



exports.getVisitasXFiltrosHistoricas= async (IdHospital:string='*',IdMesVisita:string='*',patron : string = '',idTerapeuta:string='*') => {
   const sequelize = require('./database');
    
        
        try {
            // console.log(idTerapeuta)
            let filtro = ''
            if(patron.length>0) filtro = `and upper(NombrePaciente) like  '%` + patron + `%'` 

            let visitas : any[];
            visitas= await sequelize.query(`
            
            SELECT  * from View_visitas_historicas     
            where (View_visitas_historicas.IdTerapeuta = '${idTerapeuta}' or  '${idTerapeuta}' ='*')
            and  ( View_visitas_historicas.IdHospital ='${IdHospital}' or  '${IdHospital}' ='*')  
            and  (View_visitas_historicas.IdMesVisita ='${IdMesVisita}' or '${IdMesVisita}' = '*'   ) ` + filtro + `
            order by DscMesVisita,NombrePaciente  `, { type: QueryTypes.SELECT });
            return visitas;



    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}


exports.createPaciente = async (paciente: pacientesAttributes) => {
const sequelize = require('./database');
    console.log('LA VISITA**********************************',paciente)
    try {
        const models = initModels(sequelize);
        
        const exists = await models.pacientes.findOne({ where: { idPaciente: paciente.idPaciente  } });
        if (exists) {
            console.log('Existe? ',exists)
            // const visitas = await models.VisitasHospitales.update(visita, { where: { Id: visita.Id } });
            // return visitas;
            return null
        }
        else {
           
            const pacientex = await models.pacientes.create(paciente);
            return pacientex;
        }
        return null
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.updatePaciente = async (paciente: pacientesAttributes) => {
 const sequelize = require('./database');
try {
    const models = initModels(sequelize);
    //console.log('Proveedor' ,prove)
    const exists = await models.pacientes.findOne({ where: { idPaciente: paciente.idPaciente } });
    if (exists) {
        console.log('Existe? ',exists)
        const pacientex = await models.pacientes.update(paciente, { where: { idPaciente: paciente.idPaciente } });
        return pacientex;
        return null
    }
   
return null
} catch (error) {
    console.error('unable to connect to the datatabase:', error);
}
}

exports.deletePaciente = async (Id: string) => {
 const sequelize = require('./database');
    try {
        console.log('id visita a borrar:------------------------------------>>>>>>>>>>>>>>>',Id)
        const models = initModels(sequelize);
        const Count = await models.VisitasHospitales.destroy({ where: { Id: Id } });

       
        
        
        return Count
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}




exports.createVisita = async (visita: VisitasHospitalesAttributes) => {
 const sequelize = require('./database');
    console.log('LA VISITA**********************************',visita)
    try {
        const models = initModels(sequelize);
        
        const exists = await models.VisitasHospitales.findOne({ where: { Id: visita.Id } });
        if (exists) {
            console.log('Existe? ',exists)
            // const visitas = await models.VisitasHospitales.update(visita, { where: { Id: visita.Id } });
            // return visitas;
            return null
        }
        else {

             const visitas = await models.VisitasHospitales.create(
            visita,
            { returning: false }
        );
           
            
        }
        return null
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}

exports.updateVisita = async (visita: VisitasHospitalesAttributes) => {
 const sequelize = require('./database');
 console.log('recibe datos visita',visita)
try {
    const models = initModels(sequelize);
    //console.log('Proveedor' ,prove)
    const exists = await models.VisitasHospitales.findOne({ where: { Id: visita.Id } });
    if (exists) {
        console.log('Existe? ',exists)
        const visitas = await models.VisitasHospitales.update(visita, { where: { Id: visita.Id } });
        //return visitas;
        return null
    }
            
return null
} catch (error) {
    console.error('unable to connect to the datatabase:', error);
}
}


exports.deleteVisita = async (Id: string) => {
  const sequelize = require('./database');
    try {
        console.log('id visita a borrar:------------------------------------>>>>>>>>>>>>>>>',Id)
        const models = initModels(sequelize);
        const Count = await models.VisitasHospitales.destroy({ where: { Id: Id } });

       
        
        
        return Count
    } catch (error) {
        console.error('unable to connect to the datatabase:', error);
    }
}



exports.getMenuconfig =  async (gln: string) => {
 const sequelize = require('./database');
  try {

   
    let menues : any[];
            menues= await sequelize.query(`

                        SELECT
                        codigo,
                        name,
                        icon,
                        component,
                        activo,
                        mensaje,
                        orden
                        FROM ConfigMenu
                        WHERE
                        (
                            '${gln}' <> '*' AND soloAdmin = 0
                        )
                        OR
                        (
                            '${gln}' = '*' AND soloAdmin = 1
                        )
                        ORDER BY orden
            
             `, { type: QueryTypes.SELECT });
            return menues;

  

 



  } catch (error) {

    console.log(error);
    
  }

};


// FIN DEL CODIGO final
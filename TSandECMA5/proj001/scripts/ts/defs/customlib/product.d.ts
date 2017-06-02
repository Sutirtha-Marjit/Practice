interface PriceUnitCombo{
    price:number,
    unit:string
}
interface ProductFeature{
    name:string,
    uid:string,
    registeredOn:Date,
    category:string
    price:PriceUnitCombo
}
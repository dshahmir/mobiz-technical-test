export interface FilterOptionPropType{
    label:string,
    value:string
}

export interface ProductPropType{
    brand:string,
    category:string,
    description:string,
    discountPercentage:number
    id:number
    images:[string]
    price:number,
    rating:number,
    stock:number,
    thumbnail:string,
    title:string
}

export interface ProductsPropType{
    products:ProductPropType[] | never[]
}
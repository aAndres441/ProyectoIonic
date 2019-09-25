export interface Order {
    id : number;
    productId:number;
    productName : string;
    purchaseId:number;
    saleId:number;
    description : string;
    count : number;
    totalAmount : number;
    unitPrice:number;
    tmstmp : Date;
}
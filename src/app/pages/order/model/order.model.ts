export interface Order {
    id : number;
    productId:number;
    productName : string;
    purchaseId:number;
    saleId:number;
    charterId:number;
    description : string;
    count : number;
    totalAmount : number;
    tmstmp : Date;
}
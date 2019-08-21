import { Product } from '../../product/model/product.model';
import { Sale } from '../../sale/model/sale.model';

export class Order {
    id : number;
    productId:number;
    productName : string;
    purchaseId:number;
    saleId:number;
    description : string;
    count : number;
    totalAmount : number;
    tmstmp : Date;
    constructor(){}
}
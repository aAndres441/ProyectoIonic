export interface OrderSerializer {
    id : number;
    product : string;
    description : string;
    count : number;
    totalAmount : number;
    tmstmp : Date;
}
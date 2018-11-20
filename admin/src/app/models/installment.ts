import { LocalstorageConverterService } from "app/services/localstorage-converter.service";

export class Installment {
    public id:string;
    public purchase_id:string;
    public payment_amount:number;
    public gold_price_during_payment: number;
    public localStorageService: LocalstorageConverterService;
    public purchase_time_and_date: Date;


    constructor(id:string, purchase_id : string, payment_amount:number, gold_price_during_payment:number){
        this.id = id;
        this.purchase_id = purchase_id;
        this.payment_amount = payment_amount;
        this.gold_price_during_payment = gold_price_during_payment;
        this.purchase_time_and_date = new Date();
    }
}

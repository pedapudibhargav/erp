import { LocalstorageConverterService } from "app/services/localstorage-converter.service";

export class Purchase {

    public id: string;
    public supplier_id: string;
    public wastage: number;
    public payment_type: string;
    public purchase_date_and_time: Date;
    public purchasetime_gold_value: number;
    public last_date_of_payement: Date;
    public total_weight: number;
    public total_weight_with_wastage: number;
    public total_cash: number;
    public pending_cash_balance: number;
    public pending_weight_balance: number;
    public paid_cash: number;
    public prducts_list: any[];
    ngOnInit() {
    }

    constructor(
       supplier_id: string,
       wastage: number,
       payment_type: string,
       purchasetime_gold_value: number,
       last_date_of_payement: Date,
       total_weight: number,
       total_cash: number,
       pending_cash_balance: number,
       pending_weight_balance: number,
       paid_cash: number,
       prducts_list: any[]    
    ){
        if(payment_type == "fixed_gold_price_installment" || payment_type == "100_per_spot_payment" ){
            total_cash =  (((total_weight/92)*wastage) + total_weight) * purchasetime_gold_value;
            pending_cash_balance = Number(total_cash.toFixed(2));
        }
        var localStorageServ = new LocalstorageConverterService;
        this.id= "PUR"+ localStorageServ.getJsonObjectByKey("purchases").length;
        this.supplier_id = supplier_id
        this.wastage = wastage
        this.payment_type = payment_type;
        this.purchase_date_and_time = new Date();
        this.purchasetime_gold_value = purchasetime_gold_value;
        this.last_date_of_payement= last_date_of_payement;
        this.total_weight= total_weight
        this.total_cash= total_cash
        this.pending_cash_balance = pending_cash_balance;
        this.total_weight_with_wastage = Number((total_weight + ((total_weight/92)*wastage)).toFixed(2));
        this.pending_weight_balance = Number((total_weight + ((total_weight/92)*wastage)).toFixed(2));
        // console.log("Total Weight:" + total_weight + ", Wastage:" + wastage);
        // console.log("Pending weight Balance:" + this.pending_weight_balance);
        this.paid_cash = paid_cash ;
        this.prducts_list = prducts_list;

    }

}
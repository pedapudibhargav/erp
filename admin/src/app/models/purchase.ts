export class Purchase {

    public id: string;
    public supplier_id: string;
    public wastage: string;
    public payment_type: string;
    public purchase_date_and_time: Date;
    public purchasetime_gold_value: number;
    public last_date_of_payement: Date;
    public total_weight: number;
    public total_cash: number;
    public pending_cash_balance: number;
    public pending_weight_balance: number;
    public paid_cash: number;
    public prducts_list: any[]    

    constructor(
       supplier_id: string,
       wastage: string,
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
        this.id= "p1";
        this.supplier_id = supplier_id
        this.wastage = wastage
        this.payment_type = payment_type;
        this.purchase_date_and_time = new Date();
        this.purchasetime_gold_value = purchasetime_gold_value;
        this.last_date_of_payement= last_date_of_payement;
        this.total_weight= total_weight
        this.total_cash= total_cash
        this.pending_cash_balance = pending_cash_balance;
        this.pending_weight_balance = pending_weight_balance;
        this.paid_cash = paid_cash ;
        this.prducts_list = prducts_list;
    }

}
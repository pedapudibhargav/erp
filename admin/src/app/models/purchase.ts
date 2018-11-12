export class Purchase {

    public id: string;
    public supplier_id: string;
    public depreciation: string;
    public payment_type: string;
    public last_date_of_payement: string;
    public total_weight: string;
    public total: string;
    public pending_balance: string;

    constructor(
         id: string,
         supplier_id: string,
         depreciation: string,
         payment_type: string,
         last_date_of_payement: string,
         total_weight: string,
         total: string,
         pending_balance: string
    ){
        this.id= id;
        this.supplier_id= supplier_id; 
        this.depreciation= depreciation;
        this.payment_type = payment_type;
        this.last_date_of_payement = last_date_of_payement;
        this.total_weight=  total_weight;
        this.total = total ;
        this.pending_balance = pending_balance;
    }

}
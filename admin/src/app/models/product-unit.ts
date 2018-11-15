export class ProductUnit {
    public id: string;
    public model_id: string;
    public weight: number;
    public status: string;
    public selling_price : number;
    public purchase_price: number;
    public gross_profit: number;

    constructor(id: string, model_id: string, weight: number){
        this.id= id;
        this.model_id= model_id;
        this.weight= weight;
        this.status= "in_stock";
        this.selling_price = 0;
        this.purchase_price= 0;
        this.gross_profit= 0;
    }
}

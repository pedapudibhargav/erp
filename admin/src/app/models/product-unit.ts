import { LocalstorageConverterService } from "app/services/localstorage-converter.service";

export class ProductUnit {
    public id: string;
    public model_id: string;
    public weight: number;
    public status: string;
    public selling_price : number;
    public purchase_price: number;
    public gross_profit: number;

    constructor(id: string, model_id: string, weight: number){
        var localStorageServ = new LocalstorageConverterService;
        this.id= "PUNIT" + localStorageServ.getJsonObjectByKey("product_units").length;
        this.model_id= model_id;
        this.weight= weight;
        this.status= "in_stock";
        this.selling_price = 0;
        this.purchase_price= 0;
        this.gross_profit= 0;
    }
}

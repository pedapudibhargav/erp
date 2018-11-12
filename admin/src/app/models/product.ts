export class Product {
    public name: string;
    public sku: string;
    public weight_of_unit: string;
    public units_in_stock: string;

    constructor(name: string, sku: string, weight_of_uni: string, units_in_stock: string){
        this.name = name;
        this.sku = sku;
        this.weight_of_unit = weight_of_uni;
        this.units_in_stock = units_in_stock;
    }
}

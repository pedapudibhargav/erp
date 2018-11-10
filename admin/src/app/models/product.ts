export class Product {
    public name: string;
    public sku: string;
    public weight: string;
    public unit: string;

    constructor(name: string, sku: string, weight: string, unit: string){
        this.name = name;
        this.sku = sku;
        this.weight = weight;
        this.unit = unit;
    }
}

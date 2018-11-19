import { LocalstorageConverterService } from "app/services/localstorage-converter.service";

export class Supplier {
    public id:string;
    public name: string;
    public phone_primary: string;
    public phone_secondary: string;
    public contact_person_primary: string;
    public contact_person_secondary: string;
    public address_line_1: string;
    public address_line_2: string;
    public city: string;
    public state: string;
    public pincode: string;
    private localstorageServ : LocalstorageConverterService;

    constructor(name: string, 
        phone_primary: string,  
        phone_secondary: string, 
        contact_person_primary: string,
        contact_person_secondary: string,
        address_line_1: string,
        address_line_2: string,
        city: string,
        state: string,
        pincode: string
    ){
        this.id = "sup"+this.localstorageServ.getJsonObjectByKey("suppliers").length;
        this.phone_primary = phone_primary;
        this.phone_secondary =  phone_secondary; 
        this.contact_person_primary = contact_person_primary ;
        this.contact_person_secondary = contact_person_secondary ;
        this.address_line_1 = address_line_1 ;
        this.address_line_2 = address_line_2 ;
        this.city = city ;
        this.state = state  ;
        this.pincode = pincode;
    }
}

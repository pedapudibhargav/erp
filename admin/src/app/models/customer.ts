export class Customer {
    public first_name: string;
    public last_name: string;
    public email: string;

    constructor(first_name: string, last_name: string, email: string){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }
}

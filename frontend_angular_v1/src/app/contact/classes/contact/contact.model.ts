export class Contact {
    name?:string;
    email?:string;
    password?:string;
    phone?:number;
    address_line_1?:string;
    address_line_2?:string;
    city?:string;
    state?:string;
    country?:string;
    zip?:number;

    constructor(name?:string, email?:string, password?:string, phone?:number, address_line_1?:string, address_line_2?:string, city?:string, state?:string, country?:string, zip?:number){
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address_line_1 = address_line_1;
        this.address_line_2 = address_line_2;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zip = zip;
    }
    
}
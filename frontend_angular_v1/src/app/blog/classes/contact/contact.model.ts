export class Contact {
    Name?:string;
    Email?:string;
    Password?:string;
    Phone?:number;
    Address_Line_1?:string;
    Address_Line_2?:string;
    City?:string;
    State?:string;
    Country?:string;
    Zip?:number;

    constructor(Name?:string, Email?:string, Password?:string, Phone?:number, Address_Line_1?:string, Address_Line_2?:string, City?:string, State?:string, Country?:string, Zip?:number){
        this.Name = Name;
        this.Email = Email;
        this.Password = Password;
        this.Phone = Phone;
        this.Address_Line_1 = Address_Line_1;
        this.Address_Line_2 = Address_Line_2;
        this.City = City;
        this.State = State;
        this.Country = Country;
        this.Zip = Zip;
    }
    
}
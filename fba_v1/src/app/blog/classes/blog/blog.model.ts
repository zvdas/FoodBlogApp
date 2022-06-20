export class Blog {
    id?:number;
    date?:Date;
    title?:string;
    author?:string;
    message?:string;
    category?:string;

    constructor(id?:number, date?:Date, title?:string, author?:string, message?:string, category?:string){
        this.id=id;
        this.date=date;
        this.title=title;
        this.author=author;
        this.message=message;
        this.category=category;
    }
}
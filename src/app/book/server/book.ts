export class Book {
    public id!:string;
    public title!:string;
    public author!:string;
    public publishingCompany!:string
    public category!:string;
    public rating!:Number;
    public sumaryPath!:String

    constructor() {
        this.id = "";
        this.title = "";
        this.author = "";
        this.publishingCompany = "";
        this.category = "";
        this.category = "";
        this.rating = 0;
        this.sumaryPath = ""!;
    }
}

export class Product{
    name: string = '';
    description: string= '';
    price: number= 0;
    image: string= '';
    category: string= '';

    constructor(name: string, description: string, price: number, image: string, category: string){
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.category = category;
    }
}
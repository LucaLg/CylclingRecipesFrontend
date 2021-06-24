import { Ingredient } from "./Ingredient";

export class Recipe{
    constructor(public title:string,public text:string,public  ingredients:Ingredient[],public pictureUrl?:string){

    }
}
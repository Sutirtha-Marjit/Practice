/// <reference path="../defs/customlib/product.d.ts" />
import {Product} from "Product";

export class ProductGrid{
    private gridType:string="2X2";
    private ranid:string;

    constructor(givenGridType:string){
        this.gridType = givenGridType;
        this.ranid = (Math.random()+"").replace(".","rx");
    }
    private renderSingleProductHTML(prd:Product):string{
        return "<div><h4>"+prd.productFeature.name+"</h4></div>";
    }
    public render(container:Element,prdlist:Array<Product>){
        for(var i=0;i<prdlist.length;i++){
            container.insertAdjacentHTML("beforeend",this.renderSingleProductHTML(prdlist[i]));
        }
    }
}
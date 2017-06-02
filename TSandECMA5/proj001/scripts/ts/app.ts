/// <reference path="./defs/customlib/product.d.ts" />
import {Product} from "ProductGlobe/Product";
import {ProductGrid} from "ProductGlobe/ProductGrid";


class Application{
    private productFeatureArray:Array<ProductFeature> = [
        {
            name:"Sony Patria 230",
            uid:"19012XC121",
            registeredOn:new Date(),
            category:"Electronics",
            price:{price:20,unit:"piece"}
        },
        {
            name:"XBOX 230",
            uid:"19012XC122",
            registeredOn:new Date(),
            category:"Electronics",
            price:{price:670,unit:"piece"}
        },
        {
            name:"Sony Patria 230",
            uid:"19012XC121",
            registeredOn:new Date(),
            category:"Electronics",
            price:{price:20,unit:"piece"}
        }
    ];

    private productArray:Array<Product> = new Array<Product>();
    private grid:ProductGrid = new ProductGrid("");
    
    constructor(){
        console.log("Application initiated");
        var container = document.querySelector("div#product-base");
        for(var i=0;i<this.productFeatureArray.length;i++){
            var crProduct:Product = new Product(this.productFeatureArray[i])
            console.log(crProduct);
            this.productArray.push(crProduct);
        }
        this.grid.render(container,this.productArray);
    }

    public start(){
        
        
    }
}

new Application().start();
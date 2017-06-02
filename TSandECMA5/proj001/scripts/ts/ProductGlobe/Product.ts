/// <reference path="../defs/customlib/product.d.ts" />
export  class Product{
        
        public el:Element;
        public productFeature:ProductFeature ={
            name:"",
            uid:"",
            registeredOn:new Date(),
            category:"",
            price:{price:0.00,unit:"no unit available"}

        }

        constructor(prdf:ProductFeature){
            
           this.productFeature = prdf;

        }
        
    }

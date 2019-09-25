import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products : Product[];
  detailProduct : Product = null;
  prod : Product = null;
  showComponent:string = 'list';
  
  constructor( private productService: ProductService, private router: Router ) { }

  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void{
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data
      }
    );
  }


  showPage(obj:any) {
    let prod;
    let showAction = obj.page;
    switch(showAction) { 
      case "print": {
        this.showComponent = "print";
        break;
      }
      case "detail": { 
        this.showComponent = "detail";
        this.detailProduct = obj.product; 
        break; 
      } 
      case "list": { 
        this.showComponent = "list";
        break; 
      } 
      case "form": { 
        this.showComponent = "form";
        if(obj.product){
          this.prod = obj.product;
        }else {
          this.prod = null;
        }
        break; 
      }
      case "add": { 
        this.addProduct(obj.product);
        break; 
      }
      case "delete": { 
        prod = obj.product;
        if(prod){
          this.deleteProduct(prod);
        }
        break; 
      }   
      default: { 
        this.showComponent = "list";
        break; 
      } 
   } 
  } 

  addProduct(prod:Product){
    this.productService.addProduct(prod).subscribe(
      (data) => {
        console.log("Producto agregado!")
        this.getProducts();
        this.showComponent = "list";
      },(error) => {
        console.log('ERROR addProduct:');
        console.log(error);
        this.showComponent = "form";
      }
    );
  }

  deleteProduct(prod:Product){
    this.productService.deleteProduct(prod).subscribe(
      (data) => {
        console.log("Producto borrado!")
        this.getProducts();
        this.showComponent = "list";
      },(error) => {
        console.log('ERROR deleteProduct:');
        console.log(error);
        this.showComponent = "list";
      }
    );
  }
}

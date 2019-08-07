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
  detailProduct : Product = new Product();
  prod : Product = null;
  showComponent:string = 'list';
  
  constructor( private productoService: ProductService, private router: Router ) { }

  
  ngOnInit(): void {
    this.getProductos();
  }

  getProductos():void{
    this.productoService.getProductos().subscribe(
      (data) => {
        this.products = data
        console.log(data);
      }
    );
  }


  showPage(obj:any):string {
    console.log(obj);
    this.showComponent = obj.page;
    if(this.showComponent == "detail"){
      this.detailProduct = obj.product;
    }else if(this.showComponent == "list"){
      
    }else if(this.showComponent == "form"){
      if(obj.product){
        this.prod = obj.product;
      }else {
        this.prod = null;
      }
    }
    
    return this.showComponent;
  } 
}

import { MatSort } from '@angular/material/sort';
import { ProductData } from './../../../models/product-data.model';
import { MatPaginator } from '@angular/material/paginator';
import { ProductService } from '../../../services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
   private isTapped :boolean= true;
  private testProducts : any[]
  products: MatTableDataSource<ProductData>;
  displayedColumns: string[] = ['id', 'name', 'desc','like', 'edit', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productService: ProductService , private http:HttpClient) { }

  ngOnInit(): void {
    
    this.productService.read().subscribe((products) => {
      this.products = new MatTableDataSource<ProductData>(products);
         
      this.products.paginator = this.paginator;
      this.products.sort = this.sort;
    });
  }
 

  like(id:string) {
  // this.http.get<any>('http://localhost:3001/signupUsers').subscribe(
   
   
  //   data => { this.testProducts = data }
  //   // console.log(this.testProducts);
    
    this.testProducts = [{ ...this.products }]
       
    let obj = this.testProducts[0].filteredData.filter(p => p.id === id)
    obj.liked = !obj.liked;
    return obj.liked
console.log(obj.liked);

}
    
    
}

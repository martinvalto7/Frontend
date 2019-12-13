import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productList;

  constructor(private http:HttpClient ) { }

  ngOnInit() {
    //Get products from api by http
    this.http
    .get("http://localhost:62397/api/Product")
    .subscribe(Products =>{
      this.productList=Products;

    }, error =>{
      console.log(error);
 
    });
  }

}

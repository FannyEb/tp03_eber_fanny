import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { CatalogueService } from 'src/app/core/service/catalogue/catalogue.service';
import { ProductCategory } from '../core/model/product-category';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { startWith } from 'rxjs/internal/operators/startWith';
import { map } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  products: Array<Product> = [];
  
  constructor(private catalogueService: CatalogueService) {}

  ngOnInit(): void {
    this.catalogueService.getAll().subscribe(data => {
      this.products = data;
    });
  }
}

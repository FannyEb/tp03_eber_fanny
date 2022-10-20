import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { CatalogueService } from 'src/app/core/service/catalogue/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  products: Array<Product> = [];
  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
    this.catalogueService.getAll().subscribe(data => {
      this.products = data;
    });
  }

}

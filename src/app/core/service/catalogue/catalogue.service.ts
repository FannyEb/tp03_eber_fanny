import { Injectable } from '@angular/core';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  get(): string {
    return JSON.stringify([
      new Product('Soupe de potimarron', 'Délicieux potage', 5.95, 'https://picsum.photos/200/300', 'Soupe'),
      new Product('Velouté de chou fleur', 'Merveilleuse découverte', 6.98, 'https://picsum.photos/200/300', 'Soupe'),
      new Product('Tarte au munster', 'ça pue mais c\'est bon', 14.50, 'https://picsum.photos/200/300', 'Tarte'),
      new Product('Tarte au brocoli', 'pour se remplir la panse', 13.39, 'https://picsum.photos/200/300', 'Tarte'),
      new Product('Tarte aux oignons', 'miam miam on se régale', 14, 'https://picsum.photos/200/300', 'Tarte'),
      new Product('Moelleux au chocolat', 'C\'est délicieux', 8.78, 'https://picsum.photos/200/300', 'Dessert'),
      new Product('Cookies', 'Mieux que ceux de Lidl', 2.39, 'https://picsum.photos/200/300', 'Dessert'),
      new Product('Salade de fruit', 'C\'est frais, c\'est bon', 5, 'https://picsum.photos/200/300', 'Dessert')
    ]);
  }
}

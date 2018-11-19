import {Component, Inject} from '@angular/core';
import { IProduct, Products } from  'at-common-fe';
import { Configs } from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: IProduct[] = [];
  selectedColor: string = '';
  showColorFilter: boolean = false;
  itemsFound: boolean = true;
  public loading = false;

  constructor(@Inject(Configs) private configs, private productsService: Products){

  }

  async handleColorSelected(sColor: string) {
    this.showColorFilter = false;
    if(sColor === this.selectedColor)
      return;

    this.itemsFound = true;
    this.selectedColor = sColor;
    this.products = [];
    this.loading = true;
    const resp = await this.productsService.getProducts(sColor);
    this.loading = false;
    if(resp.err) {//show some userfriendly message here.
      this.itemsFound = false;
      return;
    }

    this.products = resp.data.map(prod => {
      prod.media = prod.media.map(media => {return {url: (this.configs.cdnUrl + media.src.split('?')[0]).replace(/\(/g, '%28').replace(/\)/g, '%29'), title: prod.name}});
      return prod;
    });
    this.itemsFound = this.products.length > 0;
  }

  showColors () {
    this.showColorFilter = !this.showColorFilter;
  }
}

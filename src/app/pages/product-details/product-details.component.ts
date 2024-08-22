import { Component } from '@angular/core';
import { Products } from '../../utils/products';
import * as productData from '../../../../public/json/productData.json';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  id: number = 0;
  products?: Products;

  constructor( private route: ActivatedRoute){ }

  ngOnInit(): void{
    this.route.paramMap.subscribe(
      (params) => {
        this.id = Number(params.get("id"));
        console.log(this.id);
      }
    );
    this.products = ((productData as any).default as Products[])
    .find((product)=> product.id === this.id)!;
  }

}

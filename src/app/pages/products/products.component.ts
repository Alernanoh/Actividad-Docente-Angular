import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as productData from '../../../../public/json/productData.json'
import { Router} from '@angular/router';
import { Products } from '../../utils/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Products[] = (productData as any).default;

  constructor (private router: Router){ }

  ngOnInit():void{

  }


  onClickTable(products: Products): void{
    this.router.navigate(['products', products.id]);

  }
  

  
}

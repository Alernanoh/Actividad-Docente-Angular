import { Component } from '@angular/core';
import { Products } from '../../utils/products';
import * as productData from '../../../../public/json/productData.json';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router} from '@angular/router';

function randomInt(max: number){
  return Math.floor(Math.random() * max)
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products: Products[] = (productData as any).default;

  indexDailyProduct: number = randomInt(3);

  constructor(private router: Router){}

  ngOnInit(): void{

  }

  onClickAny(): void{
    console.log(this.products);
  }

  onClickButton(products: Products): void{
    this.router.navigate(['products', products.id]);

  }
}

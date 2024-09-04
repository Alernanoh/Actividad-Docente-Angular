import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent} from './pages/products/products.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { Error404Component } from './pages/error404/error404.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: Error404Component },
    {path: 'products/:id', component: ProductDetailsComponent},
];

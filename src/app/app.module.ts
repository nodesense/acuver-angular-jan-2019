import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CounterComponent } from './components/counter/counter.component';

import {FormsModule} from '@angular/forms';
import {RouterModule,
        Routes} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        // module dependencies
        BrowserModule,
        SharedModule,
        FormsModule,
        CartModule,
        RouterModule.forRoot(routes),
        ProductModule,
        HttpClientModule
    ],

    declarations: [
        // components, directives, pipes
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        CounterComponent,
        NotFoundComponent,
        // Home, About, etc
    ],

    bootstrap: [
        // the main app component
        AppComponent
    ]
})
export class AppModule {

}

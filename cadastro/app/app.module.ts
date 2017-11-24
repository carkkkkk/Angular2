import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http'

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {DialogConfirmService} from './dialogconfirm.service'

@NgModule({
    imports : [
        AppRoutingModule,
        BrowserModule, 
        ClientesModule, 
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations :[AppComponent],
    providers:[
        DialogConfirmService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
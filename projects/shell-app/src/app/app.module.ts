import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';


const dbConfig: DBConfig = {
    name: 'EasyAnswersDB',
    version: 1,
    objectStoresMeta: [{
        store: 'registrationTable',
        storeConfig: {keyPath: 'id', autoIncrement: true},
        storeSchema: [
            {name: 'username', keypath: 'username', options: {unique: false}},
            {name: 'password', keypath: 'password', options: {unique: false}}
        ]
    }]
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIndexedDBModule.forRoot(dbConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

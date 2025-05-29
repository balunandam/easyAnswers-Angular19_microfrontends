import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
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
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
     NgxIndexedDBModule.forRoot(dbConfig)
  ],
})
export class AuthenticationModule { }

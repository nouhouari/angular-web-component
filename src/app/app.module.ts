import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

// 1. Add the dependency and import the createCustomElement
import { createCustomElement } from '@angular/elements';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 2. Add the component in the boostrap
})
export class AppModule { 

    // Convert the Angular component to a web Component
    constructor(private injector: Injector){
      const webComponent = createCustomElement(UserListComponent, {injector});
      customElements.define('user-list', webComponent);
    }
}

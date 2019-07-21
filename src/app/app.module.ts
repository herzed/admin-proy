import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

/*
    Modulos
*/
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

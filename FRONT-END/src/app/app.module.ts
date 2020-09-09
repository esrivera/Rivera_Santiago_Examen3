import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { CrudComponent } from './componets/crud/crud.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './componets/home/home.component';
import { DetailComponent } from './componets/detail/detail.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrudComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

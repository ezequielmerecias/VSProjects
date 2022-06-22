import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
// import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  declarations:[
    AppComponent
  ],
  imports:[
    BrowserModule,
    CommonModule,
    // FormsModule sirve para poner variables ng [()] con estos símbolos
  ],
  bootstrap:[AppComponent]
})
export class AppModule{}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirvComponent } from './dirv/dirv.component';
import { InputMagicDirective } from './dirv/input-magic.directive';
import { MagicColorDirective } from './dirv/magic-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirvComponent,
    InputMagicDirective,
    MagicColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

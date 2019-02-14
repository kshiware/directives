import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirvComponent } from './dirv/dirv.component';
import { InputMagicDirective } from './dirv/input-magic.directive';
import { MagicColorDirective } from './dirv/magic-color.directive';
import { InterCompV1Component } from './inter-comp-v1/inter-comp-v1.component';
import { EmojisComponent } from './inter-comp-v1/emojis/emojis.component';
import { ProgressComponent } from './inter-comp-v1/progress/progress.component';
import { InfoCardComponent } from './dirv/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DirvComponent,
    InputMagicDirective,
    MagicColorDirective,
    InterCompV1Component,
    EmojisComponent,
    ProgressComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

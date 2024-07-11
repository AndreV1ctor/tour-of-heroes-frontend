import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MessagesComponent } from './messages/messages.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTooltipModule} from '@angular/material/tooltip'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent
   ],
  imports: [

  MatToolbarModule,
  BrowserModule,
  FormsModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatExpansionModule,
  AppRoutingModule,
  MatIconModule,
  FlexLayoutModule,
  MatTooltipModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

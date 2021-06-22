import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RecipeListComponent } from './Main/recipe-list/recipe-list.component';
import { RecipeComponent } from './Main/recipe/recipe.component';
import { NavbarComponent } from './header/navbar/navbar.component';

import {RoutingModule} from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,

    RecipeListComponent,
    RecipeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

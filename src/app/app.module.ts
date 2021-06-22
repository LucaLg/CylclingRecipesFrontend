import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './Main/recipes-list/recipes-list.component';
import { RecipeListComponent } from './Main/recipe-list/recipe-list.component';
import { RecipeComponent } from './Main/recipe/recipe.component';
import { NavbarComponent } from './header/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeListComponent,
    RecipeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

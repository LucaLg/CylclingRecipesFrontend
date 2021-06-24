import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Model/Recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor() { }

  ngOnInit(): void {
    console.log(this.recipe.text);
  }

}

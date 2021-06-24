import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Model/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
  recipe1 = new Recipe("Ricecakes",'mmmhRice',[]);
  recipes:Array<Recipe> = new Array();
  constructor() { }

  ngOnInit(): void {
    this.recipes = [
      new Recipe("Ricecakes",'mmmhRice',[]),
      new Recipe("Ricecakes",'mmmhRice',[]),
      new Recipe("Ricecakes",'mmmhRice',[]),
      new Recipe("Ricecakes",'mmmhRice',[]),
      new Recipe("Ricecakes",'mmmhRice',[])
    ]
  }

}

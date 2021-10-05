import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'this one is a placeholder test', 'https://www.cookipedia.co.uk/wiki/images/f/fe/Miami_Jerked_Chicken_with_Mango_Salsa_recipe.jpg' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

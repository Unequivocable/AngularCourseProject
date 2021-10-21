import { Injectable } from "@angular/core";
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'this one is a placeholder test',
      'https://www.cookipedia.co.uk/wiki/images/f/fe/Miami_Jerked_Chicken_with_Mango_Salsa_recipe.jpg',
      [
        new Ingredient('chicken', 1),
        new Ingredient('spices', 2)
      ] ),
    new Recipe('Test Recipe 2', 'this one is another placeholder test', 'https://www.cookipedia.co.uk/wiki/images/f/fe/Miami_Jerked_Chicken_with_Mango_Salsa_recipe.jpg',     [
      new Ingredient('mango', 5),
      new Ingredient('spices', 3)
    ] )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }

}

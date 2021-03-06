export interface ICategory {
  categoryId: string;
  recipes: IRecipe[];
}

export interface IRecipe {
  name: string;
  preparationTime: number;
  revenue: number;
  image: string;
  ingredients: string[];
  methodOfPreparation: string;
}

export enum CategoryIdEnum {
  "datas_festivas" = "1",
  "sobremesas" = "2",
  "tortas_salgadas" = "3",
  "receitas_saudaveis" = "4",
  "sopas" = "5",
}

export interface IRecipeForm {
  categoryId: string;
  recipe: IRecipe;
}

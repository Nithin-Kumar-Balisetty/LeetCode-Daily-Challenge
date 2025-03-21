/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    let can_cook = new Map(), recipes_map = new Map(), visiting = new Set();

    for(let i=0;i<recipes.length;i++) recipes_map.set(recipes[i], ingredients[i]);
    for(let i=0;i<supplies.length;i++) can_cook.set(supplies[i], true);
    

    let dfs = function(recipe){
        if(can_cook.has(recipe)) return can_cook.get(recipe);
        if(visiting.has(recipe)) return false;

        if(!recipes_map.has(recipe) && !can_cook.has(recipe)){
            can_cook.set(recipe,false);
            return false;
        }

        visiting.add(recipe);
        let ing = recipes_map.get(recipe);
        
        for(let i=0;i<ing.length;i++){
            if(!dfs(ing[i])){
                can_cook.set(recipe,false);
                visiting.delete(recipe);
                return false;
            }
        }
        can_cook.set(recipe,true);
        visiting.delete(recipe);
        return true;
    }

    let ans = [];
    for(let i=0;i<recipes.length;i++){
        if(dfs(recipes[i])) ans.push(recipes[i]);
    }

    return ans;
};

/*function getRecipe(){
    setTimeout(()=> {
        const recipeId = [524, 670, 764, 245];
        console.log(recipeId);

        setTimeout((id) => {
            const recipe = {title: 'fresh tomato pasta', publisher: 'jonyboy'};
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = {title: 'italian pizza', publisher: 'jonyboy'};
                console.log(recipe);
            },1500, recipe.publisher);
        }, 1500, recipeId[2]);
    }, 1500);

}
getRecipe();
*/

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve([524, 670, 764, 245]);
    },1500 );
});

const getrecipe = recID => {
    return new Promise((resolve, reject) =>{
        setTimeout(ID => {
            const recipe = {title: 'fresh Tomato pasta', Publisher: 'yeabsira'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'Italian pizza', publisher: 'yeabsira'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

getIDs
.then(IDs => {
    console.log(IDs);
    return getrecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Yeabsira kassaye');
})
.then(recipe => {
    console.log(recipe);
})
.catch(error => {
    console.log('Error!');
});
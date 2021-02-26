// 2093 Short (15-20 minute) Pair programming exercise, Creating a class, Instance methods and variables, Class methods and variables

// Create a class, Ingredient, with instance properties repesenting an 
// ingredient name, cost, quantity, and unit of measurement. 

// Give the class an instance method, printIngredient, that console.logs the
// ingredient's details, including its name, cost, quantity, and unit.

// Give the class a static method, printIngredientList, that takes an array of
// Ingredient instances and calls printIngredient on every ingredient.

// Give the class an instance method, calculateCost, that takes an integer
// representing a quantity and calculates and returns the cost of the ingredient
// for that quantity.

class Ingredient {
// Insert code here
  
}

const flour = new Ingredient("flour", 2.25, 5, "pound");
const eggs = new Ingredient("eggs", 3.00, 12, "piece");
const water = new Ingredient("water", 0.00, 1, "cup");
const apples = new Ingredient("apples", 1.30, 1, "pound");
const butter = new Ingredient("butter", 0.75, 8, "tablespoon");
const sugar = new Ingredient("sugar", 10.40, 5, "pound");

console.log(apples.calculateCost(5)) // 6.5
console.log(apples.calculateCost(20)) // 26
console.log(apples.calculateCost(3.5)) // 4.55

apples.printIngredient()
//         * apples (1 pound) Cost: $1.30

Ingredient.printIngredientList([flour, eggs, water, apples, butter, sugar])
// Ingredients:
//         * flour (5 pound) Cost: $2.25
//         * eggs (12 piece) Cost: $3.00
//         * water (1 cup) Cost: $0.00
//         * apples (1 pound) Cost: $1.30
//         * butter (8 tablespoon) Cost: $0.75
//         * sugar (5 pound) Cost: $10.40
module.exports = Ingredient;


class Ingredient {
  constructor(name, cost, quantity, unit) {
    this._name = name;
    this._cost = cost;
    this._quantity = quantity;
    this._unit = unit;
  }
  
  get name() {
    return this._name;
  }
  
  get cost() {
    return this._cost;
  }
  
  get quantity() {
    return this._quantity;
  }
  
  get unit() {
    return this._unit;
  }
  
  static printIngredientList(ingredients) {
    console.log("Ingredients:")
    ingredients.forEach(ingredient => {
      ingredient.printIngredient()
    })
  }
  
  printIngredient() {
    console.log(`\t* ${this.name} (${this.quantity} ${this.unit}) Cost: $${this.cost.toFixed(2)}`)
  }
  
  calculateCost(quantity) {
    const costPerUnit = this.cost / this.quantity;
    return costPerUnit * quantity;
  }
}

const flour = new Ingredient("flour", 2.25, 5, "pound");
const eggs = new Ingredient("eggs", 3.00, 12, "piece");
const water = new Ingredient("water", 0.00, 1, "cup");
const apples = new Ingredient("apples", 1.30, 1, "pound");
const butter = new Ingredient("butter", 0.75, 8, "tablespoon");
const sugar = new Ingredient("sugar", 10.40, 5, "pound");

console.log(apples.calculateCost(5))
console.log(apples.calculateCost(20))
console.log(apples.calculateCost(3.5))
apples.printIngredient()
Ingredient.printIngredientList([flour, eggs, water, apples, butter, sugar])

module.exports = Ingredient;

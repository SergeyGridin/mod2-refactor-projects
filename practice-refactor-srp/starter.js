// 2090 Short (15-20 minute) Pair programming exercise, refactoring code to use SRP

// Refactor the content of the function bakeAndSellPies, into separate functions
// that follow the Single Responsibility Principle.

const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
]
const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
]
const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
]
const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};


function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  let revenue = 0;
  let totalCost = 0;

  const ingredients = recipes[pieType];
  for (let i = 0; i < pieQuantity; i++) {
    let combiningMsg = `Combining ingredients for ${pieType}: `
    ingredients.forEach(ingredient => combiningMsg += ingredient.name + ", ")
    console.log(combiningMsg)
    console.log(`Baked pie ${i + 1}! `)
  }

  const costOfPie = ingredients.reduce((prev, current) => {
    return prev + current.cost;
  }, ingredients[0].cost);
  console.log(`Cost per pie: ${costOfPie}`)
  totalCost = costOfPie * pieQuantity;

  revenue += totalCost * profitMargin;
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}`)
}


bakeAndSellPies("applePie", 5, 2.5)
bakeAndSellPies("pumpkinPie", 2)
bakeAndSellPies("cherryPie", 7, 1.7)

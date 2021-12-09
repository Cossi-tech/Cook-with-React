import RecipeList from "./RecipeList/RecipeList";

function App() {
  return (
    <RecipeList  recipes ={sampleRecipes} />
  )
} 
const sampleRecipes =[
  {
    id : 1,
    name : 'Plain chicken',
    servings : 3,
    cookTime : '1.45',
    instruction : "1. Put salt on chicken \n2. Put chicken in oven\n 3. Eat chicken",
    ingredients:[
      {
        id : 1,
        name : 'chicken',
        amount: '2 Ponds'
      },
      {
        id : 2,
        name : 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id : 2,
    name : 'Plain Pork',
    servings : 5,
    cookTime : '0.45',
    instruction : "1. Put paprika on Pork \n2. Put pork in oven\n 3. Eat pork",
    ingredients:[
      {
        id : 1,
        name : 'pork',
        amount: '3 Ponds'
      },
      {
        id : 2,
        name : 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]

export default App;

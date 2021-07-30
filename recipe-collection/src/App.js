
import './App.css';
import React from 'react'

class App extends React.Component {
  state = {
    isAddRecipeFormDisplayed: false,
    recipes: [],
    newRecipeName: "",
    newRecipeInstructions: ""
  }

  handleRecipeNameChange = (event) => {
    const value = event.target.value;
  
    this.setState({newRecipeName: value});
  }

  handleRecipeInstructionsChange = (event) => {
    const value = event.target.value;
  
    this.setState({newRecipeInstructions: value});
  }

  toggleAddRecipeForm = () => {
    this.setState({isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed})
  }

  
  submitRecipe = (event) => {
    event.preventDefault()
    const updateRecipe = (state) => {
      const recipe = {
          name: this.state.newRecipeName,
          instructions: this.state.newRecipeInstructions
      }
      return {
        recipes: state.recipes.concat([recipe])
      }
    }
    this.setState(updateRecipe)
    this.setState({newRecipeName: ""})
    this.setState({newRecipeInstructions: ""})
  }




  render(){
    const addNewRecipeForm = (
      <form id="recipe-form" onSubmit={this.submitRecipe}>
        <label htmlFor="newRecipeName">Recipe name:</label>
        <input type="text" 
          name="newRecipeName"
          id="newRecipeName" 
          onChange={this.handleRecipeNameChange} 
          value={this.state.newRecipeName}/>
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea id="newRecipeInstructions" 
          name="newRecipeInstructions"
          placeholder="write recipe instrucntions here..."
          onChange={this.handleRecipeInstructionsChange}
          value={this.state.newRecipeInstructions}/>
        <input type="submit"/>
      </form>
    )
    return (
      <div className="App">
        <h1 className="App-header">My Recipes</h1>
        {
          this.state.isAddRecipeFormDisplayed
          ? addNewRecipeForm
          : <button id="add-recipe" onClick={this.toggleAddRecipeForm}> Add Recipe</button>
        }
        {
          this.state.recipes.length > 0 ?
          <ul>
            {this.state.recipes.map((recipe) => {
              return (<li key={recipe.name}> {recipe.name}: {recipe.instructions} </li>)
            })}
          </ul> :
          <p>There are no reciepes to list.</p>
        }
      </div>
    )
    
  }
}

export default App;

import React from 'react'
import IngredientList from '../IngredientList'

export default function Recipe(props) {
    const {
        id,
        name,
        cookTime,
        servings,
        instruction,
        ingredients,
        handleRecipeDelete
    } = props

    return (
        <div className='recipe'>
            <div className='recipe__header'>
                <h3 className='recipe__title'> {name}</h3>
                <div>
                    <button className='btn btn--primary mr-1'> Edit </button>
                    <button onClick={() => handleRecipeDelete(id)} className='btn btn--danger'> Delete</button>
                </div>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'> Cook time :</span>
                <span className='recipe__value'> {cookTime}</span>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'> Servings :</span>
                <span className='recipe__value'> {servings} </span>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'> Instruction : </span>
                <div className='recipe__value recipe__instruction recipe__value--indented'>
                    {instruction}
                </div>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'> Ingredients : </span>
                 <div className='recipe__value recipe__value--indented'>
                    <IngredientList ingredients={ingredients} />
                 </div>
            </div>
        </div>
    )
}
import React from 'react' ;
import style from './recipe.module.css';

const Recipe = ({title, calories,image, ingredients}) => {
    return (
        <div className = {style.recipe}>
            <h1> {title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li style={ { height: 50 } , {color: 'red'}, {font:'message-box'}}>{ingredient.text}</li>
                ))}
            </ol>
            <p> Calories in it : {calories} </p>
            <img className={style.image} src ={image} alt="" />
        </div>
    )
}

export default Recipe
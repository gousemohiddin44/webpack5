import { useState } from "react";

const recepie1 = {
    rice: '1Kg',
    potato: 10,
};

const recepie2 = {
    ...recepie1,
    Roti: 5,
}

console.log(recepie1);
console.log(recepie2);

const Recipies = () => {
  const [ recipe, SetRecipe] = useState({});
  return (
    <>
        <h3>Current Recipe</h3>
        <button onClick={() => SetRecipe(recepie1)}>Recpie 1</button>
        <button onClick={() => SetRecipe(recepie2)}>Recpie 2</button>

        <ul>
            {Object.keys(recipe).map(material => <li key={material}>{material} : {recipe[material]}</li>)}
        </ul>
    </>
  )
}

export default Recipies;
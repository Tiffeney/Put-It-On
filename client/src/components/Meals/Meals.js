import React from 'react';

const MealTable = ({ meals }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Carbs</th>
                    <th>Protiens</th>
                    <th>Fats</th>
                    <th>Calories</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {meals.map(m => {
                    return (
                        <tr>
                            <td>{m.nameOfMeal}</td>
                            <td>{m.carbs}</td>
                            <td>{m.proteins}</td>
                            <td>{m.fats}</td>
                            <td>{m.calories}</td>
                            <td><i className="fas fa-trash"></i></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

export default MealTable;
import React from "react";
import Card from "react-bootstrap/Card";
import './IndividualRecipe.css'

const IndividualRecipe = ({ selectedRecipe }) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="individualRecipe">
      <Card>
        <Card.Title>{selectedRecipe.label}</Card.Title>
        <Card.Img
          variant="top"
          src={selectedRecipe.image}
          alt={selectedRecipe.label}
        />
        <Card.Body>
          <h3>
            Full recipe found at <a href={selectedRecipe.url} target="_blank">{selectedRecipe.source}</a>
          </h3>
          <h3>Ingredients:</h3>
          <ul>
            {selectedRecipe.label
              ? selectedRecipe.ingredientLines.map((ingredient) => {
                  return <p>{ingredient}</p>;
                })
              : null}
          </ul>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};

export default IndividualRecipe;

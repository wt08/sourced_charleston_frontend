import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import "./RecipeGenerator.css";

const RecipeGenerator = () => {
  const [produce, setProduce] = useState(null);
  const [selected, setSelected] = useState([]);
  console.log(selected);

  useEffect(() => {
    const makeAPICall = () => {
      axios
        .get(`https://srced-chs.herokuapp.com/produces`)
        .then((res) => {
          const data = res.data;
          setProduce(data);
        })
        .catch(console.error);
    };
    makeAPICall();
  }, []);

  const handleOnClickSelect = (produceClicked) => {
    setSelected([...selected, produceClicked]);
  };

  const handleOnClickUnselect = (produceClicked) => {
    const index = selected.indexOf(produceClicked);
    // copy of selected to be mutated. Couldn't splice useState selected and return mutated array.
    let selectedCopy = selected 
    selectedCopy.splice(index, 1);
    setSelected(selectedCopy)
  };

  return (
    <div>
      <h1>Recipe Generator</h1>
      <h4>Choose up to 4 and then click Find Recipes</h4>
      <div className="produceList">
        <CardColumns>
          {produce
            ? produce.map((produce) => {
                return (
                  <Card>
                    <Card.Img
                      variant="top"
                      src={produce.img}
                      alt={produce.name}
                    />
                    <Card.Body>
                      <Card.Title>{produce.name}</Card.Title>
                      {selected.includes(produce.name) ? (
                        <Button
                          onClick={() => handleOnClickUnselect(produce.name)}
                          variant="primary"
                        >
                          Unselect
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleOnClickSelect(produce.name)}
                          variant="primary"
                        >
                          Select
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                );
              })
            : null}
        </CardColumns>
      </div>
    </div>
  );
};

export default RecipeGenerator;

// ("https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id=21fd5cef&app_key=8e8a1cd5bc1665401713d3f285622dc6");
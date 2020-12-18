import { Button, Card, CardContent } from '@material-ui/core';
import React from 'react'

const AvailableItem = (props) => {
    return (
        <div className="available__items">
        <Card>
          <CardContent>
            <h3 style={{ textAlign: "center" }}> Enjoy The Meals </h3>
            {props.meals.map((meal, i) => {
              return (
                <div key={i} className="available__item">
                  <h3 style={{ margin: 0 }}> {meal.name} </h3>
                  <Button onClick={() => props.onAddMealHandler(i)} color="primary">
                    ADD
                  </Button>
                  <Button
                    onClick={() => props.onRemoveMealHandler(i)}
                    color="secondary"
                  >
                    REMOVE
                  </Button>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

    )
}

export default AvailableItem

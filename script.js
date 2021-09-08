"use strict";
{
  function calculatePizzasPerPerson(people) {
    const slicesPerPerson = 2.5;
    const slicesPerPizza = 8;

    return Math.ceil((slicesPerPerson / slicesPerPizza) * people);
  }

  function addPizzas(people) {
    const n = calculatePizzasPerPerson(people);
    // TODO

    // create n divs (n is amount of pizzas)
    // for each pizza
    // create a new div
    // add a class of "pizza"

    // and append them to the div with an
    // id of pizza
  }

  // TODO
  // when I click this button, it should call
  //  addPizzas(7), to calculate how many pizzas 
  // are needed for 7 people
  const button = document.querySelector("#calculate-pizzas");
}

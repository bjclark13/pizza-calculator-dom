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
    // and append them to the div with an
    // id of pizza
  }

  document.querySelector("#calculate-pizzas").addEventListener(() => {
    addPizzas(5);
  });
}

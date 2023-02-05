import { Snail } from "./Snail";

const loadData = async () => {
  const response = await fetch("https://classes.codingbootcamp.cz/assets/classes/api/snails.php?number=16");
  const snails = await response.json();
  snails.forEach((snail) => {
    const snailRacer = new Snail({name: snail.name, velocity: snail.velocity, color: snail.color})
    document.body.appendChild(snailRacer.element)
    //snailRacer.element.scrollTo(document.body.scrollWidth, 0);
  });
}

loadData();


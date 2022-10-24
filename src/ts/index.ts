import { handleClick } from "./button";

const button = document.getElementById('testButton');
button?.addEventListener('click', (event) => {
  event.preventDefault();
  handleClick(event);

})

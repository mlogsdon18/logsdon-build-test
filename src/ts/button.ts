let clicks = 0;

const handleClick = () => {
  clicks += 1;
  const paragraph = document.getElementById('display');
  if (paragraph) paragraph.innerHTML = clicks.toString();
}

export default function handleButton() {
  if (typeof window !== 'undefined') {
    const button = document.getElementById('testButton');
    button?.addEventListener('click', (event) => {
      event.preventDefault();
      handleClick();
  
    })
  }

}

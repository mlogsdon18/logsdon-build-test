const buttonListener = () => {
  let count = 0;

  console.log('running');
  if (typeof window !== 'undefined') {
    const button = document.querySelector('#testButton');
    button?.addEventListener('click', () => {
      count += 1;
      const counter = document.querySelector('#counter');
      if (counter) counter.innerHTML = String(count);
    });
  }
}

export default buttonListener;

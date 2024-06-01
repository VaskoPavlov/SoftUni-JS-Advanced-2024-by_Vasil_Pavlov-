function solve() {
  //we need to have all the sections with questions in a list 
  const sections = document.querySelectorAll('section');
  const answers = document.querySelectorAll('ul>li>div>p');

  //result h1 we need to populate!
  let h1 = document.querySelector('ul>li>h1');

  //result ul to be diplayed later on!
  const resultUl = document.querySelector('div>ul');

  for (const a of answers) {
    a.addEventListener('click', onClickHandler);
  }

  let index = 1;
  let points = 0;
  function onClickHandler(event) {
    event.preventDefault();
    let answers = []
    answers.push(event.currentTarget.textContent);

    index++;
    const currentSec = event.currentTarget.parentElement.parentElement.parentElement.parentElement;
    currentSec.classList.add('hidden');
    const nextSection = currentSec.parentElement.children[index];
    nextSection.classList.remove('hidden');

    if (answers.includes('onclick')) {
      points++;
    }

    if (answers.includes('JSON.stringify()')) {
      points++;
    }

    if (answers.includes('A programming API for HTML and XML documents')) {
      points++;
    }

    if (points == 3){
      h1.textContent = 'You are recognized as top JavaScript fan!';
      resultUl.style.display = 'block';
    } else {
      h1.textContent = `You have ${points} right answers.`;
      resultUl.style.display = 'block';
    }
  }
}

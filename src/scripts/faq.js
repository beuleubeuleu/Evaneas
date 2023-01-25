let question = document.querySelectorAll(".faq ul li");
console.log( question);

for (let i = 0; i < question.length; i++) {
    console.log(i);
    question[i].addEventListener('click', () => {
      question[i].classList.toggle('open') 
    })
  }
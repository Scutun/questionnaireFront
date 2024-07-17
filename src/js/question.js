const data =[ {
  "id": "1",
  "content": "Здоровается, говоря “Привет” или что-то подобное.",
  "headlinename": "Оценка развития ребенка от 14 мес. до 3,5 лет",
  "titlename": "СОЦИАЛЬНОЕ РАЗВИТИЕ"
},
{
  "id": "2",
  "content": "Сплетничает или ябедничает на других детей.",
  "headlinename": "Оценка развития ребенка от 14 мес. до 3,5 лет",
  "titlename": "СОЦИАЛЬНОЕ РАЗВИТИЕ"
},
{
  "id": "3",
  "content": "Сочувствует другим детям, старается помочь и утешить их.",
  "headlinename": "Оценка развития ребенка от 14 мес. до 3,5 лет",
  "titlename": "СОЦИАЛЬНОЕ РАЗВИТИЕ"
},
{
  "id": "4",
  "content": "Иногда говорит “Нет”, когда пристают.",
  "headlinename": "Оценка развития ребенка от 14 мес. до 3,5 лет",
  "titlename": "СОЦИАЛЬНОЕ РАЗВИТИЕ"
},
{
  "id": "5",
  "content": "Немного помогает в домашних делах.",
  "headlinename": "Оценка развития ребенка от 14 мес. до 3,5 лет",
  "titlename": "СОЦИАЛЬНОЕ РАЗВИТИЕ"
},
{
  "id": "6",
  "content": "Просит помочь, когда что-нибудь делает.",
  "headlinename": "Оценка развития ребенка от 14 мес. до 3,5 лет",
  "titlename": "СОЦИАЛЬНОЕ РАЗВИТИЕ"
}];



let queAmount = 6


//кнопки
const queMain = document.getElementById("btns-questions")

function createBtn(index){
  const createdBtn = document.createElement("input")
  createdBtn.type = "button"
  createdBtn.id = `createdBtn-${index + 1}`;
  createdBtn.classList.add("pageBtn")
  createdBtn.value = index + 1
  
  createdBtn.addEventListener("click",(event)=>{
    let summ = createdBtn.value
    localStorage.setItem('currentPage',summ)
    window.location.href = "./question.html"
    let curr = (createdBtn.value-1) * 4 + 1
    console.log(curr)
    localStorage.setItem('currentQuestion', curr)
  })

  queMain.appendChild(createdBtn)
}
for(let i = 0; i < Math.ceil(queAmount/4);i++){
createBtn(i)
}
var elements = Array.from(document.getElementsByClassName("pageBtn"));


//раскраска
elements.forEach(item => {
if (item.value === localStorage.getItem('currentPage')) {
   item.classList.add("make-selected");
} else {
  item.classList.add("make-default");
}
});


//создание вопросов
const parentElement = document.getElementById("опросник");

function createQuestionBlock(data,i) {

  const questionBlock = document.createElement("div");
  
  questionBlock.classList.add("question-blok");

  const questionText = document.createElement("p");
  questionText.classList.add("question-text");
  questionText.textContent = localStorage.getItem('currentQuestion')+". " + data[i].content;
  let idQue = parseInt(localStorage.getItem('currentQuestion')) + 1
  localStorage.setItem('currentQuestion', idQue)

  questionBlock.appendChild(questionText);
  const answers = [
    "да, научился это делать за последний месяц",
    "да, давно это делает, или: да, делал это раньше, но сейчас перерос это",
    "нет, еще не может этого делать"
  ];

  answers.forEach((answer, index) => {

    const answerDiv = document.createElement("div");
    answerDiv.classList.add("radio-btn", "question");
    const input = document.createElement("input");
    input.type = "radio";
    input.id = `${data[i].id}-${index + 1}`;
    input.value = index + 1
    input.name = `question-${data[i].id}`;
    const label = document.createElement("label");
    label.htmlFor = `${data[i].id}-${index + 1}`;
    

    const answerText = document.createElement("p");
    answerText.classList.add("answer-text");
    answerText.textContent = answer;

    answerDiv.appendChild(input);
    answerDiv.appendChild(label);
    answerDiv.appendChild(answerText);
    questionBlock.appendChild(answerDiv);
  });

  
  parentElement.appendChild(questionBlock);
}






let arrayTitle = []
data.forEach((item) =>{
  arrayTitle.push(item.titlename)
})
arrayTitle = [...new Set(arrayTitle)]

console.log(localStorage.getItem('currentQuestion'))

let currentQuestion1 = parseInt(localStorage.getItem('currentQuestion'))
let currentTitle = parseInt(localStorage.getItem('currentTitle'))

//Создание тайтла  
const createTitle = document.getElementById("id-header")
function makeTitle(titlename){
    const makedTitle = document.createElement("p")
    makedTitle.textContent = titlename
    makedTitle.id = "br-1"

    createTitle.appendChild(makedTitle)
}
makeTitle(data[currentQuestion1].titlename)
// Создаем неограниченное количество блоков

for (let i = currentQuestion1-1; i < currentQuestion1-1 + 4; i++) {
  if(i === data.length) 
    {
    const createdBtn2 = document.createElement("input")
    createdBtn2.type = "button"
    createdBtn2.id = `createdBtn-${i + 1}`;
    createdBtn2.classList.add("nextBtn-questions")
    createdBtn2.value = "Далее"
    createdBtn2.addEventListener("click",(event)=>{
    
      current = parseInt(localStorage.getItem('currentTitle')) + 1
      localStorage.setItem('currentTitle',current)
      console.log(current)
    
    })
    
    queMain.appendChild(createdBtn2)
    
      break
    }
  createQuestionBlock(data,i);
  
}


let blocksAmount 
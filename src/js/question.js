
fetch('http://26.145.60.29:3000/api/question/find')
.then((data)=> data.json())
.then((que) => {
  let data1 = que
  console.log(data1)

let queAmount = 216

console.log("usersId - "+localStorage.getItem("usersId"))

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
    let curr = (createdBtn.value-1) * 20 + 1
    console.log(curr)
    localStorage.setItem('currentQuestion', curr)
    getAllInfo()
  })

  queMain.appendChild(createdBtn)
}
// for(let i = 0; i < Math.ceil(queAmount/20);i++){
// createBtn(i)
// }
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

function createQuestionBlock(data1,i) {

  const questionBlock = document.createElement("div");
  
  questionBlock.classList.add("question-blok");

  const questionText = document.createElement("p");
  questionText.classList.add("question-text");
  questionText.textContent = localStorage.getItem('currentQuestion')+". " + data1.getQuestions[i].content;
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
    input.id = `${data1.getQuestions[i].id}-${index + 1}`;
    input.value = index + 1
    if(index == 0) input.checked = true
    input.name = `question-${data1.getQuestions[i].id}`;
    const label = document.createElement("label");
    label.htmlFor = `${data1.getQuestions[i].id}-${index + 1}`;
    

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
data1.getQuestions.forEach((item) =>{
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
makeTitle(data1.getQuestions[currentQuestion1].titlename)
// Создаем неограниченное количество блоков

for (let i = currentQuestion1-1; i < currentQuestion1 + 20; i++) {
  if(i === data1.getQuestions.length) 
    {
    const createdBtn3 = document.createElement("input")
    createdBtn3.type = "button"
    createdBtn3.id = `createdBtn-${i + 1}`;
    createdBtn3.classList.add("nextBtn-questions")
    createdBtn3.value = "Завершить опрос"
    createdBtn3.addEventListener("click",(event)=>{
      let summ = parseInt(localStorage.getItem('currentPage'))+1
      localStorage.setItem('currentPage',summ)
      let curr = (summ-1) * 20 + 1
      localStorage.setItem('currentQuestion', curr)
      getAllInfo()
      window.location.href = "./end.html"

    })
    
    queMain.appendChild(createdBtn3)
    
      break
    }
    else if(i === currentQuestion1-1 + 20){
      const createdBtn2 = document.createElement("input")

    createdBtn2.type = "button"
    createdBtn2.id = `createdBtn-${i + 1}`;
    createdBtn2.classList.add("nextBtn-questions")
    createdBtn2.value = "Далее"
    createdBtn2.addEventListener("click", (event)=>{
      let summ = parseInt(localStorage.getItem('currentPage'))+1
      localStorage.setItem('currentPage',summ)
      let curr = (summ-1) * 20 + 1
      localStorage.setItem('currentQuestion', curr)
      getAllInfo()
      window.location.href = "./question.html"
    })
    
      queMain.appendChild(createdBtn2)
      break
    }
      createQuestionBlock(data1,i);
}

async function getAllInfo(){
    let arrId = []
    let arrAnsw = []
    const info = {}
    const srr =  document.querySelectorAll('input[type="radio"]:checked')
    srr.forEach((item,index)=>{
      arrId.push(`${index+parseInt(localStorage.getItem('currentQuestion'))-20}`)
      arrAnsw.push(item.value)
    })
    info.answerCodeArr = arrAnsw
    info.questionIdArr = arrId
    info.usersId = parseInt(localStorage.getItem('usersId'))
    letsGo(info)
    async function letsGo(inform){
    await  fetch(`http://26.145.60.29:3000/api/user/answer`, {
        method: "POST",
        body: JSON.stringify(inform),
        headers:{
            'Content-Type': 'application/json'
        },
    })
    .then((data) => {
      if(data.status === 400){
        letsGo(info)
      }
    })
    }
    
    }
})

const test =
{
    "name": "John Doe",
    "gender": "male",
    "birthdate": "1990-01-01",
    "address": "1600 Amphitheatre Parkway",
    "age": 30,
    "city": "New York",
    "email": "john@example.com",
    "phone": "+1 123-456-7890",
    "isStudent": true,
    "description": "John"
  }

  document.querySelector('.admin-table').innerHTML = `<table class="admin-main-table"></table>`
for(key in test)
  {
    let row = document.createElement('tr')
     row.innerHTML=  `<td>${key}</td>`
     document.querySelector('.admin-main-table').appendChild(row)
     
  }
  document.getElementById("admin-email").value
  
let questionariySelect = ["a","b"]
const parentSelect = document.getElementById("admin-test-name")
for (let i = 0; i < questionariySelect.length;i++){
  const optionCreated = document.createElement("option")
  optionCreated.id = `option-${i+1}`
  optionCreated.value = i+1
  optionCreated.text = questionariySelect[i]
  
  parentSelect.appendChild(optionCreated)
}

let answers = ["Да", "Нет", "Не знаю"]
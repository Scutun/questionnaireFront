let data = parseInt(localStorage.getItem('usersId'))
fetch(`http://26.145.60.29:3000/api/question/result/${data}`)
.then((data)=>data.json())
.then((totalResult) => {
    const yeap = document.querySelector(".admin-login-content.success")
    const element = document.createElement("div")
    element.textContent =  `Ваш результат - ${totalResult[0]}`
    yeap.appendChild(element)
})
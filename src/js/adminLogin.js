function createAdminLogin(event){
    event.preventDefault()

    const info = {}
    info.email = document.getElementById("email-id").value
    info.password = document.getElementById("password-id").value
    fetch(`http://26.145.60.29:3000/api/logIn`, {
        method: "POST",
        body: JSON.stringify(info),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    // const res = fetch(`http://26.145.60.29:3000/api/logIn`,{
    //     method: 'GET'
    // })
    // console.log(res)
} 

let sib
let btn = document.getElementById("btn-admin-login")
btn.addEventListener("click",sib = createAdminLogin)
console.log(sib)

//--------------------------Validating number-------------------------------------
document.querySelectorAll('input[type="number"]').forEach (function(item){
    item.addEventListener("keypress",function (event){
        if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57)
        {
            event.preventDefault()
        }
    })
})

function damn(value) {
    if (value && typeof value === "string") {
         if (value.toLowerCase() === "true") return true;
         if (value.toLowerCase() === "false") return false;
    }
    return value;
 }
//--------------------------------------------------------------------------------

// console.log(document.querySelector('input[name="radio-sex"]:checked').value)


// if(document.querySelector('input[name="radio-sex"]:checked')===null){
//     makeWarningRadio("sex-text","sex-warning") 
// } else{
//     console.log(document.querySelector('input[name="radio-sex"]:checked').value)
//     makeDefaultRadio("sex-text","sex-warning")
// }

function makeDefaultText(textDefault,inputDefault,iconDefault){
    document.getElementById(textDefault).classList.add('default-text')
    document.getElementById(inputDefault).classList.add('default-field')
    document.getElementById(iconDefault).style.display = 'none'
}

function makeDefaultRadio(textDefault,iconDefault){
    document.getElementById(textDefault).classList.add('default-text')
    document.getElementById(iconDefault).style.display = 'none'
}

function makeDefaultSelector(warningSelector){
    document.getElementById(warningSelector).classList.add('default-selector')
}

function makeWarnigText(textWarning, inputWarning, iconWarning){
    document.getElementById(textWarning).classList.add('warning-text')
    document.getElementById(inputWarning).classList.add('warning-field')
    document.getElementById(iconWarning).style.display = 'block'
}

function makeWarningRadio(textWarning,iconWarning){
    document.getElementById(textWarning).classList.add('warning-text')
    document.getElementById(iconWarning).style.display = 'block'
}

function makeWarningSelector(warningSelector){
    document.getElementById(warningSelector).classList.add('warning-selector')
}

function createFormTtile(event){
    event.preventDefault()

    const info = {}

    info.surname = document.getElementById("surnameInput").value
    info.surname === "" ? makeWarnigText("surname-text","surnameInput","surname-warning") : makeDefaultText("surname-text","surnameInput","surname-warning")
        
    info.name = document.getElementById("nameInput").value
    info.name === "" ? makeWarnigText("name-text","nameInput","name-warning") : makeDefaultText("name-text","nameInput","name-warning")

    info.birthday = document.getElementById("birthInput").value
    info.birthday === "" ? makeWarnigText("birth-text","birthInput","birth-warning") : makeDefaultText("birth-text","birthInput","birth-warning")

    info.fillingDate = document.getElementById("dateInput").value
    info.fillingDate === "" ? makeWarnigText("date-text","dateInput","date-warning") : makeDefaultText("date-text","dateInput","date-warning")

    if(document.querySelector('input[name="radio-sex"]:checked')===null){
        makeWarningRadio("sex-text","sex-warning") 
    } else{
        if(document.querySelector('input[name="radio-sex"]:checked').value === "0"){
            info.gender = "0"
        }
        else info.gender = "1"
        makeDefaultRadio("sex-text","sex-warning")
    }

    info.email = document.getElementById("emailInput").value
    info.email === "" ? makeWarnigText("email-text","emailInput","email-warning") : makeDefaultText("email-text","emailInput","email-warning")

    info.phone = document.getElementById("phoneInput").value
    info.phone ==="" ? makeWarnigText("phone-text","phoneInput","phone-warning") : makeDefaultText("phone-text","phoneInput","phone-warning")

    
    if(document.querySelector('input[name="radio-who"]:checked')===null){
        makeWarningRadio("who-fill-text","who-fill-warning")
    } else{
        info.filling = document.querySelector('input[name="radio-who"]:checked').value
        makeDefaultRadio("who-fill-text","who-fill-warning")
    }
    
    info.pregnancy = document.getElementById("weekInput").value
    info.pregnancy === "" ? makeWarnigText("week-text","weekInput","week-warning") : makeDefaultText("week-text","weekInput","week-warning")
    
    if(document.querySelector('input[name="radio-which"]:checked')===null){
        makeWarningRadio("which-text","which-warning")
    } else{
        info.parturition = document.querySelector('input[name="radio-which"]:checked').value
        makeDefaultRadio("which-text","which-warning")
    }


    if(document.querySelector('input[name="radio-status"]:checked')==null){
        makeWarningRadio("health-text","health-warning")
    } else{
        info.health = document.querySelector('input[name="radio-status"]:checked').value
        makeDefaultRadio("health-text","health-warning")
    }

    if(document.querySelector('input[name="radio-yes-no"]:checked')===null){
        makeWarningRadio("yes-no-text","yes-no-warning")
    } else{
        makeDefaultRadio("yes-no-text","yes-no-warning")
        if(document.querySelector('input[name="radio-yes-no"]:checked').value === "1"){
            info.cramps = 0
        }
        else info.cramps = 1
    }
    
    if(document.querySelector('input[name="radio-where"]:checked')===null){
        makeWarningRadio("where-text","where-warning")
    } else{
        info.nurture = document.querySelector('input[name="radio-where"]:checked').value
        makeDefaultRadio("where-text","where-warning")
    }

    if(document.querySelector('input[name="radio-lang"]:checked')===null){
        makeWarningRadio("lang-text","lang-warning")
    } else{
        if(document.querySelector('input[name="radio-lang"]:checked').value === "1"){
            info.russianOnly = "0"
        }
        else info.russianOnly = "1"
        makeDefaultRadio("lang-text","lang-warning")
    }

    info.childrenAmount = document.getElementById("childrenInput").value
    info.childrenAmount === "" ? makeWarnigText("children-text","childrenInput","children-warning") : makeDefaultText("children-text","childrenInput","children-warning")
    
    if(document.querySelector('input[name="radio-mentor"]:checked')===null){
        makeWarningRadio("mentor-text","mentor-warning")
    } else{
        info.educater = document.querySelector('input[name="radio-mentor"]:checked').value
        makeDefaultRadio("mentor-text","mentor-warning")
    }
    
    if(document.querySelector('input[name="radio-mood"]:checked')===null){
        makeWarningRadio("mood-text","mood-warning")
        document.getElementById("mood-text2").classList.add("warning-text")
    } else{
        info.eduMood = document.querySelector('input[name="radio-mood"]:checked').value
        makeDefaultRadio("mood-text","mood-warning")
        document.getElementById("mood-text2").classList.add("default-text")
    }

    if(document.querySelector('input[name="radio-appreciate"]:checked')===null){
        makeWarningRadio("appreciate-text","appreciate-warning")
    } else{
        info.childValue = document.querySelector('input[name="radio-appreciate"]:checked').value
        makeDefaultRadio("appreciate-text","appreciate-warning")
    }

    if(document.querySelector('input[name="radio-economic"]:checked')===null){
        makeWarningRadio("economic-text","economic-warning")
    } else{
        info.economicSituation = document.querySelector('input[name="radio-economic"]:checked').value
        makeDefaultRadio("economic-text","economic-warning")
    }
    
    info.motherAge = document.getElementById("que-mother-age").value
    if(info.motherAge === ""){ 
        document.getElementById("que-mother-age").classList.add("warning-field")
        document.getElementById("mother-age").classList.add("warning-text")
    }else{
        document.getElementById("que-mother-age").classList.add("default-field")
    }

    info.motherEducation = document.getElementById("mother-education").value
    if(info.motherEducation == 0){
        makeWarningSelector("mother-education")
        document.getElementById("mother-age").classList.add("warning-text")
    } else{
        makeDefaultSelector("mother-education")
    }
    if(info.motherEducation != 0 && info.motherAge !== ""){
        document.getElementById("mother-age").classList.add("default-text")
    }

    info.fatherAge = document.getElementById("que-father-age").value
    if(info.fatherAge === ""){ 
        document.getElementById("que-father-age").classList.add("warning-field")
        document.getElementById("father-age").classList.add("warning-text")
    }else{
        document.getElementById("que-father-age").classList.add("default-field")
    }

    info.fatherEducation = document.getElementById("father-education").value
    if(info.fatherEducation == 0){
        makeWarningSelector("father-education")
        document.getElementById("father-age").classList.add("warning-text")
    }else{
        makeDefaultSelector("father-education")
    }
    if(info.fatherEducation != 0 && info.fatherAge !== ""){
        document.getElementById("father-age").classList.add("default-text")
    }

    info.educaterAge = document.getElementById("que-mentor-age").value
    if(info.educaterAge === ""){ 
        document.getElementById("que-mentor-age").classList.add("warning-field")
        document.getElementById("mentor-age").classList.add("warning-text")
    } else{
        document.getElementById("que-mentor-age").classList.add("default-field")
    }

    info.educaterEducation = document.getElementById("mentor-education").value
    if(info.educaterEducation == 0){
        makeWarningSelector("mentor-education")
        document.getElementById("mentor-age").classList.add("warning-text")
    }else{
        makeDefaultSelector("mentor-education")
    }
    if(info.educaterEducation != 0 && info.educaterAge !== ""){
        document.getElementById("mentor-age").classList.add("default-text")
        return
    }

    fetch(`http://26.145.60.29:3000/api/form/create`, {
        method: "POST",
        body: JSON.stringify(info),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    console.log(info)
    // window.location.href = "./index.html";
}

let buttonNext = document.querySelector(".aproveBtn.que-next")
buttonNext.addEventListener("click",createFormTtile)
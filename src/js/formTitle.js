//--------------------------Validating number-------------------------------------
let numberSiblings = document.querySelectorAll('input[type="number"]')

numberSiblings.forEach ( function(item){
    item.addEventListener("keypress",function (evt){
        if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
        {
            evt.preventDefault()
        }
    })
})
//--------------------------------------------------------------------------------


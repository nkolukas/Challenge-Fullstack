const concept = document.querySelector('#concept')
const amount = document.querySelector('#amount')
const date = document.querySelector('#date')
const type = document.querySelector('#type_oper').value
const btnAdd = document.querySelector('#btn_submit')
let amount_val = (type)=>{
    if(type == withdraw){
        return amount*-1
    }
    else{
        return amount*1
    }
}

btnAdd.addEventListener('click', () => {
    window.location.href = `add/${concept.value}/${amount_val().value}/${date.value}`
})
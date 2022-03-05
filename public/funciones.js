const concept = document.querySelector('#concept')
const amount = document.querySelector('#amount')
const date = document.querySelector('#date')
const type = document.querySelector('#type_oper').value
const btnAdd = document.querySelector('#btn_submit')

let amount_val = ()=>{
    if(type == 'withdraw'){
        return amount.value*-1
    } return amount.value
 }

btnAdd.addEventListener('click', () => {
   // window.location.href = `add/${concept.value}/${amount_val().value}/${date.value}`

   let response = fetch(`http://localhost:8000/add/${concept.value}/${amount_val()}/${date.value}`)

   .then(response => {
       res.json()
   })
   .then(r => {
       console.log(r)
   })
})
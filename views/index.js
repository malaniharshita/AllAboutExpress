function saveExpenses(event){
    event.preventDefault();
    let amount = event.target.amount.value;
    let description = event.target.des.value;
    let category = event.target.cat.value;
    //console.log(amount);
    const obj = {
       amount: amount,
       description: description,
       category:category
    }

    axios.post('http://localhost:5000/add-expense',obj)
    .then((response)=>{
        console.log(response.data.newExpenseDetail)

    })
    .catch(err => {
        document.body.innerHTML = document.body.innerHTML + '<h4>something went wrong</h4>'
        console.log('posterror ' +err);
    });
}
window.addEventListener("DOMContentLoaded", ()=>{
    axios.get('http://localhost:5000/get-expenses')
    .then((response) => {
        //console.log(response.data.allExpenses);
        for(var i = 0; i<response.data.allExpenses.length; i++){
            showUserOnScreen(response.data.allExpenses[i]);
        }
    })
    .catch((error) => {
        console.log(error);
    })
})

function showUserOnScreen(expense){
     const parentEle = document.getElementById('items');
     const childHTML = `<li id = ${expense.id} >${expense.amount} - ${expense.description} - ${expense.category}
                    <button onclick = "deleteExpense('${expense.id}')">DELETE</button>
                    <button>EDIT</button>
                    </li>`;
     parentEle.innerHTML += childHTML;
}

function deleteExpense(id){
    console.log(id);
    axios.delete(`http://localhost:5000/delete-expense/${id}`)
    .then(response =>{
        removeExpensesFromScreen(id);
    })
    .catch(error => {
        console.log(error);
    })
}

function removeExpensesFromScreen(id){
    const parentEle = document.getElementById('items');
    const childEle = document.getElementById(id);
    if(childEle){
        parentEle.removeChild(childEle);
    }
}
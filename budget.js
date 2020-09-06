/*==================== Select User input==============*/

const budget = document.querySelector("#total_amount");
const expenseType = document.querySelector("#expenses");
const expenseAmount = document.querySelector("#amount");

/*=================Select outputs===============*/

const dispTotal = document.querySelector(".first");
let dispExpenses = document.querySelector(".second");
const dispBalance = document.querySelector(".third");

const expenseTitleDiv = document.querySelector(".expense_title");
const expenseValueDiv = document.querySelector(".expense_value");

/*==================Make Culculate Button==================*/

const culculate = document.querySelector(".budget_culculate");

culculate.addEventListener("click", () => {
  dispTotal.textContent = budget.value;
});

/*=======================Make Add Expense Button====================*/

const addExpense = document.querySelector(".add_expense");






addExpense.addEventListener("click", () => {

  dispExpenses.textContent = +dispExpenses.textContent + +expenseAmount.value;
  dispBalance.textContent = budget.value - dispExpenses.textContent;
  /*==create paragraphs===*/
  const expenseTitleParagraph = document.createElement("p");
const expenseValueParagraph = document.createElement("p");

expenseTitleParagraph.textContent = expenseType.value;
expenseValueParagraph.textContent = expenseAmount.value;

expenseTitleDiv.appendChild(expenseTitleParagraph);
expenseValueDiv.appendChild(expenseValueParagraph);

/*=======create delete button=====*/
const button = document.createElement("button");
button.classList.add("delete");
const spanDelete = document.createElement("span");

spanDelete.classList.add("fas");
spanDelete.classList.add("fa-trash");

button.appendChild(spanDelete);
expenseValueParagraph.appendChild(button);


  
  

 
  button.addEventListener("click", () => {
    expenseValueParagraph.textContent="";
   expenseTitleParagraph.textContent="";

   dispExpenses.textContent = +dispExpenses.textContent - +expenseAmount.value;
   dispBalance.textContent =+ dispBalance.textContent  + + expenseAmount.value;
   
  });
 
  

  
});



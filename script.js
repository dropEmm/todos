//selecting a class from index.html file i.e. reference to form
const addForm = document.querySelector(".add");
//reference to ul 
const list = document.querySelector(".todos");
//reference to search
const search = document.querySelector(".search input");

//to generate a template  and inject that into the dom
const generateTemplate = todo => {

    //creating a template 
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${ todo }</span>
            <i class="far fa-trash-alt delete"></i>
        </li>                    
    `;
    
    //injecting it to the dom
    list.innerHTML += html;
};

//creating  a event listener to add the todo into the todo list
addForm.addEventListener("submit", e => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); //here we use trim to remove accidental spaces before or after any todo
    // console.log(todo);

    //we are doing this so that we don't have blank value to be inserted
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    } 
});

//delete todos

list.addEventListener("click", e => {
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
});

//creating a function to filter todos
const filterTodos = (term) => {

    //chaining methods to add filtered class
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase.includes(term))
        .forEach((todo) => todo.classList.add("filtered"));

    //chaining methods to remove filtered class
    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase.includes(term))
        .forEach((todo) => todo.classList.remove("filtered"));
};

//search todo 
search.addEventListener("keyup", () => {
    const term = search.value.trim().toLowerCase();
    //calling a function
    filterTodos(term);
});







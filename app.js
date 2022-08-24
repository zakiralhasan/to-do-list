let count = 0;
document.getElementById('add-items-btn').addEventListener('click', function(){

    count++;
    // getting value from the input field and clear the field 
    const getInputField = document.getElementById('input-field');
    const getInputFieldValue = getInputField.value;
    getInputField.value = '';

    // first get table body then creat a table row 
    const tableBody = document.getElementById('table-body');
    const creatTableRow = document.createElement('tr');
    creatTableRow.innerHTML = `       
        <td >${count}</td>
        <td class="">${getInputFieldValue}</td>
        <td>
        <button class="bg-blue-400 px-4 py-1 text-white rounded delete-btn">Delete</button>
        <button class="bg-red-400 px-4 py-1 text-white rounded edit-btn">Edit</button>
        </td>
    `;
    // add new table row on the table body 
    tableBody.appendChild(creatTableRow);
    
    // dlete button working section 
    const deleteButton = document.getElementsByClassName('delete-btn');
    for(let deleteBtn of deleteButton){
        deleteBtn.addEventListener('click', function(event){
            event.target.parentNode.parentNode.style.display = 'none';
        });
    };

     // edit button working section
    const editButton = document.getElementsByClassName('edit-btn');
    for(let editBtn of editButton){
        editBtn.addEventListener('click', function(event){
            event.target.parentNode.previousSibling.previousSibling.style.textDecoration = 'line-through';
        });
    };    
});

// function for reset or clear the list 
document.getElementById('claear-all-btn').addEventListener('click', function(){
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
});
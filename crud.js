var selectedRow = null;//there is no selected row yet

//Show alerts

function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
    
}

//Clear All Fields
function clearField(){
    document.querySelector("#firstname").value = "";
    document.querySelector("#lastname").value = "";
    document.querySelector("#gender").value = "";
    document.querySelector("#email").value = "";
}

//Add Data

document.querySelector("#student-form").addEventListener("submit", (e)=>{
    e.preventDefault();

    //Get Values in the Textbox
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const gender = document.querySelector("#gender").value;
    const email = document.querySelector("#email").value;

    //validate value
    if(firstname == "" || lastname == "" || gender =="" || email == ""){
        showAlert("Please fill in all fields", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr"); //get the values forom the tr or list of the tbody

            row.innerHTML = `
                <td>${firstname}</td>
                <td>${lastname}</td>
                <td>${gender}</td>
                <td>${email}</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            `;

            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added!", "success");
        }

        else{
            // get the value in the table
            selectedRow.children[0].textContent = firstname;
            selectedRow.children[1].textContent = lastname;
            selectedRow.children[2].textContent = gender;
            selectedRow.children[3].textContent = email;
            selectedRow = null;
            showAlert("Student Info Edited!", "info");
             
            
        }
        clearField();

    }
    
});


//Edit data
document.querySelector("#student-list").addEventListener("click", (e)=>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstname").value =  selectedRow.children[0].textContent;
        document.querySelector("#lastname").value =  selectedRow.children[1].textContent;
        document.querySelector("#gender").value =  selectedRow.children[2].textContent;
        document.querySelector("#email").value =  selectedRow.children[3].textContent;
    }
});


//DELETE DATA ------

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target= e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
});
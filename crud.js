// Read form data
function getFormData() {
    return {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        designation: document.getElementById("designation").value,
        department: document.getElementById("department").value,
        image: document.getElementById("image").value
    };
}

// CREATE
function createData() {
    let data = getFormData();

    let users = JSON.parse(localStorage.getItem("admins")) || [];
    users.push(data);

    localStorage.setItem("admins", JSON.stringify(users));
    alert("Added Successfully!");
}

// READ
function readData() {
    return JSON.parse(localStorage.getItem("admins")) || [];
}

// UPDATE 
function updateData() {
    let email = document.getElementById("email").value;
    let users = readData();

    let index = users.findIndex(u => u.email === email);

    if (index === -1) {
        alert("Record not found!");
        return;
    }

    users[index] = getFormData();
    localStorage.setItem("admins", JSON.stringify(users));

    alert("Updated Successfully!");
}

// DELETE 
function deleteData() {
    let email = document.getElementById("email").value;
    let users = readData();

    let filtered = users.filter(u => u.email !== email);

    localStorage.setItem("admins", JSON.stringify(filtered));

    alert("Deleted Successfully!");
}

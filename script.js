
let students = [];

function addStudent() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let dept = document.getElementById("dept").value;
    let year = document.getElementById("year").value;

    if (name == "" || roll == "" || dept == "" || year == "") {
        alert("Please fill all fields");
        return;
    }

    let student = {
        name: name,
        roll: roll,
        dept: dept,
        year: year
    };

    students.push(student);

    displayStudents();
    resetForm();

}

function displayStudents() {

    let list = document.getElementById("studentList");

    list.innerHTML = "";

    students.forEach((s, index) => {

        list.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.roll}</td>
            <td>${s.dept}</td>
            <td>${s.year}</td>
            <td>
                <button class="delete"
                onclick="deleteStudent(${index})">
                Delete
                </button>
            </td>
        </tr>
        `;

    });

}

function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();

}

function resetForm() {

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("year").value = "";

}

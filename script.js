
let students = [];

// Student Registration
function addStudent() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let dept = document.getElementById("dept").value;
    let year = document.getElementById("year").value;

    if (name === "" || roll === "" ||
        dept === "" || year === "") {

        alert("Please fill all fields");
        return;
    }

    if (students.some(s => s.roll === roll)) {
        alert("Roll Number already exists");
        return;
    }

    students.push({
        name: name,
        roll: roll,
        dept: dept,
        year: year
    });

    displayStudents();

    alert("Student Registered Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("year").value = "";
}

// Display Students
function displayStudents() {

    let table = document.getElementById("studentList");

    table.innerHTML = "";

    students.forEach(student => {

        let row = table.insertRow();

        row.insertCell(0).innerHTML = student.name;
        row.insertCell(1).innerHTML = student.roll;
        row.insertCell(2).innerHTML = student.dept;
        row.insertCell(3).innerHTML = student.year;

    });

    searchStudent();
}

// Student Search
function searchStudent() {

    let value = document.getElementById("search")
        .value.toLowerCase();

    let table = document.getElementById("studentList");

    for (let i = 0; i < table.rows.length; i++) {

        let name = table.rows[i].cells[0]
            .innerHTML.toLowerCase();

        let roll = table.rows[i].cells[1]
            .innerHTML.toLowerCase();

        if (name.includes(value) || roll.includes(value)) {
            table.rows[i].style.display = "";
        }
        else {
            table.rows[i].style.display = "none";
        }
    }
}

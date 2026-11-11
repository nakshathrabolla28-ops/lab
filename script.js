
function register() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let college = document.getElementById("college").value;
    let dept = document.getElementById("dept").value;
    let year = document.getElementById("year").value;
    let event = document.getElementById("event").value;

    let msg = document.getElementById("msg");

    if (name == "" || email == "" || phone == "" ||
        gender == "" || college == "" || dept == "" ||
        year == "" || event == "") {

        msg.style.color = "red";
        msg.innerHTML = "Please fill all fields!";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        msg.style.color = "red";
        msg.innerHTML = "Enter valid email!";
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        msg.style.color = "red";
        msg.innerHTML = "Enter valid 10 digit phone number!";
        return;
    }

    msg.style.color = "green";

    msg.innerHTML =
        "<h3>Registration Successful!</h3>" +
        "Name: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Phone: " + phone + "<br>" +
        "Gender: " + gender + "<br>" +
        "College: " + college + "<br>" +
        "Department: " + dept + "<br>" +
        "Year: " + year + "<br>" +
        "Event: " + event;
}

function clearResult() {
    document.getElementById("msg").innerHTML = "";
}

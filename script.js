function markPresent() {
    addAttendance("Present");
}

function markAbsent() {
    addAttendance("Absent");
}

function addAttendance(status) {
    let name = document.getElementById("studentName").value;

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    let list = document.getElementById("attendanceList");
    let item = document.createElement("li");

    item.textContent = name + " - " + status;
    list.appendChild(item);

    document.getElementById("studentName").value = "";
}

const employee = {
    name : "Sanjukta Giri",
    empId : 2779989,
    location : "Kolkata",
    employeeDetails() {
        console.log("Employee Name : " + this.name);
        console.log("Employee Id : " + this.empId);
        console.log("Location : "+ this.location);
    }
}

// console.log(employee.name);
// employee.employeeDetails.call(employee);


const karan = {
    name : "Karan",
    empId : 2779988,
    location : "Kolkata",
    employeeDetails(){
        console.log(this.name);
    }
}

karan.__proto__ = employee;

console.log(karan);
karan.employeeDetails()

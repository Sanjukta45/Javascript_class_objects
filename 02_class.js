class Employee {
    constructor (name,empId){
        this.name = name;
        this.empId = empId;
        console.log("New Employee Created");
    }

    getName(){
        console.log("Name is : " + this.name);
    }

    getEmpId(){
        console.log("EmpId is : " + this.empId);
    }
}

const sanjukta = new Employee("Sanjukta Giri", 2779989);
sanjukta.getName();
sanjukta.getEmpId();
console.log(sanjukta);
class employee {
    constructor(){
        console.log("parent class created");
    }
    eat(){
        console.log("Employee eats");
    }
    walk(){
        console.log("Employee Walks");
    }
}

class mis extends employee{
    constructor(){
        super();
        console.log("Mis employee");
        
    }
    misWork(){
        console.log("Employee does MIS works");
    }
}

const sanjukta = new mis();
sanjukta.eat();
sanjukta.misWork();
//learning object oriented programming in JS
//console.log("hello world");

// Constructor function equivalent of class
function Robot(first,last,job,color,number){
    //properties
    this.name = {
      first:first,
      last:last
    }
    this.job = job;
    this.color = color;
    this.number = number;
    //methods 
    this.talk = function(){
      console.log("Hello my name is "+this.name.first+" "+this.name.last);
    }  
    this.info = function(){
      console.log("I am a "+this.job+", my color is "+this.color+" my number is "+this.number);
    }

}
// Create new object instance
let robot1 = new Robot("R2","D2","mechanics","blue",5);
//call method 
robot1.talk();
robot1.info();
let robot2 = new Robot("C3","PO","translator","yellow",7);
robot2.talk();
robot2.info();
// =========================================================
//using es6
class Machine {
  constructor(name, maker, year){
    this.name = name;
    this.maker = maker;
    this.year = year;
  }
  //method 
  running(game){
    return ("playing "+game)
  }
  
}
let machine1 = new Machine("pce","NEC",1987);
let machine2 = new Machine("sms","SEGA",1986);
console.log(machine1.name);
console.log(machine1.running("Spriggan"));
// =========================================================
// Inheritance
class Computer extends Machine {
  constructor(name,id){
    super(name);
    this.id = id;
  }
  sayHello(){
    console.log("Hello I am an "+this.name+ " computer");
  }
}
computer = new Computer("Amstrad",6128);
// create instance
//computer = null;
// call method
computer.sayHello();
// delete instance
computer = null;
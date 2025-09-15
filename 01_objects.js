// Create object using object literal
const person = {
    name : "Anjali",
    age : 25,
    location : "Noida",
    email : "anjalisinghtumaul@gmail.com" ,
    lastLoginDays : ['Monday' , "Saturday"] ,
    greet : function () { 
        console.log("Hello my name is" + this.name);
    }
};
person.greet();



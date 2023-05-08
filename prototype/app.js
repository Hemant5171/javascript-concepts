var person={
    firstName:"Default",
    lastName:"Default",
    fullName: function(){
        return this.firstName+' '+this.lastName;
    }
};


var person1={
    firstName:'Hemant',
    lastName:'Bhagwani'
};

//Dont do this , only for Demo

person1.__proto__=person;

console.log(person1.fullName());

//Using prototype to add properties
function Person_Sample(firstName,lastName) {
    this.firstName=firstName;
    this.lastName=lastName;
}

Person_Sample.prototype.getFullName = function() {
    return this.firstName+" "+this.lastName;
}

var hemant=new Person_Sample('Hemant','Bhagwani');
var anil=new Person_Sample('Anil','Bhatia');

console.log(anil.getFullName());

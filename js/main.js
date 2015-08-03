function User(first, last){
    if(this === window){
        return new User(first, last);
    };
    this.name= first + ' '  + last;
    return this;
};
//
var name= "Lalit Negi";
var user1= new User('Arun', 'Arya');
console.log('global name', name);
console.log(user1);
var user2= User('Vishal', 'Dhadve');
console.log(user2);
var user3= new User('Chetan', 'Parte');
console.log(user3);
var user4= new User('Ganesh', 'Dahiwalkar');
console.log(user4);
var user5= new User('Luis', 'Menezes');
console.log(user5);
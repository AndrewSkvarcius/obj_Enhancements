//same keys and values
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName, 
    }
};

// computed property names
let  favoriteNumber = 42; 
const instructor = {
     firstName: "Colt"
    [favoriteNumber] :  "That is my favorite!"
};





const instructor = {
    [firstName] : "Colt",
    sayHi(){
        return "Hi";
    },
    sayBye(){
        return this.firstName + "Bye";
    } 
 }

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
        return noise;
    }
}
}
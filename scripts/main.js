

//Calculate Dog Years
const calculateDogYears = (personAge) => {
    const ageInDogyears = personAge / 7 
    console.log(ageInDogyears);
}

calculateDogYears(56);

//Best in Show
const dogString = (stringInput) => {
    stringInput = stringInput[0].toLowerCase() + stringInput.slice(1);
    switch (stringInput){
        case "doberman":
            return "My favorite breed";
        case "meow": 
            return "I like cats";
        default:
            return "No Comment";
    }
}

const whatDog = dogString("Doberman");
console.log(whatDog);


//Addition
const addTwo = (inputNum1, inputNum2) => {
    return inputNum1 + inputNum2;
}

console.log(addTwo(5,8));

const addThree = (inputOne, inputTwo, inputThree) => {
    return inputOne + inputTwo + inputThree;
}

console.log(addThree(17,4,11));

//Self-Driving Cars 
const go = (direction, speed) => {
    console.log(`The car is moving ${direction} at ${speed} mph`);
    if(speed >= 75){
        console.log("Slow Down!")
    }
}

go("forwards", 45);
go("backwards", 85);

//Evens or Odds
const evenOrOdd = (num) => {
    if (num % 2 == 0){
        console.log("Even")
    }else if(num % 2 == 1){
        console.log("Odd");
    }else{
        console.log("Invalid Input");
    }
}

evenOrOdd(2);
evenOrOdd(5);
evenOrOdd(28);

const arrayEvenOdd = [7,3,2,29,56,83,22,44,2,3];
console.log(arrayEvenOdd);

arrayEvenOdd.forEach(count => {
    evenOrOdd(count);
});

//Double Functions
const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
    const arrayDouble = []
    const filterFunc = (inputArray) => {
        inputArray.forEach(countVar => {
            countVar = countVar[0].toLowerCase() + countVar.slice(1);
            if(countVar.startsWith('k') == false){
                arrayDouble.push(countVar);
            }
        })
        console.log(arrayDouble);
    }

    const arrayThis = filterFunc(words);
    

/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */

    const singleString = (arrayInput) => {
        let returnString = arrayInput.join();
        returnString = returnString.replace(/,/g, ' ');
        returnString = returnString[0].toUpperCase() + returnString.slice(1);
        console.log(returnString);
    }

    singleString(arrayDouble);

//You can tune the piano,but you cant

const svenFish = () => {
    let random = Math.random() * 2;
    if(random == 2){
        console.log("Sven caught a fish!");
    }else {
        console.log("Sven didn't catch a fish.");
    }
}


svenFish();
svenFish();
svenFish();
svenFish();


//Fast Food

const orderMeal = (sandwichInput, sideInput, drinkInput, dessertInput) => {
    return {
        sandwich: sandwichInput,
        side : sideInput,
        drink: drinkInput,
        dessert: dessertInput
    }
}

console.log(orderMeal("Ultimate Slammer", "Potato Wedges", "Mr. Pepper", "Ice Cream"));

//Same Chores, Different Days

const personInput = {
    firstName: "Wade",
    lastName: "Watts"
}


const mowing = (person) => {
    return `${person.firstName} ${person.lastName} mowed the lawn`
}

const garbage = (person) => {
    return `${person.firstName} ${person.lastName} took out the garbage`
}

const dishes = (person) => {
    return `${person.firstName} ${person.lastName} did the dishes`
}

const laundry = (person) => {
    return `${person.firstName} ${person.lastName} washed their laundry`
}

const vaccum = (person) => {
    return `${person.firstName} ${person.lastName} vaccumed their room`
}

const mopping = (person) => {
    return `${person.firstName} ${person.lastName} mopped the floor`
}

const dayPlanner = (firstChore,secondChore,thirdChore, person, day) => {
    return `On ${day}, ${firstChore(person)}, and ${secondChore(person)}, and ${thirdChore(person)}.`
}

console.log(dayPlanner(mowing,laundry,garbage, personInput, "Tuesday"));


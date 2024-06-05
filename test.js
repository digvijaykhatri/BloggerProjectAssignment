var cel = 3;
var fer = cel * 9 / 5 + 32;
console.log(fer + " F");
if (fer < 60) { var temp = 1; }
if (fer >= 60 && fer <= 85) { var temp = 2; }
if (fer > 85) { var temp = 3; }
switch (temp) {
    case 1: {
        console.log("too cold")
        break;
    }
    case 2: {
        console.log("normal")
        break;
    }
    case 3: {
        console.log("too hot")
        break;
    }
}


var x = "b";
switch (x) {
    case "a": {
        console.log(x + " is a Vowel")
        break;
    }
    case "e": {
        console.log(x + " is a Vowel")
        break;
    }
    case "i": {
        console.log(x + " is a Vowel")
        break;
    }
    case "o": {
        console.log(x + " is a Vowel")
        break;
    }
    case "u": {
        console.log(x + " is a Vowel")
        break;
    }
    default: { console.log(x + " is not a Vowel") }
}

const naam = [
    { Name: "Dhruv", grade: "B" },
    { Name: "Digvijay", grade: "A" },
    { Name: "Ayush", grade: "A+" },
];
for (i = 0; i < naam.length; i++) {
    console.log(naam[i].Name);
}


var people = [{ firstname: "Digvijay", lastname: "Khatri" },
{ firstname: "Dhruv", lastname: "Goel" },
{ firstname: "Ayush", lastname: "Kumar" }]
for (i = 0; i < people.length; i++) {
    console.log(people[i].firstname, people[i].lastname);
}
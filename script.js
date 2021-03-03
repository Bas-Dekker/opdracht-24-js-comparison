const age = 24;
const isFemale = true;
const driverStatus = "bob";
const Name = "Bas";
const totalAmount = 10;

if (age >= 18) {
  console.log("Loop maar door naar binnen");
} else {
  console.log("Je bent te jong, je mag niet naar binnen");
}

if (isFemale) {
  console.log("Je bent een vrouw, loop maar door naar binnen");
} else {
  console.log("Het is ladies night, je mag helaas niet naar binnen");
}

if (driverStatus === "bob") {
  console.log("Hier heb je een cassis. Je mag rijden.");
} else {
  console.log("Hier heb je een biertje. Je mag niet rijden.");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Jammer, je krijgt geen 50% korting");
}

if (Name === "Bram" || Name === "Sarah") {
  console.log("Je krijgt een gratis biertje!");
} else {
  console.log("Jammer, je krijgt geen gratis biertje");
}

if (totalAmount >= 100) {
  console.log("Je krijgt een gratis flesje champagne!");
} else if (totalAmount > 50) {
  console.log("Je krijgt een gratis portie nachos!");
} else if (totalAmount > 25) {
  console.log("Je krijgt een gratis portie vega bitterballen!");
} else {
  console.log("Helaas geen korting, maar leuk dat je er bent");
}



function feedFish() {
    document.getElementById("food").innerHTML = "• • •  ..  • • • ...,.,.";
    document.getElementById("status").innerHTML = "The fish is eating!";
}


document.getElementById("feedButton").onclick = feedFish;

function addFish() {
    document.getElementById("fish").innerHTML += " 🐟";
}


document.getElementById("addButton").onclick = addFish;

function showInstructions() {
    alert("Click Feed to give the fish food. Click Clean tank to remove leftover food. Click Add a fish to add another fish.");
}

document.getElementById("helpButton").onclick = showInstructions;


function cleanTank() {
    document.getElementById("food").innerHTML = "";
    document.getElementById("status").innerHTML = "The tank is clean!";
}

document.getElementById("cleanButton").onclick = cleanTank;
function feedFish() {
    document.getElementById("food").innerHTML= "...";
    document.getElementById("status").innerHTML= "The fish is eating!";
}

document.getElementById("feedButton").addEventListener("click", feedFish);
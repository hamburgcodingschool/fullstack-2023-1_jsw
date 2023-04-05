// DOM Elements
const addButton = document.querySelector("#addButton");
const nameInput = document.querySelector("#nameInput");
const jobInput = document.querySelector("#jobInput");
const imageInput = document.querySelector("#imageInput");

// Original Array
let coolPeople = [
    {
        imageSrc: "https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&resize=800,534",
        name: "Homer",
        job: "Security Inspector"
    },
    {
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSj7y_EscIXfcjQskmdS18112Tcrva4i353xQ2IhmYw&s",
        name: "Peter",
        job: "Formerly a Fisherman"
    }
];

// Event Listeners
addButton.addEventListener("click", function() {
    const newPerson = {
        // imageSrc: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
        imageSrc: imageInput.value,
        name: nameInput.value,
        job: jobInput.value
    };
    coolPeople.push(newPerson);
    
    saveToLocalStorage();
    
    fillCardContainer();
});

// Funtions
function fillCardContainer() {
    const cardContainer = document.querySelector(".cardContainer");

    cardContainer.innerHTML = "";
    for (let i = 0; i < coolPeople.length; i++) {
        const newCard = `
            <div class="card">
                <img src="${coolPeople[i].imageSrc}">
                <h2>${coolPeople[i].name}</h2>
                <h3>${coolPeople[i].job}</h3>
            </div>`;
        cardContainer.innerHTML += newCard;
        // console.log(newCard);
    }
}

function saveToLocalStorage() {
    const myJsonString = JSON.stringify(coolPeople);
    localStorage.setItem("coolPeople", myJsonString);
}

function loadFromLocalStorage() {

    const myJsonString = localStorage.getItem("coolPeople");
    // if nothing was ever saved to LocalStorage don't replace with an empty Array
    // keep the default 2 people, added at the top
    if (myJsonString) {
        coolPeople = JSON.parse(myJsonString);
    }
}

// When page first loads
// Start the program by loading from LocalStorage and then filling out the Cards in the Array
 
loadFromLocalStorage();
fillCardContainer();

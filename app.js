const cardsArray = [
    {
        name: "cat",
        img: "images/cat.png"
    },
    {
        name: "cat-pic",
        img: "images/cat-pic.png"
    },
    {
        name: "hat",
        img: "images/hat.png"
    },
    {
        name: "hat-pic",
        img: "images/hat-pic.png"
    },
    {
        name: "car",
        img: "images/car.png"
    },
    {
        name: "car-pic",
        img: "images/car-pic.png"
    },
    {
        name: "sun",
        img: "images/sun.png"
    },
    {
        name: "sun-pic",
        img: "images/sun-pic.png"
    },
    {
        name: "cup",
        img: "images/cup.png"
    },
    {
        name: "cup-pic",
        img: "images/cup-pic.png"
    },
    {
        name: "dog",
        img: "images/dog.png"
    },
    {
        name: "dog-pic",
        img: "images/dog-pic.png"
    },
    {
        name: "bug",
        img: "images/bug.png"
    },
    {
        name: "bug-pic",
        img: "images/bug-pic.png"
    },
    {
        name: "pig",
        img: "images/pig.png"
    },
    {
        name: "pig-pic",
        img: "images/pig-pic.png"
    }

]

let chosenCards = [];
let cardIds = [];
const cardsWon = [];
const score = document.querySelector(".score");

cardsArray.sort(() => 0.5 - Math.random());

const gridLayout = document.querySelector("#grid");

function createLayout() {
    for (let i = 0; i < cardsArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/memory-block.png");
        card.setAttribute("class", cardsArray[i].name)
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridLayout.append(card);
    }
}

createLayout();

function flipCard() {
    let cardId = this.getAttribute("data-id");
    let cardName = this.getAttribute("class");
    chosenCards.push(cardName);
    cardIds.push(cardId);
    console.log(chosenCards)
    this.setAttribute("src", cardsArray[cardId].img)
    if (chosenCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll("img");
    let optionOneName = chosenCards[0];
    let optionTwoName = chosenCards[1];
    let optionOneId = cardIds[0];
    let optionTwoId = cardIds[1];

    if (optionOneName == optionTwoName) {
        cards[optionOneId].setAttribute("src", "images/memory-block.png")
        cards[optionTwoId].setAttribute("src", "images/memory-block.png")
    } else if (optionOneName.slice(0, 3) == optionTwoName.slice(0, 3)) {
        cards[optionOneId].setAttribute("src", "images/blue.png");
        cards[optionTwoId].setAttribute("src", "images/blue.png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(chosenCards);
        score.textContent = cardsWon.length
    } else {
        cards[optionOneId].setAttribute("src", "images/memory-block.png");
        cards[optionTwoId].setAttribute("src", "images/memory-block.png");

    }
    cardIds = [];
    chosenCards = [];

    if (cardsWon.length == cardsArray.length / 2) {
        alert("You win!!!")
        location.reload();
    }
}


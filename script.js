// Øvelse 1

function checkDrink() {
    if (this.alt === 'sodavand') {
      console.log('Alkoholfri');
    } else if (this.alt === 'øl' || this.alt === 'snaps') {
      console.log('Indeholder alkohol');
    }
  }

const drinks = document.querySelectorAll("img");

drinks.forEach(function(drink) {
  drink.addEventListener('click', checkDrink);
});

// Øvelse 2

// Øvelse 3


document.querySelector('button').addEventListener('click', tjekTal);

let forsoeg = 0;
const ranNum = Math.floor(Math.random() * 11);

function tjekTal() {
    forsoeg++;
    const brugerTal = document.querySelector("#tal").value;

    if(ranNum > brugerTal) {
        alert("Øv! " + brugerTal + " var for lavt. Prøv igen :)");
    } else if (ranNum < brugerTal) {
        alert("Øv! " + brugerTal + " var for højt. Prøv igen :)")
    } else {
        alert(brugerTal + " er rigtigt!" + " Du brugte " + forsoeg + " forsøg. Prøv igen med et nyt tal :)");
        location.reload();
    }
}


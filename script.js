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

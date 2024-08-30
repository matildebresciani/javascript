// Øvelse 1

function checkDrink() {
    if (this.alt === 'sodavand') {
      console.log('Alkoholfri');
    } else if (this.alt === 'øl' || this.alt === 'snaps') {
      console.log('Indeholder alkoho
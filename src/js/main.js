const spreadOperator = {
  constInip () {
    this.text = document.querySelector('.jump');
    this.letters = this.text.textContent;
  },

  emptyText () {
    this.text.textContent = '';
  },

  jsEnabled () {
    document.documentElement.classList.add('js-enabled');
  },

  appInit () {
    this.constInip();
    this.emptyText();
    this.jsEnabled();
    for (let letter of this.letters) {
      if (letter === ' ') {
        this.text.insertAdjacentHTML('beforeend', `\u00A0`);
      }
      this.text.insertAdjacentHTML('beforeend', `<span>${letter}<span>`);
    }
  }
}

spreadOperator.appInit();





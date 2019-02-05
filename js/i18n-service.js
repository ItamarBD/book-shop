var gTrans = {

  title: {
      en: "Book shop",
      he: "חנות ספרים"
  },
  header: {
    en: "Book shop",
    he: "חנות ספרים"
  },
  'add-new': {
      en: "Add new book",
      he: "הוסף ספר"
  },
  detailsBtn: {
      en: 'Read',
      he: 'פרטים'
  },
  updateBtn: {
      en: 'Update',
      he: 'עדכן'
  },
  deleteBtn: {
      en: 'Delete',
      he: 'מחק'
  },
  rateBtn: {
      en: 'Rate',
      he: 'דרג'
  },
  'book-name': {
      en: 'Book name',
      he: 'שם הספר'
  },
  price: {
      en: 'Price',
      he: 'מחיר'
  },
  actions: {
      en: 'Actions',
      he: 'פעולות'
  },
  closeBtn: {
      en: 'Close',
      he: 'סגור'
  },
  priceModal: {
      en: 'Price:',
      he: 'מחיר: '
  }
}

var gCurrLang = 'en';

function traslate() {
    var elTrans = document.querySelectorAll('[data-trans]')

    for (var i = 0; i < elTrans.length; i++) {
        var elT = elTrans[i];
        var transKey = elT.dataset.trans;
        var txt = getTrans(transKey);

        elT.innerText = txt;
    }
}

function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'key is not exist';

    var txt = keyTrans[gCurrLang];

    if (!txt) txt = keyTrans['en'];
    return txt;
}

function setLang(lang) {
    gCurrLang = lang;
  }
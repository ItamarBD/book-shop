'use strict'


function init() {
  gBooks = createBooks();
  renderBooks();

}

function renderBooks() {
  var books = getBooks();

  var strHTML = books.map(function (book) {
    return `
        <tr>
          <th scope="row">${book.id}</th>
            <td class="book-name">${book.bookName}</td>
            <td>${book.price}</td>
            <td class="actions" >
              <button type="button" data-trans="read" class="btn btn-dark read" onclick="onRead(${book.id})">Read</button>
              <button type="button" class="btn btn-dark update" onclick="readAndUpdateBook('${book.id}')">Update</button>
              <button type="button" class="btn btn-dark delete" onclick="onDeleteBook('${book.id}')">Delete</button>
            </td>
        </tr>`

  });
  $('tbody').html(strHTML);
}

function onDeleteBook(bookId) {
  deleteBook(bookId);

  renderBooks();
}

function readAndAddNewBook() {
  var bookName = prompt('book name?');
  var price = prompt('price?');
  addBook(bookName, price);

  renderBooks();
}

function readAndUpdateBook(bookId) {
  var bookPrice = prompt('New price?');
  updateBook(bookId, bookPrice);

  renderBooks();
}

function onRead(bookId) {
  var book = getBookById(bookId);
  var name = book.bookName;

  $('.modal-title').text(name);
  $('.img').html(`<img src="img/${bookId}.jpg">`);
  $('.price').html(`Price: ${gBooks[bookId - 1].price}`);
  $('.modal').show();

  String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d ||
     (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) ||
     (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});
}

function onCloseModal() {
  $('.modal').hide()
}

function wcqib_refresh_quantity_increments() {
  jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
      var c = jQuery(b);
      c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
  })
}

function onChangeLang(lang) {
  setLang(lang);
  if (lang === 'he') {
    document.body.classList.add('rtl')
  } else {
      document.body.classList.add('rtl')
  }
  traslate();
  renderBooks();
}


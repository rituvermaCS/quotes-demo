fetch("quotes.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    addQuotes(data);
  })
  .catch(function (error) {
    console.log(error);
  });

function addQuotes(qt) {
  var mainContainer = document.getElementById("quote_block");
  for (var i = 0; i < qt.length; i++) {
    var quote = document.createElement("blockquote");
    var cite = document.createElement("cite");
    quote.innerHTML = "Quote: " + qt[i].quote;
    cite.innerHTML =
      "Added By: " + qt[i].added_by + "<br/><br/>" + "Github Handle: " + qt[i].github_handle;
    mainContainer.appendChild(quote);
    mainContainer.appendChild(cite);
  }
}

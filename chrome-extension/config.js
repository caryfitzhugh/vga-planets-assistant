$('.scripts li a').click(function(e) {
  var file = "scripts/"+$(this).data('script') + ".js";
  console.log(this, "loading: " , file);
  chrome.tabs.executeScript(null, {'file': file });
});

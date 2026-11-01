(function () {
  var output = document.getElementById('out');
  if (!output) return;

  var lines = [
    'JavaScript : OK',
    'User-Agent : ' + navigator.userAgent,
    'Timestamp : ' + new Date().toISOString(),
    'Page URL : ' + window.location.href
  ];

  output.textContent = lines.join('\n');
})();

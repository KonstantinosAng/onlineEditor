function refresh() {
  var textContent = document.getElementById('editor').value;
  document.getElementById('frame').srcdoc = textContent;
}

function Init() {
  document.getElementById('editor').innerHTML += `<!DOCTYPE html>
<html lang="en" dir="ltr">

  <head>

    <meta charset="utf-8">
    <title></title>

  </head>

  <body>

  </body>

</html>`;
}

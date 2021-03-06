function update() {
  var idoc = document.getElementById('iframe').contentWindow.document;

  idoc.open();
  idoc.write(editor.getValue());
  idoc.close();
}

function setupEditor() {
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/solarized_dark"); // solarized_dark
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(`<!DOCTYPE html>
<html>
<head>
</head>

<body>
</body>

</html>`, 1); //1 = moves cursor to end

  editor.getSession().on('change', function() {
    update();
  });

  editor.focus();


  editor.setOptions({
    fontSize: "16pt",
	cursorStyle: "slim",
	navigateWithinSoftTabs: true,
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible: true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}
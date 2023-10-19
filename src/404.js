var path = document.getElementById('path')
var errorCode = document.getElementById('errorcode')
var display = document.getElementById('sfn').style.display

const response = await fetch(document.location.href);
errorCode.innerHTML = 'Error Code: ' + response.status
path.innerHTML = 'Path: ' + location.pathname
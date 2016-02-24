<html>

<head>

<title></title>

</head>

<body>
<form>
<label> What do you think of Javascript?
<input type="text" id="txtfld" size="30"></label>

<input type="button" value="submit Answer" onclick="document.getElementById('outdiv').innerHTML= document.getElementById('txtfld').value;">
</form> 

<script>
function myFunction(){
var x= document.getElementById("txtfld").value;
alert("x");
}
</script>
<p id="outdiv"><p>
<button onclick="myFunction">try it</btton>
<p id="demo"></p>
</body>
</html>

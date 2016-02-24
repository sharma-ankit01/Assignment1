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
<button onclick="myFunction">try it</btton>
<script>
function myFunction(){
var x= document.getElementById("txtfld").value;
document.getElementById("demo").innerHTML=x;
</script>
<p id="outdiv"><p></body>
<p id="demo"></p>
</html>

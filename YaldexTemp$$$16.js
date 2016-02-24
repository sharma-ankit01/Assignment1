<html>

<head>

<title></title>

</head>

<body><p id="demo"></p>
<form>
<label> What do you think of Javascript?
<input type="text" id="txtfld" size="30"></label>

<input type="button" value="submit Answer" onclick="document.getElementById('outdiv').innerHTML= document.getElementById('txtfld').value;">
</form> 

<script>
function myFunction(){
var x= document.getElementById("txtfld").value;
document.getElementById("demo").innerHTML=x;
}
</script>
<p id="outdiv"><p></body>
<button onclick="myFunction">try it</btton>

</html>

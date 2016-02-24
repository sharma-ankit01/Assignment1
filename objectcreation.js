<html>

<head>

<title></title>

</head>

<body>
<p id="demo"></p>
<script>
function person(first,last,age){
this.firstName=first;
this.seconName=last;
this.age=age;
}
var myFather=new person("Abinash","Chandra",55);
document.getElementById("demo").innerHTML=
"My father's name is " + myFather.firstName;
</script>

</body>

</html>

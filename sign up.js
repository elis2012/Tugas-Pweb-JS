function myFunction() {
    var x = document.getElementById("sign up");
    var text ="";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("simpan").innerHTML = text;
    document.getElementById("simpan").innerHTML = email;
    document.getElementById("simpan").innerHTML = password;
}


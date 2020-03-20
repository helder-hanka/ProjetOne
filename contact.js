function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lastname"].value;
    let z = document.forms["myForm"]["subject"].value;
    if ( x == "" || y == "" || z =="") {
    alert(" Your Name and Lastname and message please !");
    return false;
    } else if (x == "") {
    alert("Your name please !")
    return false;
    }else if (y == "") {
      alert("Your lastname please !");
      return false;
    } else if (z == "") {
        alert("Your message please !");
        return false;
    } else {
    alert(" To Sen");
    }
}
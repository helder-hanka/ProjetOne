
    function myFunction () {
        let txt;
        let person = prompt("Please enter your name:", "Harry Potter");
        if (person == null || person == "") {
            txt = "User cancelled the propt.";
        } else {
            txt = "Welcome to " + person;
        }
        document.getElementById("demo").innerHTML = txt;
    }
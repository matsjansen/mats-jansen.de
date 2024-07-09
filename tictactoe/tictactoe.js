var circle = "<svg width='1/3' height='1/3' xmlns='http://www.w3.org/2000/svg'><circle cx='50%' cy='50%' r='40%' stroke='white' stroke-width='10%' fill='none'/></svg>"
var cross = "<svg width='1/3' height='1/3' xmlns='http://www.w3.org/2000/svg'><line x1='10%' y1='10%' x2='90%' y2='90%' stroke='white' stroke-width='10%'/><line x1='90%' y1='10%' x2='10%' y2='90%' stroke='white' stroke-width='10%'/></svg>"
var Content;
var counter = 0;
var r1c1 = null;
var r1c2 = null;
var r1c3 = null;
var r2c1 = null;
var r2c2 = null;
var r2c3 = null;
var r3c1 = null;
var r3c2 = null;
var r3c3 = null;



function starter(inp){
    document.getElementById("start").style.display = "none";
    Content = document.getElementById('content');
    if (inp == "kreuz"){
        counter++;
    }
    Content.style.display = "grid";
    //Content.classList.add("tablebox");
    //Content.innerHTML = ("<table><tr id='r1'><th id='r1c1'><button class='buttonbox align' onclick='changer(&apos;r1c1&apos;)'></button></th><th id='r1c2' class='border'><button class='buttonbox align' onclick='changer(&apos;r1c2&apos;)'></button></th><th id='r1c3'><button class='buttonbox align' onclick='changer(&apos;r1c3&apos;)'></button></th></tr><tr id='r2'><th id='r2c1' class='border'><button class='buttonbox align' onclick='changer(&apos;r2c1&apos;)'></button></th><th id='r2c2'><button class='buttonbox align' onclick='changer(&apos;r2c2&apos;)'></button></th><th id='r2c3' class='border'><button class='buttonbox align' onclick='changer(&apos;r2c3&apos;)'></button></th></tr><tr id='r3'><th id='r3c1'><button class='buttonbox align' onclick='changer(&apos;r3c1&apos;)'></button></th><th id='r3c2' class='border'><button class='buttonbox align' onclick='changer(&apos;r3c2&apos;)'></button></th><th id='r3c3'><button class='buttonbox align' onclick='changer(&apos;r3c3&apos;)'></button></th></tr></table>");
    
}


function changer(id){
    if (counter % 2 == 0)
    {
        document.getElementById(id).innerHTML = circle;
        switcher(id, "circle");
    }
    else {
        document.getElementById(id).innerHTML = cross;
        switcher(id, "cross");
    }
    counter++;
    var result = checker();
    if (result != null){
        if (result == "circle"){
            document.getElementById("circleend").style.display = "block";
        }
        else {
            document.getElementById("crossend").style.display = "block";
        }
        document.getElementById("end").style.display = "block";
        Content.style.display = "none";

        //Content.classList.add("divbox");
        //Content.classList.remove("tablebox");
        //Content.innerHTML += "<button class='divbox align margin3' onclick='location.reload()'>Nochmal</button>"
    }
    else if (full()){
        document.getElementById("tieend").style.display = "block";
        document.getElementById("end").style.display = "block";
        Content.style.display = "none";


        //Content.classList.add("divbox");
        //Content.classList.remove("tablebox");
        //Content.innerHTML += "<button class='divbox align margin3' onclick='location.reload()'>Nochmal</button>"

    }


}

function full(){
    var count = 0;
        if (r1c1 != null){
            count++;
        }
        if (r1c2 != null){
            count++;
        }
        if (r1c3 != null){
            count++;
        }
        if (r2c1 != null){
            count++;
        }
        if (r2c2 != null){
            count++;
        }
        if (r2c3 != null){
            count++;
        }
        if (r3c1 != null){
            count++;
        }
        if (r3c2 != null){
            count++;
        }
        if (r3c3 != null){
            count++;
        }
    if (count >= 9){
        return true;
    }
    return false;
}

function switcher(id, value) {
    switch (id) {
        case "r1c1":
            r1c1 = value
            break;
        case "r1c2":
            r1c2 = value
            break;
        case "r1c3":
            r1c3 = value
            break;
        case "r2c1":
            r2c1 = value
            break;
        case "r2c2":
            r2c2 = value
            break;
        case "r2c3":
            r2c3 = value
            break;
        case "r3c1":
            r3c1 = value
            break;
        case "r3c2":
            r3c2 = value
            break;
        case "r3c3":
            r3c3 = value
            break;
        default:
            break;
    }
}

function checker() {
    for (var i = 0; i < 2; i++) {
        if (i< 1){
            var control = "circle"
        }
        else {
            var control = "cross"
        }
        // top row
        if (r1c1 == control && r1c2 == control && r1c3 == control){
            return control;
        }
        // middle row
        else if (r2c1 == control && r2c2 == control && r2c3 == control){
            return control;
        }
        // lower row
        else if (r3c1 == control && r3c2 == control && r3c3 == control){
            return control;
        }
        // left column
        else if (r1c1 == control && r2c1 == control && r3c1 == control){
            return control;
        }
        // middle column
        else if (r1c2 == control && r2c2 == control && r3c2 == control){
            return control;
        }
        // right column
        else if (r1c3 == control && r2c3 == control && r3c3 == control){
            return control;
        }
        // top left to bottom right
        else if (r1c1 == control && r2c2 == control && r3c3 == control){
            return control;
        }
        // top right to bottom left
        else if (r1c3 == control && r2c2 == control && r3c1 == control){
            return control;
        }
    }
    return null;
}

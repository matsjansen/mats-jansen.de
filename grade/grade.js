var anzahlLK;
var anzahlGK;
var Content = document.getElementById("content");
function gradeInput(){
    Content = document.getElementById("content");
    anzahlLK = document.getElementById("lk").value;
    anzahlGK = document.getElementById("gk").value;
    Content.innerHTML = ("<div id='something' class='align'>");
    Content.innerHTML += "<p class='explainer'>Trage hier deine Lk Noten ein  </p>"
    for (let i = 0; i < anzahlLK; i++){
        Content.innerHTML += ("<input class='divbox align inp' type='number' id='LKwert" + i + "' maxlength='2' placeholder='Note LK "+ (i+1) +"'inputmode='decimal'>");
    }
    Content.innerHTML += ("<br>")
    Content.innerHTML += "<p class='explainer'>Trage hier deine Gk Noten ein </p>"
    for (let i = 0; i < anzahlGK; i++){
        Content.innerHTML += ("<input class='divbox align inp' type='number' id='GKwert" + i + "' maxlength='2' placeholder='Note GK "+ (i+1) +"'inputmode='decimal'>");
    }
    Content.innerHTML += "<button class='divbox align' onclick='calculate()'>Fertig</button>";
    Content.innerHTML += "</div>";
}

function calculate(){
    var combined = Number(0);
    var allCourses = Number(0);
    var inputs = [];
    for (let i = 0; i < anzahlLK ; i++){
        if  (document.getElementById("LKwert" + i).value >= 0){
            combined += (Number(document.getElementById("LKwert" + i).value))*2;
            allCourses += 2;
            inputs[i] = Number(document.getElementById("LKwert" + i).value)
        }
    }
    for (let i = 0; i < anzahlGK ; i++){
        if  (document.getElementById("GKwert" + i).value >= 0){
            combined += Number(document.getElementById("GKwert" + i).value);
            allCourses++;
            inputs[i+anzahlLK] = Number(document.getElementById("GKwert" + i).value)
        }
    }
    var result = (Math.round(100*(combined/allCourses)))/100;
    var normalnote = (Math.round(100*((17-result)/3)))/100;


    Content.innerHTML = ("<div id='something' class='align'>");
    Content.innerHTML += "<p class='explainer'>Trage hier deine Lk Noten ein </p>"
    for (let i = 0; i < anzahlLK; i++){
        Content.innerHTML += ("<input class='divbox align inp' value='"+ inputs[i] + "' type='number' id='LKwert" + i + "' maxlength='2' placeholder='Note LK "+ (i+1) +"'inputmode='decimal'>");
    }
    Content.innerHTML += ("<br>")
    Content.innerHTML += "<p class='explainer'>Trage hier deine Gk Noten ein </p>"
    for (let i = 0; i < anzahlGK; i++){
        Content.innerHTML += ("<input class='divbox align inp' value='"+ inputs[i+anzahlLK] + "' type='number' id='GKwert" + i + "' maxlength='2' placeholder='Note GK "+ (i+1) +"'inputmode='decimal'>");
    }
    Content.innerHTML += "<button class='divbox align' onclick='calculate()'>Fertig</button>";
    Content.innerHTML += "</div>";
    Content.innerHTML += "<br><div class='divbox align margin1'><h2 class='align'>Aktueller Schnitt</h2><hr class='align'><p>" +result+ " Punkte</p><hr class='align'><p>Note " +normalnote+ "</p></div>";

}
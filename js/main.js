//Special Variables
var lastDisplayText = "";
storeLastDisplayText = function(id){
    lastDisplayText = document.getElementById(id).innerHTML;
}
//Hallo Anson
getLastDisplayText = function(){
    return lastDisplayText;
}

//Home Page
showHomePage = function(){
    hideAllPages();
    document.getElementById("maintext").innerHTML = 
    "<div class = imgWrapper>"+
    "<img src='img/poster.png' alt='Share for Food Poster' width='800' height='400'>"+
    "</div>";

}

//Hide all Pages
hideAllPages = function(){
    document.getElementById("subtext1").innerHTML = "";
    document.getElementById("subtext2").innerHTML = "";
    document.getElementById("maintext").innerHTML = "";
    document.getElementById("buttonOrganization").style.backgroundColor = "rgb(252, 189, 95)";
    document.getElementById("buttonFoodStores").style.backgroundColor = "rgb(252, 189, 95)";
}
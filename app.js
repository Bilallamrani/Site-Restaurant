
function openTab(evt, tabName) {
    // Obtenir tous les éléments avec la classe "tabcontent" et les cacher
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Obtenir tous les éléments avec la classe "tablinks" et enlever la classe "active"
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    // Afficher l'onglet sélectionné et ajouter la classe "active" au bouton qui l'a ouvert
   document.getElementById(tabName).style.display = "block";
}
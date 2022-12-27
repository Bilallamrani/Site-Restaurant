// const pageLinks = document.querySelectorAll('.page-link');

// pageLinks.forEach(link => {
//   link.addEventListener('click', event => {
//     event.preventDefault(); // empêcher le rechargement de la page
//     console.log(`Vous avez cliqué sur la page ${link.textContent}`);
//   });
// });

const pageLinks = document.querySelectorAll('.page-link');

pageLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // empêcher le rechargement de la page
    console.log(`Vous avez cliqué sur la page ${link.textContent}`);
  });
});

pageLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const pageNumber = link.textContent;
    console.log(`Chargement de la page ${pageNumber}...`);

    // envoyer une requête AJAX pour récupérer les données de la page
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/api/page?number=${pageNumber}`);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        // mettre à jour le contenu de la page avec les données de la réponse
        updatePageContent(data);
      } else {
        console.error(`Erreur lors du chargement de la page ${pageNumber}: ${xhr.status} ${xhr.statusText}`);
      }
    };
    xhr.send();
  });
});

function updatePageContent(data) {
  // mettre à jour le contenu de la page avec les données fournies
}

// fetch('https://fr.wikipedia.org/w/api.php?action=query&list=search&srsearch=Minecraft&format=json&origin=*')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// });

// const data = data;
// const resultats = document.querySelector('.resultats');
// const searchResults = data.query.search;
// const liste = document.createElement('ul');

// searchResults.forEach(result => {
//     const item = document.createElement('li');
//     item.innerHTML = `
//         <h3>${result.title}</h3>
//         <p>${result.snippet}</p>
//     `;
//     liste.appendChild(item);
// });

// resultats.appendChild(liste);

// fetch(
//   "https://fr.wikipedia.org/w/api.php?action=query&list=search&srsearch=Minecraft&format=json&origin=*"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);

//     const resultats = document.querySelector(".resultats");
//     const searchResults = data.query.search;
//     console.log(resultats);
    
//     function createTitle() {
//       const title = document.createElement("h3");
//       resultats.appendChild(title);
//       title.textContent = searchResults[0].title;
//       const snippet = document.createElement("p");
//       resultats.appendChild(snippet);
//       snippet.textContent = searchResults[0].snippet;
//     }
//     createTitle();
//   });

// const asynchrone = async () => {
//   try {
//     const resultat = await fetch(
//       "https://fr.wikipedia.org/w/api.php?action=query&list=search&srsearch=Minecraft&format=json&origin=*"
//     );
//     console.log(resultat);

//     const data = await resultat.json();
//     console.log(data);
//   } catch (error) {
//     console.error("une erreur est survenue", error);
//   }
// };

// asynchrone();


// const searchInput = document.querySelector(".champ-recherche");
// const searchButton = document.querySelector('.bouton-recherche')

// searchInput.addEventListener('input', function {
//     const inputValue = searchInput.value.toLowerCase();

//     const resultat = ;
// });

const  form = document.querySelector('.form-recherche');
const resultats = document.querySelector('.resultats');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('.champ-recherche');
    const searchTerm = searchInput.value;

    if (!searchTerm) return;

    fetch(`https://fr.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&format=json&origin=*`)
        .then(response => response.json())
        .then(data => {
            // Vider les résultats précédents
            resultats.innerHTML = '';
            
            // Afficher les nouveaux résultats
            data.query.search.forEach(result => {
                const carteResultat = document.createElement('div');
                carteResultat.className = 'carte-resultat';
                
                carteResultat.innerHTML = `
                    <div class="titre-resultat">${result.title}</div>
                    <div class="extrait-resultat">${result.snippet}</div>
                    <a class="lien-resultat" href="https://fr.wikipedia.org/?curid=${result.pageid}" target="_blank">Lire l'article complet</a>
                `;
                
                resultats.appendChild(carteResultat);
            });
        })
        .catch(error => {
            console.error('Une erreur est survenue:', error);
            resultats.innerHTML = '<p class="erreur">Une erreur est survenue lors de la recherche. Veuillez réessayer.</p>';
        });
});


// const  form = document.querySelector('.form-recherche');
// const resultats = document.querySelector('.resultats');

// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const searchInput = document.querySelector('.champ-recherche');
//     const searchTerm = searchInput.value;

//     if (!searchTerm) return;

//     try {
//         const response = await fetch(
//             `https://fr.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&format=json&origin=*`
//         );
//         const data = await response.json();
        
//         // Vider les résultats précédents
//         resultats.innerHTML = '';
        
//         // Afficher les nouveaux résultats
//         data.query.search.forEach(result => {
//             const carteResultat = document.createElement('div');
//             carteResultat.className = 'carte-resultat';
            
//             carteResultat.innerHTML = `
//                 <div class="titre-resultat">${result.title}</div>
//                 <div class="extrait-resultat">${result.snippet}</div>
//                 <a class="lien-resultat" href="https://fr.wikipedia.org/?curid=${result.pageid}" target="_blank">Lire l'article complet</a>
//             `;
            
//             resultats.appendChild(carteResultat);
//         });
//     } catch (error) {
//         console.error('Une erreur est survenue:', error);
//         resultats.innerHTML = '<p class="erreur">Une erreur est survenue lors de la recherche. Veuillez réessayer.</p>';
//     }
// });
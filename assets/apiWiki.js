// const  form = document.querySelector('.form-recherche');
// const resultats = document.querySelector('.resultats');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const searchInput = document.querySelector('.champ-recherche');
//     const searchTerm = searchInput.value;

//     if (!searchTerm) return;

//     fetch(`https://fr.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&format=json&origin=*`)
//         .then(response => response.json())
//         .then(data => {
            
//             resultats.innerHTML = '';
                        
//             data.query.search.forEach(result => {
//                 const carteResultat = document.createElement('div');
//                 carteResultat.className = 'carte-resultat';
                
//                 carteResultat.innerHTML = `
//                     <div class="titre-resultat">${result.title}</div>
//                     <div class="extrait-resultat">${result.snippet}</div>
//                     <a class="lien-resultat" href="https://fr.wikipedia.org/?curid=${result.pageid}" target="_blank">Lire l'article complet</a>
//                 `;
                
//                 resultats.appendChild(carteResultat);
//             });
//         })
//         .catch(error => {
//             console.error('Une erreur est survenue:', error);
//             resultats.innerHTML = '<p class="erreur">Une erreur est survenue lors de la recherche. Veuillez réessayer.</p>';
//         });
// });











const  form = document.querySelector('.form-recherche');
const resultats = document.querySelector('.resultats');

form.addEventListener('click', async (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('.champ-recherche');
    const searchTerm = searchInput.value;

    if (!searchTerm) return;

    try {
        const response = await fetch(
            `https://fr.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&format=json&origin=*`
        );
        const data = await response.json();
        
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
    } catch (error) {
        console.error('Une erreur est survenue:', error);
        resultats.innerHTML = '<p class="erreur">Une erreur est survenue lors de la recherche. Veuillez réessayer.</p>';
    }
});

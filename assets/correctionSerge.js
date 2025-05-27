document
  .querySelector(".bouton-recherche")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const valeur = document.querySelector(".champ-recherche").value.trim();

    const maRecherche = async () => {
      try {
        const resultat = await fetch(
          `https://fr.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
            valeur
          )}&format=json&origin=*`
        );

        const data = await resultat.json();

        const container = document.querySelector(".resultats");
        container.innerHTML = "";

        data.query.search.forEach((result) => {
          const container2 = document.createElement("div");
          container2.classList.add("carte-resultat");
          const titre = document.createElement("h3");
          const extrait = document.createElement("p");
          const lien = document.createElement("a");

          titre.innerHTML = result.title;
          extrait.innerHTML = result.snippet + "...";

          lien.href = `https://fr.wikipedia.org/wiki/${result.title}`;
          lien.textContent = "Lire l'article complet";
          lien.target = "_blank";

          container.appendChild(container2);
          container2.appendChild(titre);
          container2.appendChild(extrait);
          container2.appendChild(lien);
        });
      } catch (erreur) {
        console.error("Une erreur est survenue", erreur);
      }
    };
    maRecherche();
  });
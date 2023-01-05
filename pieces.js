// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.Joueuse;
const prixElement = document.createElement("p");
prixElement.innerText = article.Numéro;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.Poste;
const categorieElements = document.createElement("p");
categorieElements.innerText = article.PPG;

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(categorieElements);

const sectionFiches2 = document.querySelector(".fiches2");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(categorieElements);
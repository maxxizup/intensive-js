// data
const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies: ['Front', 'Back', 'DevOps']
}
// const title = 'it-incubator';
// const graduatesCount = 2000;
// const areYouChampion = true;
// render


// создаем элемент
let pageTitleElement = document.createElement('h1');
// изменяем его свойства, "настраиваем"
pageTitleElement.innerText = info.title;
// добавляем на страницу (в DOM)
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);

console.dir(document);
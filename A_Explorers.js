let explorers = [  
    ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],  
    ["Mawson", "South Pole", "New Hebrides"],  
    ["Hillary", "Everest", "South Pole"]  
]

const explore = (explorers) => {
    let places = [];

    // Добавляем в массив 'places' уникальные места
    explorers.forEach(explorer => {
        const explorersPlaces = explorer.slice(1);
        explorersPlaces.forEach(place => {
            if (!places.includes(place)) {
                places.push(place);
            }
        })
    });

    // Оборачиваем каждый элемент places в массив
    places = places.map(place => {return [place]});

    // Добавляем в элементы массива places исследователей, которые были в этом месте
    for (let i = 0; i < places.length; i++) {
        for (let j = 0; j < explorers.length; j++) {
            if (explorers[j].includes(places[i][0])) {
                places[i].push(explorers[j][0])
            }
        }
    }

    return places;
}

console.log(explore(explorers));
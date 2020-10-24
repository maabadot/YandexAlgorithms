const data = [  
    {  
        geometry: [10, 20],  
        text: 'James'  
    },  
    {  
        geometry: [20, 40],  
        text: 'Bond'  
    },  
    {  
        geometry: [5, 40],  
        text: 'Bond'  
    }  
];  

const dictionary = ['James', 'Bond'];

const secret = (data, dictionary) => {
    let str = [];
    // Сортировка массива по первому элементу массива поля geometry
    data.sort((prev, next) => prev.geometry[0] - next.geometry[0]);

    data.forEach(element => {
        if (dictionary.includes(element.text)) {
            str.push(element.text);
        } else {
            return 'Unreadable message'
        }
    });

    return str.join(' ');
}

console.log(secret(data, dictionary));

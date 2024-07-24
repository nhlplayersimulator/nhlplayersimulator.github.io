
const forwards = [
    "Connor McDavid", "Auston Matthews", "Sidney Crosby", "Connor Bedard", "Nikita Kucherov",
    "Nathan MacKinnon", "David Pastrnak", "Leon Draisaitl", "Artemi Panarin", "Mikko Rantanen",
    "Brady Tkachuk", "William Nylander", "J.T. Miller", "Jack Hughes", "Matthew Tkachuk",
    "Kirill Kaprizov", "Sam Reinhart", "Filip Forsberg", "Chris Kreider", "Elias Pettersson",
    "Alex Ovechkin", "Kyle Connor", "Jack Eichel", "Brayden Point", "Jake Guentzel",
    "Vincent Trocheck", "Steven Stamkos", "Sebastian Aho", "Jason Robertson", "Adrian Kempe",
    "Aleksander Barkov", "Alex DeBrincat", "Matt Duchene", "Nick Suzuki", "Brandon Hagel",
    "Timo Meier", "Juraj Slafkovsky", "Evgeni Malkin", "Claude Giroux", "Alex Tuch",
    "Mark Stone", "Ryan O'Reilly", "Logan Stankoven", "Macklin Celebrini", "Will Smith",
    "Alexis Lafrenière", "Matvei Michkov", "Gabriel Vilardi", "Drake Batherson",
    "Nick Schmaltz", "Vladimir Tarasenko", "Casey Mittelstadt", "Quinton Byfield", "Jonathan Drouin",
    "Martin Necas", "Tyler Toffoli", "Teuvo Teravainen", "Tom Wilson", "Sam Bennett",
    "Tyler Seguin", "Leo Carlsson", "Dylan Guenther", "Josh Doan", "Mikael Granlund",
    "Tyler Bertuzzi", "Artyom Levshunov", "Michael Bunting", "Andrew Copp", "Wayne Gretzky", 
    "Ryan Leonard", "Kevin Korchinski", "Jaromir Jagr", "Mark Messier", "Gordie Howe", "Ron Francis",
    "Marcel Dionne", "Steve Yzerman", "Mario Lemieux", "Joe Sakic", "Phil Esposito",
    "Joe Thornton", "Mark Recchi", "Stan Mikita", "Teemu Selanne", "Bryan Trottier", "Adam Oates",
    "Doug Gilmour", "Jari Kurri", "Brett Hull", "Mike Modano", "Guy LaFleur", "Denis Savard",
    "Jarome Iginla", "Patrick Kane", "Peter Stastny"
];


const defensemen = [
    "Cale Makar", "Roman Josi", "Victor Hedman", "Adam Fox", "Rasmus Dahlin",
    "Mikhail Sergachev", "Noah Dobson", "Dougie Hamilton", "Shea Theodore", "Zach Werenski",
    "Brent Burns", "Seth Jones", "Thomas Chabot", "Moritz Seider", "Mike Matheson",
    "Olli Maatta", "Jakob Chychrun", "Ryan Graves", "Mackenzie Weegar", "Gustav Forsling",
    "Paul Coffey", "Al MacInnis", "Bobby Orr", "Ray Bourque", "Nicklas Lidstrom", "Denis Potvin",
    "Filip Hronek"
];

const goalies = [
    "Sergei Bobrovsky", "Igor Shesterkin", "Jeremy Swayman", "Thatcher Demko", "Andrei Vasilevskiy",
    "Jake Oettinger", "Connor Hellebuyck", "Alexandar Georgiev", "Stuart Skinner", "Juuse Saros",
    "Adin Hill", "Ukko-Pekka Luukkonen", "Linus Ullmark", "Jordan Binnington", "Semyon Varlamov",
    "Ilya Samsonov", "Darcy Kuemper", "Charlie Lindgren", "Logan Thompson", "Pyotr Kochetkov", "Patrick Roy",
    "Martin Brodeur", "Robert Luongo", "Dominik Hasek", "Jacques Plante"
];

const historyList = document.getElementById('historyList');
const averageMean = document.getElementById('averageMean');
let generatedNumbers = [];

function getWeightedRandomNumber(min, max) {
    const weight = (num) => {
        if (num >= 86) return 0.0044; // Adjust weight to achieve ~0.44% chance
        if (num >= 83) return 0.097; // Adjust weight to achieve ~9.7% chance
        if (num >= 78) return 1; // Ensure 100% chance for numbers 78 and above
        return 0; // No chance for numbers below 78
    };

    // Calculate weights for the range [min, max]
    const range = max - min + 1;
    const weights = Array.from({ length: range }, (_, i) => weight(min + i));
    const totalWeight = weights.reduce((a, b) => a + b, 0);

    if (totalWeight === 0) return null; // Avoid division by zero if all weights are zero

    const random = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    for (let i = min; i <= max; i++) {
        cumulativeWeight += weight(i);
        if (random < cumulativeWeight) {
            return i;
        }
    }

    return max; // Fallback in case of any floating point imprecision
}



function updateAverageMean() {
    const sum = generatedNumbers.reduce((a, b) => a + b, 0);
    const average = (sum / generatedNumbers.length).toFixed(0);
    averageMean.textContent = average;
}

let totalClicks = 0;

document.getElementById('randomButton').addEventListener('click', function() {
    totalClicks++;
    const randomName = forwards[Math.floor(Math.random() * forwards.length)];
    const randomNumber = getWeightedRandomNumber(78, 99);
    const result = `${randomName} - ${randomNumber}`;
    document.getElementById('randomResult').textContent = result;

    generatedNumbers.push(randomNumber);
    updateAverageMean();

    const listItem = document.createElement('li');
    listItem.textContent = result;
    historyList.appendChild(listItem);

    updateClickCount();
});

document.getElementById('randomButton1').addEventListener('click', function() {
    totalClicks++;
    const randomName = defensemen[Math.floor(Math.random() * defensemen.length)];
    const randomNumber = getWeightedRandomNumber(78, 99);
    const result = `${randomName} - ${randomNumber}`;
    document.getElementById('randomResult1').textContent = result;

    generatedNumbers.push(randomNumber);
    updateAverageMean();

    const listItem = document.createElement('li');
    listItem.textContent = result;
    historyList.appendChild(listItem);

    updateClickCount();
});

document.getElementById('randomButton2').addEventListener('click', function() {
    totalClicks++;
    const randomName = goalies[Math.floor(Math.random() * goalies.length)];
    const randomNumber = getWeightedRandomNumber(78, 99);
    const result = `${randomName} - ${randomNumber}`;
    document.getElementById('randomResult2').textContent = result;

    generatedNumbers.push(randomNumber);
    updateAverageMean();

    const listItem = document.createElement('li');
    listItem.textContent = result;
    historyList.appendChild(listItem);

    updateClickCount();
});

function updateClickCount() {
    document.getElementById('clickCount').textContent = `${totalClicks}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const historyContainer = document.querySelector('.history-container');
    const averageContainer = document.querySelector('.average-container');

    // Apply dark mode by default
    const darkMode = localStorage.getItem('darkMode') !== 'false';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        historyContainer.classList.add('dark-mode');
        averageContainer.classList.add('dark-mode');
    }

    // Toggle dark mode
    darkModeSwitch.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        historyContainer.classList.toggle('dark-mode');
        averageContainer.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });
});

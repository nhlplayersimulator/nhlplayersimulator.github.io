
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
    "Alexis Lafrenière", "Matvei Michkov", "Gabriel Vilardi", "Drake Batherson", "Filip Hronek",
    "Nick Schmaltz", "Vladimir Tarasenko", "Casey Mittelstadt", "Quinton Byfield", "Jonathan Drouin",
    "Martin Necas", "Tyler Toffoli", "Teuvo Teravainen", "Tom Wilson", "Sam Bennett",
    "Tyler Seguin", "Leo Carlsson", "Dylan Guenther", "Josh Doan", "Mikael Granlund",
    "Tyler Bertuzzi", "Artyom Levshunov", "Michael Bunting"
];

const defensemen = [
    "Cale Makar", "Roman Josi", "Victor Hedman", "Adam Fox", "Rasmus Dahlin",
    "Mikhail Sergachev", "Noah Dobson", "Dougie Hamilton", "Shea Theodore", "Zach Werenski",
    "Brent Burns", "Seth Jones", "Thomas Chabot", "Moritz Seider", "Mike Matheson",
    "Olli Maatta", "Jakob Chychrun", "Ryan Graves", "Mackenzie Weegar", "Gustav Forsling"
];

const goalies = [
    "Sergei Bobrovsky", "Igor Shesterkin", "Jeremy Swayman", "Thatcher Demko", "Andrei Vasilevskiy",
    "Jake Oettinger", "Connor Hellebuyck", "Alexandar Georgiev", "Stuart Skinner", "Juuse Saros",
    "Adin Hill", "Ukko-Pekka Luukkonen", "Linus Ullmark", "Jordan Binnington", "Semyon Varlamov",
    "Ilya Samsonov", "Darcy Kuemper", "Charlie Lindgren", "Logan Thompson", "Pyotr Kochetkov"
];

const historyList = document.getElementById('historyList');

// Function to generate a weighted random number
function getWeightedRandomNumber(min, max) {
    // Define weight based on the number range
    const weight = (num) => {
        if (num >= 80 && num <= 83) return 10; // High weight for range 80-83
        if (num >= 84 && num <= 90) return 3;  // Moderate weight for range 84-90
        if (num >= 91 && num <= 99) return 1;  // Low weight for range 91-99
        return 0; // Default weight
    };

    // Calculate total weight
    const range = max - min + 1;
    const totalWeight = Array.from({ length: range }, (_, i) => weight(min + i)).reduce((a, b) => a + b, 0);
    
    // Generate random number based on total weight
    const random = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    // Return number based on weighted probabilities
    for (let i = min; i <= max; i++) {
        cumulativeWeight += weight(i);
        if (random < cumulativeWeight) {
            return i;
        }
    }
    return max; // fallback
}

// Example usage
console.log(getWeightedRandomNumber(80, 99));



document.getElementById('randomButton').addEventListener('click', function() {
    const randomName = forwards[Math.floor(Math.random() * forwards.length)];
    const randomNumber = getWeightedRandomNumber(80, 99);
    const result = `${randomName} - ${randomNumber}`;
    document.getElementById('randomResult').textContent = result;

    const listItem = document.createElement('li');
    listItem.textContent = result;
    historyList.appendChild(listItem);
});
document.getElementById('randomButton1').addEventListener('click', function() {
    const randomName = defensemen[Math.floor(Math.random() * defensemen.length)];
    const randomNumber = getWeightedRandomNumber(80, 99);
    const result = `${randomName} - ${randomNumber}`;
    document.getElementById('randomResult1').textContent = result;

    const listItem = document.createElement('li');
    listItem.textContent = result;
    historyList.appendChild(listItem);
});
document.getElementById('randomButton2').addEventListener('click', function() {
    const randomName = goalies[Math.floor(Math.random() * goalies.length)];
    const randomNumber = getWeightedRandomNumber(80, 99);
    const result = `${randomName} - ${randomNumber}`;
    document.getElementById('randomResult2').textContent = result;

    const listItem = document.createElement('li');
    listItem.textContent = result;
    historyList.appendChild(listItem);
});
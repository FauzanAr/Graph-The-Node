// Using abs recursively if u want more than 7 days ago
function abs(number) {

    if(number < 0) {
        number = 7 + number;
        number = abs(number);
    }

    return number
}

function getDay(date) {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    if(typeof date === 'number') {
        date = date - 33

        const index = abs(date);

        return days[index]
    }

    return days[0]
}

const currentDay = new Date().getDay();
  
console.log(getDay(currentDay));
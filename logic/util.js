const passengers = require("./passengers");

function Util() {
    calculateTotalDistributedPassengers = (distributedPassengers) => {
        let totalDistributedPassengers = 0;
        let value;

        for (value in distributedPassengers) {
            totalDistributedPassengers += distributedPassengers[value];
        }

        return totalDistributedPassengers;
    }

    calculateTotalNumberOfPassengers = (passengersArray) => {
        let totalNumberofPassengers = 0;
        let passengers;

        for (passengers of passengersArray) {
            totalNumberofPassengers += passengers;
        }

        return totalNumberofPassengers;
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();


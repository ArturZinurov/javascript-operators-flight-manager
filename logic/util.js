const passengers = require("./passengers");

function Util() {
    calculateTotalDistributedPassangers = (distributedPassengers) => {
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

    return {calculateTotalDistributedPassangers, calculateTotalNumberOfPassengers};
}

module.exports = Util();


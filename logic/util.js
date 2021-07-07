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

    checkInput = (input) => {
        if (input != Number || input == null) {
            throw new Error("The Input is empty or not a number")
        }
    }

    calculateTotalDistance = (distanceArray) => {
        return distanceArray.reduce((acc, cur) => {
            if (cur > 0) return acc + cur
            return acc
        });
    }

    calculateBonusPoints = (distanceArrayVIPSeats, distanceArrayEcoSeats, vipBonus, ecoBonus) => {
        let vipPoints = calculateTotalDistance(distanceArrayVIPSeats) * (vipBonus/100);
        let ecoPoints = calculateTotalDistance(distanceArrayEcoSeats) * (ecoBonus/100);

        return vipPoints + ecoPoints;
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
}

module.exports = Util();


function Passengers() {
    checkFlightCapacity = (capacity, passengersArray) => {
        let totalPassangers = 0;
        let passenger;

        for (passenger of passengersArray) {
            totalPassangers +=passenger
        }

        if (totalPassangers > capacity) {
            throw new Error("The limit of " + capacity+" has been reached NO Avaible Seats!")
        }
        return totalPassangers
    }
    distributeAllSeatsToAllPassengers = (vipPassengers, regularPassengers, flights, vipSeats, regSeats) => {
        let availableVipSeats = flights * vipSeats;
        let availableRegSeats = flights * regSeats;
        let seatVIP = "VIP";
        let seatREG = "Regular"

        getSeatsLeft = (seatsType ,passangerType, seatName) => {
            while (seatsType > 0) {
                if (passangerType > 0) {
                    seatsType -= passangerType;
                    if (seatsType == 0) {
                        return ("All "+ seatName+" seats are taken!")
                    }
                    return seatsType;
                }
            }
        }
        getPassangersSeated = (seatsType ,seatsLeft ,passangerType) => {
            while (passangerType > 0) {
                if (seatsType > 0) {
                    seatsTaken = seatsType - seatsLeft
                    return seatsTaken 
                }
            }
        }
        

        let vipPassengersWithBusinessSeats = getPassangersSeated(availableVipSeats, getSeatsLeft(availableVipSeats,vipPassengers, seatVIP), vipPassengers)
        let regPassengersWithBusinessSeats = getSeatsLeft(availableVipSeats, regularPassengers, seatVIP);

        return {vipPassengersWithBusinessSeats:vipPassengersWithBusinessSeats, vipPassengersWithRegSeats:vipPassengers, regularPassengersWithVipSeats:regularPassengers, regularPassengerswithRegSeats:regularPassengers}
    
    }
    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();
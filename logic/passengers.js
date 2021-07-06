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
        let vipPassengersWithBusinessSeats=0, vipPassengersWithEconomySeats=0, regularPassengersWithBusinessSeats=0, regularPassengersWithEconomySeats=0;
        let availableVipSeats = flights * vipSeats;
        let availableRegSeats = flights * regSeats;

        var vipBusinessConfiguration = {passengers:vipPassengers, seats:availableVipSeats};
        vipPassengersWithBusinessSeats = updateConfiguration(vipBusinessConfiguration, vipSeats);

        var vipEconomyConfiguration = {passengers:vipPassengers, seats:availableRegSeats};
        vipPassengersWithEconomySeats = updateConfiguration(vipEconomyConfiguration, regSeats);

        var regBussinessConfiguration = {passengers:regularPassengers, seats:availableVipSeats};
        regularPassengersWithBusinessSeats = updateConfiguration(regBussinessConfiguration, vipSeats);

        var regEconomyConfiguration = {passengers:regularPassengers, availableRegSeats};
        regularPassengersWithEconomySeats = updateConfiguration(regEconomyConfiguration, regSeats);

        return {vipPassengersWithBusinessSeats:vipPassengersWithBusinessSeats,
                vipPassengersWithEconomySeats:vipPassengersWithEconomySeats,
                regularPassengersWithBusinessSeats:regularPassengersWithBusinessSeats,
                regularPassengersWithEconomySeats:regularPassengersWithEconomySeats};

    }    
        
    updateConfiguration = (configuration, seatsPerFlight) => {
        let passengersWithSeats = 0;
        
        while (configuration.passengers > 0) {
            if (configuration.seats > 0) {
                if (configuration.passengers >= configuration.seats) {
                    if (configuration.seats > configuration.seatsPerFlight) {
                        configuration.passengers -= seatsPerFlight;
                        configuration.seats -= seatsPerFlight;
                        passengersWithSeats += seatsPerFlight;
                    } else {
                        configuration.passengers -= configuration.seats;
                        passengersWithSeats += configuration.seats;
                        configuration.seats = 0;
                    }
                } else {
                    passengersWithSeats += configuration.passengers;
                    configuration.seats -= configuration.passengers;
                    configuration.passengers = 0;
                }
            } else {
                break;
            }
        }
    return passengersWithSeats;
    }
        
    
    
    
    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();
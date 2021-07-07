function Prices() {
    calculateFinalPrice = (bprice, variationPType, variationFType) => {
        return bprice + (bprice * (variationPType/ 100)) + ((bprice + (bprice * (variationPType/ 100))) * (variationFType/100)); 
    }

    calculateDefaultFinalPrice = (bprice, passengerType, flightType) => {
        let variationPType = 0;
        let variationFType = 0;
        
        if (passengerType.toLowerCase() == "regular") {
            variationPType = -5;
        } else {
            variationPType = 5;
        }
        if (flightType.toLowerCase() == "economy") {
            variationFType = -3;
        } else {
            variationFType = 10;
        }

        return calculateFinalPrice(bprice, variationPType, variationFType)
    }

    calculateTotalFinalPrice = (numberOfSeats, passengerType, flightType, bprice) => {
        return numberOfSeats * calculateDefaultFinalPrice(bprice, passengerType, flightType)
    }
 
    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};

}

module.exports = Prices();

export const EXPECTED_MINUTES_IN_OVEN = 40;
 


function remainingMinutesInOven(TimeSpentInOven){



    return EXPECTED_MINUTES_IN_OVEN - TimeSpentInOven; 

}
 console.log(remainingMinutesInOven);


function preparationTimeInMinutes(lasanagaLayers){

return lasanagaLayers * 2;

}
console.log(preparationTimeInMinutes);

function totalTimeInMinutes (numberOfLayers, actualMinutesInOven){

    const prepTimePerLayer =  2;
    const prepTime = numberOfLayers * prepTimePerLayer;
   

    

 return numberOfLayers + actualMinutesInOven;



}

console.log(totalTimeInMinutes);
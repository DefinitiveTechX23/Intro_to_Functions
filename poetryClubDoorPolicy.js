

function frontDoorResponse(sentence){

return sentence[0];

}



function frontDoorPassword(frontDoorResponse){

    return frontDoorResponse.toUpperCase(); 


}



function backDoorResponse(lineOfPoem){

 const lineTrim = lineOfPoem.trim();

 return lineTrim[lineTrim.length - 1];





}


function backDoorPassword(lineOfPoem){

return lineOfPoem.toUpperCase() + ", please";

}







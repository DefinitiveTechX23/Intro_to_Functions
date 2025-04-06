

function frontDoorResponse(sentence){

return sentence[0];

}

console.log(frontDoorResponse);

function frontDoorPassword(frontDoorResponse){

    return frontDoorResponse.toUpperCase(); 


}

console.log(frontDoorPassword); 

function backDoorResponse(lineOfPoem){

 const lineTrim = lineOfPoem.trim();

 return lineTrim[lineTrim.length - 1];





}
console.log(backDoorResponse);

function backDoorPassword(lineOfPoem){

return lineOfPoem.toUpperCase + ", please";

}

console.log(backDoorPassword);





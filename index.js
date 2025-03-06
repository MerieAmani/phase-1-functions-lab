function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42); //returns the number of blocks from Scuber 
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264; //multiplies no .of blocks in first function by 264 to get no .of feet
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264; //returns the distance travelled in feet
} 

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0; //returns 0 if the distance travelled is less than 400 feet
  }
  else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
    return (distanceTravelledInFeet(start, destination) - 400) * 0.02; //returns the fare if the distance travelled is between 400 and 2000 feet
  }
  else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
    return 25; //returns 25 dollars if the distance travelled is between 2000 and 2500 feet
  }
  else {
    return 'cannot travel that far'; //returns cannot travel more than 2500 feet if the distance travelled is more than 2500 feet
  }
}


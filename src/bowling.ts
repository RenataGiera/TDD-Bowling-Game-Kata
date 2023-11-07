export function pinsFallenArray (pinFallenString: string): [number, number]  { // convert result string to array with numbers only ;
  if (pinFallenString.includes('/')) { // if spare 5/ convert to [5, 5]
      const beforeSlash = pinFallenString[0];
      return [parseInt(beforeSlash), (10 - parseInt(beforeSlash))];
      
    } else if (pinFallenString.includes('X')) { // if strike X convert to [10, 0]
      return [10, 0];
      
    } else { // if - convert to [0, 0], if 32 - convert to [3, 2]
      const pins = pinFallenString.split('').map(char => (char === '-' ? 0 : parseInt(char)));
      return pins as [number, number];
    }
}


export function countTotalScore(scores: string): number {
  const pinsFallen = scores.split(' ').map(pinsFallenArray);
  // 
  let totalScore = 0;

  pinsFallen.forEach((frame, i) => {
    let frameScore = 0;
    const frameFirstRoll = frame[0];
    const frameSeondRoll = frame[1];

    frameScore = frameFirstRoll + frameSeondRoll;

    // if strike or spare
    let strikeExtra = 0;
    let spareExtra = 0;

    if (frameScore === 10) {
      if(frameFirstRoll ===10) { // if strike
        if (i< 9){
          strikeExtra = 10 + pinsFallen[i + 1][0] + pinsFallen[i+1][1];
        }
        if (i === 9){ // if strike in last frame
          strikeExtra = pinsFallen[10][0] + pinsFallen[10][1];
        }
        frameScore = 10 + strikeExtra
      } 
     else {
      if (i < 9) {
        const spareExtra = pinsFallen[i + 1][0]; // if spare
        frameScore = 10 + spareExtra;
      }
      if (i === 9) {
        const spareExtra = pinsFallen[10][0]; // if spare in last frame
        frameScore =  spareExtra;
      }
    }
  }
  
    totalScore += frameScore;

  })
  
  return totalScore;
}





export default function two_crystal_balls(breaks: boolean[]): number {
  const breakAmount = Math.floor(Math.sqrt(breaks.length));
  
  let i = breakAmount;
  for (; i <= breaks.length; i += breakAmount) {
    if (breaks[i]) {
      break;
    }
  }
  i -= breakAmount;
  for (let j = 1; j < breakAmount; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}


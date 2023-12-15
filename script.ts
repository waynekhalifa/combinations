function createCombinations(items: string[]): string[][] {
  const combinations: string[][] = [];

  for (let i = 0; i < items.length - 2; i++) {
    for (let j = i + 1; j < items.length - 1; j++) {
      for (let k = j + 1; k < items.length; k++) {
        const combination: string[] = [items[i], items[j], items[k]];
        combinations.push(combination);
      }
    }
  }

  return combinations;
}

// Usage
const items: string[] = ['Gladbach x Werder Bremen', 'VfL Bochum x Union Berlin', 'FC Augsburg x Dortmund', 'Darmstadt 98 x Wolfsburg', 'Mainz x FC Heidenheim', 'RB Leipzig x Hoffenheim', 'Freiburg x Köln', 'Leverkusen x Eintracht', 'FC Bayern x Stuttgart'];
const combinations: string[][] = createCombinations(items);


combinations.forEach((combination, index) => {
  console.log(`${index + 1}. ${combination}`);
});

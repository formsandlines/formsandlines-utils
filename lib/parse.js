/*  --------------------------------------------------------
    Additions 12/2020 from:
    https://observablehq.com/@formsandlines/768dbe19ed47e281 (State machines)
*/

export function lexX (input, ruleMap) {
    input = input.split(' ').join('');
    const compRule = compRegExp(ruleMap.map(r => r[1]));
    
    return [...input.matchAll(compRule)].map((match,i) => {
      const idx = match.filter((_,i) => i > 0).findIndex(m => m != undefined);
      return {token: ruleMap[idx][0], value: (ruleMap[idx][2] ? ruleMap[idx][2](match[0]) : undefined ) };
    });
}

export const compRegExp = patterns => new RegExp(patterns.reduce((comp,r,i) => comp+(i > 0 ? '|' : '')+`(${r})`,''), 'g');
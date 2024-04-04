// console.log('Shahjan khan');

const marval_heros=['thor','Ironman','Saktiman']
// console.log(marval_heros);
const dc=['superman','flash','batman']
const newHeroes=marval_heros.concat(dc)

// marval_heros.push(dc)
// console.log(marval_heros);
// console.log(newHeroes);

const all_new_heroes=[...marval_heros,...dc]
// console.log(all_new_heroes);

const another_array=[1,2,3,4,[1,2],9,[10,11,12,13],[14,78,80]]
const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray('Shahjan khan'));
// console.log(Array.from('Shahjan khan'));


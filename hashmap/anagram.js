var isAnagram = function (s, t) {
  //first check if lengths are the same
  if (s.length !== t.length) return false;

  let s_obj = {};
  let t_obj = {};

  //one for loop because both should be the same length
  for (let i = 0; i < s.length; i++) {
    if (!s_obj[s[i]]) {
      s_obj[s[i]] = 1;
    } else s_obj[s[i]]++;

    if (!t_obj[t[i]]) {
      t_obj[t[i]] = 1;
    } else t_obj[t[i]]++;
  }

  for (let letter in s_obj) {
    if (!t_obj[letter]) return false;

    if (t_obj[letter] === s_object[letter]) return true;
    else return false;
  }
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  return s.split("").sort().join() === t.split("").sort().join();
};

console.log(isAnagram("anagram", "nagaram"));

// bad solution
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   const s_counter = 0;
//   const t_counter = 0;

//   for (let i = 0; i < s.length; i++) {
//     s_counter += s.charCodeAt(i);
//     t_counter += t.charCodeAt(i);
//   }

//   return s_counter === t_counter;
// };

const isPermutation = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  const s1Sorted = s1.split("").sort().join("");
  console.log(s1Sorted);
  const s2Sorted = s2.split("").sort().join("");
  console.log(s2Sorted);
  return s1Sorted === s2Sorted;
};

console.log(isPermutation("listen", "silent"));

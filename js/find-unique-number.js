function findUniq(arr) {
  let counts = {}
  arr.forEach(function(x) {
    counts[x] = (counts[x] || 0) + 1
  })
  
  for (let prop in counts) {
    if (counts[prop] == 1) {
      return Number(prop)
    }
  }
}
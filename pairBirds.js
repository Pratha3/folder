const birds = (arr) => {
  let temp = [];
  arr.map((item) => {
    const find = temp.find((data) => data.number === item);
    if (!find) {
      temp.push({
        number: item,
        count: 1,
      });
    } else {
      find.count = find.count + 1;
    }
  });
  temp.sort((a, b) => a.number - b.number);
  return temp[0].number
};
console.log(birds([2, 1, 3, 1, 2, 4]));

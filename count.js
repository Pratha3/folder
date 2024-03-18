const count = (arr) => {
    // arr.sort();
    // //   console.log("arr", arr);
    // let count = 1;
    // let sortedArray = [];

    // for (i = 0; i < arr.length; i++) {
    //   if (i+1 <= arr.length && arr[i] === arr[i + 1]) {
    //     count++;
    //   } else {
    //     sortedArray.push({ id: arr[i], value: count });
    //     count = 1;
    //   }
    // }
    // console.log("sortedArray", sortedArray);

  let temp = [];

  arr.map((data) => {
    const proc = temp.find((x) => x.name === data);
    if (!proc) {
      const filter = arr.filter((data1) => data1 === data);
      temp.push({ name: data, count: filter.length });
    }
    //console.log("proc", proc);
  });
  console.log("temp", temp);
};

count(["Apple", "Banana", "Orange", "Banana", "Apple", "Peach", "Apple"]);

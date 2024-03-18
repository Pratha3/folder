const count = (text) => {
  let temp = [];
  let count = 1;
  //   arr = text.split("");
  //   console.log("temp", arr);

  for (let i = 0; i < text.length - 1; i++) {
    console.log("Hello", text[i]);
    // if (text[i] !== text[i + 1]) {
    //   temp.push(text[i]);

    for (let j = 1; j < text.length; j++) {
      if (text[i] === text[j]) {
        count++;
      }
    }
    temp.push({ letter: text[i], count });
    count = 1;
    // }
    // if(text[i])
  }

  console.log("temp", temp);
  //   arr.map((data) => {
  //     const proc = temp.find((x) => x.name === data);
  //     if (!proc) {
  //       const filter = arr.filter((data1) => data1 === data);
  //       if (filter.length > 1) {
  //         temp.push({ name: data, count: filter.length });
  //       }
  //     }
  //     //console.log("proc", proc);
  //   });
  //   console.log("temp", temp);
};

count("Apple");

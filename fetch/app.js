import fetch from "node-fetch";


const getCleanData = async () => {
  try {
    const res = await fetch(
      "https://coderbyte.com/api/challenges/json/json-cleaning"
    );
    const element = await res.json();

    console.log(element);
    let obj = {};
    for (let key in element) {
      let singleElement = element[key];

      // obj[key]={}
      let innerObj = {};

       
      for (let innerKey in singleElement) {
        // let innerSingleData = singleElement[innerKey]
         if (
          singleElement[innerKey] == "" ||
          singleElement[innerKey] == "-" ||
          singleElement[innerKey] == "N/A"
        ) {
            
           
        }
       else {
           //console.log('----------------');
         // console.log(innerKey)
          innerObj[`${innerKey}`] = singleElement[innerKey];
        }
      }

      obj[key] = innerObj; 

    }
   // console.log(obj);
   const [ab,abc]=element.hobbies
   const final =[ab,abc]
    const obj1={...obj,age:element.age,hobbies:final}
    

    console.log(obj1);
  } catch (error) {
    console.log(error);
  }
};
getCleanData();

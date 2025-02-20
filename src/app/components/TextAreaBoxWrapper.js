"use client";
import TextAreaBox from "./TextAreaBox";
import data from "./files/questions.json";
import { useEffect, useState } from "react";

export default function TextAreaBoxWrapper() {
  const [next, setNext] = useState(4);
//   const [right, setRight] = useState(false);
  let keyArray = Object.keys(data);
  function nextButton(ans) {
   
    if (next < keyArray.length-1 && validateAnswer(ans)) {
      
      setNext(next + 1);
    //   setRight(false);  
    } else  {
      validateAnswer(ans)&&setNext(0)
    }
  }
  function validateAnswer(ans) {
    // .replace(/\s/g,'')
    if (ans.replace(/\s/g,'') == data[keyArray[next]].replace(/\s/g,'')) {
      return true;
    } else {
      console.log(ans, "data", next, data[keyArray[next]]);
      return false;
    }
  }
  return (
    <>
      <TextAreaBox
        ques={keyArray[next]}
        nextButton={nextButton}
        ans={data[keyArray[next]]}
        next={next}
      />
    </>
  );
}

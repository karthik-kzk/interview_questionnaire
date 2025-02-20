"use client";
import TextAreaBox from "./TextAreaBox";
import data from "./files/questions.json";
import { useEffect, useState } from "react";

export default function TextAreaBoxWrapper() {
  const [next, setNext] = useState(4);
//   const [right, setRight] = useState(false);

  function nextButton(ans) {
   
    if (next < data.length-1 && validateAnswer(ans)) {
      
      setNext(next + 1);
    //   setRight(false);  
    } else  {
      validateAnswer(ans)&&setNext(0)
    }
  }
  function validateAnswer(ans) {
    // .replace(/\s/g,'')
    if (ans.replace(/\s/g,'') == data[next].answer.replace(/\s/g,'')) {
      return true;
    } else {
      console.log(ans, "data", next, data[next].answer);
      return false;
    }
  }
  return (
    <>
      <TextAreaBox
        ques={data[next].question}
        nextButton={nextButton}
        ans={data[next].answer}
        next={next}
      />
    </>
  );
}

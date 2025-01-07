import React, { useEffect } from "react";
import "./_snurr.scss";

function Snurr() {
  useEffect(() => {
    const text = document.querySelector(".text") as HTMLElement;
    if (text) {
      const innerText: string = text.innerText;

      text.innerHTML = innerText
        .split("")
        .map((char, i) => {
          return `<span style="transform:rotate(${
            i * 14.5
          }deg)">${char}</span>`;
        })
        .join("");
    }
  }, []);

  return (
    <div className="circle">
      <div className="circle-content">
        <p className="text">SUND-NERGÅRDEN-SUND-NERGÅRDEN</p>
        <p className="boka">BOKA</p>
      </div>
    </div>
  );
}

export default Snurr;

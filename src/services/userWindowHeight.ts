import { useState, useEffect } from "react";

const userScreenHeight = () => {
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => setScreenHeight(window.innerHeight);

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return screenHeight;
};

export default userScreenHeight;

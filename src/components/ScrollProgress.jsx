import { useEffect, useState } from "react";
import "../styles/ScrollProgress.css";

function ScrollProgress() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const updateProgress = () => {

      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percent = (scrollTop / docHeight) * 100;

      setProgress(percent);

    };

    window.addEventListener("scroll", updateProgress);

    return () =>
      window.removeEventListener("scroll", updateProgress);

  }, []);

  return (

    <div
      className="progress-bar"
      style={{ width: `${progress}%` }}
    ></div>

  );

}

export default ScrollProgress;
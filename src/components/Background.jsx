import "../styles/Background.css";
import { useEffect, useRef } from "react";

function Background() {

  const glowRef = useRef(null);

  useEffect(() => {

    const moveGlow = (e) => {

      glowRef.current.style.left = e.clientX + "px";

      glowRef.current.style.top = e.clientY + "px";

    };

    window.addEventListener("mousemove", moveGlow);

    return () => window.removeEventListener("mousemove", moveGlow);

  }, []);

  return (

    <div className="background">

      <div className="grid"></div>

      <div
      ref={glowRef}
      className="mouse-glow"
      ></div>

    </div>

  );

}

export default Background;
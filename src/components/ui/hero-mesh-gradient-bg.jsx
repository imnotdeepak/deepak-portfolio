import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

export function HeroMeshGradientBg({
  colors = ["#000000", "#0a1a00", "#4d7a00", "#a6ff00"],
  distortion = 0.8,
  swirl = 0.6,
  speed = 0.42,
  offsetX = 0.08,
  veilOpacity = "bg-black/50",
  className = "",
}) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      {mounted && (
        <>
          <MeshGradient
            width={dimensions.width}
            height={dimensions.height}
            colors={colors}
            distortion={distortion}
            swirl={swirl}
            grainMixer={0}
            grainOverlay={0}
            speed={speed}
            offsetX={offsetX}
          />
          <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
        </>
      )}
    </div>
  );
}

export default HeroMeshGradientBg;

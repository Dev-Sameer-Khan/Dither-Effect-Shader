import React, { useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

const App = () => {
  const [animate, setAnimate] = useState(true);
  const [basePixelSize, setBasePixelSize] = useState(3.0);
  const [amplitude, setAmplitude] = useState(0.5);
  const [speed, setSpeed] = useState(1.0);

  const effectSettings = useMemo(
    () => ({
      animate,
      basePixelSize,
      amplitude,
      speed,
    }),
    [animate, basePixelSize, amplitude, speed],
  );

  const panelStyle = {
    position: "absolute",
    top: 12,
    left: 12,
    width: 280,
    padding: 12,
    borderRadius: 12,
    background: "rgba(20, 20, 20, 0.75)",
    color: "#fff",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
    userSelect: "none",
  };

  const labelStyle = { display: "flex", justifyContent: "space-between", gap: 12 };
  const rowStyle = { display: "grid", gap: 6, marginTop: 10 };
  const smallStyle = { opacity: 0.8, fontSize: 12 };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <Canvas style={{ height: "100%", width: "100%" }}>
        <OrbitControls enableDamping />
        {/* <Environment preset="studio"/> */}
        <ambientLight intensity={0.5} />
        <color attach="background" args={["#555"]} />
        <Scene effectSettings={effectSettings} />
      </Canvas>

      <div style={panelStyle}>
        <div style={{ fontWeight: 700, letterSpacing: 0.2 }}>Dither controls</div>
        <div style={{ marginTop: 4, ...smallStyle }}>
          Adjust pixel size and animation driving the shader.
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>
            <span>Pixel size</span>
            <span style={smallStyle}>{basePixelSize.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.5}
            max={12}
            step={0.05}
            value={basePixelSize}
            onChange={(e) => setBasePixelSize(Number(e.target.value))}
          />
        </div>

        <div style={{ ...rowStyle, marginTop: 12 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <input
              type="checkbox"
              checked={animate}
              onChange={(e) => setAnimate(e.target.checked)}
            />
            <span>Animate</span>
          </label>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>
            <span>Amplitude</span>
            <span style={smallStyle}>{amplitude.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={5}
            step={0.05}
            value={amplitude}
            onChange={(e) => setAmplitude(Number(e.target.value))}
            disabled={!animate}
          />
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>
            <span>Speed</span>
            <span style={smallStyle}>{speed.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={5}
            step={0.05}
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            disabled={!animate}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

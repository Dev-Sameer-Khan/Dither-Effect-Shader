import React from "react";
import { Car } from "./Car";
import { Center } from "@react-three/drei";

const Scene = ({ effectSettings }) => {
  return (
    <mesh>
      {/* <boxGeometry /> */}
<Center>
<Car
        scale={0.009}
        position-z={-1.5}
        position-y={-1.5}
        rotation-y={0.7}
        rotation-x={0.5}
        effectSettings={effectSettings}
      />
</Center>
    </mesh>
  );
};

export default Scene
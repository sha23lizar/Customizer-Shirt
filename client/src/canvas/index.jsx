import {Canvas} from "@react-three/fiber"
import { Environment, Center} from "@react-three/drei"

import Shirt from "./Shirt"
import CamaraRing from "./CamaraRing"
import Backdrop from "./Backdrop" 

const CanvasModel = () => {
  return (
    <Canvas
    camera={{
      position: [0, 0, 0], fov: 25
    }}
    gl={{preserveDrawingBuffer: true}}
    className="transition-all ease-in"
    shadows
    >
      <ambientLight intensity={0.5}/>
      <Environment preset="city"/>

      <CamaraRing>
        {/* <Backdrop/> */}
        <Center>
          <Shirt/>
        </Center>
      </CamaraRing>
    </Canvas>
  )
}

export default CanvasModel
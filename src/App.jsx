
import { Pannellum } from "pannellum-react"
import { useState } from "react"

const App = () => {


  const [index, setIndex] = useState(0)


  const images= ["https://l13.alamy.com/360/2A307C4/full-seamless-spherical-hdri-panorama-360-degrees-angle-view-with-high-sandy-cliff-near-the-riverbank-in-a-pine-forest-in-equirectangular-projection-2A307C4.jpg", "https://l13.alamy.com/360/2A62K6T/full-seamless-spherical-hdri-panorama-360-degrees-angle-view-on-wooden-pier-among-the-bushes-of-forest-near-river-or-lake-in-equirectangular-projectio-2A62K6T.jpg", "https://miro.medium.com/v2/resize:fit:720/format:webp/1*FUs4VqiIMChlTduO6_0avQ.jpeg"]

  

  return (
    <div>

      <Pannellum
      
      width="100%"
      height="700px"
      image={images[index]}
      pitch={10}
      yaw={180}
      hfov={110}
      autoLoad
      onLoad={() => {
          console.log("panorama loaded");
      }}
      
      >
      </Pannellum>


      <button onClick={()=>{


        if(index == images.length-1){
          return;
        }
        
        setIndex(index+1)
        
        
        }}>next</button>



        <button onClick={()=>{


        if(index == 0){
          return;
        }

        setIndex(index-1)


        }}>before</button>

     
    </div>
  )
}

export default App
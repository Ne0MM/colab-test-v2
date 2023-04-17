import { useState, useRef, useEffect } from "react";
import styles from './ComponentStyles/ColorSlider.module.css'

function ColorSlider() {

  const [slideValue, setSlideValue] = useState(-50);
  const slideSwitch = useRef(false);

  const slideTimer = 2000;

  const handleSlideColors = (actSlide) => {

    if (actSlide == -50){

      actSlide = 0;

    }else {
      
      actSlide = actSlide - 10;

    }

    setSlideValue(actSlide);

    setTimeout(() => {
      handleSlideColors(actSlide);
    }, slideTimer)

  }

  useEffect(() => {

    if (slideSwitch.current == false){

      handleSlideColors(slideValue);

      slideSwitch.current = !slideSwitch.current;

    }

  },[])


  return (

        <div 
        className={styles.colorSlide}
        style={{
        ['--slide-value'] : slideValue + '%'
        }}
        >

        </div>

  )
}

export default ColorSlider
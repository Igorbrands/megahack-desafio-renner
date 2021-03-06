import styled from 'styled-components'
import media from 'styled-media-query'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

export const Slider = styled(AwesomeSlider)`
  height: 450px;
  width: 600px;
 
  .awssld__content { 
    background-color: #fff;
    div {
      border-radius: 10px;
      ${media.lessThan('630px')`
        border-radius: 0;
      `}
    }
  }

  .awssld__bullets  {
    bottom: 30px;
    z-index: 2;

    button {
      border: 1px white solid;
      background-color: rgba(0,0,0,0);
    }
    .awssld__bullets--active{
      background-color: white;
    }
  }

  ${media.lessThan('630px')`
      flex-direction: column;

      position: absolute;
      height: 100vh;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100vw;
      border-radius: 0;

      justify-content: center;
    
  `}

`
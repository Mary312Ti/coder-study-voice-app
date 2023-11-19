import * as React from "react"
import Svg, { Path } from "react-native-svg"
const htmlIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#E44D26"
      d="m21.7 1-1.768 19.798L11.988 23l-7.922-2.2L2.301 1h19.398Z"
    />
    <Path fill="#F16529" d="m12 21.317 6.42-1.78 1.51-16.918H12v18.698Z" />
    <Path
      fill="#EBEBEB"
      d="M8.564 7.476h3.435V5.047H5.91l.655 7.344h5.434V9.963H8.787l-.222-2.487Zm.547 6.13H6.673l.34 3.813 4.975 1.38.011-.002V16.27l-.01.003-2.705-.73-.173-1.938Z"
    />
    <Path
      fill="#fff"
      d="M11.992 12.391h2.99l-.282 3.15-2.708.73v2.527l4.978-1.38.607-6.803.06-.652h-5.645v2.428Zm0-4.915h5.866l.217-2.429h-6.083v2.429Z"
    />
  </Svg>
)
export default htmlIcon

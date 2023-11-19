import * as React from "react"
import Svg, { Path } from "react-native-svg"
const cssIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#1172B8"
      fillRule="evenodd"
      d="m2.3 1 1.617 19.643L12.001 23l8.083-2.357L21.701 1H2.3Zm4.447 11.393h8.083l-.404 3.143-2.425.785-2.425-.785-.404-1.965H6.747L7.15 17.5l4.85 1.571 4.85-1.571.808-7.464h-4.85l5.255-1.965.404-2.75H5.938l.405 2.358h6.466L6.343 9.643l.404 2.75Z"
      clipRule="evenodd"
    />
    <Path
      fill="#3AD"
      d="M12.001 2.571h8.083l-1.616 17.286L12 21.821v-2.75l4.85-1.571.808-7.464h-4.85l5.255-1.965.404-2.75H12v-2.75Z"
    />
    <Path
      fill="#3AD"
      d="M12.001 7.679v.245l.808-.245h-.808ZM12.001 12.393v3.928l2.425-.785.404-3.143h-2.829Z"
    />
  </Svg>
)
export default cssIcon

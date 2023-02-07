import {ComponentChild} from "preact"

type Props = {
  children : ComponentChild
}

const Layout = (props: Props) => {
  return (
    <div class="h-screen">
        {props.children}
    </div>
  )
}

export default Layout
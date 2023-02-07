import {ComponentProps, FunctionalComponent, ComponentChildren } from "preact"

type buttonProps = ComponentProps<any> & {
  children: ComponentChildren
}

const Button : FunctionalComponent<buttonProps> = ({children, ...props} : buttonProps) => {
  return (
    <button {...props} class="w-min bg-transparent hover:bg-white text-white font-semibold hover:text-gray-500 py-2 px-3 border border-white hover:border-transparent hover:shadow-lg rounded">
        {children}
    </button>
  )
}

export default Button
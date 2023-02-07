import {ComponentProps, FunctionalComponent} from "preact"

type inputProps = ComponentProps<any> & {

}

const Input : FunctionalComponent<inputProps> = (props: inputProps) => {
  return (
    <input {...props} class="rounded-xl px-5 py-2 bg-transparent border-2"/>
  )
}

export default Input
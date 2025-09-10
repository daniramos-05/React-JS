import './Button.css'

const Button = ({ fn, text, color }) => {

  let className = ""

  if (color === "negro") {
    className = "negro"
  }


  return (

    <button className={className} onClick={fn}>{text}</button>
  )
}
export default Button

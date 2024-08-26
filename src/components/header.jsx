import logo from '../assets/investment-calculator-logo.png' 

export default function Header(){
    return <div id='header'>
        <img src={logo} alt="Investment logo" />
        <h1>Investment calculator</h1>
    </div>
}
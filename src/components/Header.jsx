import logo from "@/src/assets/images/logo.svg"
import { Phone } from "@mui/icons-material"
import LogoRed from "../assets/icons/Logo/LogoRed"

const Header = () => {
  return (
    <div className="header">
        <div className="header__logo">
          <LogoRed />
        </div>
        <div className="header__info">
          <div className="header__text">
            ¡Compra por este medio!
          </div>
          <Phone />
          <div className="header__phone">
            (01) 411 6001
          </div>
        </div>
    </div>
  )
}

export default Header
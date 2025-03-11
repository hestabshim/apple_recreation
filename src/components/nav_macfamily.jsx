import style from "../styles/navmac.module.css";
import { NavLink } from "react-router-dom";
import Icon from "./icons";
const NavMacFamily = () => {
  return (
    <div className={`${style["nav-mac"]}`}>
      <ul>
        <li>
          <Icon viewBox="0 0 72 56" name="macbookair" color="black" width={72} height={56}/>
          <NavLink to="/macbookair">Macbook Air</NavLink>
        </li>
        <li>
          <Icon name="macbook-pro" color="black" width={72} height={56}/>
          <NavLink to="/macbookpro">Macbook Pro</NavLink>
        </li>
        <li>
          <Icon name="imac" color="black" width={50} height={56}/>
          <NavLink to="/imac">iMac</NavLink>
        </li>
        <li>
          <Icon name="mac-mini" color="black" width={18} height={56}/>
          <NavLink to="/macmini">Mac mini</NavLink>
        </li>
        <li>
          <Icon name="mac-studio" color="black" width={26} height={56}/>
          <NavLink to="/macstudio">Mac Studio</NavLink>
        </li>
        <li>
          <Icon name="mac-pro" color="black" width={42} height={56}/>
          <NavLink to="/macpro">Mac Pro</NavLink>
        </li>
        <li>
          <Icon name="hmc" color="black" width={42} height={56}/>
          <NavLink to="/helpmechoose">Help Me Choose</NavLink>
        </li>
        <li>
          <Icon name="mac-compare" color="black" width={45} height={56}/>
          <NavLink to="/compare">Compare</NavLink>
        </li>
        <li>
          <Icon name="displays" color="black" width={90} height={56}/>
          <NavLink to="/displays">Displays</NavLink>
        </li>
        <li>
          <Icon name="mac-accessories" color="black" width={34} height={544}/>
          <NavLink to="/accessories">Accessories</NavLink>
        </li>
        <li>
          <Icon name="mac-os" color="black" width={35} height={54}/>
          <NavLink to="/sequoia">Sequoia</NavLink>
        </li>
        <li>
          <Icon name="mac-shop" color="black" width={106} height={54}/>
          <NavLink to="/shopmac">Shop Mac</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMacFamily;

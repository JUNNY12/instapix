import instagramLogo from "../../assets/instagramLogo.png";
import { Compass, Heart, Message , House} from "../icons/Icons";


const Nav = (props) => {
  
  return (
    <nav className={props.darkMode? 'dark' : ''}>
      <button className="logo">INSTAPIX</button>
      <input type={`text`} className="search" placeholder="search" />
      <span className="nav-links">
        <button>
          <House />
        </button>
        <button>
          <Message />
        </button>
        <button>
          <Compass />
        </button>
        <button>
         <Heart />
        </button>
      </span>
    </nav>
  );
};

export default Nav;

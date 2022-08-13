import instagramLogo from "../../assets/instagramLogo.png";


const Nav = (props) => {
  
  return (
    <nav className={props.darkMode? 'dark' : ''}>
      <button className="logo">INSTAPIX</button>
      <input type={`text`} className="search" placeholder="search" />
      <span className="nav-links">
        <button>
          <i className="fas fa-home" />
        </button>
        <button>
          <i className="fas fa-comment-alt" />
        </button>
        <button>
          <i className="fas fa-compass" />
        </button>
        <button>
          <i className="fas fa-heart" />
        </button>
      </span>
    </nav>
  );
};

export default Nav;

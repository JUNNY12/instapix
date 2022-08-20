import { House, Message, Compass, Heart } from "../icons/Icons";

const MobileNav = (props) => {
  return (
    <div className={props.darkMode ? "dark" : ""}>
      <div className="mobile-nav-links">
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
      </div>
    </div>
  );
};

export default MobileNav;

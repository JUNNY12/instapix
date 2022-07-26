const MobileNav = (props) => {
  return (
    <div className={props.darkMode ? "dark" : ""}>
      <div className="mobile-nav-links">
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
      </div>
    </div>
  );
};

export default MobileNav;

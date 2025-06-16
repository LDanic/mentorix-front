import companyLogo from "../assets/CompaniLogo.png";
import iconChevronLeft from "../assets/Chevron Left.png";
import line11 from "../assets/Line 11.png";
import logout from "../assets/logout.png";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="box">
      <div className="sidebar">
        <footer className="footer">
          <img className="logout" alt="Logout" src={logout} />

          <div className="area">
            <img
              className="icon-chevron-left"
              alt="Icon chevron left"
              src={iconChevronLeft}
            />

            <div className="text-wrapper">Áreas</div>
          </div>

          <img className="line" alt="Line" src={line11} />
        </footer>

        <div className="projects">
          <div className="div">Projects</div>

          <div className="frame-2">
            <div className="text-wrapper-2">Barkli Galary</div>

            <div className="text-wrapper-2">Greenish</div>

            <div className="text-wrapper-2">Bigo Ecommerce</div>

            <div className="text-wrapper-2">Youtube Research</div>

            <div className="text-wrapper-2">Find Me Teacher</div>
          </div>

          <div className="create-new-project">Create New Project</div>
        </div>

        <div className="company">
          <img className="company-logo" alt="Company logo" src={companyLogo} />

          <div className="text-wrapper-3">Mentorix</div>
        </div>

        <img className="img" alt="Line" src={line11} />
      </div>
    </div>
  );
};


export default Sidebar;

import HomeIcon from "../homeIcon/homeIcon";
// import ContactIcon from "../contactIcon/contactIcon";
// import ProjectsIcon from "../projectsIcon/projectsIcon";

import "./sideMenu.css";
// import LightModeIcon from "../lightMode/lightMode";
import ThemeIcon from "../themeIcon/themeIcon";
export default function SideMenu(props) {
  return (
    <div className="sideMenu__container show__WhenIpad">
      <ul className="sideMenu__container-list">
        <li className="sideMenu__container-list-item"></li>
        <li className="sideMenu__container-list-item">
          <div className="sideMenu__container-list-item-icon">
            <HomeIcon />
          </div>
        </li>
        {/* <li className="sideMenu__container-list-item">
          <div className="sideMenu__container-list-item-icon">
            <ContactIcon />
          </div>
        </li>
        <li className="sideMenu__container-list-item">
          <div className="sideMenu__container-list-item-icon">
            <ProjectsIcon />
          </div>
        </li> */}
        <li
          className="sideMenu__container-list-item darkMode__listItem"
          onClick={props.toggleDarkMode}
        >
          <div
            className="sideMenu__container-list-item-icon"
            style={{ height: "auto", width: "40px" }}
          >
            <ThemeIcon isDarkMode={props.isDarkMode} />
          </div>
        </li>
      </ul>
    </div>
  );
}

import HomeIcon from "../homeIcon/homeIcon";
import ContactIcon from "../contactIcon/contactIcon";
import ProjectsIcon from "../projectsIcon/projectsIcon";

import "./sideMenu.css";
export default function SideMenu() {
  return (
    <div className="sideMenu__container show__WhenIpad">
      <ul className="sideMenu__container-list">
        <li className="sideMenu__container-list-item"></li>
        <li className="sideMenu__container-list-item">
          <div className="sideMenu__container-list-item-icon">
            <HomeIcon />
          </div>
          {/* <div className="sideMenu__container-list-item-text">
            <p>Home</p>
          </div> */}
        </li>
        <li className="sideMenu__container-list-item">
          <div className="sideMenu__container-list-item-icon">
            <ContactIcon />
          </div>
          {/* <div className="sideMenu__container-list-item-text">
            <p>Contact</p>
          </div> */}
        </li>
        <li className="sideMenu__container-list-item">
          <div className="sideMenu__container-list-item-icon">
            <ProjectsIcon />
          </div>
        </li>
        <li className="sideMenu__container-list-item darkMode__listItem">
          <div className="sideMenu__container-list-item-icon">
            <HomeIcon />
          </div>
        </li>
      </ul>
    </div>
  );
}

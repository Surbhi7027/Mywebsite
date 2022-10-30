import DarkModeIcon from "../darkMode/darkModeIcon";
import LightModeIcon from "../lightMode/lightMode";

export default function ThemeIcon(props) {
  if (props.isDarkMode) return <DarkModeIcon />;
  else return <LightModeIcon />;
}

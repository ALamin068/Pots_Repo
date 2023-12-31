import { LightMode, Nightlight } from "@mui/icons-material";

const NavBar = ({handleTheme , darkMode}) => {
  return (
    <div className="flex item-center justify-between">
      <div>Al Amin</div>
      <div className="flex item-center justify-between gap-4">
        <div className="hover:cursor-pointer"><a>Work</a></div>
        <div><a href="#">Projects</a></div>
      </div>
      <div className="hover:cursor-pointer" onClick={handleTheme}>{darkMode?<LightMode/>:<Nightlight/>}</div>
    </div>
  );
};
export default NavBar;

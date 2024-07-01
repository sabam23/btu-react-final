import { NavLink, Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <nav>
        <NavLink to="saved">Saved Careers</NavLink>
      </nav>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, odio?
      </p>

      <Outlet />
    </div>
  );
}

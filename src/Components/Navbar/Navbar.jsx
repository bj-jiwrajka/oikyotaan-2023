import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import style from "./Navbar.module.scss";
import { useMediaQuery } from "../../Hooks";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <div className={style.container}>
      <div className={style.new}>
        <img
          src="/images/oikyotan.svg"
          alt="img"
          className={mobile === false ? style.img : style.imgmob}
        />
      </div>
      {/* <ul className={style.nav}> */}
      <ul className={mobile === false ? style.nav : style.navmob}>
        <li className={style.li1}>
          <img src="/images/home.png" alt="img" className={style.imgm} />
          <Link to="/">Home</Link>
        </li>
        <li>
          <img src="/images/clipboard.png" alt="img" className={style.imgm} />
          <Link to="/events">Events</Link>
        </li>
        <li>
          <img
            src="/images/oikyotan.svg"
            alt="img"
            width={isMobile ? 0 : 140}
            className={style.img1}
          />
        </li>
        <li className={style.li5}>
          <img src="/images/image.png" alt="img" className={style.imgm} />
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <img src="/images/users.png" alt="img" className={style.imgm} />
          <Link to="/team">Team</Link>
        </li>
      </ul>

      <button className={style.mobileview} onClick={() => setMobile(!mobile)}>
        {mobile ? (
          <FaArrowLeft className={style.cross1} />
        ) : (
          <FaBars className={style.cross} />
        )}
      </button>
    </div>
  );
};

export default Navbar;

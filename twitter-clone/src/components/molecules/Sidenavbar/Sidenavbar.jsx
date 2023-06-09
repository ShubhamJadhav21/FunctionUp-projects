import { ReactComponent as FeatherIcon } from "../../../../src/feather.svg";
import React, { useState } from "react";
import styles from "./Sidenavbar.module.css";
import {
  MdOutlineSettings,
  MdOutlineNotificationsActive,
  MdMailOutline,
  MdOutlineBookmarkBorder,
  MdListAlt,
  MdMoreHoriz,
  MdHome,
  MdLogout,
  MdAccountCircle,
} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/reducers/reducers";
const Sidenavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [uniqueNumber, setUniqueNumber] = useState(
    Math.floor(Math.random() * 900) + 100
  );
  const myStyle = { visibility: isVisible ? "visible" : "hidden" };
  const { isUserLoggedIn, user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    setIsVisible(!isVisible);
  }

  const handleLogoutUserClick = () => {
    if (isUserLoggedIn === true) {
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <>
      <div className={`${styles["left-sidebar"]}`}>
        <div className={`${styles["links-flex"]}`}>
          <div className={`${styles["blue-logo"]}`}>
            <a href="#">
              <img
                src="./twitter-blue-logo.png"
                className={`${styles["twitter-blue-logo"]}`}
                alt="Twitter BNlue Logo"
              />
            </a>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <MdHome className={`${styles["link-icon"]}`} size={25} />
            <p className={`${styles["link-text"]}`}>Home</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <img src="./hashtag.svg" className={`${styles["link-icon"]}`} />
            <p className={`${styles["link-text"]}`}>Explore</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <MdOutlineSettings className={`${styles["link-icon"]}`} size={25} />
            <p className={`${styles["link-text"]}`}>Settings</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <MdOutlineNotificationsActive
              className={`${styles["link-icon"]}`}
              size={25}
            />
            <p className={`${styles["link-text"]}`}>Notifactions</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <MdMailOutline className={`${styles["link-icon"]}`} size={25} />
            <p className={`${styles["link-text"]}`}>Message</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <MdOutlineBookmarkBorder
              className={`${styles["link-icon"]}`}
              size={25}
            />
            <p className={`${styles["link-text"]}`}>Bookmarks</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <MdListAlt className={`${styles["link-icon"]}`} size={25} />
            <p className={`${styles["link-text"]}`}>Lists</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <img src="./profile.svg" className={`${styles["link-icon"]}`} />
            <p className={`${styles["link-text"]}`}>Profile</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <div className={`${styles["more-icon"]}`}>
              <MdMoreHoriz className={`${styles["link-icon"]}`} size={25} />
            </div>
            <p className={`${styles["link-text"]}`}>More</p>
          </div>

          <div className={`${styles["tweet-button"]}`}>
            <div className={styles.ficon}>
              <FeatherIcon
                className={styles.featherIcon}
                width="24"
                height="24"
              />
            </div>
            <span className={styles["button-text"]}>Tweet</span>
          </div>

          {/* Account  */}

          <div className={styles["add-dlt-account"]} style={myStyle}>
            <div className={styles["add-account"]}>
              add an exisiting account
            </div>
            <div id="mdIcon">
              <div className={styles.accIcon}>
                <MdAccountCircle size={25} />
              </div>
              <div className={styles.logIcon}>
                <MdLogout size={25} />
              </div>
            </div>
            <div
              className={styles["add-account"]}
              onClick={handleLogoutUserClick}
            >
              log out @{user.name}
              {uniqueNumber}{" "}
            </div>
          </div>

          <div className={`${styles["account-login-data"]}`}>
            <div className={styles.flexContainer}>
              <div className={`${styles.circleDiv}`}>
                <img src="./logo192.png" alt="Image" onClick={handleClick} />
              </div>
              <div className={` ${styles.centerDiv} `}>
                <div className={styles.name}>
                  <strong>{user.name}</strong>
                </div>
                <div className={styles.username}>
                  @{user.name}
                  {uniqueNumber}
                </div>
              </div>
              <div className={styles.lastDiv} onClick={handleClick}>
                <MdMoreHoriz className={`${styles["link-icon"]}`} size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidenavbar;

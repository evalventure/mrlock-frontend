import s from "./s.module.css";
import { FacebookIcon, GoogleIcon } from "../Icons";

export function Footer() {
  return (
    <footer className={s.section}>
      <div className={s.container}>
        <div className={s.socialMediaContainer}>
          <a
            className={s.socialIcon}
            href="https://www.facebook.com/mrlock247"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            className={s.socialIcon}
            href="https://goo.gl/maps/oUnmAauoDc2QTeoy7"
            target="_blank"
            rel="noreferrer"
          >
            <GoogleIcon />
          </a>
        </div>
        <p className={s.footerParagraph}>{`©${new Date().getFullYear()} mrlock247.co.uk – All rights reserved.`}</p>
      </div>
    </footer>
  );
}

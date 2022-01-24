import s from "./s.module.css";
import { FacebookIcon, GoogleIcon } from "../Icons";

export function Footer() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.socialMediaContainer}>
          <a
            className={s.facebookIcon}
            href="https://www.facebook.com/mrlock247"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            className={s.googleIcon}
            href="https://goo.gl/maps/oUnmAauoDc2QTeoy7"
            target="_blank"
            rel="noreferrer"
          >
            <GoogleIcon />
          </a>
        </div>
        <div className={s.footerParagraph}>
          <p>©2021 mrlock247.co.uk – All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

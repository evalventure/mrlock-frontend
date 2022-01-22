import s from "./s.module.css";
import { FacebookIcon, GoogleIcon } from "../Icons";

export function Footer() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.socialMediaContainer}>
          <a className={s.facebookIcon}>
            <FacebookIcon />
          </a>
          <a className={s.googleIcon}>
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

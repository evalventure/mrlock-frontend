import s from "./s.module.css";
import { ContactPhone, MailIcon } from "../Icons";

export function Contact() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.contactContainer}>
          <div className={s.title}>CONTACT US</div>
          <a className={s.phoneNumber} href="tel:+447979374288">
            <ContactPhone className={s.phoneIcon} />
            +44 7979 374288
          </a>
          <a className={s.mail} href="mailto:mrlock247@gmail.com">
            <MailIcon />
            mrlock247@gmail.com
          </a>
        </div>
        <div className={s.formAgreementButton_Container}>
          <form className={s.formContainer}>
            <input
              type={"text"}
              placeholder="Your name"
              className={s.formName}
            ></input>
            <input
              type={"text"}
              placeholder="Your email address"
              className={s.formEmail}
            ></input>
            <input
              type={"text"}
              placeholder="Choose service"
              className={s.formService}
            ></input>
            <textarea
              type={"text"}
              placeholder="Details (optional)"
              className={s.formDetails}
            ></textarea>
          </form>
          <div className={s.agreementContainer}>
            <input type={"checkbox"}></input>
            <p className={s.confirmStatement}>
              I confirm that I have read, understand and agree the Mr. Lock
              Privacy Statement.
            </p>
          </div>
          <div className={s.buttonContainer}>
            <button className={s.contactButton}> Contact us now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

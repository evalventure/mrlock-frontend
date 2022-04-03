import s from "./s.module.css";
import { ContactPhone, MailIcon } from "../Icons";
import { useRef, useState } from "react";
import axios from "axios";

const contactApiUrl = "https://2sxxem0xhf.execute-api.us-east-1.amazonaws.com/default/sendEmailToAutolocksmithBirmingham";

export function Contact() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const detailsInputRef = useRef();
  const checkboxInputRef = useRef();

  const [error, setError] = useState("");
  // setError("ceva") <=> error = "ceva"
  const [isLoading, setLoading] = useState(false);

  async function onFormSubmit(e) {
    e.preventDefault();

    // step 1: reset errors
    setError(setError(""))

    // step 2: retrieve form data from fields
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const details = detailsInputRef.current.value;

    // step 3: validations
    if (!name || !email) {
      setError("Please fill in the name and the email address");
      return;
    }
    
    if (!checkboxInputRef.current.checked) {
      setError("Please accept the Privacy Statement to proceed");
      return;
    }

    // step 4: process data
    try {
      const data = { name, email, details };

      setLoading(true);
      await axios.post(contactApiUrl, data);
      setLoading(false);

      nameInputRef.current.value = "";
      emailInputRef.current.value = "";
      detailsInputRef.current.value = "";
    } catch {
      setLoading(false);
      setError("Oopss...Please try again later")
    }
  }

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
        <form className={s.formContainer} onSubmit={onFormSubmit}>
          <input
            ref={nameInputRef}
            type={"text"}
            placeholder="Your name"
            className={s.formInput}
          ></input>
          <input
            ref={emailInputRef}
            className={s.formInput}
            placeholder="Your email address"
            type="email"
          ></input>
          <textarea
            ref={detailsInputRef}
            type={"text"}
            placeholder="Details (optional)"
            className={s.formDetails}
          ></textarea>
          <div className={s.agreementContainer}>
            <input ref={checkboxInputRef} id="confirmCheckbox" type={"checkbox"} />
            <label className={s.confirmStatement} htmlFor="confirmCheckbox">
              I confirm that I have read, understand and agree the Mr. Lock
              Privacy Statement.
            </label>
          </div>
          {error && <p className={s.formError}>{error}</p>}
          <button className={s.contactButton} type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Contact us now"}
          </button>
        </form>
      </div>
    </section>
  );
}

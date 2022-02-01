import { useEffect, useState } from "react";
import s from "./s.module.css";
// import Image from "../images/backgroundImage.jpeg";

export function Services() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setStep((step) => {
        if (step <= 5) {
          return step + 1;
        } else {
          return 0;
        }
      });
    }, 3000);
  }, []);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.slideShowContainer}>
          <img className={s.image} src="backgroundImage.jpeg" alt="" />
          <div className={s.slideShowContent}>
            <p className={s.title}>Emergency car unlocking</p>
            <p className={s.text}>
              We will get it back to you without any damages to your vehicle.
              The average arriving time is 30 min after your call.
            </p>
            <div className={s.sliders}>
              {Array(7)
                .fill(0)
                .map((_, i) => {
                  return (
                    <div className={s.sliderStep}>
                      <div
                        className={`${s.segment} ${i === step ? s.active : ""}`}
                      >
                        <div></div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

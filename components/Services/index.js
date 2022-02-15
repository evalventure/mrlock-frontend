import { useEffect, useState } from "react";
import s from "./s.module.css";
// import Image from "../images/backgroundImage.jpeg";

const sliders = [
  {
    title: "Emergency car unlocking",
    description:
      "We will get it back to you without any damages to your vehicle. The average arriving time is 30 min after your call.",
  },
  {
    title: "Car key replacement",
    description:
      "We will get it back to you without any damages to your vehicle. The average arriving time is 30 min after your call.",
  },
  {
    title: "Transponder programming",
    description:
      "We will get it back to you without any damages to your vehicle. The average arriving time is 30 min after your call.",
  },
  {
    title: "Lost car key",
    description:
      "We will get it back to you without any damages to your vehicle. The average arriving time is 30 min after your call.",
  },
  {
    title: "Locked Key in the car",
    description:
      "We will get it back to you without any damages to your vehicle. The average arriving time is 30 min after your call.",
  },
  {
    title: "Key cutting physical keys",
    description:
      "We will get it back to you without any damages to your vehicle. The average arriving time is 30 min after your call.",
  },
  {
    title: "Broken key removal",
    description:
      "We will get it back to you without any damages to your vehicle. The average arriving time is 30 min after your call.",
  },
];

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
              {sliders.map((sliderItem, i) => {
                return (
                  <div className={s.sliderStep}>
                    <div
                      className={`${s.segment} ${i === step ? s.active : ""}`}
                    >
                      <div></div>
                    </div>
                    <p className={s.segmentTitle}>{sliderItem.title}</p>
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

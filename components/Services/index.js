import { useEffect, useMemo, useState } from "react";
import s from "./s.module.css";
import { sliders } from './data';
import { PlusIcon } from "../Icons";
// import Image from "../images/backgroundImage.jpeg";

export function Services() {
  const [step, setStep] = useState(0);
  const [interv, setInterv] = useState();
  useEffect(() => {
    startInterval();
  }, []);

  function startInterval() {
    if (interv) { clearInterval(interv) }
    const newInterval = setInterval(() => {
      setStep((step) => {
        if (step <= 5) {
          return step + 1;
        } else {
          return 0;
        }
      });
    }, 3000);
    setInterv(newInterval);
  }

  function onStepClick(clickedStep) {
    setStep(clickedStep);
    startInterval();
  }

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.slideShowContainer}>
          <div className={s.backgroundContainer}>
            <div className={s.imageOverlay} />
            <img className={s.image} src="backgroundImage.jpeg" alt="" />
          </div>
          <MobilePopup />
          <Popups />
          <div className={s.slideShowContent}>
            <p className={s.title}>{sliders[step].title}</p>
            <p className={s.text}>{sliders[step].description}</p>
            <div className={s.sliders}>
              {sliders.map((sliderItem, i) => {
                return (
                  <div className={s.sliderStep} onClick={() => { onStepClick(i) }}>
                    <div
                      className={`${s.segment} ${i === step ? s.active : ""}`}
                    >
                      <div></div>
                    </div>
                    <p className={`${s.segmentTitle} ${i === step ? s.active : ""}`}>{sliderItem.title}</p>
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

function Popups() {
  const [open, setOpen] = useState([false, false])

  function onSetOpen(index) {
    const newOpen = Array(2).fill(false).map((elem, idx) => index === idx)
    setOpen(newOpen);
  }

  return (
    <div className={s.popupsContainer}>
      <div className={s.popupsContent}>
        <Popup index={1} open={open[0]} setOpen={() => { onSetOpen(0) }} />
        <Popup index={2} open={open[1]} setOpen={() => { onSetOpen(1) }} />
      </div>
    </div>
  );
}

function Popup({ index, open, setOpen }) {
  function onClickButton() {
    setOpen();
  }

  return (
    <div className={`${s.popup} ${open ? '' : s.hidden} ${s[`popup${index}`]}`}>
      <button className={`${open ? s.active : ""}`} onClick={onClickButton}>
        <PlusIcon />
      </button>
      <div className={`${s.popupText} ${open ? '' : s.hidden}`}>
        <span>{`Sometimes it's just because the car immobilizer doesn't recognize the keys.`}</span>
        <span>{`We can add them to your car system or create a new key for your vehicle.`}</span>
      </div>
    </div>
  )
}


function MobilePopup({ index }) {
  const [open, setOpen] = useState(false);

  function onClickButton() {
    setOpen((open) => !open);
  }

  return (
    <div className={`${s.mobilePopup} ${open ? '' : s.hidden}`}>
      <button className={`${open ? s.active : ""}`} onClick={onClickButton}>
        <PlusIcon />
      </button>
      <div className={`${s.mobilePopupText} ${open ? '' : s.hidden}`}>
        <div className={s.popupText}>
          <span>{`Sometimes it's just because the car immobilizer doesn't recognize the keys.`}</span>
          <span>{`We can add them to your car system or create a new key for your vehicle.`}</span>
        </div>
        <div className={s.popupText}>
          <span>{`Sometimes it's just because the car immobilizer doesn't recognize the keys.`}</span>
          <span>{`We can add them to your car system or create a new key for your vehicle.`}</span>
        </div>
      </div>
    </div>
  )
}

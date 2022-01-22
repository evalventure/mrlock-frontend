import s from "./s.module.css";
import Image from "../Images/greyBckg.jpg";

export function FollowUs() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.titleContainer}>
          <div className={s.title}> FOLLOW US ON</div>
          <div className={s.subTitle}>FACEBOOK</div>
        </div>
        <div className={s.sliderContainer}>
          <div className={s.sliderDiv}>
            <img className={s.pictureSlider}></img>
            <img className={s.pictureSlider}></img>
            <img className={s.pictureSlider}></img>
            <img className={s.pictureSlider}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

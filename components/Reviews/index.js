import s from "./s.module.css";
import { RatingStar } from "../Icons";

export function Reviews() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.title}>WHAT PEOPLE SAY</div>
        <div className={s.reviewContainer}>
          <div className={s.reviewCard}>
            <p className={s.titleParagraph}>Sukhy Kaur Dyail </p>
            <p className={s.date}>November 26 at 10:32</p>
            <p className={s.description}>
              Brilliant service from Mr Lock, top guy. Have used a few times now
              and every time has done what’s needed efficiently and to a high
              standard, would highly recommend A+++ service.
            </p>
            <div className={s.starContainer}>
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
            </div>
          </div>
          <div className={s.reviewCard}>
            <p className={s.titleParagraph}>Sukhy Kaur Dyail </p>
            <p className={s.date}>November 26 at 10:32</p>
            <p className={s.description}>
              Brilliant service from Mr Lock, top guy. Have used a few times now
              and every time has done what’s needed efficiently and to a high
              standard, would highly recommend A+++ service.
            </p>
            <div className={s.starContainer}>
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

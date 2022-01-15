import s from "./s.module.css";

export function LandingSection() {
  return (
    <section className={s.landingSection}>
      <div className={s.container}>
        <div className={s.leftContainer}>
          <h1 className={s.title}>BIRMINGHAM AUTO LOCKSMITH</h1>
        </div>
        <div className={s.rightContainer}>
          <p className={s.description}>
            As mobile auto locksmiths no matter where you are we come to you, it
            can be at your home, work or at the roadside it’s all part of our
            service. We carry a huge stock of car keys to cover every make and
            model of car, this means we are able to supply cut and program
            replacement keys today.
          </p>
          <button className={s.learnMoreButton}>Learn more</button>
        </div>
      </div>
    </section>
  );
}

import s from "./s.module.css";
import { locations } from "./data";

export function HowItWorks() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.title}>HOW IT WORKS</div>
        <div className={s.childContainer}>
          <div className={s.child}>
            <div className={s.numberFeature}>1</div>
            <p className={s.featureTitle}>Get in touch</p>
            <p className={s.featureDescription}>
              Give us a call or get in touch with us online, and one of our
              friendly and professional team will be there to speak to you.
            </p>
          </div>
          <div className={s.child}>
            <div className={s.numberFeature}>2</div>
            <p className={s.featureTitle}>{"We'll come to you"}</p>
            <p className={s.featureDescription}>
              {
                "Once we understand the situation, we’ll get to you as quickly as we can – our average response time is 45 minutes."
              }
            </p>
          </div>
          <div className={s.child}>
            <div className={s.numberFeature}>3</div>
            <p className={s.featureTitle}>New keys instantly</p>
            <p className={s.featureDescription}>
              {
                "We'll provide you with your replacement keys, so you can get back on the road as soon as possible."
              }
            </p>
          </div>
        </div>
      </div>
      <div className={s.mapContainer}>
        <div className={s.schedule}>24/7</div>
        <p className={s.coverage}>coverage</p>
        <p className={s.locationTitle}>BIRMINGHAM AND WEST MIDLANDS</p>
        <div className={s.mapDiv}>
          <img className={s.mapImage} src="/images/map.png" alt="Map Image" />
          <div className={s.locationIndicator}>
            <div className={s.locationPin}>
              <img src="/icons/location.svg" alt="Location Image" height={20} />
            </div>
            <div className={s.radar} />
            <div className={s.radar} />
            <div className={s.radar} />
          </div>
          <div className={s.locationSwipe}>
            {locations.map((location) => {
              return <span>{location}</span>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

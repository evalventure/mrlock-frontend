import axios from "axios";
import s from "./s.module.css";
import { RatingStar } from "../Icons";
import { useEffect, useState } from "react";

export function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  async function getReviews() {
    const response = await axios.get(
      "https://e4xwlli09l.execute-api.us-east-1.amazonaws.com/default/getBirminghamAutoLocksmithPageReviews"
    );
    setReviews(response.data.reviews);
  }

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.title}>WHAT PEOPLE SAY</div>
        <div className={s.reviewContainer}>
          {reviews.map(function (review, idx) {
            return (
              <div key={idx} className={s.reviewCard}>
                <p className={s.titleParagraph}>Sukhy Kaur Dyail </p>
                <p className={s.date}>
                  {new Date(review.created_time).toLocaleString()}
                </p>
                <p className={s.description}>{review.review_text}</p>
                <div className={s.starContainer}>
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

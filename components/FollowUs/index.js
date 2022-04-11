import axios from "axios";
import s from "./s.module.css";
import Image from "../Images/greyBckg.jpg";
import { useEffect, useState } from "react";

export function FollowUs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const response = await axios.get(
      "https://euy5lyrql4.execute-api.us-east-1.amazonaws.com/default/getBirminghamAutoLocksmithPagePosts"
    );
    setPosts(response.data.posts);
  }

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.titleContainer}>
          <div className={s.title}> FOLLOW US ON</div>
          <div className={s.subTitle}>FACEBOOK</div>
        </div>
        <div className={s.sliderContainer}>
          {posts.map(function (img, index) {
            return (
              <div key={index} className={s.sliderDiv}>
                <img
                  className={s.pictureSlider}
                  src={img.full_picture}
                  alt="Slider Image"
                />
                <span className={s.pictureCaption}>
                  {img.message?.split(" ").slice(0, 5).join(" ")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

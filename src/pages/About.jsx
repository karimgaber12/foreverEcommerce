/* eslint-disable no-unused-vars */
import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/assets";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis exercitationem ullam vitae aspernatur officia
            veritatis, quod dolor recusandae repudiandae minus doloremque
            aperiam optio omnis atque maiores. Nulla nihil error voluptates.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            ducimus ex delectus mollitia reiciendis sed deserunt, quidem culpa
            molestiae voluptatum, ratione illo ad placeat? Autem, obcaecati
            ducimus! Amet, natus animi.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            inventore dolorem sunt, harum aspernatur asperiores doloremque
            mollitia eaque fuga laudantium, non nesciunt voluptate expedita
            temporibus repellat tenetur perspiciatis aliquid quas?
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            magni, et perferendis beatae iste ullam incidunt eum delectus
            maiores nostrum sed rem porro reiciendis suscipit at odit fuga.
            Voluptates, adipisci?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            ipsa ab ad nam non, quidem minima quo, incidunt, reiciendis fugiat
            debitis est. Quam architecto tenetur eligendi vero, mollitia amet
            sunt.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Expetional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            ipsa ab ad nam non, quidem minima quo, incidunt, reiciendis fugiat
            debitis est. Quam architecto tenetur eligendi vero, mollitia amet
            sunt.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;

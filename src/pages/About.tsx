import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[500px]"
          src={assets.about_img}
          alt="about"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to our website! We are a team of passionate individuals
            dedicated to providing you with the best experience possible. Our
            mission is to deliver high-quality products and services that meet
            your needs and exceed your expectations.
          </p>
          <p>
            We believe in the power of innovation and creativity, and we strive
            to stay ahead of the curve in our industry. Our team is constantly
            exploring new ideas and technologies to bring you the latest and
            greatest.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower individuals and businesses through
            technology. We aim to create solutions that are not only effective
            but also user-friendly and accessible to everyone.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md-px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We take pride in our work and ensure that every product and service
            we offer meets the highest standards of quality. Our team is
            committed to continuous improvement and excellence.
          </p>
        </div>
        <div className="border px-10 md-px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We understand that your time is valuable. That's why we offer
            convenient solutions that save you time and effort. Our
            user-friendly interface and streamlined processes make it easy for
            you to get started.
          </p>
        </div>
        <div className="border px-10 md-px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our customers are our top priority. We are here to assist you every
            step of the way, from initial inquiries to post-purchase support.
            Our friendly and knowledgeable team is always ready to help you with
            any questions or concerns.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;

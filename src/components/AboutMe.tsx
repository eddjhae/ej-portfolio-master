import { forwardRef } from "react";
import Skills from "./Skills";

const AboutMe = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="h-[950px] mt-40 pt-12 relative bg-purple-600 rounded-tl-[100px] text-white font-poppins lg:h-[870px]">
      <div className="grid justify-items-center lg:grid-cols-[1fr_2fr]">
        <h1 className="text-2xl font-semibold mb-8 md:text-2xl lg:text-3xl">
          About me
        </h1>
        <div className="text-base w-[85%] md:text-lg lg:text-xl">
          <p>
            Hello! I enjoy designing and developing things that exist on the
            internet. I'm always looking for new opportunities to learn, grow
            and enhance my skill set, currently learning React and NodeJS
          </p>
          <br />
          <p>
            Graduated in Lyceum of The Philippines University (LPU) BS in
            Information Technology.
          </p>
          <br />
          <p>Technologies I've been using with recently:</p>

          <ul className="pt-12 grid grid-cols-2 gap-4 lg:p-16">
            <Skills
              logoSrc="/assets/react-logo.svg"
              logoAlt="React Logo"
              skillName="React"
            />
            <Skills
              logoSrc="/assets/tailwind-logo.svg"
              logoAlt="TailwindCSS Logo"
              skillName="TailwindCSS"
            />
            <Skills
              logoSrc="/assets/typescript-logo.svg"
              logoAlt="Typescript Logo"
              skillName="Typescript"
            />
            <Skills
              logoSrc="/assets/firebase-logo.svg"
              logoAlt="Firebase Logo"
              skillName="Firebase"
            />
            <Skills
              logoSrc="/assets/mongodb-logo.svg"
              logoAlt="MongoDB Logo"
              skillName="MongoDB"
            />
            <Skills
              logoSrc="/assets/nextjs-logo.svg"
              logoAlt="NextJS Logo"
              skillName="NextJS"
            />
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 rounded-tr-[72px] bg-[#1f1660] w-[100%] h-[300px] z-20">
        <div className="mt-12 text-center grid grid-cols-1 place-items-center md:grid-cols-2 md:text-left">
          <div>
            <div className="text-xl font-semibold">
              Interested to work with me?
            </div>
            <br />
            <p>I want to work with you to create really cool stuff.</p>
          </div>
          <a
            href="mailto:eddbausa@gmail.com"
            target="_blank"
            className="text-lg border border-blue-500 rounded-lg mt-3 px-4 py-3 font-poppins font-medium xl:text-xl text-blue-500 hover:text-white hover:bg-blue-500"
          >
            Get In Touch
          </a>
          <div className="text-center text-gray-400 mt-12 md:col-span-2 md:mt-32">
            ☕ Designed & Developed by Edd Jhae Bausa
          </div>
        </div>
      </div>
    </footer>
  );
})

export default AboutMe;
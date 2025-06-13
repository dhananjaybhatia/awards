import React from "react";
import Button from "./Button";

const ImageClickBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  const handleContact = () => {
    const subject = encodeURIComponent("Contact Request");
    const body = encodeURIComponent(
      `Hi Dhananjay,\n\nI came across your profile and would love to get in touch.\n\nLet me know a convenient time for you.\n\nBest regards,\n[Your Name]`
    );

    window.location.href = `mailto:dhananjaybhatia@yahoo.co.in?subject=${subject}&body=${body}`;
  };

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 sm:overflow-hidden text-blue-50">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClickBox
            src={"img/contact-1.webp"}
            clipClass={"contact-clip-path-1"}
          />
          <ImageClickBox
            src={"img/contact-2.webp"}
            clipClass={"contact-clip-path-2 lg:translate-y-20 translate-y-40"}
          />
        </div>
        <div className="absolute -top-40 left-20 top-hidden  w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClickBox
            src={"img/swordman-partial.webp"}
            clipClass={"absolute md:scale-125"}
          />
          <ImageClickBox
            src={"img/swordman.webp"}
            clipClass={"sword-man-clip-path md:scale-125"}
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase"> join zentry</p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:tex-[6rem]">
            Let's b<b>u</b>ild th<b>e</b> <br /> new <b>e</b>
            ra of <br /> ga<b>m</b>ing toge
            <b>t</b>her
          </p>
          <Button
            onClick={handleContact}
            title={"contact me"}
            containerClass={"mt-10 cursor-pointer"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useLayoutEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
import "../styles/intro.scss";

const Intro = () => {
  const [show, setShow] = useState(false);
  const ourRef = useRef(null);
  const skillIcons1 = [
    { icon: ["fab", "html5"], name: "Html5" },
    { icon: ["fab", "js"], name: "JS-ES6" },
    { icon: ["fab", "react"], name: "ReactJS" },
    { icon: ["fab", "sass"], name: "SASS" },
    { icon: ["fab", "bootstrap"], name: "BootStrap" },
  ];
  const skillIcons2 = [
    { icon: ["fab", "node-js"], name: "NodeJS" },
    { icon: ["fas", "database"], name: "MySQL" },
    { icon: ["fas", "database"], name: "MongoDB" },
    { icon: ["fab", "wordpress"], name: "WordPress" },
    { icon: ["fab", "docker"], name: "Docker" },
  ];

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const div1Pos = topPos(ourRef.current);
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="intro-box shadow" id="about-me">
      <div className="section-title">
        <h1>About Me</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-5" ref={ourRef}>
            <div className={"intro-img-box mx-auto" + (show ? " anim" : null)}>
              <img
                src="img/workspace.jpg"
                className="mx-auto shadow"
                alt={"img"}
              ></img>
            </div>
          </div>
          <div
            className={
              "col-sm-12 col-md-6 intro-text-box px-4" + (show ? " anim" : null)
            }
          >
            <p className="lead">
              Hi, Jingfu Dong here. I'm Chinese and I came to Australia in 2016.
              After I finished my Master degree of IT at University of
              Wollongong, I'm living in <big>Sydney</big>.
            </p>
            <p className="lead">
              Development job has never been just a job for me, it is a
              lifestyle that offered engaging challenges to continuous learning
              and improvement of my skills. I am keen on learning.
            </p>
            <p className="lead">
              I'm at very early stage of my career, I believe I will make
              massive progress soon in the future.
            </p>

            <p className="lead">
              Here is my skill set. Don't forget to check my recent project in
              the next section.
            </p>

            <div className="row icon-box">
              <div className="col-12">
                <ul>
                  {skillIcons1.map((e, i) => (
                    <li key={i}>
                      <div className="icon-caption-box">
                        <FontAwesomeIcon icon={e.icon} size="lg" />
                        <p>{e.name}</p>
                      </div>
                    </li>
                  ))}
                  <li>
                    <div className="icon-caption-box">
                      <img
                        src="img/Material UI.svg"
                        alt={"img"}
                        style={{ width: "25px" }}
                      ></img>
                      <p>Material UI</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <ul>
                  {skillIcons2.map((e, i) => (
                    <li key={i}>
                      <div className="icon-caption-box">
                        <FontAwesomeIcon icon={e.icon} size="lg" />
                        <p>{e.name}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;

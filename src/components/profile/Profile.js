import React from "react";
import "./profile.css";

export default function Profile({ mode, toggleTheme }) {
  return (
    <>
      <section className={`aboutMeCard ${mode}`}>
        <h2 id="aboutMe">About Me</h2>
        <div id="aboutMeContainer">
          <div>
            <img
              id="headshot"
              src="https://lh3.googleusercontent.com/1WJVnIqzFhYRmtqFSCE74sHEo73QUtq8KAtdzAbarlaEW9Crg-FxxBHQJGNNEtSXogBQU6AN4jxN0fgNvplCv_qflf3wQVCx7QbuWwsByCS-CVfmQtjOtksN5w6QehpSZZtvdBFm_A=w2400"
              alt="Smiling woman with blonde hair, blue eyes, and purple sweater"
            />
          </div>
          <div className={`aboutMeText aboutMeText-${mode}`}>
            <p>
              I am a Colorado Native that enjoys the great outdoors, playing
              with yarn, sports, and hanging with friends and family. I am the
              Operations Manager for a small IT recruiting company, mom of
              three, and left fielder. I enjoy a good pun, puzzles, and food. I
              am currently working towards a career change into the world of
              software and web development.
            </p>
            <p>
              I have been doing various administrative and office management
              positions since I began working for my dad at age 10. I have been
              in positions ranging from just answering phone calls to handling
              the entire office administration in addition to finance and
              accounting responsibilities. I am an excellent multi-tasker, and I
              set a high bar for my standards of success. I love working with
              people and making sure they have all the tools they need to meet
              their own standards of success. I am self motivated and have
              always been passionate about making a tangible impact wherever I
              am. I love to figure things out, learn new things, help people,
              and most importantly have fun.
            </p>
            <p>
              In my most current role I took ownership of invoicing and payroll
              for an IT staffing company. I reduced the entire process from two
              days to a few hours while increasing accuracy by digitizing the
              entire process. Prior to that, I have implemented organizational
              improvements and enhanced operating procedures in multiple
              departments (treasury, lending, office management) across multiple
              industries (energy and banking). I am always on the lookout for
              efficiency and progress.
            </p>
            <p>
              My previous work has set me up well for understanding multifaceted
              business operations and helped me grow to be a great team member
              for both the individual work groups as well as the company as a
              whole.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

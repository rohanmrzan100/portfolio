import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "@site/src/Constants";
import axios from "axios";
const Contact: React.FC = () => {
  console.log(BASE_URL + "/api/mail/send");

  const notify = async (event: any) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.text.value;

    if (!name || !email || !message) {
      toast.error("Please input all fields");
      return;
    }
    const loadingToast = toast.loading("Loading...");

    const data = {
      name: name,
      message: message,
      email: email,
    };
    const requestOptions = {
      method: "POST",
      Credential: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await axios.post(
        BASE_URL + "/api/mail/send",
        requestOptions
      );

      console.log(response);
      toast.success(`Your message has been sent.\nThank you ${name}`);
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Something went wrong.`);
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  return (
    <div className="h-min-screen md:m-8 lg:m-8 pt-[5px]" id="contact">
      <h1 className="bold  my-16 text-left md:text-6xl lg:text-7xl  text-5xl">
        Contact Me
      </h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2  mx-auto  rounded-lg ">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold  text-[--ifm-color-primary] leading-relaxed ">
              Thanks for taking the time to reach out.
            </h2>
            <div className="text-sky-300 mt-8">
              You can also contact me here :
            </div>
            <div className="flex justify-start px-0 m-0 gap-8 items-center py-8">
              <a
                href="https://github.com/rohanmaharjan100"
                aria-label="Go to my github page"
                target="_blank"
                rel="noreferrer noopener"
                className=" border border-gray-900 rounded-xl hover:scale-105 hover:text-gray-300 "
              >
                <FontAwesomeIcon icon={faSquareGithub} className="h-24" />
              </a>

              <a
                href="https://www.linkedin.com/in/rohan-maharjan-98307a230/"
                target="_blank"
                aria-label="go to my linkedin page"
                rel="noreferrer noopener"
                className=" rounded-xl hover:text-gray-300 hover:scale-105"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-24" />
              </a>
            </div>
            <a
              href="/Rohan-Maharjan-CV.pdf"
              download="Rohan_Maharjan_Resume"
              target="_blank"
              aria-label="Download My Resume"
              className="relative inline-flex items-center justify-center overflow-hidden font-medium text-[--ifm-color-primary] transition duration-300 ease-out border-2 border-[--ifm-color-primary] rounded-xl shadow-md group w-10/12 mb-6 h-16 active:scale-110"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[--ifm-color-primary] group-hover:translate-x-0 ease">
                <FontAwesomeIcon icon={faDownload} className="text-2xl" />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-[--ifm-color-primary] transition-all duration-300 transform group-hover:translate-x-full ease font-bold text-xl">
                Download My Resume
              </span>
              <span className="relative invisible">Button Text</span>
            </a>

            <h1 className="mt-2 text-xl font-semibold cursor-pointer text-white">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 " />
              rohanmrzan100@gmail.com
            </h1>
          </div>
          <div className="mt-8 text-center"></div>
        </div>
        <form onSubmit={notify}>
          <div>
            <label
              htmlFor="name"
              className="uppercase text-sm text-white font-bold"
            >
              Full Name
            </label>
            <input
              name="name"
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
              // value={formData.name}
            />
          </div>
          <div className="mt-8">
            <label
              htmlFor="email"
              className="uppercase text-sm text-white font-bold"
            >
              Email
            </label>
            <input
              name="email"
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              // value={formData.email}
            />
          </div>
          <div className="mt-8">
            <label
              htmlFor="text"
              className="uppercase text-sm text-white font-bold"
            >
              Message
            </label>
            <textarea
              // value={formData.message}
              name="text"
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="my-8">
            <button type="submit" className="navBtn w-full">
              Send Message
            </button>
            <Toaster />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

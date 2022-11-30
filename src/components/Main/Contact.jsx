import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import TitleAnimation from "../ui/TitleAnimation";
import axios from "axios";
import Social from "./Social";

const Contact = () => {
  const serviceId = "service_ei2g07o";
  const templateId = "template_xdmcazt";
  const userId = "user_d8DcekEisfi8mtui3Kt2C";
  const [name, setName, nameAttribute] = useInput();
  const [email, setEmail, emailAttribute] = useInput();
  const [message, setMessage, messageAttribute] = useInput();
  const [notification, setNotification] = useState("Send Message");
  const [error, setError] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (name && email && message) {
      if (emailRegex.test(email)) {
        setNotification("Sending...");
        try {
          await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
            service_id: serviceId,
            template_id: templateId,
            user_id: userId,
            template_params: {
              from_name: name,
              from_email: email,
              message,
            },
          });
        } catch (err) {
          if (err) {
            setError("Something went wrong, please try again later.");
          }
        } finally {
          setName("");
          setEmail("");
          setMessage("");
          setNotification("Message sent successfully!");
          setTimeout(() => {
            setNotification("Send Message");
          }, 2000);
        }
      }
    } else {
      setNotification("Please fill all fields!");
      setTimeout(() => {
        setNotification("Send Message");
      }, 2000);
    }
  };

  return (
    <div
      id="contact"
      className="scroll-mt-[65px] bg-light-1 pb-8 text-dark shadow-md dark:bg-dark-1 max-sm:px-3"
    >
      <div className="container mx-auto px-2 md:px-24 lg:px-44">
        <div className="flex h-28 items-center overflow-hidden text-xl font-semibold text-light dark:text-dark md:text-2xl">
          <TitleAnimation word="Get in touch with me" />
        </div>
        <form
          onSubmit={sendMessage}
          className="flex h-full flex-col justify-around space-y-14"
        >
          <div className="flex items-center space-x-4">
            <label
              htmlFor="UserName"
              className="relative block w-full overflow-hidden border-b-2 border-light pt-3 text-light dark:border-dark dark:text-dark"
            >
              <input
                type="text"
                id="UserName"
                placeholder="Name"
                {...nameAttribute}
                className="peer h-8 w-full border-none bg-transparent p-0 font-semibold placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute left-0 top-2 -translate-y-1/2 text-xs font-bold  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Your Name
              </span>
            </label>
            <label
              htmlFor="UserEmail"
              className="relative block w-full overflow-hidden border-b-2 border-light pt-3 text-light dark:border-dark dark:text-dark"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Email"
                {...emailAttribute}
                className="peer h-8 w-full border-none bg-transparent p-0 font-semibold placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute left-0 top-2 -translate-y-1/2 text-xs font-bold  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Your Email
              </span>
            </label>
          </div>
          <textarea
            rows="8"
            className="w-full resize-none border-b-2 border-light bg-transparent p-2 font-semibold text-light placeholder:font-semibold placeholder:text-light focus:outline-none dark:border-dark dark:text-dark dark:placeholder:text-dark"
            {...messageAttribute}
            placeholder="Your message"
          />
          <input
            type="submit"
            value={notification}
            className="cursor-pointer rounded-2xl border-2 border-secondary px-4 py-2 text-light dark:text-dark"
          />
        </form>
        <Social />
      </div>
    </div>
  );
};

export default Contact;

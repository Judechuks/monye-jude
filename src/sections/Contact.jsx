import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const Contact = () => {
  const form = useRef();
  const SERVICE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY;

  const titleOfForm = "My Portfolio Contact Form";
  // This will be used to collect the date and time of submission
  const dateAndTimeOfSubmission = new Date().toLocaleString();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Message sent successfully!");
          e.target.reset(); // Reset the form after submission
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message, please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="pt-16 pb-10 relative">
      <h1 className="section-title">Contact Me</h1>
      <div className="section-underline"></div>
      <article className="max-w- mx-auto">
        <p className="mb-6 text-lg text-justify text-gray-700 dark:text-gray-300">
          Have a question, a project idea, or want to collaborate? Feel free to
          reach out for gigs, job opportunities, inquiries, or just to say
          hello. I look forward to connecting with you!
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <article className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="w-fit cursor-pointer">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={`p-2 border block mt-2 w-full rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-700 dark:bg-black`}
              />
            </div>
            <div>
              <label htmlFor="email" className="w-fit cursor-pointer">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className={`p-2 border block mt-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 dark:bg-black`}
              />
            </div>
            <div>
              <label htmlFor="message" className="w-fit cursor-pointer">
                Message:
              </label>
              <textarea
                rows={5}
                name="message"
                id="message"
                placeholder="Your Message"
                className={`p-2 border block mt-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 dark:bg-black resize-none`}
              ></textarea>
            </div>
          </article>
          {/* hidden Inputs to collect the title of the form, and the date and time of submission */}
          <article>
            <input type="hidden" name="title" value={titleOfForm} />
            <input type="hidden" name="time" value={dateAndTimeOfSubmission} />
          </article>
          <button
            type="submit"
            className="bg-blue-800 text-white block py-2 px-3 mt-4 ml-auto rounded-md focus:ring-offset-1 focus:ring-2 focus:ring-blue-700 hover:bg-blue-700 duration-500"
          >
            Send Message
          </button>
        </form>
      </article>
      add
      {/* Sonner - For a toast notification */}
      <Toaster
        position="top-right"
        richColors
        toastOptions={
          {
            // className: "bg-blue-800 text-white",
          }
        }
      />
    </section>
  );
};
export default Contact;

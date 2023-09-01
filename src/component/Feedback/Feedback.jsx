import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Feedback = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uki2azi",
        "template_r94rfnx",
        form.current,
        "fvLnTtQCIYZak3eLw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="md:p-10">
      <h1 className="text-2xl p-5 text-center">Write your Feedback</h1>

      <div className="flex items-center justify-center">
        <form
          className="md:flex justify-between gap-10"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col">
            <label className="font-bold mt-2">Name</label>
            <input
              placeholder="Your Name"
              className="input text-black input-bordered input-info w-full max-w-xs"
              type="text"
              name="from_name"
            />
            <label className="mt-5 font-bold">Email</label>
            <input
              placeholder="Your Email"
              className="input text-black input-bordered input-info w-full max-w-xs"
              type="email"
              name="user_email"
            />
          </div>
          <div className="mt-2">
            <label className="font-bold">Message</label>
            <textarea
              placeholder="Write Your Feedback Here!!"
              className="input text-black input-bordered input-info w-full h-20 max-w-xl"
              name="message"
            />
             <input
            className="btn btn-outline btn-accent my-2"
            type="submit"
            value="Send"
          />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;

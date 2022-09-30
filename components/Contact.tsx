import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center  ">
      <h3 className="absolute top-12 uppercase teacking-[20px] text-gray-400 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have the skillz you need.
        </h4>
        <h4 className="text-4xl font-semibold text-center">Get in touch!</h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <AiOutlinePhone className=" text-red-500 h-7 w-7 animate-pulse" />
            <p>918 816 9466</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <AiOutlineMail className=" text-red-500 h-7 w-7 animate-pulse" />
            <p>daltonbarnett21@yahoo.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className=" bg-red-500 p-4 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

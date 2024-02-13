import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
    },
  });

  const { register, control, formState, handleSubmit } = form;

  const { errors } = formState;

  const onsubmit = (data) => {
    console.log("Form Submitted!", data);
  };

  return (
    <div className="w-screen">
      <div className=" w-[70%]">
        <div>
          <h1 className="text-4xl ml-5">React Hook Form</h1>
        </div>
        <form action="" onClick={handleSubmit(onsubmit)}>
          <div className="space-y-5 w-full p-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                name="username"
                className="p-2 bg-slate-100 shadow-md w-full outline-none placeholder:uppercase"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Username is important",
                  },
                  validate: {
                    notAdmin: (fieldValue) => {
                      if (fieldValue === "kksmudithananda") {
                        return "Enter New Username";
                      } else {
                        return true;
                      }
                    },
                    admin: (fieldValue) => {
                      if (fieldValue.endsWith("@gmail.com")) {
                        return "cannot use email for username";
                      } else {
                        return true;
                      }
                    },
                  },
                })}
              />
              <p className="text-red-900 mt-2">{errors.username?.message}</p>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="p-2 bg-slate-100 shadow-md w-full outline-none placeholder:uppercase"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is important",
                  },
                })}
              />
              <p className="text-red-900 mt-2">{errors.email?.message}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="twitter"
                name="twitter"
                className="p-2 bg-slate-100 shadow-md w-full outline-none placeholder:uppercase"
              />
            </div>
            <div>
              <button className="bg-red-600 px-4 py-2 rounded-2xl shadow-md hover:bg-fuchsia-600 transition-all duration-300">
                Submit Me
              </button>
            </div>
          </div>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default Form;

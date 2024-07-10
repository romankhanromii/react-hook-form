import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [formdata, setformdata] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // the register function is used to get the value of input field,the handle submit is used to add event handler to form,then we have watch which is used when we write in input field some thing it is display on console character by character watch is also used for validation

  const onsubmit = (data) => {
    console.log(data);
    setformdata(data);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-28 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-center">Sign Up</h2>
          <p className="mb-4 text-center">Welcome to signup</p>
          <form action="" className=" w-full" onSubmit={handleSubmit(onsubmit)}>
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
              className="block border border-gray-300 p-2 mb-2 w-full rounded-md outline-none"
            />
            <input
              type="text"
              {...register("password", { required: true, minLength: 5 })}
              placeholder="Password"
              className="block border border-gray-300 p-2 mb-2 w-full rounded-md outline-none"
            />
            {errors.password?.type === "required" && "password is required"}
            {errors.password?.type === "minLength" &&
              "Length should be greater than 5"}
            <input
              type="text"
              {...register("confirmpassword", {
                required: true,
                minLength: 5,
              })}
              placeholder="Confirmpwd"
              className="block border border-gray-300 p-2 mb-2 w-full rounded-md outline-none"
            />
            {errors.confirmpassword?.type === "required" &&
              "confirmpassword is required"}
            {errors.confirmpassword?.type === "minLength" &&
              "Length should be greater than 5"}
            <input
              type="text"
              {...register("mobile", { required: true, maxLength: 11 })}
              placeholder="Mobile"
              className="block border border-gray-300 p-2 mb-2 w-full rounded-md outline-none"
            />
            {errors.mobile?.type === "required" && "Mobile number is required"}
            {errors.mobile?.type === "maxLength" && "Max length exceed"}
            <button className="bg-blue-500 text-white w-full py-2 rounded-md mt-2 hover:bg-blue-600">
              Sign Up
            </button>
          </form>
          {formdata && (
            <div className="mt-4">
              <h2 className="text-xl font-bold">Submitted Data</h2>
              <p>Username: {formdata.username}</p>
              <p>Password: {formdata.password}</p>
              <p>Confirm Password: {formdata.confirmpassword}</p>
              <p>Mobile: {formdata.mobile}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;

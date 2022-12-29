import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-[50%] mx-auto">
      <h1 className=" text-center text-primary font-bold text-2xl">
        Please Register
      </h1>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Enter Your Email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="Enter your Email"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Enter Your password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            required={true}
            placeholder="Enter Your Password"
            shadow={true}
          />
        </div>

        <Button type="submit">Create Account</Button>
      </form>
      <div>
        <h1>
          Already Have Account{" "}
          <Link className="underline" to="/login">
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Register;

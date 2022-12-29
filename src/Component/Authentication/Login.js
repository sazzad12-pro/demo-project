import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  return (
    <div className="w-[50%] mx-auto">
      <h1 className="text-center text-primary text-2xl font-bold">
        Please Login
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
            placeholder="Enter Your Name"
            shadow={true}
          />
        </div>

        <Button type="submit">Login</Button>
      </form>
      <div>
        <h1>
          No Account{" "}
          <Link className="underline" to="/register">
            Register
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;

"use client";

import { Button } from "@/components/button/button";
import Card from "@/components/card/card";
import Input from "@/components/input/input";
import { FieldValues, useForm } from "react-hook-form";

const SignupForm: React.FC = () => {
  //constants

  //hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    reValidateMode: "onChange",
  });

  //states

  //fncs
  const handle = (values) => {
    console.log({ values });
  };

  //effects
  return (
    <div className="w-full">
      <Card
        title={<div className="text-2xl">Create Account</div>}
        description={"Enter your details to create your account"}
      >
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Input
                id="name"
                type="name"
                placeholder="John"
                required
                name="name"
                label="Full Name"
                register={register}
                errors={errors}
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                name="email"
                label="Email"
                register={register}
                errors={errors}
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="password"
                type="password"
                required
                name="password"
                label="Password"
                register={register}
                errors={errors}
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="confirmPassword"
                type="password"
                required
                name="confirmPassword"
                label="Confirm Password"
                onChange={() => {}}
                register={register}
                errors={errors}
              />
            </div>
            <Button
              label="Signup"
              type="submit"
              className="w-full"
              onClick={handleSubmit(handle)}
            />
            <Button
              label="Signup With Google"
              variant="outline"
              className="w-full"
            />
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="underline underline-offset-4">
              Login
            </a>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignupForm;

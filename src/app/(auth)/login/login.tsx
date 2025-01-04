"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/button/button";
import Card from "@/components/card/card";
import Input from "@/components/input/input";
import Label from "@/components/label/label";
import { FieldValues, useForm } from "react-hook-form";

const LoginForm: React.FC = () => {
  //constants

  //hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
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
        title={<div className="text-2xl">Login</div>}
        description={"Enter your email below to login to your account"}
      >
        <form>
          <div className="flex flex-col gap-6">
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
              <div className="flex items-center">
                <Label label="Password"></Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                name="password"
                register={register}
                errors={errors}
              />
            </div>
            <Button label="Login" type="submit" className="w-full" />
            <Button
              label="Login With Google"
              variant="outline"
              className="w-full"
            />
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;

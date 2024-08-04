"use client";
import IconEmail from "@/icons/iconEmail";
import IconLockPassWord from "@/icons/iconLockPassWord";
import { Button, Input } from "antd";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/schemas";
import userApi from "@/services/modules/user-api.ts";
import { clear } from "@/util/persistent-storage";
export default function SigninRight() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  type Inputs = {
    email: string;
    password: string;
  };
  const { mutate: login } = userApi.useLogin({
    onSuccess: (e) => {
      console.log(e);
      // http.setAuthorizationToken(e);
      // router.push("/tables/user");
    },
    onError: (e: any) => {
      clear();
      // router.push("/pages/login/");
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    login({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
      <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
        <span className="mb-1.5 block font-medium">Start for free</span>
        <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
          Sign In to ShakibAdmin
        </h2>

        <form>
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Email
            </label>

            <div className="relative">
              <input
                {...register("email")}
                type="texr"
                placeholder="Email"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />

              <IconEmail className="absolute right-4 top-4" />
            </div>
            {errors.email && (
              <span className="text-danger">{errors.email.message}</span>
            )}
          </div>

          <div className="mb-6">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Re-type Password
            </label>
            <div className="relative">
              <input
                {...register("password")}
                type="password"
                placeholder="6+ Characters, 1 Capital letter"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />

              <IconLockPassWord className="absolute right-4 top-4" />
            </div>
            {errors.password && (
              <span className="text-danger">{errors.password.message}</span>
            )}
          </div>

          <div className="mb-5">
            <Button
              onClick={handleSubmit(onSubmit)}
              size="large"
              className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
              type="primary"
            >
              Primary
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p>
              Don’t have any account?{" "}
              <Link href="/auth/signup" className="text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

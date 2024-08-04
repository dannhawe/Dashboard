// import { ChannelType, CleaningDelay, Statuses } from '@prisma/client'
import * as yup from "yup";

type Inputs = {
  email: string;
  password: string;
};

export const LoginSchema = yup
  .object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export const RegisterSchema = yup.object().shape({
  username: yup
    .string()
    .required("User name is required")
    .max(14, "User name must be at most 14 characters")
    .test(
      "no-spaces",
      "User name cannot contain spaces",
      (value) => !value?.includes(" "),
    ),
  name: yup
    .string()
    .required("Name is required")
    .max(14, "Name must be at most 14 characters")
    .test(
      "no-spaces",
      "Name cannot contain spaces",
      (value) => !value?.includes(" "),
    ),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters required")
    .required("Password is required"),
});

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as Yup from "yup";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CheckoutSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  zip: Yup.string().required("ZIP code is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  eMoneyNumber: Yup.string().when("paymentMethod", {
    is: "e-Money",
    then: (schema) => schema.required("e-Money number is required"),
  }),
  eMoneyPin: Yup.string().when("paymentMethod", {
    is: "e-Money",
    then: (schema) => schema.required("e-Money PIN is required"),
  }),
});

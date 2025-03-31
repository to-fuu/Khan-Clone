"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function ContactForm() {
  const formSchema = z.object({
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    email: z.string().email(),
    isCurrentUser: z.string().nonempty(),
    subject: z.string().nonempty(),
    message: z.string().nonempty(),
    file: z.instanceof(File).optional().nullable(),
  });

  type tSchema = z.infer<typeof formSchema>;

  const {
    register,
    formState: { isSubmitting, errors, isSubmitSuccessful },
    handleSubmit,
    watch,
    setValue,
  } = useForm<tSchema>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      isCurrentUser: "",
      subject: "",
      message: "",
      file: null,
    },
    resolver: zodResolver(formSchema),
  });

  const isCurrentUser = watch("isCurrentUser");

  const onSubmit = async (data: tSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Name Field with Floating Label */}
      <fieldset className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <label htmlFor="name" className="text-sm inline-block mb-2">
            First Name
          </label>
          <Input
            {...register("firstName")}
            type="text"
            id="name"
            className={`h-12 bg-background rounded-lg
            ${
              errors.firstName
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            }`}
            placeholder=" "
          />

          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="relative">
          <label htmlFor="name" className="text-sm inline-block mb-2">
            Last Name
          </label>
          <Input
            {...register("lastName")}
            type="text"
            id="name"
            className={`h-12 bg-background rounded-lg
            ${
              errors.lastName
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            }`}
            placeholder=" "
          />

          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </fieldset>

      {/* Email Field with Floating Label */}
      <div className="relative">
        <label htmlFor="email" className="text-sm inline-block mb-2">
          Email Address
        </label>
        <Input
          {...register("email")}
          type="email"
          id="email"
          className={`h-12 bg-background rounded-lg
          ${
            errors.email
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          }`}
          placeholder=" "
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Current User Radio Buttons - Enhanced */}
      <div className="space-y-4">
        <label className="block text-sm text-gray-700">
          Are You a Current User?
        </label>
        <div className="grid grid-cols-2 gap-4">
          <label
            onClick={() => {
              if (isCurrentUser === "yes") {
                setValue("isCurrentUser", "");
              } else {
                setValue("isCurrentUser", "yes");
              }
            }}
            className={cn(
              "relative flex items-center justify-center p-2 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors",
              isCurrentUser === "yes" && "bg-blue-100 border-blue-500"
            )}
          >
            Yes
          </label>
          <label
            onClick={() => {
              if (isCurrentUser === "no") {
                setValue("isCurrentUser", "");
              } else {
                setValue("isCurrentUser", "no");
              }
            }}
            className={cn(
              "relative flex items-center justify-center p-2 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors",
              isCurrentUser === "no" && "bg-blue-100 border-blue-500"
            )}
          >
            No
          </label>
        </div>
        {errors.isCurrentUser && (
          <p className="mt-1 text-sm text-red-500">
            {errors.isCurrentUser.message}
          </p>
        )}
      </div>

      {/* Subject Dropdown - Enhanced */}
      <div className="relative">
        <Select {...register("subject")}>
          <SelectTrigger
            className={cn(
              "w-full !h-12 bg-background",
              errors.subject
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            )}
          >
            <SelectValue placeholder="Select a Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a Subject</SelectLabel>
              <SelectItem value="general">General Question</SelectItem>
              <SelectItem value="billing">Account/Billing</SelectItem>
              <SelectItem value="technical">Technical Support</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject?.message}</p>
        )}
      </div>

      {/* Message Text Area - Enhanced */}
      <div className="relative">
        <label htmlFor="message" className="text-sm inline-block mb-2">
          Your Message
        </label>
        <Textarea
          {...register("message")}
          id="message"
          rows={6}
          className={`w-full bg-background rounded-lg min-h-32 resize-none
          ${
            errors.message
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          }`}
          placeholder=" "
        />

        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* File Upload - Enhanced */}
      <div className="relative">
        <div className="group border-2 border-dashed rounded-lg p-6 transition-colors hover:border-blue-500 hover:bg-blue-50/50">
          <input
            type="file"
            id="file-upload"
            name="file-upload"
            className="hidden"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                setValue("file", files[0]);
              }
            }}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer block text-center"
          >
            <svg
              className="mx-auto h-12 w-12 text-gray-400 group-hover:text-blue-500 transition-colors"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-600 group-hover:text-blue-600">
              <span className="font-medium text-blue-600">Upload a file</span>{" "}
              or drag and drop
            </p>
            <p className="mt-1 text-xs text-gray-500">
              PNG, JPG, PDF up to 10MB
            </p>
          </label>
        </div>
      </div>

      {/* Submit Button - Enhanced */}
      <div>
        <Button
          type="submit"
          size={"lg"}
          disabled={isSubmitting}
          className={`relative w-full py-4 px-6 text-lg font-medium transition-all duration-200 h-14 rounded-xl
          ${
            isSubmitting
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 active:bg-blue-800"
          }
          text-white
          `}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending Message...
            </div>
          ) : isSubmitSuccessful ? (
            <div className="flex items-center justify-center text-white">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Message Sent!
            </div>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  );
}

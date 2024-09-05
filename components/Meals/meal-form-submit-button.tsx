"use client";
import { useFormStatus } from "react-dom";

type Props = {};

const FormSubmitButton = (props: Props) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`
      text-white bg-green-600 rounded-md py-2 px-10 hover:bg-green-800 transition
      ${pending ? "cursor-not-allowed text-gray-400 bg-green-950" : ""}
      `}
    >
      {pending ? "Sending..." : "Share Meal"}
    </button>
  );
};

export default FormSubmitButton;

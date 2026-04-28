import { useFormContext } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type?: "email" | "text";
  required?: boolean;
  placeholder: string;
  validate?: (value: string) => string | boolean;
  minlength?: number;
}

export const Input = ({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  validate = () => true,
  minlength = 0,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className="bg-gray-50 placeholder:text-gray-400 border-2 border-gray-900 text-gray-900 sm:text-sm  focus:shadow-lg focus:ring-myYellow focus:border-gray-900 block w-full p-2.5"
        {...register(name, {
          required: required ? "Campo obbligatorio" : false,
          validate: { matchpattern: validate },
          minLength: {
            value: minlength,
            message: `Il campo deve contenere almeno ${minlength} caratteri!`,
          },
        })}
      />
      <p className="h-3 pb-5 text-red-700">
        {errors[name] ? (errors[name]?.message as string) : ""}
      </p>
    </div>
  );
};

interface TextAreaProps {
  label: string;
  name: string;
  required?: boolean;
  placeholder: string;
  rows?: number;
}

export const TextArea = ({
  label,
  name,
  required = false,
  placeholder,
  rows = 2,
}: TextAreaProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <textarea
        id={name}
        rows={rows}
        placeholder={placeholder}
        className="bg-gray-50 placeholder:text-gray-400 border-2 border-gray-900 text-gray-900 sm:text-sm  focus:shadow-lg focus:ring-myYellow focus:border-gray-900 block w-full p-2.5 "
        {...register(name, {
          required: required ? `Campo obbligatorio.` : false,
        })}
      />
      <p className="h-3 pb-5 text-red-700">
        {errors[name] ? (errors[name]?.message as string) : ""}
      </p>
    </div>
  );
};

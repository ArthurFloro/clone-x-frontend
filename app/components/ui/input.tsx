"use client";

import {
  faEye,
  faEyeSlash,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
  placeholder: string;
  value?: string;
  onChange?: (newValue: string) => void;
  filled?: boolean;
  password?: boolean;
  icon?: IconDefinition;
};

export const Input = ({
  placeholder,
  value,
  onChange,
  password,
  filled,
  icon,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`has-focus:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${
        filled && "bg-gray-700"
      } `}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} className="ml-4 text-gray-500" size="lg" />
      )}

      <input
        className="flex-1 outline-none bg-transparent h-full px-4"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        type={password && !showPassword ? "password" : "text"} // so mostra a senha se showPassword for true
      />
      {password && (
        <FontAwesomeIcon
          onClick={() => setShowPassword(!showPassword)} // setando o estado para o contrário do que está
          icon={showPassword ? faEye : faEyeSlash}
          className=" cursor-pointer text-gray-500 mr-4"
          size="lg"
        />
      )}
    </div>
  );
};

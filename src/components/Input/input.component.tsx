import { ChangeEvent } from "react";
import { InputWrapper } from "./input.style";

interface InputProps {
  value: any;
  placeholder: string;
  name: string;
  id: string;
  state: any;
  set: (state?: any) => any;
  required?: boolean;
  type?: string;
}

const Input = ({ set, name, state, value, ...props }: InputProps) => {
  return (
    <InputWrapper
      value={state[`${name}`] || ""}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        state[`${name}`] = e.target.value;
        set({ ...state });
      }}
      {...{ name }}
      {...props}
    />
  );
};

export default Input;

import { useState } from "react";
import { md5Generate } from "../../../helpers/md5Generate.helper";
import { useAppDispatch } from "../../../hooks";
import useNavigationHook from "../../../hooks/useNavigation.hook";
import { login } from "../../../slices/access/access.slice";

export interface FormDataProps {
  publicKey: string;
  privateKey: string;
}

const useFormData = () => {
  const dispatch = useAppDispatch();
  const { handleNavigateTo } = useNavigationHook();

  const [formData, setFormData] = useState<FormDataProps>({
    publicKey: "",
    privateKey: "",
  });

  const submitAccessForm = (e: any) => {
    e.preventDefault();
    const hash = md5Generate({
      privateKey: formData.privateKey,
      publicKey: formData.publicKey,
    });
    dispatch(login({ ...formData, ...{ hash } }));
    handleNavigateTo("/characters");
  };

  return {
    formData,
    setFormData,
    submitAccessForm,
  };
};

export default useFormData;

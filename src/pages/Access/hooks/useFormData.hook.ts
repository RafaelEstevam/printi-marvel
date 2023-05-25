import { useEffect, useState } from "react";

export interface FormDataProps {
  pubKey: string;
  priKey: string;
}

const useFormData = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    pubKey: "",
    priKey: "",
  });

  return {
    formData,
    setFormData,
  };
};

export default useFormData;

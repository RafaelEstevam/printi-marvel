import { FormDataProps } from "../hooks/useFormData.hook";

export const submitAccessForm = (e: any) => {
    e.preventDefault();
    const priKey = e.target.priKey.value;
    const pubKey = e.target.pubKey.value;
    submitAccess({priKey, pubKey});
};

export const submitAccess = (body: FormDataProps) => {
    console.log(body);
}
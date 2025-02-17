import { signUp } from "@/src/feature/firebase/auth";
import useNavigation from "@/src/hooks/useNavigation";
import { useForm } from "react-hook-form";

type UserForm = {
  email: string;
  password: string;
};

export default function useLoginContainer() {
  const { pageReplace } = useNavigation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (userForm: UserForm) => {
    const userInfo = await signUp(userForm.email, userForm.password);
    pageReplace("/home/main");
    console.log("登録成功!", userInfo.email);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
  };
}

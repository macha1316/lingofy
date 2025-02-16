import Button from "@/src/components/presenter/Button";
import TextBoxForm from "@/src/components/presenter/TextBoxForm";
import { signUp } from "@/src/feature/firebase/auth";
import useNavigation from "@/src/hooks/useNavigation";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";

type UserForm = {
  email: string;
  password: string;
};

export default function Login() {
  const { pageReplace } = useNavigation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (userForm: UserForm) => {
    console.log("userForm", userForm);
    const userInfo = await signUp(userForm.email, userForm.password);
    // mainに遷移
    pageReplace("/home/main");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>登録</Text>

        <TextBoxForm
          placeHolder="メールアドレス"
          name="email"
          control={control}
          rules={{
            required: "メールアドレスを入力してください",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "無効なメールアドレスです",
            },
          }}
        />

        <TextBoxForm
          placeHolder="パスワード"
          name="password"
          control={control}
          rules={{
            required: "パスワードを入力してください",
            minLength: {
              value: 6,
              message: "パスワードは6文字以上で入力してください",
            },
          }}
        />

        <Button
          icon={<AntDesign name="mail" size={20} color="white" />}
          text="Emailで登録"
          onPress={handleSubmit(onSubmit)}
          style={{ marginBottom: 20, backgroundColor: "gray" }}
        />
        <Button
          icon={<AntDesign name="user" size={20} color="white" />}
          text="匿名で登録"
          onPress={() => {}}
          style={{ backgroundColor: "gray" }}
        />
        <Button
          icon={<AntDesign name="google" size={20} color="white" />}
          text="Gmailで登録(推奨)"
          onPress={() => {}}
        />
        <Divider style={{ height: 2 }} horizontalInset />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>ログイン</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    gap: 15,
  },
});

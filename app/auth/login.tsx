import Button from "@/src/components/presenter/Button";
import TextBox from "@/src/components/presenter/TextBox";
import { signUp } from "@/src/firebase/auth";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";
export default function Login() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>登録</Text>
        <TextBox placeHolder="メールアドレス" />
        <TextBox placeHolder="パスワード" />
        <Button
          icon={<AntDesign name="mail" size={20} color="white" />}
          text="Emailで登録"
          onPress={() => signUp("hiromacha1116@icloud.com", "hiromacha16")}
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

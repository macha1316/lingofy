import { useModal } from "@/src/components/container/useModal";
import Button from "@/src/components/presenter/Button";
import { StyleSheet, Text, View } from "react-native";

const ModalScreen = () => {
  const { closeModal } = useModal();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is a modal</Text>
      <Button text="Close" onPress={closeModal} />
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

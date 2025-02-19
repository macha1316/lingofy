import Button from "@/src/components/presenter/Button";
import Table from "@/src/components/presenter/Table";
import useMainPageContainer from "@/src/container/home/main/useMainPageContainer";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
  const { goToNotePage, openModal, ClearStorage } = useMainPageContainer();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* のちに可変にする */}
        <Table onPress={goToNotePage} />
        <Table onPress={goToNotePage} />
      </ScrollView>

      <Button text="ストレージ初期化(デバッグ)" onPress={ClearStorage} />

      <View style={styles.fabContainer}>
        <Button
          text="+"
          textStyle={styles.fabText}
          onPress={openModal}
          style={styles.fabButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContent: {
    padding: 20,
    gap: 10,
  },
  fabContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  // TODO: fabButtonが他のところで必要になったら共通化
  fabButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  fabText: {
    color: "#fff",
    fontSize: 30,
    lineHeight: 34,
  },
});

import Table from "@/src/components/presenter/Table";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Table />
        <Table />
        {/* <Table />
        <Table />
        <Table />
        <Table />
        <Table /> */}
      </ScrollView>
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
});

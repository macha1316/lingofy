import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DataTable } from "react-native-paper";
import { useTable } from "../container/useTable";

const data = [
  { id: 1, name: "チャプター 1" },
  { id: 2, name: "チャプター 2" },
  { id: 3, name: "チャプター 3" },
];

const Table = () => {
  const { open, toggleTable } = useTable();

  return (
    <DataTable style={styles.table}>
      <TouchableOpacity onPress={toggleTable}>
        <DataTable.Header>
          <DataTable.Title>
            <View style={styles.headerContent}>
              <Text style={styles.header}>英語の教科書</Text>
              <MaterialIcons
                name={open ? "expand-less" : "expand-more"}
                size={24}
                color="black"
              />
            </View>
          </DataTable.Title>
        </DataTable.Header>
      </TouchableOpacity>

      {open ? (
        <ScrollView>
          {data.map((item) => (
            <DataTable.Row key={item.id}>
              <DataTable.Cell>{item.name}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </ScrollView>
      ) : null}
    </DataTable>
  );
};

export default Table;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  table: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});

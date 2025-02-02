import { StyleSheet, Text, View } from "react-native";

export default function Note() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        The sky was an endless stretch of gray, an iron curtain drawn across the
        heavens, allowing neither warmth nor light to penetrate the city below.
        The buildings, vast and impersonal, rose like silent sentinels, their
        windows reflecting only the cold, indifferent glow of the ever-present
        surveillance drones that hovered above. Jonathan pulled his coat tighter
        around his frame as he walked briskly through the narrow alleyways,
        careful to keep his head down. He had learned long ago that eye contact
        was dangerous—too much curiosity in a stranger’s gaze could lead to
        suspicion, and suspicion led to questions, and questions led to
        consequences. In this world, information was both a weapon and a
        liability. The government’s omnipresent voice hummed from the speakers
        embedded in every street corner, reinforcing the daily mantras: “Order
        is prosperity. Thought is control. Loyalty is survival.” It was not
        enough to obey; one had to believe. Jonathan’s mind drifted to the book
        hidden beneath his coat, its fragile pages pressed against his ribs. It
        was an old volume, the kind that had long been erased from official
        records. The ink had faded, the cover was worn, but its words carried
        weight—a history untold, a truth unsanctioned.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  mainText: {
    fontSize: 16,
    // lineHeight: 24,
    color: "#495057",
  },
});

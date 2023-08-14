import { StyleSheet } from "react-native"

import EditScreenInfo from "../../components/EditScreenInfo"
import { Text, View } from "../../components/Themed"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Toyota RunX</Text>
        <Text style={styles.content}>Odometer reading: 1234567890</Text>
        <Text style={styles.content}>Odometer reading date: 12 June 2023</Text>
        <Text style={styles.content}>Average mileage per month: 2500kms</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Service:</Text>
        <Text style={styles.content}>Last service: 12 March 2023</Text>
        <Text style={styles.content}>Service Interval: 15000km</Text>
        <Text style={styles.content}>Estimated next service in: 4 months</Text>
        <Text style={styles.link}>Edit</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Tyre Balancing:</Text>
        <Text style={styles.content}>Last balancing: 12 March 2023</Text>
        <Text style={styles.content}>Balance Interval: 8000km - 10000km</Text>
        <Text style={styles.content}>Next balancing in: 2 months</Text>
        <Text style={styles.link}>Edit</Text>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  header: {
    flexGrow: 1,
    width: "100%",
    borderRadius: 4,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#eee",
  },
  card: {
    borderColor: "#ccc",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 4,
    flexGrow: 1,
    width: "100%",
    marginTop: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    fontSize: 18,
  },
  link: {
    fontSize: 20,
    color: "#f00",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})

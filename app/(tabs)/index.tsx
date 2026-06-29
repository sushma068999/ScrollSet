import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Dashboard() {
  return (
    //</ThemedView>
      //</ThemedText>
        <View style={styles.container}>
          <Text style={styles.logo}>• ScrollSet</Text>

          <Text style={styles.heading}>Watch what{"\n"}matters.</Text>
          <Text style={styles.subHeading}>Learn from your scroll.</Text>

          <Text style={styles.description}>ScrollSet collects the best from Instagram, Youtube, X, Reddit and more — into one calm daily digest. Summaries, quizzes, streaks. Then it closes the loop.</Text>

          <View style= {styles.cardRow}>
            <View style= {styles.card}>
              <View style= {styles.cardSymbol}>
                <MaterialCommunityIcons
                  name="star-four-points"
                  size={22}
                  color="#1DBA8A"
                />
              </View>
              <Text style= {styles.cardDesc}>Top Picks</Text>
            </View>

            <View style= {styles.card}>
              <View style= {styles.cardSymbol}>
                <MaterialCommunityIcons
                  name="brain"
                  size={22}
                  color="#1DBA8A"
                />
              </View>
              <Text style= {styles.cardDesc}>Auto-Quiz</Text>
            </View>

            <View style= {styles.card}>
              <View style= {styles.cardSymbol}>
                <MaterialCommunityIcons
                  name="timer-outline"
                  size={22}
                  color="#1DBA8A"
                />
              </View>
              <Text style= {styles.cardDesc}>Hard Stop</Text>
            </View>
          </View>
          
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style= {styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Pressable onPress={() => navigation.navigate("homepage")}>
              <Text style= {styles.alreadyAccLink}>
                I already have an account
              </Text>
            </Pressable>
          </View>
        </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#edede9",
  },
  logo: {
    marginTop: 60,
    color: "#48a363",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 40,
  },
  
  heading: {
    color: "#000",
    fontSize: 40,
    fontFamily: "Cormorant",     //no fontWeight to be used when using custom fonts
  },
  subHeading: {
    color: "#48a363",
    fontSize: 40,
    fontFamily: "CormorantItalic",
    marginBottom: 30,
  },
  description: {
    color: "#666",
    fontSize: 17,
  },

  cardRow: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 3,
  },
  card: {
    padding: 18,
    backgroundColor: "#f8f9fa",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#d6ccc2",
  },
  cardSymbol: {
    paddingBottom: 3,
  },
  cardDesc: {
    textAlign: "center",
  },

  button: {
    marginTop: 40,
    backgroundColor: "#000",
    paddingVertical: 18,
    borderRadius: 900,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },

  alreadyAccLink: {
    marginTop: 6,
    color: "#666",
    textAlign: "center",
    fontSize: 14,
  },
});
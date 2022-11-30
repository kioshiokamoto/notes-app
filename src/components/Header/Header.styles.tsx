import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: "$fonts.primary",
    fontSize: 30,
  },
  button: {
    borderRadius: 100,
    backgroundColor: "$palette.primary",
    padding: 12,
  },
});

export default styles;

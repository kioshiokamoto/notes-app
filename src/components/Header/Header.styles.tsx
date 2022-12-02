import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontFamily: "$fonts.primary",
    fontSize: 30,
  },
  hamburger: {
    borderRadius: 100,
    backgroundColor: "$palette.primary",
    padding: 12,
    marginRight: 8,
  },
  plus: {
    borderRadius: 100,
    backgroundColor: "$palette.primary",
    padding: 12,
  },
  buttons: {
    flexDirection: "row",
  },
});

export default styles;

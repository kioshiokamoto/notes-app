import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    text: {
      fontFamily: "$fonts.primaryMedium",
      color: "$palette.h248s61l65",
      fontSize: 24,
      position: "absolute",
      bottom: 32,
    },
  },
});

export default styles;

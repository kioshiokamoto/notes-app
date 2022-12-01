import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "flex-end",
  },
  keyboard: {
    flex: 1,
  },
  container: {
    padding: 24,
    backgroundColor: "$palette.white",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    width: "100%",
  },
  goBack: {
    marginRight: 12,
  },
  title: {
    fontFamily: "$fonts.primary",
    fontSize: 16,
  },
  inputContainer: {
    marginVertical: 24,
    borderWidth: 2,
    borderColor: "$palette.h0s0l46a3",
    width: "100%",
    padding: 4,
  },
  input: {
    fontFamily: "$fonts.primaryMedium",
    color: "$palette.h0s0l50",
    fontSize: 16,
  },

  submit: {
    width: 200,
    borderRadius: 12,
    backgroundColor: "$palette.h248s61l65",
    alignItems: "center",
    paddingVertical: 6,
    text: {
      color: "$palette.white",
      fontFamily: "$fonts.primary",
      fontSize: 16,
    },
  },
});

export default styles;

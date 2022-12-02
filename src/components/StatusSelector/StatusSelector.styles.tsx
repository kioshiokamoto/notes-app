import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
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
  optionsContainer: {
    marginVertical: 24,
    width: "100%",
    padding: 4,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "$palette.h248s61l65",
    bordeRadius: 30,
    marginVertical: 8,
    paddingVertical: 8,
  },
  text: {
    fontFamily: "$fonts.primarySemiBold",
    fontSize: 20,
    color: "$palette.primary",
  },
});

export default styles;

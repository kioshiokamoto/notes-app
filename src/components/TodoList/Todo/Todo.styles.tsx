import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "$palette.h0s0l74",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  checkButton: {
    marginRight: 8,
  },
  check: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  active: {
    width: 14,
    height: 14,
    borderRadius: 50,
    padding: 4,
    backgroundColor: "$palette.primary",
    alignItems: "center",
    justifyContent: "center",
  },
  out: {
    borderColor: "$palette.h0s0l46a3",
    width: 24,
    height: 24,
    borderRadius: 50,
    borderWidth: 2,
  },
  selectedOut: {
    borderColor: "$palette.primary",
  },
  description: {
    fontFamily: "$fonts.primary",
    fontSize: 16,
    flex: 1,
  },
  delete: {
    fontFamily: "$fonts.primary",
    fontSize: 16,
    color: "$palette.h2s60l60",
  },
  restoreButton: {
    marginRight: 12,
  },
  restore: {
    fontFamily: "$fonts.primary",
    fontSize: 16,
    color: "$palette.h248s61l65",
  },
  controlButtons: {
    flexDirection: "row",
  },
});

export default styles;

function hasUmlauts(str) {
  if (typeof str === "string") {
    str = str.toLocaleLowerCase();
    if (
      str.includes("ä") ||
      str.includes("ö") ||
      str.includes("ü") ||
      str.includes("ß")
    ) {
      return true;
    } else {
      return false;
    }
  }
}

function timeConverter() {
  const UNIXdate = new Date();
  const month = UNIXdate.getMonth() + 1;
  const year = UNIXdate.getFullYear();
  return { month, year };
}
export default timeConverter;

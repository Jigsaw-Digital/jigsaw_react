export function getDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function abs_url(value) {
  return value.replace("https://api.jigsaw.digital", "");
}

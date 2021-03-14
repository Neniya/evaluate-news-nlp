function handleSubmit(event) {
  //clean the result's section
  document.getElementById("results").innerHTML = "";

  event.preventDefault();

  // check what text was put into the form field
  let formURL = document.getElementById("article_url").value;
  if (Client.checkForURL(formURL) !== true) {
    alert("Please check given URL. It is in incorrect form!");
    return;
  }

  const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response;
  };
  postData("http://localhost:8081/sentiments", { article_url: formURL })
    .then((res) => res.json())
    .then(function (res) {
      let message =
        "The different elements of the text have <strong>" +
        (res.agreement === "AGREEMENT"
          ? "the same polarity."
          : " different polarity.");
      message += "</strong>";
      message +=
        res.ironic === "IRONIC"
          ? " The text <strong>has ironic marks.</strong>"
          : " The text <strong>does not have ironic marks.</strong>";
      message += " Overal tone of the text is <strong>";
      switch (res.score_tag) {
        case "P+":
          message += "strong positive.";
          break;
        case "P":
          message += "positive.";
          break;
        case "NEU":
          message += "neutral.";
          break;
        case "N":
          message += "negative.";
          break;
        case "N+":
          message += "strong negative.";
          break;
        default:
          message += "without sentiment.";
          break;
      }
      message += "</strong>";
      document.getElementById("results").innerHTML = message;
    });
}

export { handleSubmit };

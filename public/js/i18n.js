let country = { id: "panama", name: "Panama", flag: "pa" };
let language = "es";

const detectCountry = () => {
  const hash = window.location.hash;

  switch (hash) {
    case "#/colombia":
      country = { id: "colombia", name: "Colombia", flag: "co" };
      break;
    case "#/costa-rica":
      country = { id: "costa-rica", name: "Costa Rica", flag: "cr" };
      break;
    case "#/panama":
      country = { id: "panama", name: "Panama", flag: "pa" };
      break;
    case "#/united-states":
      country = { id: "united-states", name: "United States", flag: "us" };
      break;
  }
};

const detectLanguage = () => {
  const lang = navigator.language.substring(0, 2);
  return lang;
};

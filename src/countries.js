const countries = {
  default: {
    id: "costa-rica",
    name: "Costa Rica",
    iso: "CR",
  },
  panama: {
    id: "panama",
    name: "Panamá",
    iso: "PA",
  },
  "costa-rica": {
    id: "costa-rica",
    name: "Costa Rica",
    iso: "CR",
  },
  colombia: {
    id: "colombia",
    name: "Colombia",
    iso: "CO",
  },
};

const getCountryByID = (id) => {
  const country = countries[id];
  return country !== undefined ? country : countries["default"];
}

const getCountryByISO = (iso) => {
  const country = Object.values(countries).find(e => e.iso === iso);
  return country !== undefined ? country : countries["default"];
}

export { getCountryByID, getCountryByISO };

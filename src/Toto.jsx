const toto = ({ riri, ...obj }) => {
  return obj.fifi;
};

const ducks = {
  riri: "cannard",
  fifi: "connard",
  loulou: "pinnard",
};
toto(ducks);

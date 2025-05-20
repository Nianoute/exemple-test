import React from "react";
import Bonjour from "../../molecules/Bonjour";
import Adieu from "../../molecules/Adieu";
import Nuit from "../../molecules/Nuit";
import Default from "../../molecules/Button/Default";

const Layout = () => {
  const [page, setPage] = React.useState("Bonjour");

  return (
    <>
      <Default setPage={setPage}>Bonjour</Default>
      <Default setPage={setPage}>Adieu</Default>
      <Default setPage={setPage}>Nuit</Default>
      {page === "Bonjour" && <Bonjour />}
      {page === "Adieu" && <Adieu />}
      {page === "Nuit" && <Nuit />}
    </>
  );
};

export default Layout;

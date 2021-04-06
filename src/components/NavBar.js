import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
// can I use different variable name here?
  const anchors = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  return <nav>{anchors}</nav>;
}

export default NavBar;

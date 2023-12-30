import { ILayout } from "./layout.types";
import { Header } from "./header/Header";

import "./header/Header.css";


function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <section className="main">{children}</section>
    </>
  );
}

export { Layout };

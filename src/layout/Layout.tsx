import { ILayout } from "./layout.types";

import "./header/Header.css";
import { Header } from "./header/Header";

function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <section className="main">{children}</section>
    </>
  );
}

export { Layout };

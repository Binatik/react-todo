import { ILayout } from "./layout.types";
import { Header } from "./header/Header";

import "./header/Header.css";


function Layout({ children, cb }: ILayout) {
  //What is prop drilling in React?

  return (
    <>
      <Header cb={cb} />
      <section className="main">{children}</section>
    </>
  );
}

export { Layout };

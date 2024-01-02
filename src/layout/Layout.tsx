import { ILayoutProps } from "./layout.types";
import { Header } from "./header/Header";

import "./header/Header.css";


function Layout({ children, setTodos }: ILayoutProps) {
  //What is prop drilling in React?

  return (
    <>
      <Header setTodos={setTodos} />
      <section className="main">{children}</section>
    </>
  );
}

export { Layout };

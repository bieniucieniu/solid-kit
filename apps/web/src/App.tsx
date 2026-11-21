import { Loading } from "solid-js";
import { Header } from "~/components/header";
import { Router } from "./router";
import "./app.css";

export default function App() {
  return (
    <Router>
      {(props) => (
        <>
          <Header />
          <Loading>{props.children}</Loading>
        </>
      )}
    </Router>
  );
}

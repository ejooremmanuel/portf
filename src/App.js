import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Header from "../src/components/header/Header";
import Contact from "../src/components/contact/Contact";
import Projects from "../src/components/projects/Project";
import Image from "../src/components/image/Image";

function App() {
  return (
    <Router>
      <Container>
        <Header />
      </Container>
      <Route path="/contact" render={Contact} exact />
      <Route path="/" render={Image} exact />
      <Route path="/project" render={Projects} exact />
    </Router>
  );
}

export default App;

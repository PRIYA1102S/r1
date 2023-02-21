import React from "react";
import Navbar from "./components/Navbar.js";
import {Switch, Route} from "react-router-dom";

const About = ()  => {
  return (
  <>
  <Navbar />
  <section className="section">
    <p>Welcome</p>
  </section>
  </>
  );
  };

  const JoinUs = ()  => {
    return (
    <>
    <Navbar />
    <section className="section">
      <p>Welcome</p>
    </section>
    </>
    );
    };

    const Sell = ()  => {
      return (
      <>
      <Navbar />
      <section className="section">
        <p>Welcome</p>
      </section>
      </>
      );
      };

      const Faq = ()  => {
        return (
        <>
        <Navbar />
        <section className="section">
          <p>Welcome</p>
        </section>
        </>
        );
        };

        const Contact = ()  => {
          return (
          <>
          <Navbar />
          <section className="section">
            <p>Welcome</p>
          </section>
          </>
          );
          };

          const Signin = ()  => {
            return (
            <>
            <Navbar />
            <section className="section">
              <p>Welcome</p>
            </section>
            </>
            );
            };

 const App = ()  => {
  (
   <Switch>
    <Route path="/">
      <About />
    </Route>

    <Route path="/joinUs">
      <JoinUs />
    </Route>

    <Route path="/sell">
      <Sell />
    </Route>

    <Route path="/faq">
      <Faq />
    </Route>

    <Route path="/contact">
      <Contact />
    </Route>

    <Route path="/signin">
      <Signin />
    </Route>

   </Switch>
  );
  };



export default App;


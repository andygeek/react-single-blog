import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { HomePage } from "./pages/home-page/HomePage";
import { ProjectsPage } from "./pages/projects-page/ProjectsPage";
import { AboutPage } from "./pages/about-page/AboutPage";
import { ContactPage } from "./pages/contact-page/ContactPage";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

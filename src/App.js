import React from "react";
import ReactGA from "react-ga";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import { resumeData } from "./resumeData";

const App = () => {
  ReactGA.initialize("UA-208609134-1");
  ReactGA.pageview(window.location.pathname);

  return (
    <div className="App">
      {resumeData.map((data) => {
        return (
          <div>
            <Header data={data.main} />
            <About data={data.main} />
            <Resume data={data.resume} />
            <div className="working-at">
              <h1>💭 Now I'm Working at</h1>
              <p>DevJobs Platform Node</p>
            </div>
            <Portfolio data={data.portfolio} />

            <Footer data={data.main} />
          </div>
        );
      })}
    </div>
  );
};
export default App;

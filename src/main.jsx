import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header>
      <h1 className="error">404 N0T FOUND</h1>
    </header>
    <body>
      <section className="section-info">
        <img src="src\img\404img.png" alt="404-img" className="img-error" />
        <div className="div-info">
          <h1 className="title">I have bad news for you</h1>
          <p className="info">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button className="back-home">Back to homepage</button>
        </div>
      </section>
    </body>
    <footer>
      <p className="credits">
        created by<a href="https://github.com/RonyPadilla"> RonyPadilla</a> -
        devChallenges.io
      </p>
    </footer>
  </React.StrictMode>
);

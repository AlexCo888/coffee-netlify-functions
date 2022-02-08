import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const App = () => {
  return (
    <div>
      <div className="content">
        <h1>Netlify Serverless Functions</h1>
        <p>
          I created this website to get familiarize with netlify serverless
          functions in React projects.
        </p>
        <h3>Examples:</h3>
        <ul>
          <Link className="link" to="/hello-world">
            Hello World
          </Link>
          <Link className="link" to="/basic-api">
            Basic API - Coffee Varieties
          </Link>
          <Link className="link" to="/airtable">
            Airtable - Coffee Varieties
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default App;

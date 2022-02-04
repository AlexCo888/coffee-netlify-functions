import axios from "axios";
import React, { useState, useEffect } from "react";

const HelloWorld = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // const { data } = await axios.get("/.netlify/functions/hello-world");
      const { data } = await axios.get("/api/hello-world");
      setText(data.body);
    } catch (err) {
      console.log(err.response.data);
      setText(err.response.data);
    }
  };
  return (
    <>
      <div className="content">
        <h1>Hello World</h1>
        {text && <h3>{text}</h3>}
      </div>
    </>
  );
};

export default HelloWorld;

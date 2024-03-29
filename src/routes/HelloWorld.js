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
        <pre
          rel="Javascript"
          class="wp-block-csstricks-code-block  language-css"
          data-line=""
        >
          <code markup="tt" class="language-javascript">
            <span class="token property">exports.</span>handler{" "}
            <span class="token property">=</span>
            <span class="token punctuation"> async</span>
            <span class="token node-int">
              &#40;event, context&#41; &#61;&#62;
            </span>{" "}
            &#123;
            <br />
            <span class="token punctuation"> return</span> &#123; <br />
            <span class="token property"> {"  "}statusCode:</span>{" "}
            <span class="token node">200</span>,
            <br />
            <span class="token property">
              {"   "}body:{" "}
              <span class="token node">
                <span class="token node-int">
                  "This is my First Netlify Function Example"
                </span>
              </span>
              ,
            </span>{" "}
            <br />
            {"  "}&#125;;
            <br /> &#125;;
          </code>
        </pre>
        {text && <h3>{text}</h3>}
      </div>
    </>
  );
};

export default HelloWorld;

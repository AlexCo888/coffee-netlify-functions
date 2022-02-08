import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const BasicApi = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/basic-api");
      setFetchedData(data);
    } catch (err) {
      setFetchedData(err.response.data);
    }
  };

  const varieties = fetchedData.map((variety) => (
    <Card
      imgUrl={variety.image.url}
      name={variety.name}
      description={variety.description}
    />
  ));

  return (
    <>
      <div className="content">
        <h1>Basic API - Coffee Varieties</h1>
        <pre
          rel="Javascript"
          class="wp-block-csstricks-code-block  language-css"
          data-line=""
        >
          <code markup="tt" class="language-javascript">
            <span class="token selector">const</span>{" "}
            <span class="token punctuation">data</span> =
            <span class="token node"> require</span>
            <span class="token node-int">&#40;"../assets/data"</span>&#41;
            <br />
            <br />
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
                JSON.stringify(<span class="token punctuation">data</span>)
              </span>
              ,
            </span>{" "}
            <br />
            {"  "}&#125;;
            <br /> &#125;;
          </code>
        </pre>
        {fetchedData && <div className="cardList">{varieties}</div>}
      </div>
    </>
  );
};

export default BasicApi;

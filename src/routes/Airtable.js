import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Airtable = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/airtable");
      setFetchedData(data);
    } catch (err) {
      setFetchedData(err.response.data);
    }
  };

  const varieties = fetchedData.map((variety) => (
    <Link className="variety-link" to={variety.id} key={variety.id}>
      <Card
        imgUrl={variety.url}
        name={variety.name}
        description={variety.description}
      />
    </Link>
  ));

  return (
    <>
      <div className="content">
        <h1>Basic API - Coffee Varieties</h1>
        <pre
          rel="Javascript"
          className="wp-block-csstricks-code-block  language-css"
          data-line=""
        >
          <code markup="tt" className="language-javascript">
            <span className="token selector">const</span>{" "}
            <span className="token punctuation">Airtable</span> =
            <span className="token node"> require</span>
            <span className="token node-int">&#40;"airtable-node"</span>&#41;
            <br />
            <br />
            <span className="token selector">const</span>{" "}
            <span className="token punctuation-2">airtable</span> =
            <span className="token punctuation-3"> new </span>
            <span className="token punctuation">Airtable</span>
            <span className="token node-int">
              (&#123; <span className="token punctuation-3">apiKey</span>:
              "AIRTABLE_API_KEY"&#125;)
            </span>
            <br />
            {"  "}.base(<span className="token node-int">"BASE_ID"</span>)
            <br />
            {"  "}.table(<span className="token node-int">"varieties"</span>)
            <br />
            <br />
            <span className="token property">exports.</span>handler{" "}
            <span className="token property">=</span>
            <span className="token punctuation"> async</span>
            <span className="token node-int">
              &#40;event, context&#41; &#61;&#62;
            </span>{" "}
            &#123;
            <br />
            <span className="token punctuation"> try</span> &#123; <br />
            <span className="token selector"> {"  "}const</span>
            <span className="token node-int">
              {" "}
              &#123;
              <span className="token punctuation-2"> records </span>&#125;
            </span>{" "}
            =<span className="token punctuation"> await</span>
            <span className="token punctuation-2"> airtable</span>.
            <span className="token node">list(</span>&#123; <br />
            <span className="token property"> {"  "}maxRecords:</span>{" "}
            <span className="token node">200</span>,
            <br />
            {"  "}&#125;);
            <br />
            <span className="token selector"> {"  "}const</span>{" "}
            <span className="token punctuation-2"> orderedRecords </span>={" "}
            <span className="token punctuation-2"> records.</span>
            <span className="token node">sort</span>(
            <span className="token node-int-2">(</span>
            a, b<span className="token node-int-2">)</span>
            <span className="token node">)</span> &#61;&#62; &#123;
            <br />
            {"     "}
            <span className="token punctuation">return</span>
            <span className="token property"> a.fields.name</span> &#62;{" "}
            <span className="token property">b.fields.name</span> ?
            <span className="token property"> 1 </span>:
            <span className="token property"> -1</span>;
            <br />
            {"  "}&#125;);
            <br />
            <span className="token selector"> {"  "}const</span>{" "}
            <span className="token punctuation-2"> varieties </span>={" "}
            <span className="token punctuation-2"> orderedRecords.</span>
            <span className="token node">map</span>(
            <span className="token node-int-2">(</span>
            variety<span className="token node-int-2">)</span>
            <span className="token node">)</span> &#61;&#62; &#123;
            <br />
            <span className="token selector"> {"    "}const</span>
            <span className="token node-int">
              {" "}
              &#123;
              <span className="token punctuation-2"> id </span>&#125;
            </span>{" "}
            =<span className="token punctuation-2"> product</span>;
            <br />
            <span className="token selector"> {"    "}const</span>
            <span className="token node-int">
              {" "}
              &#123;
              <span className="token punctuation-2">
                {" "}
                name<span className="token property">,</span> description
                <span className="token property">,</span> img{" "}
              </span>
              &#125;
            </span>{" "}
            =<span className="token punctuation-2"> product.fields</span>;
            <br />
            <span className="token selector"> {"    "}const</span>
            <span className="token node-int">
              <span className="token punctuation-2"> url</span>
            </span>{" "}
            =
            <span className="token punctuation-2">
              {" "}
              img<span className="token property">[</span>0
              <span className="token property">].</span>
              url
            </span>
            ;
            <br /> <span className="token punctuation">{"    "}return </span>
            &#123;
            <span className="token punctuation-2">
              {" "}
              id<span className="token property">,</span> name
              <span className="token property">,</span> description
              <span className="token property">,</span> url
            </span>{" "}
            &#125;
            <br />
            {"  "}&#125;);
            <br />
            <span className="token punctuation">{"   "}return</span> &#123;
            <br />
            <span className="token property"> {"   "}statusCode:</span>{" "}
            <span className="token node">200</span>,
            <br />
            <span className="token property">
              {"    "}body:{" "}
              <span className="token node">
                JSON.stringify(
                <span className="token punctuation-2">varieties</span>)
              </span>
              ,
            </span>{" "}
            <br />
            {"  "}&#125;;
            <br /> &#125;
            <span className="token punctuation"> catch</span> (error) &#123;
            <br />
            <span className="token punctuation">{"   "}return</span> &#123;
            <br />
            <span className="token property"> {"   "}statusCode:</span>{" "}
            <span className="token node">500</span>,
            <br />
            <span className="token property">
              {"    "}body:{" "}
              <span className="token node">
                JSON.stringify(
                <span className="token punctuation-2">error</span>)
              </span>
              ,
            </span>{" "}
            <br />
            {"  "}&#125;;
            <br /> &#125;
            <br />
            &#125;;
          </code>
        </pre>
        {fetchedData && <div className="cardList">{varieties}</div>}
      </div>
    </>
  );
};

export default Airtable;

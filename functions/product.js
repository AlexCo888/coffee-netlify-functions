require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appP3euJbV46dBzKT")
  .table("varieties");

exports.handler = async (event, context) => {
  console.log(event);
  if (event.queryStringParameters) {
    try {
      const { records } = await airtable.list({
        maxRecords: 200,
      });
      const orderedRecords = records.sort((a, b) => {
        return a.fields.name > b.fields.name ? 1 : -1;
      });
      const varieties = orderedRecords.map((product) => {
        const { id } = product;
        const { name, description, img } = product.fields;
        const url = img[0].url;
        return { id, name, description, url };
      });
      return {
        statusCode: 200,
        body: JSON.stringify(varieties),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      };
    }
  }
};

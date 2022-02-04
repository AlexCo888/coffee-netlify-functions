// {domain}/.netlify/functions/hello-world

const data = {
  body: "This is my First Netlify Function Example",
};

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

// or
// exports.handler = (event, context, cb) => {
//   cb(null, {
//     statusCode: 200,
//     body: "Oopman",
//   });
// };

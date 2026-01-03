const serverless = require('serverless-http');
const { app, connectDB } = require('../app');

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectDB();
  return serverless(app)(event, context);
};

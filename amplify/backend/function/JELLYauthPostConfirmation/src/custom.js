/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

// const aws = require("aws-sdk");
// import aws from "aws-sdk";
// import aws from '/var/runtime/node_modules/aws-sdk/lib/aws.js';
import { DynamoDB } from "aws-sdk";
const ddb = new DynamoDB();
// var ddb = new aws.DynamoDB({apiVersion: '2012-10-08'});

const tableName = process.env.USERAUTHTABLE;

exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  if(!event?.request?.userAttributes?.sub){
    return;
  }

  const now = new Date();
  const timestamp = now.getTime();

  const userItem = {
      __typename: { S: 'User' },
      _lastChangedAt: { N: timestamp.toString() },
      _version: { N: "1" },
      createdAt: { S: now.toISOString() },
      updatedAt: { S: now.toISOString() },
      id: { S: event.request.userAttributes.sub },
      name: { S: event.request.userAttributes.name },
  }

  const params = {
      Item: userItem,
      TableName: tableName
  };

  try {
  await ddb.putItem(params).promise();   
  console.log('success');
  } catch (e) {
      console.log(e);
  }
};




import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

// Initialize the DynamoDB client
const dynamoClient = new DynamoDBClient({ region: "us-east-1" }); // Replace with your region if different

export const handler = async (event) => {
  console.log("Incoming event:", event);

  try {
    const body = JSON.parse(event.body);
    console.log("Parsed body:", body);

    // Build DynamoDB parameters
    const params = {
      TableName: "Registrations",
      Item: {
        email: { S: body.email },
        name: { S: body.name },
        program: { S: body.program },
        submittedAt: { S: new Date().toISOString() },
      },
    };

    console.log("DynamoDB put parameters:", params);

    // Use the AWS SDK v3 PutItemCommand
    const command = new PutItemCommand(params);
    await dynamoClient.send(command);
    console.log("Saved successfully");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Registration successful" }),
    };
  } catch (err) {
    console.error("Error occurred:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Could not save registration",
        details: err.message,
      }),
    };
  }
};

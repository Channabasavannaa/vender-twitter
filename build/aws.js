"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamodbDescribeTable = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const client = new client_dynamodb_1.DynamoDBClient({
    region: "us-east-1", // Or process.env.AWS_REGION
});
const dynamodbDescribeTable = async (tableName) => {
    try {
        const table = await client.send(new client_dynamodb_1.DescribeTableCommand({ TableName: tableName }));
        console.log(" Table description:", table.Table);
        return table;
    }
    catch (err) {
        if (err instanceof Error) {
            console.error("Error:", err.message);
            throw err;
        }
        throw new Error("Unknown error occurred while describing table");
    }
};
exports.dynamodbDescribeTable = dynamodbDescribeTable;
//# sourceMappingURL=aws.js.map
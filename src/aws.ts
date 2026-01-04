import { 
  DynamoDBClient, 
  CreateTableCommand, 
  DescribeTableCommand, DeleteTableCommand, PutItemCommand
} from "@aws-sdk/client-dynamodb";



const client = new DynamoDBClient({
  region: "us-east-1", // Or process.env.AWS_REGION
});


import { marshall } from "@aws-sdk/util-dynamodb";


export const dynamodbDescribeTable = async (tableName: string) => {
    try{
        const table = await client.send(new DescribeTableCommand({ TableName: tableName }));
        console.log(" Table description:", table.Table);
        return table;
    }
    catch(err) {
    if (err instanceof Error) {
      console.error("Error:", err.message);
      throw err;
    }
    throw new Error("Unknown error occurred while describing table");
  }

    
}
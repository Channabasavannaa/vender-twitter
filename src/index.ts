import {dynamodbDescribeTable} from "./aws";


const init = async() => {
    try{
    const res = await dynamodbDescribeTable("VenderTwitterUsersTable");
    console.log(res);
}
    catch(err){
        console.error("Failed to describe table:", err);
    }
}

init();
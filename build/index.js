"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_1 = require("./aws");
const init = async () => {
    try {
        const res = await (0, aws_1.dynamodbDescribeTable)("VenderTwitterUsersTable");
        console.log(res);
    }
    catch (err) {
        console.error("Failed to describe table:", err);
    }
};
init();
//# sourceMappingURL=index.js.map
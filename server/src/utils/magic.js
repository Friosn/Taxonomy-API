//We require our enum_ (the whole file)
const enum_ = require('./enum');

//We  export a function that generates an answer, reciveing arguments that will form an informative object with status and info

//This will be the object that we'll recieve as answer after doing the request
exports.ResponseService = async (status, errorCode, message, data) => {
  return await {
    status: status,
    info: { errorCode: errorCode, message: message, data: data },
  };
};
//Now we export different functions that will show different types of console messages
//in different colors to know visually the different status of the log. (Success, Info, Warning & Danger TYPES)
exports.LogSuccess = (msg) => {
  console.log(enum_.GREEN_LOG, msg);
};
exports.LogInfo = (msg) => {
  console.log(enum_.CYAN_LOG, msg);
};
exports.LogWarning = (msg) => {
  console.log(enum_.YELLOW_LOG, msg);
};
exports.LogDanger = (msg) => {
  console.log(enum_.RED_LOG, msg);
};
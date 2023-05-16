const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

export const sendSms = async ({ mobile, body }) => {
  const status = await client.messages
    .create({
      body: body,
      messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
      to: `${mobile}`,
    });
    // console.log(status);
    if(status.status === "accepted") {
        console.log("Message Sent");
    }
    // .then((message) => console.log(message.sid))
    // .done();
};

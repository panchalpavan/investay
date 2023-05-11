const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

export const sendSms = async ({ mobile, body }) => {
  const status = await client.messages
    .create({
      body: body,
      messagingServiceSid: process.env.NEXT_PUBLIC_TWILIO_MESSAGING_SERVICE_SID,
      to: `${mobile}`,
    });
    // console.log(status);
    if(status.status === "accepted") {
        console.log("Message Sent");
    }
    // .then((message) => console.log(message.sid))
    // .done();
};

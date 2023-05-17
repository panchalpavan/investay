const { sendEmail } = require("../../services/email");
const adminEmail = "enquiry@investayrealty.com";

const contact = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, mobile, message } = req.body;
    await sendEmail({
      subject: "ENQUIRY SUBMITTED",
      html: `
      <div>
        <p>Hi,</p>
        <p style="margin: 1rem 0;">A new enquiry has been submitted in the Investay website with the following details</p>

        <div style="border: 1px solid black; width: 400px; padding: 0;">
            <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Name</p>
                <p style="padding: 1px 0.5rem; margin: 0; width: 60%; text-transform: capitalize;">${name}</p>
            </div>
            <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Mobile</p>
                <p style="padding: 1px 0.5rem; margin: 0; width: 60%;">${mobile}</p>
            </div>
            <div style="display: flex; border-bottom: 1px solid black; padding: 0;">
                <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Email</p>
                <p style="padding: 1px 0.5rem; margin: 0; width: 60%;">${email}</p>
            </div>
            <div style="display: flex; padding: 0;">
                <p style="padding: 1px 0.5rem; margin: 0; border-right: 1px solid black; width: 40%;">Message</p>
                <p style="padding: 1px 0.5rem; margin: 0; width: 60%;">${message}</p>
            </div>
        </div>

        <p style="margin: 1.2rem 0 0.15rem 0;">Regards,</p>
        <p style="margin: 0;">Team Investay</p>
      </div>`,
      email: adminEmail,
    });

    return res.status(200).json({ success: true });
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = contact;

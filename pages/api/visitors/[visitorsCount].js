import UserVisits from "../../../models/UserVisits";

const handler = async (req, res) => {
  if (req.method === "GET") {
    let success = false;
    try {
      let count;
      const userVisits = await UserVisits.find();

      if (req.query.visitorsCount == "new-user") {
        if (userVisits?.length === 0) {
          UserVisits.create({
            counter: 1,
          });
          count = 1;
        } else {
          userVisits[0].counter = +userVisits[0].counter + 1;
          const id = userVisits[0]?._id;

          await UserVisits.findByIdAndUpdate(
            id,
            { ...userVisits[0] },
            { new: true }
          );

          count = userVisits[0].counter;
        }
      } else {
        count = userVisits[0].counter;
      }
      success = true;
      return res.status(200).json({ success, count });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

export default handler;

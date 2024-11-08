import fs from "fs";

const readSocials = () => {
  const socialsFile = fs.readFileSync("./data/socials.json");
  const socialsData = JSON.parse(socialsFile);
  return socialsData;
};

// GET /socials
const getSocials = async (req, res) => {
  const socialsData = readSocials();

  const rawData = socialsData.map((social) => {
    return {
      id: social.id,
      name: social.name,
      url: social.url,
      image: social.image,
    };
  });
  res.json(rawData);
};

export { getSocials };

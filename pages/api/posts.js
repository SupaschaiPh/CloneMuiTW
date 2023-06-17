export default (req, res) => {
  res
    .status(200)
    .json([
      {
        avatar:
          'https://media.discordapp.net/attachments/1118014561778405488/1118015620009693266/5bf2a026-fe65-4653-bd15-27cf7f5cd2d6.png',
        displayName:"catOnTheCone",
        userName:"catOnTheConee",
        postTime:"Sun Jun 18 2023 03:13:27 GMT+0700 (เวลาอินโดจีน)",
        content:"Hello World!?"
      },
    ]);
};

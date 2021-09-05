require("dotenv").config();
const withImages = require("next-images");
const withVideos = require("next-videos");

module.exports = withImages(
  withVideos({
    images: {
      disableStaticImages: true,
    },
    publicRuntimeConfig: {
      processEnv: process.env,
    },
  })
);

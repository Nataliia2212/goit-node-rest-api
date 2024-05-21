import Jimp from "jimp";

const resizeIMG = async (imgPath, newPath) => {
  Jimp.read(imgPath)
    .then((img) => {
      return img.resize(250, 250).quality(60).write(newPath);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default resizeIMG;

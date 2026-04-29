import imageminGifsicle from "imagemin-gifsicle";
import imagemin from "imagemin-keep-folder";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";

const srcDir = "./public/img/";
const outDir = "./public/img/";

await imagemin([srcDir + "**/*.{jpg,jpeg,png,gif,svg}"], {
  plugins: [
    imageminMozjpeg(),
    imageminPngquant(),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: (output) => output.replace(srcDir, outDir),
});

console.log("Images optimized!");

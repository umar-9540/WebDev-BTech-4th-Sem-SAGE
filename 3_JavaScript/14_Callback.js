// function maggieLana(cb) {
//   console.log("Maggie lene gaye...");
//   setTimeout(() => {
//     console.log("Maggie aa gayi...");
//     cb(maggieKhana);  // cb -> maggieKhana bheja as a callback
//   }, 2000);  // representing it takes 2 sec to get maggie from shop
// }

// function maggieBanana(cb) {
//   console.log("Maggie banana start...");
//   setTimeout(() => {
//     console.log("Maggie ban gayi...");
//     cb();
//   }, 2000); // representing it takes 2 sec to prepare maggie
// }

// function maggieKhana() {
//   console.log("Maggie khana start...");
//   setTimeout(() => {
//     console.log("Maggie khana khatam...");
//   }, 2000); // representing it takes 2 sec to eat maggie
// }

// maggieLana(maggieBanana); // cb -> magieBanana bheja as a callback
// // maggieBanana();
// // maggieKhana();

function download(url, cb) {
  console.log("Download starts at url: ", url);
  setTimeout(() => {
    let profileImage = url.split("/")[4];
    console.log("Download end: ", profileImage);

    cb(profileImage, upload);
  }, 2000); // Maan lena download mai 2 sec lag gaye
}

function compress(profileImage, cb) {
  console.log("Starts compressing: ", profileImage);
  setTimeout(() => {
    let compressedImage = profileImage.split(".")[0] + ".webp";
    console.log("End compression:", compressedImage);

    cb(compressedImage);
  }, 2000); // maan lena compression mai 2 sec lag gaye
}

function upload(compressedImage) {
  console.log("Starts ulpoading: ", compressedImage);
  setTimeout(() => {
    let newUrl = "https://nayawebsite.com/" + compressedImage;
    console.log("Done ulpoading, new URL: ", newUrl);
  }, 2000); // maan lena uploading mai 2 sec lag gaye
}

let url = "https://ankitkiwebsite.com/image/profile.jpg";
download(url, compress);
// download(url);
// compress("profile.jpg");
// upload("profile.webp");

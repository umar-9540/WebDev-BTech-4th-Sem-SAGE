// function maggieLana() {
//   return new Promise((resolve, reject) => {
//     console.log("Maggie lene gaye...");
//     setTimeout(() => {
//       console.log("Maggie aa gayi...");
//       resolve();  // trigger he next .then()
//       // cb(maggieKhana); // cb -> maggieKhana bheja as a callback
//     }, 2000); // representing it takes 2 sec to get maggie from shop
//   });
// }

// function maggieBanana() {
//   return new Promise((resolve, reject) => {
//     console.log("Maggie banana start...");
//     setTimeout(() => {
//       console.log("Maggie ban gayi...");
//       resolve(); // trigger he next .then()
//     }, 2000); // representing it takes 2 sec to prepare maggie
//   });
// }

// function maggieKhana() {
//   return new Promise((resolve, reject) => {
//     console.log("Maggie khana start...");
//     setTimeout(() => {
//       console.log("Maggie khana khatam...");
//       resolve(); // trigger he next .then()
//     }, 2000); // representing it takes 2 sec to eat maggie
//   });
// }

// maggieLana()
//   .then(() => maggieBanana())
//   .then(() => maggieKhana())
//   .then(() => {
//     console.log("Ab bartan dho lo");
//   });

// // maggieLana(maggieBanana); // cb -> magieBanana bheja as a callback
// // // maggieBanana();
// // // maggieKhana();

function download(url) {
  return new Promise((res) => {
    console.log("Download starts at url: ", url);
    setTimeout(() => {
      let profileImage = url.split("/")[4];
      console.log("Download end: ", profileImage);

      res(profileImage);
    }, 2000); // Maan lena download mai 2 sec lag gaye
  });
}

function compress(profileImage) {
  return new Promise((res) => {
    console.log("Starts compressing: ", profileImage);
    setTimeout(() => {
      let compressedImage = profileImage.split(".")[0] + ".webp";
      console.log("End compression:", compressedImage);

      res(compressedImage);
    }, 2000); // maan lena compression mai 2 sec lag gaye
  });
}

function upload(compressedImage) {
  return new Promise((res) => {
    console.log("Starts uploading: ", compressedImage);
    setTimeout(() => {
      let newUrl = "https://nayawebsite.com/" + compressedImage;
      console.log("Done uploading, new URL: ", newUrl);
      res();
    }, 2000); // maan lena uploading mai 2 sec lag gaye
  });
}

let url = "https://ankitkiwebsite.com/image/profile.jpg";

download(url)
  .then((profileImage) => compress(profileImage))
  .then((compressedImage) => upload(compressedImage));
// download(url, compress);
// // download(url);
// // compress("profile.jpg");
// // upload("profile.webp");

// download(url, function (profileImage) {
//   compress(profileImage, function (compressedImage) {
//     upload(compressedImage);
//   });
// });

// function orderPlace(cb) {
//   setTimeout(() => {
//     console.log("Order Placed");
//     cb();
//   }, 1000);
// }

// function foodPrepare(cb) {
//   setTimeout(() => {
//     console.log("Food Prepared");
//     cb();
//   }, 1000);
// }

// function foodDeliver(cb) {
//   setTimeout(() => {
//     console.log("Food Deliver");
//     cb();
//   }, 1000);
// }

// CALLBACK HELL
// orderPlace(() => {
//   foodPrepare(() => {
//     foodDeliver(() => {
//       eat(() => {
//         washing(() => {
//           feedback(() => {
//             soGaye(() => {});
//           });
//         });
//       });
//     });
//   });
// });

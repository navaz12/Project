var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let products = [
    {
      name: "iphone",
      category: "phone",
      description: "this is demo",
      Image:
        "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-s/galaxy-s20-fe-5g-images/cloud-navy/PDP-GALLERY-S20-FE-cloud-Navy-Lockup-01-1600x1200.jpg",
    },
    {
      name: "max",
      category: "food",
      description: "this is demo",
      Image:
        "https://zdnet3.cbsistatic.com/hub/i/r/2020/10/12/ff9c5eaf-ac57-4f16-a790-88984ec29123/resize/1200xauto/9e19766233c6145e0f58e227c7c00dea/asus-rog-phone-3.jpg",
    },
    {
      name: "iphone",
      category: "phone",
      description: "this is demo",
      Image:
        "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-s/galaxy-s20-fe-5g-images/cloud-navy/PDP-GALLERY-S20-FE-cloud-Navy-Lockup-01-1600x1200.jpg",
    },
    {
      name: "iphone",
      category: "phone",
      description: "this is demo",
      Image:
        "https://zdnet3.cbsistatic.com/hub/i/r/2020/10/12/ff9c5eaf-ac57-4f16-a790-88984ec29123/resize/1200xauto/9e19766233c6145e0f58e227c7c00dea/asus-rog-phone-3.jpg",
    },
  ];
  res.render("index", { products, admin:false});
});

module.exports = router;

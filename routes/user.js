const { Router } = require("express");
const router = Router();
const {
  userGet,
  userDelete,
  userPatch,
  userPut,
  userPost,
} = require("../controllers/user");

router.get("/", userGet);

router.put("/", userPut);

router.post("/", userPost);

router.delete("/", userDelete);

router.patch("/", userPatch);

module.exports = router;

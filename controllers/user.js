const { response } = require("express");

const userGet = (req, res) => {
  res.json({
    msg: "get API - controller",
  });
};

const userPut = (req, res) => {
  res.json({
    msg: "put API - controller",
  });
};

const userPost = (req, res) => {
  res.json({
    msg: "post API - controller",
  });
};

const userDelete = (req, res) => {
  res.json({
    msg: "delete API - controller",
  });
};

const userPatch = (req, res) => {
  res.json({
    msg: "patch API - controller",
  });
};

module.exports = {
  userGet,
  userPut,
  userDelete,
  userPost,
  userPatch,
};

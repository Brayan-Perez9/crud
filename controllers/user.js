const { response } = require("express");

const userGet = (req, res) => {
    const { query, nombre = 'no name', apikey, limit } = req.query;
  res.json({
    msg: "get API - controller",
    query,
    nombre,
    apikey,
    limit
  });
};

const userPut = (req, res) => {
    const id = req.params.id;
    res.json({
    msg: "put API - controller",
    id
  });
};


const userPost = (req, res) => {
    const body = req.body;
  res.json({
    msg: "post API - controller",
    body
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

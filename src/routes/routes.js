import express from 'express';
import itemSchema from '../../models/itemSchema';
import userSchema from '../../models/userSchema';

let router = express.Router();


router.route('/item')
  .post(function(req, res, next){

    let item = new ItemSchema();
    item.name = req.body.name;
    item.description = req.body.description;
    item.owner = req.body.owner;

    item.save(function(err, item, next) {
      if(err) {
        return next(err);
      }
      else {
        res.json(item);
      }
    });
  })


router.route('/user')
  .post(function(req, res, next) {

    let user = new UserSchema();
    user.name = req.body.name;
    user.bio = req.body.bio;
    user.neighborhood = req.body.neighborhood;

    user.save(function(err, user, next) {
      if(err) {
        return next(err);
      }
      else {
        res.json(user);
      }
    });
  });

  module.exports = router;

/**
 * ScoreController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

    checkedCreate: function(req, res) {
        console.log('checkedCreate');
        Score.findOne({
                where: {
                    playerId: req.param('playerId'),
                    level: req.param('level')
                }
            }
        ).exec(function (err, score) {
            console.log('checkedCreate - find finished');
            if (err) return res.send(err,500);
            if (!score) {
                console.log('no score with playerId: ' + req.param('playerId') + ' level: ' + req.param('level'));
                Score.create({
                    "playerId": req.param('playerId'),
                    "playerName": req.param('playerName'),
                    "scoreType": req.param('scoreType'),
                    "score": req.param('score'),
                    "time": req.param('time'),
                    "level": req.param('level')
                }).done(function(err, user) {
                    console.log('checkedCreate - score creation done');
                    if (err) return res.send(err,500);
                    res.json(score);
                });
            }
            console.log('checkedCreate - there is score: ' + JSON.stringify(score));
            console.log(score.score + ' ' + req.param('score'));
            if (score.score < req.param('score')) {
                console.log('checkedCreate - updating score value');
                score.score = req.param('score');
                score.time = req.param('time');
                // Persist the change
                score.save(function (err) {
                    if (err) return res.send(err,500);

                    // Report back with the new state of the score
                    res.json(score);
                });
            } else {
                console.log('checkedCreate - not updating score');
                res.json(score);
            }



        });

    },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ScoreController)
   */
  _config: {}

  
};

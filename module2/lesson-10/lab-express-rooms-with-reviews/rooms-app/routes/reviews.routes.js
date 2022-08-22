const router = require("express").Router();

const Review = require('../models/Review.model');
const Room = require("../models/Room.model");

router.post('/create/:roomId', async (req, res) => {
    const { comment } = req.body;
    const { roomId } = req.params;

    const room = await Room.findOne({_id: roomId}); // find room in DB

    Review.create({ user: req.session.currentUser._id, comment})
    .then(async (newReview) => {
        await room.reviews.push(newReview._id) // add review id to room 'reviews' property
        await room.save(); // save room with new review id to the DB
    })
    .then(() => res.redirect(`/rooms/${roomId}`))
    .catch(err => console.error(err))
})

router.post("/delete/:reviewId", (req, res) => {
    const { reviewId } = req.params;
    Review.findByIdAndDelete(reviewId)
        .then(() => res.redirect('/rooms/list'))
        .catch(err => console.error(err))

})

module.exports = router;
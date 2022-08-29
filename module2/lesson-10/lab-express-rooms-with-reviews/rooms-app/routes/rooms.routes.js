const express = require("express");
const router = express.Router();

const { isLoggedIn, isOwner } = require('../middleware/route-guard')
const fileUploader = require("../config/cloudinary.config");

const Room = require('../models/Room.model');

router.get("/list", (req, res) => {
    Room.find()
        .populate("owner")
        .then(rooms => {
            const loggedInNavigation = req.session.hasOwnProperty('currentUser'); // check if user is loggedIn by looking if this property exist on req.session
            res.render('rooms/room-list', { rooms, loggedInNavigation })
        })
        .catch(err => console.error(err))
    
})

router.get("/create", isLoggedIn, (req, res) => {
    const loggedInNavigation = req.session.hasOwnProperty('currentUser');
    res.render('rooms/add-room', { loggedInNavigation })
})

router.post("/create", isLoggedIn, fileUploader.single("imageUrl"), (req, res) => {
    const { name, description } = req.body;
    const { path } = req.file;
    const { _id } = req.session.currentUser;
    Room.create({ name, description, imageUrl: path, owner:_id})
        .then(newRoom =>{
            res.redirect('/rooms/list')
        })
        .catch(err => console.error(err))

})

router.get("/:roomId", (req, res) => {
    const  loggedInUserId = req.session?.currentUser?._id; // load property '_id' only if property 'currentUser' exists
    const { roomId } = req.params;
    Room.findOne({_id: roomId})
    .populate("owner reviews") // populate property 'owner' and 'reviews'
    .populate({ 
        path: 'reviews',
        populate: {
            path: "user", // populate property 'user' within property 'reviews'
            model: "User",
        } 
    })
    .then(room => {
        const loggedInNavigation = req.session.hasOwnProperty('currentUser'); 
        const isOwner = loggedInUserId  === room.owner._id.toString()
        const isNotOwner = loggedInUserId  !== room.owner._id.toString() && req.session.hasOwnProperty('currentUser');
        const changeableReviews = room.reviews.map(({_id, user, comment}) => {
            if(user._id.toString() === loggedInUserId ){
                return {_id, user, comment, isChangeable: true}
            }
            else {
                return {_id, user, comment}
            }
        })
        res.render('rooms/room-details', { room, changeableReviews, isOwner, isNotOwner, loggedInNavigation })
    })
    .catch(err => console.error(err))
    
})

router.get("/edit/:roomId", isLoggedIn, (req, res) => {
    const loggedInNavigation = req.session.hasOwnProperty('currentUser'); 
    res.render('rooms/edit-room', {loggedInNavigation})
})

router.post("/edit/:roomId", isOwner, fileUploader.single("imageUrl"), (req, res) => {
    const { roomId } = req.params;
    const { name, description }  = req.body;
    const { path } = req.file;

    if(path === ''){
        Room.findById(roomId)
            .then(room => {
                return Room.updateOne({name: roomUpdateInfo.name, description: roomUpdateInfo.description})
            })
            .then(() => res.redirect('/rooms/list'))
    }
    else{
        Room.findByIdAndUpdate(roomId, { name, description, imageUrl: path } , {new: true})
            .then(() => {
                res.redirect('/rooms/list');
            })
            .catch(err => console.error(err))
    }
    

})

router.post("/delete/:roomId", isOwner, (req, res) => {
    const { roomId } = req.params;
    Room.findByIdAndDelete(roomId)
        .then(() => res.redirect('/rooms/list'))
        .catch(err => console.error(err))

})

module.exports = router;
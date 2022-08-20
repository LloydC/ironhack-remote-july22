const express = require("express");
const router = express.Router();

const { isLoggedIn, isOwner } = require('../middleware/route-guard')

const Room = require('../models/Room.model');

router.get("/list", (req, res) => {
    Room.find()
        .populate("owner")
        .then(rooms => {
            const loggedInNavigation = req.session.hasOwnProperty('currentUser');
            res.render('rooms/room-list', { rooms, loggedInNavigation })
        })
        .catch(err => console.error(err))
    
})

router.get("/create", isLoggedIn, (req, res) => {
    const loggedInNavigation = true;
    res.render('rooms/add-room', {loggedInNavigation})
})

router.post("/create", isLoggedIn, (req, res) => {
    const { name, description, imageUrl } = req.body;
    const { _id } = req.session.currentUser;
    console.log('user id', _id)
    Room.create({ name, description, imageUrl, owner:_id})
        .then(newRoom =>{
            res.redirect('/rooms/list')
        })
        .catch(err => console.error(err))

})

router.get("/:roomId", (req, res) => {
    const  _id = req.session?.currentUser?._id; // load property '_id' only if property 'currentUser' exists
    const { roomId } = req.params;
    Room.findOne({id: roomId})
    .populate("owner reviews") // populate property 'owner' and 'reviews'
    .populate({ 
        path: 'reviews',
        populate: {
            path: "user", // populate property 'user' within property 'reviews'
            model: "User",
        } 
    })
    .then(room => {
        const loggedInNavigation = req.session.hasOwnProperty('currentUser'); // check if user is loggedIn by looking if this property exist on req.session
        const isNotOwner = _id !== room.owner._id.toString() && req.session.hasOwnProperty('currentUser');
        res.render('rooms/room-details', { room, isNotOwner, loggedInNavigation })
    })
    .catch(err => console.error(err))
    
})

router.get("/edit/:roomId", isLoggedIn, (req, res) => {
    const loggedInNavigation = true;
    res.render('rooms/edit-room', {loggedInNavigation})
})

router.post("/edit/:roomId", isOwner, (req, res) => {
    const { roomId } = req.params;
    const roomUpdateInfo = req.body;

    if(roomUpdateInfo.imageUrl === ''){
        Room.findById(roomId)
            .then(room => {
                return Room.updateOne({name: roomUpdateInfo.name, description: roomUpdateInfo.description})
            })
            .then(() => res.redirect('/rooms/list'))
    }
    else{
        console.log(roomUpdateInfo)
        Room.findByIdAndUpdate(roomId, roomUpdateInfo, {new: true})
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
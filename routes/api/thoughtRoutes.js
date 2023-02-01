const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');


// /api/thoughts GET all and POST thought
router.route('/').get(getAllThought).post(createThought);




// /api/thoughts/:thoughtId GET single thought, PUT and DELETE by ID
router.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);




//  /api/thoughts/:thoughtId/reactions POST new reactions
router.route('/:thoughtId/reactions')
.post(createReaction);




// /api/thoughts/:thoughtId/reactions/:reactionId DELETE reaction by ID

router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);


module.exports = router;
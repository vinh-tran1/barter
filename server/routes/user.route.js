import express from 'express';
const router = express.Router();

import { 
    getUsers, 
    getUserById, 
    createUser, 
    udpateUser, 
    deleteUser 
} from "../controllers/user.controller.js";

// @desc    get all users
// @route   GET /user
// @access  private
router.get('/', getUsers);

// @desc    get specific user
// @route   GET /user/:id
// @access  private
router.get('/:id', getUserById);

// @desc    create a user
// @route   POST /user
// @access  private
router.post('/', createUser);

// @desc    update specific user information
// @route   PUT /user/:id
// @access  private
router.put('/:id', udpateUser);

// @desc    delete specific user
// @route   DELETE /user/:id
// @access  private
router.delete('/:id', deleteUser);

/* pretty way

    router.route('/).get(getUsers).post(createUser);
    router.route('/:id).get(getUserById).put(updateUser).delete(deleteUser);
    
*/

export default router;

const express = require('express')
const { authenticated, authenticatedAdmin } = require('../middleware/auth')
const router = express.Router()
const passport = require('../config/passport')
const restController = require('../controllers/restaurant-controller')
const userController = require('../controllers/user-controller')
const commentController = require('../controllers/comment-controller')
const admin = require('./modules/admin')
const { generalErrorHandler } = require('../middleware/error-handler')
const upload = require('../middleware/multer')

router.use('/admin', authenticatedAdmin, admin)

router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)

router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn)

router.get('/logout', userController.logout)

router.get('/restaurants/feeds', authenticated, restController.getFeeds)
router.get('/restaurants/:id/dashboard', authenticated, restController.getDashboard)
router.get('/restaurants/:id', authenticated, restController.getRestaurant)
router.get('/restaurants', authenticated, restController.getRestaurants)

router.get('/users/:id/edit', authenticated, userController.editUser)
router.get('/users/:id', authenticated, userController.getUser)
router.put('/users/:id', authenticated, upload.single('image'), userController.putUser)

router.post('/comments', authenticated, commentController.postComment)
router.delete('/comments/:id', authenticatedAdmin, commentController.deleteComment)

router.post('/favorite/:restaurantId', authenticated, userController.addFavorite)
router.delete('/favorite/:restaurantId', authenticated, userController.deleteFavorite)

router.use('/', (req, res) => res.redirect('/restaurants'))
router.use('/', generalErrorHandler)

module.exports = router

const { Router } = require("express");
const {
  home,
  addblog,
  updateblog,
  deleteblog,
  add_blog,
  edit_blog,
  signup,
  signupPage,
  login,
  loginPage,
  logout,
  local,
  profile,
} = require("../controllers/blog.controller");
const multer = require("multer");
const router = Router();

const {userAuth, isAuth} = require('../middleware/blog.auth');
const passport = require("passport");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/img");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadImg = multer({ storage: storage }).single("image");

router.get("/",isAuth, home);
router.get("/add_blog", add_blog);
router.get("/update_Blog/:id", edit_blog);
router.get("/delete_blog/:id", deleteblog);

router.post("/addblog", uploadImg, addblog);
router.post("/update_Blog", uploadImg, updateblog);


router.post('/signup',userAuth,signup);
router.get('/signup',signupPage);


router.post('/login',login)
router.get('/login',loginPage);

router.get('/logout',logout);

router.post('/local',passport.authenticate('local',{
  successRedirect:'/',
  failureRedirect:'/login'
}));

router.get('/profile',profile);

module.exports = { router };

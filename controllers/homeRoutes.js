const router = require('express').Router();
const { Department } = require('../models');

router.get('/', async (req, res) => {
    try {
        console.log('homeRoute')
        const departmentData = await Department.findAll();

        const departments = departmentData.map((department) => department.get({ plain: true }));

        res.render('homepage', {
            departments,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/login', (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/');
//         return
//     }

//     res.render('login')
// });

module.exports = router;
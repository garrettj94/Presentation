const router = require('express').Router();
const { Department } = require('../models');

router.get('/homepage', async (req, res) => {
    try {
        console.log('homeRoute')
        const departmentData = await Department.findAll();

        const departments = departmentData.map((department) => department.get({ plain: true }));

        res.render('homepage', {
            departments,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', (req, res) => {
    // if (req.session.logged_in) {
    //     res.redirect('/');
    //     return
    // }

    res.render('login')
});

router.get('/createdepartment', (req, res) => {
    res.render('new')
})

router.get('/secondhomepage', (req, res) => {
    res.render('homepageTwo')
})

router.get('/department', (req, res) => {
    res.render('createddpt')
})

router.get('/addemployee', (req, res) => {
    res.render('employee')
})

router.get('/seconddepartment', (req, res) => {
    res.render('createddptTwo')
})

module.exports = router;
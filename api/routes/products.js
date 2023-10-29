const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /products'
    })
});


router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if (id === 'specific') {
        res.status(200).json({
            message: 'This is a specific id',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID',
            id: req.params.productID
        });
    }
    });


    router.patch('/:productID', (req, res, next) => {
        res.status(200).json({
            message: 'Updated/modified product'
        })
    });


    router.delete('/:productID', (req, res, next) => {
        res.status(200).json({
            message: 'Deleted product!'
        })
    });




module.exports = router;

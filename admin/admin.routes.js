const express = require('express');
const { adminDashboard, addItem,getOrders,addVariant,updateItem,editCategories,updateStatus,handleDispute} = require('./admin.controller');
const {authenticate,verifyRoles} = require('../middleware/authenticate');
const router = express.Router();

router.get('/dashboard',authenticate, verifyRoles('Admin'), adminDashboard);
router.post('/add-item',authenticate, addItem)
router.post('/add-variant',authenticate, addVariant)
router.get('/orders',authenticate,verifyRoles('Admin'),getOrders)
router.put('/updateItem',authenticate, updateItem)
router.post('/updatestatus', authenticate,updateStatus)
router.post('/handledispute', authenticate,verifyRoles('Admin'),handleDispute)
router.post('/editcategories', authenticate,editCategories)

module.exports = router;
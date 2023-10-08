const Contact = require('../model/contact');
const express = require('express');
const router = express.Router();

async function contactus(req, res){
    try {
        const contact = await Contact.create(req.body);
        res.json({ success: true, contact });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

module.exports = {
    contactus
}
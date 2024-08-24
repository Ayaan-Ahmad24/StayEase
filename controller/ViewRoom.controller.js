const Room = require('../models/ViewRoom.model');
const fs = require('fs');
const path = require('path');

const ViewRoom = async (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, '../MOCK_DATA.json'), 'utf8');
        const rooms = JSON.parse(data); 
        const fetchedRooms = await Room.find();
        res.status(200).json(fetchedRooms);
        console.log('Data successfully fetched');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = ViewRoom; 

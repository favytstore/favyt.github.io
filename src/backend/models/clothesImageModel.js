const mongoose = require('mongoose')
const clothesImageSchema = new mongoose.Schema({
    PhotoID : {
        type: String,
        required: [true, "Please enter Photo ID"],
        trim: true
    },
    Photo : {
        type: String,
        default: "https://res.cloudinary.com/mycartdb/image/upload/v1621406053/buyer_nc5qk6.jpg",
    }
})
module.exports = mongoose.model('ClothesImage', clothesImageSchema);


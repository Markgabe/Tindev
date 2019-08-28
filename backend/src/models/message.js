const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
    message: String,
    from: [{
        type: Schema.Types.ObjectId,
        ref: 'user',
    }, ],
    to: [{
        type: Schema.Types.ObjectId,
        ref: 'user',
    }, ],
}, {
    timestamps: true,
}, );

module.exports = model('Message', MessageSchema);
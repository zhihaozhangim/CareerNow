const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/chat-app';
mongoose.connect(DB_URL, { useNewUrlParser: true });

const models = {
    // Model for user
    user: {
        'user': {'type': String, require: true},
        'pwd': {'type': String, require: true},
        'type': {'type': String, require: true},
        'avatar': {'type': String},
        'desc': {'type': String},
        'title': {'type': String},
        // boss
        'company': {'type': String},
        'money': {'type': String}
    },

    chat: {
        'chatid': {'type': String, require: true},
        'from': {'type': String, require: true},
        'to': {'type': String, require: true},
        'read': {'type': Boolean, default: false},
        'content': {'type': String, require: true, default: ''},
        'create_time': {'type': Number, default: new Date().getTime()}
    }
};

// register all the model
for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]));
}

// export the function to get a model by its name.
module.exports = {
    getModel:function(name){
        return mongoose.model(name);
    }
};
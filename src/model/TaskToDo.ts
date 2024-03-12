import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Defining the TaskToDo schema.
const taskToDo = new Schema(
    {
        taskNo: {type : String, default : "" },
        taskTitle : {type : String, default : ""},
        taskDescription : {type : String, default : ""},
        taskStatus : {type : String, default : ""},
        taskProgress : {type : String, default : ""},
        teamRef : {type: Number , default: 1},
        organisationRef : {type: Number , default: 1},
        taskUpdatedBy : {type: mongoose.Schema.Types.ObjectId , ref: 'users' , default: null},
        taskUpdatedAt : {type : String, default : ""},
        taskCreatedBy : {type: mongoose.Schema.Types.ObjectId , ref: 'users' , default: null},
        taskCreatedAt : {type : String, default : ""}
    }
);

module.exports = mongoose.model('taskToDo', taskToDo);
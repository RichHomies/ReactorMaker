var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
  client : {
    name: String,
    email: String,
    phoneNumber: String,
    creationDate : { type: Date, default: Date.now }
  }
});

var curriculumSchema = new Schema({
  curriculum: {
    type: String,
    number: Number,
    link_id: String,
    creationDate: { type: Date, default: Date.now },
    order: Number,
    day: Number
  }
})

var lectureSchema = new Schema({
  lecture: {
    lecture_id: String,
    number: Number,
    link: String
  }
})

var testSchema = new Schema({
  test: {
    test_id: String,
    number: Number,
    question_ids: [String]
  }
})

var questionSchema = new Schema({
  question: {
    question_id: String,
    lecture_id: String,
    test_id: String,
    order: Number,
    prompt: String
  }
})

module.exports = {
  clientModel : mongoose.model('Clients', clientSchema),
  curriculumModel: mongoose.model('Curriculum', curriculumSchema),
  lectureModel: mongoose.model('Lecture', lectureSchema),
  testModel: mongoose.model('Test', testSchema),
  questionModel: mongoose.model('Question', questionSchema)
};


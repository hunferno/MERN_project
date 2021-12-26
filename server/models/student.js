import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  registrationNumber: Number,
  name: String,
  grade: String,
  //VALEUR PAR DEFAUT
  section: {
    type: String,
    default: "A",
  },
  subjects: [String],
});

const student = mongoose.model("student", studentSchema);

export default student;

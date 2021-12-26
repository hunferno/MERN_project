//

import student from "../models/student.js";

//LA LOGIQUE DES ROUTES EST DANS LE CONTROLLEUR

//Obtenir tous les élèves
export const getStudents = async (req, res) => {
  try {
    const allStudents = await student.find();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Créer un élève
export const createStudent = async (req, res) => {
  const studentData = req.body;
  const newStudent = new student(studentData);
  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//

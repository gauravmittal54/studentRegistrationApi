const express = require('express');
const Student = require('../models/students')
const router = new express.Router();

//create students data in db
router.post('/students',async(req,res)=>{
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (error) {
        console.log(error);
        res.status(400).send("An internal server error occurred.");
    }
})

//get student6s data
router.get('/students',async(req,res)=>{
    try {
        const studentData = await Student.find();
        res.status(200).send(studentData);
    } catch (error) {
        console.log(error);
        res.status(400).send("An internal server error occurred.");
    }
})

//get students data by id 
router.get('/student/id/:id',async(req,res)=>{
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);

        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("An internal server error occurred.");
    }
})

//get students data by name
router.get('/student/name/:name',async(req,res)=>{
    try {
        const name = req.params.name;
        const studentData = await Student.find({name : name});

        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("An internal server error occurred.");
    }
})

//update students by id
router.patch('/students/id/:id',async(req,res)=>{
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id,req.body,{ new: true,runValidators: true});
        res.send(updateStudents);
    } catch (error) {
        console.log(error);
        res.status(404).send("An internal server error occurred.");
    }
})

//delete student by id
router.delete('/student/id/:id',async(req,res)=>{
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!deleteStudent){
        return res.status(400).send();
        }
        res.send(deleteStudent);
    } catch (error) {
        console.log(error);
        res.status(500).send("An internal server error occurred.");
    }
})

module.exports = router
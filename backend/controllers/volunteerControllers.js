import educationalStat from "../Models/educationalStat.js";
import student from "../Models/student.js";

export const addData = async (req, res) => {
    try {
        const { studentId, grade, percentage } = req.body;
        if (!studentId || !grade || !percentage) {
            return res.status(500).json({
                success: false,
                message: "Insufficnet Data",
            });
        }

        const studentDetails = await student.findOne({ studentId });
        if (!studentDetails) {
          return res.status(500).json({
            success: false,
            message: "Student not found",
          });
        }

        const educationDetails = await educationalStat.create({
          studentId: studentDetails._id,
          grade,
          percentage,
        });
        console.log(educationDetails);

        studentDetails.educationalStat.push(educationDetails._id);
        await studentDetails.save();

        return res.status(200).json({
            success: true,
            message: "Data added successfully",
        });
    } catch (error) {
        console.log("Galti hogyi ", error.message);
        return res.status(500).json({
            success: false,
            message: "data addition failed",
        });
    }
};

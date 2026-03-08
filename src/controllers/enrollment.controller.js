import { supabase } from "../configs/supabase.config.js";

export const enrollStudent = async(req,res) => {

    const {student_name, course_id} = req.body;

    const {data,error} = await supabase.from("enrollments")
                                       .insert({student_name,course_id})
                                       .select();

    if(error)
    {
        return res.status(500).json({error: error.message});

    }

    return res.status(201).json({message: "Student enrolled successfully",data});


}
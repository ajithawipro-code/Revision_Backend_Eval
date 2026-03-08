import { supabase } from "../configs/supabase.config.js";
export const addCourse = async(req,res) =>{

    const {title, instructor} = req.body;

    console.log("coming here inside");

    const {data,error} = await supabase.from("courses12")
                                       .insert({title,instructor})
                                       .select();

    if(error)
    {
        return res.status(500).json({error: error.message});
    }

    return res.status(201).json({message: "course added successfully", data});

}

export const getAllCourses = async(req,res) =>{

    const {data, error} = await supabase.from("courses12")
                                        .select();

    if(error)
    {
        return res.status(500).json({error: error.message});
    }
    return res.status(200).json({message: "All courses fetched", data});
    
                                        
}

export const getEnrollments = async(req,res) =>{

    const{id} = req.params;

    const {data,error} = await supabase.from("enrollments")
                                       .select()
                                       .eq("course_id", id);

    if(error)
    {
        return res.status(500).json({error: error.message});
    }

    return res.status(200).json({message: "All enrollments fetched", data})

}

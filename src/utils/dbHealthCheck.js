import { supabase } from "../configs/supabase.config.js";


export const dbConnectioncheck = async() =>{

    try{

        const {error}= await supabase.from("courses12").select().limit(1);

        if(error)
        {
            throw error
        }
        console.log("DB Success");
    }
    catch(error)
    {
        console.log("DB Failed", error.message);
        process.exit(1);
    }


}


const Faculty = require("../models/Faculty")


const insertfaculty = async (request, response) => {
    try 
     {
         //await must present beside input
       const input =  request.body;  //json input
       //JobSeeker.js is class
       const faculty = new Faculty(input);
       //save the record => object_name.save()
      await faculty.save(); //when error occured bcoz of duplicate
       response.send('Registered Successfully');
     } 
    catch(e) 
     {
       response.status(500).send(e.message);
     }
   };

   const checkfacultylogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const faculty = await Faculty.findOne(input)
       response.json(faculty)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
   const viewfaculty = async (request, response) => 
 {
    try 
    {
      const faculties = await Faculty.find();
      if(faculties.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(faculties);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const deletefaculty = async (request, response) => 
  {
     try 
     {
       //without paramaters => request.params /?id (? is used inorder to consider it as variable instead of part)
       const email = request.params.email
       const faculty = await Faculty.findOne({"email":email}) //{schema:variable}
       if(faculty!=null)
       {
         await faculty.deleteOne({"email":email})
         response.send("Deleted Successfully")
       }
       else
       {
         response.send("Email ID Not Found")
       }
 
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

module.exports ={insertfaculty,checkfacultylogin,viewfaculty,deletefaculty}
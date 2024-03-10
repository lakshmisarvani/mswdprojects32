const Course= require("../models/Courses")


const insertcourse = async (request, response) => {
    try 
     {
         //await must present beside input
       const input =  request.body;  //json input
       //JobSeeker.js is class
       const course = new Course(input);
       //save the record => object_name.save()
      await course.save(); //when error occured bcoz of duplicate
       response.send('Registered Successfully');
     } 
    catch(e) 
     {
       response.status(500).send(e.message);
     }
   };

   const checkcourses = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const course = await Course.findOne(input)
       response.json(course)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
   const viewcourses = async (request, response) => 
 {
    try 
    {
      const courses = await Course.find();
      if(courses.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(courses);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const deletecourse = async (request, response) => 
  {
     try 
     {
       //without paramaters => request.params /?id (? is used inorder to consider it as variable instead of part)
       const email = request.params.email
       const course = await Course.findOne({"email":email}) //{schema:variable}
       if(course!=null)
       {
         await Course.deleteOne({"email":email})
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

module.exports ={insertcourse,checkcourses,viewcourses,deletecourse}
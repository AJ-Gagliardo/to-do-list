

// first have to try making it work in the console


// i will probably hav eto do either a factory function or a constructor/classes


/* paremeters for the factory function/constructor/class

title, description, dueDate, priority, something like a checklist to see if its done or not, maybe a notes section to add notes and subsections

example:

project: plan trip to rome

general : buy plane ticket, send email to... 

section: reservations
    - Mke reservation on Rome hotel  (done checkbox, remove, )
    - Make reservation for rental car
    - Make reservation for tour
    (+ add task)
section: before leaving
    - Find person or place that can take care of my cat 
    - Formal vacation request at work
    - set automatic reply to my work email
    +add task
Section entertainment
    -x
    -y
    -z

add section
add 

search how to save this dat ina  JSON

*/

// once i finish the factory function or whatever i chose, i guess like one of those forms that pop up to 
// include the required information similar to the library i made, and have  the values somewhere

// there should be a default project so they can view how it is used...
// user should be able to : create new projects, setting as completed, changing priority, etc.


// 

//create project


// function constructorProject(name,description, dueDate){





// function to create a project
function createProject(name,description, dueDate, priority){
 
    return{
       name, 
       description,
       dueDate,
       tasks:[],
       addTask:addTask,
       removeTask:removeTask,
       priority:priority
    }

};

const project1 = createProject('trip to Seoul', 'planning a trip to the beautiful city of rome in Seoul in South Korea', 2025);
console.log(project1);

// function to add tasks

function addTask(toDo){
    this.tasks.push(toDo)

}
project1.addTask('buy ticket');
project1.addTask('book hotel');
console.log(project1);
console.log(project1.tasks);





// function to remove task
function removeTask(indexNumber){
    // this.tasks.indexOf(taskName);
    this.tasks.splice(indexNumber,indexNumber+1);
}

project1.removeTask(0);
console.log(project1.tasks);



//  later on in dom i can do something to change class for the ones that are already done to cross out or for priority change to change color





// class Project{
//     constructorProject();

// };

// function createProject(name,description, dueDate){
//     return new project
// };



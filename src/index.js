

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




// an empty array to create put all the projects. 
// Later on I will use storage on this to save all my projects / objects

const projects = []

//create project
// function constructorProject(name,description, dueDate){

// function to create a project
function createProject(name,description, dueDate, priority){
 
    const project = {
       name, 
       description,
       dueDate,
       tasks:[],
       addTask:addTask,
       removeTask:removeTask,
       priority:priority
    }
    projects.push(project);
    return project;

};

const project1 = createProject('trip to Seoul', 'planning a trip to the beautiful city of rome in Seoul in South Korea', 2025);
console.log(project1);

// function to add tasks

function addTask(toDo){
    this.tasks.push(toDo)

}

// adding  tasks to the sample project
project1.addTask('buy ticket');
project1.addTask('book hotel');
console.log(project1);
console.log(project1.tasks);





// function to remove task
function removeTask(indexNumber){
    // this.tasks.indexOf(taskName);
    this.tasks.splice(indexNumber,indexNumber+1);
}



// ok now i have to test all of this and how to get back the info for later on havng it on the DOM

console.log(projects[0].name) // prints 'Trip to Seoul'
console.log(projects[0].tasks[0]) // prints the first task... can use for each and i to have all tasks individually


// next step i guess would be adding a few projects, and doing a function to actually get all of the projects, a for each or a loop geting projects[i].name

// this is workign ok with console log, I will have to do one with DOM manipulation , will ahve to call function after local storage thing

function showAllProjectsNames(){
    for(i=0;i<projects.length;i++){
        console.log(projects[i].name)
    }
}


// then same doing a foreach for each of the taks within that project probably this case 'i' and 'j' ina  loop
// brainstorm: probably can use something which everytime i click a project, it will grab the tasks of that specific project but how?


//  later on in dom i can do something to change class for the ones that are already done to cross out or for priority change to change color




// barinstorm for whats next

//  for the storage maybe I can store as an array (the projects) and also the array i arleady have ot tasks
// then stringy them with JSON and then a forEach to display them 1 by one
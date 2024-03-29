import './css/styles.css';
import brightnessIcon from './assets/img/brightness.png';
import githubIcon from './assets/img/githubwhite.png';


let projects = []



// DOm selecition, areas


const header = document.getElementById('header');
const menuSvg = document.getElementById('menuSvg');


const leftSide = document.getElementById('leftSide');
const rightSide = document.getElementById('rightSide');

const tasksMenu = document.getElementById('tasksMenu');
const description = document.getElementById('description');
const projectsMenu = document.getElementById('projectsMenu');

const addProjectBtn = document.getElementById('addProjectBtn');
const addProjectBtn2 = document.getElementById('addProjectBtn2');
const projectDialog = document.getElementById('projectDialog');
const submitProjectBtn = document.getElementById('submitProjectBtn');


const taskDialog = document.getElementById('taskDialog');
const addTaskDOM = document.getElementById('addTask');
const removeProjectDOM = document.getElementById('removeProject');
const taskText = document.getElementById('taskText');
const gitHubLogo = document.getElementById('githublogo');


const themeDom = document.getElementById('theme');

themeDom.src = brightnessIcon;
gitHubLogo.src= githubIcon;


console.log(rightSide);

// creating svgs

function createProjectSVG() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "svgImg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("fill", "none");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("stroke-width", "1.5");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("class", "w-6 h-6");

    svg.classList.add('svgImg');

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("d", "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z");

    svg.appendChild(path);

    return svg;
}



function createDeleteSvg(){

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "svgImg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("fill", "none");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("stroke-width", "1.5");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("class", "w-6 h-6");
    svg.classList.add('svgImg');
    svg.classList.add('delSvg')
    // Create the path element
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("d", "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z");
 svg.appendChild(path);

 return svg;

    
}



//create project
// function constructorProject(name,description, dueDate){

// function to create a project
function createProject(name,description, dueDate, priority){
 
    const project = {
       name, 
       id:generateId(),
       description,
       dueDate,
       tasks:[],
       addTask:addTask,
       removeProject:removeProject,
       removeTask:removeTask,
       priority:priority
    }
    projects.push(project);
    //  ******** important, here use local Storage to save the new array of projects to local storage, add same to create and remove
   
   
   
   
   
    saveProjects();
    // have to put the one that clears the Projects DOM and then adds the new one
    // or shouold add in the crate new projects to include the new dom
    clearProjectsDOM();
    loadProjectsDOM();
    
    return project;

};


// DOM EVENT LISTENER FOR CREATE PROJECTS

addProjectBtn.addEventListener('click',()=>{
    projectDialog.showModal();
    })

addProjectBtn2.addEventListener('click',()=>{
projectDialog.showModal();
})

const cancelBtns = document.querySelectorAll('.cancelButton');

cancelBtns.forEach(btn => {
    btn.addEventListener('click',()=>{
        projectDialog.close();
       
        // i will add task dialog close too.
    })
    
});

const projectTitleInput = document.getElementById('projectTitleInput');
const projectPriority = document.getElementById('projectPriority');
const projectDescription = document.getElementById('projectDescriptionInput');

const submitTaskBtn = document.getElementById('submitTaskBtn');



submitProjectBtn.addEventListener('click',()=>{
    createProject(projectTitleInput.value, 
        projectDescription.value   , 
        2014, 
        projectPriority.value )
})

submitTaskBtn.addEventListener('click',()=>{
    addTask(taskText.value);
})


/////



function findProject(projectId){
const project = projects.find(function(project) {
        return project.id === projectId;
    });
    return project;

} 

function findProjectId(projectId){
    for(i=0;i<projects.length;i++){
        if (projects[i].id === projectId){
            return i;
        }
      
    }
}


function findTask(){
    findProject(currentProjectId).tasks[i]
}

function findProjectbyName(projectName){
    const project = projects.find(function(project){
        return project.name === projectName
    });
    return project;
}



function addTask(newTask){ 

//   const projectId = currentProjectId; // should do this later as parameter
findProject(currentProjectId).tasks.push(newTask);
saveProjects();
clearTasksDom();
loadTasksDOM();


}

function createSampleProject(){
   
    createProject('Trip to Seoul', 'Planning a trip to the beautiful city of Seoul in South Korea', 2025);
 

}

function createSampleTasks(){
    currentProjectId = projects[0].id;
    addTask('Buy flight ticket');
    addTask('Book hotel');


}



//remove project
function removeProject(){
    projects.splice(findProjectId(currentProjectId),1);
    saveProjects();
    clearProjectsDOM();
    loadProjectsDOM();
    clearTasksDom();
    description.textContent = '';
}


// function to remove task, 
//this was just for test, I had to use another similar inside another function
function removeTask(projectN,taskN){ // n is project number on the projects array, i would be the task index on the array of tasks inside the individual project
    // this.tasks.indexOf(taskName);
    // this.tasks.splice(indexNumber,indexNumber+1); //previous aprameter was indexNumber
projects[projectN].tasks.splice(taskN,i+1);
// probably hav eto do a funciton that finds the index of the task that i want (maybe by checking the text content on tasks[])
}



// this is workign ok with console log, I will have to do one with DOM manipulation , will ahve to call function after local storage thing

function showAllProjectsNames(){
    for(i=0;i<projects.length;i++){
        console.log(projects[i].name)
    }
}


// then same doing a foreach for each of the taks within that project probably this case 'i' and 'j' ina  loop
// brainstorm: probably can use something which everytime i click a project, it will grab the tasks of that specific project but how?

// i guess i will ahve to put id or class with the index number of the project and then get the projects[i].task

function showAllTasks(n){
// latter on n = id of the project which would be the index ... or making a search function that goes through the array 'projects' based on something.
for(i=0;i<projects[n].tasks.length;i++){
    console.log(projects[n].tasks[i]);
}

}





// when having dom, do a new variable:
let currentProjectId; 
// = projects[0].id;
// the variable above will help me push the task to teh right project

function generateId(){
    return '_' + Math.random().toString(36).substr(2,9);
} 



function saveProjects(){

    localStorage.setItem('myProjects', JSON.stringify(projects))
}

function loadProjects(){
    const storedProjects = localStorage.getItem('myProjects');
    if(storedProjects) {
        projects = JSON.parse(storedProjects);


        // TESTING

        loadProjectsDOM();
        currentProjectId = projects[0].id;
        loadTasksDOM();
    }
    else{
createSampleProject();
createSampleTasks();

// TESTING

// loadProjectsDOM();
currentProjectId = projects[0].id;
// loadTasksDOM();
        

    }
};

loadProjects();
currentProjectId = projects[0].id





// *** Factory functions for doms


// have to use in cconjunction with 'loadprojects()'



function clearProjectsDOM(){
    const allProjectsDom = projectsMenu.querySelectorAll('.project');
    allProjectsDom.forEach(project => {
        projectsMenu.removeChild(project);
    });
}

function clickProject(){
  
        console.log('click');
        
    }


function loadProjectsDOM(){

    for(let i=0;i<projects.length;i++){
        // first create div container of the project
        const div = document.createElement('div');
        div.classList.add('project');
        // get the svg
        const svg= createProjectSVG();
        // title of the project
        const h3 = document.createElement('h3');
        h3.textContent = projects[i].name;

        const thisProjectId = projects[i].id
   

       div.appendChild(svg);
       div.appendChild(h3);
        div.addEventListener('click',()=>{
            console.log(thisProjectId);
            currentProjectId = thisProjectId;
            clearTasksDom();
            loadTasksDOM();
        });
       projectsMenu.appendChild(div);
    }
}




function loadTasksDOM(){
    // const description = document.createElement('p');
    description.textContent = findProject(currentProjectId).description;
    // tasksMenu.appendChild(description);

    for(let i=0;i<findProject(currentProjectId).tasks.length;i++){
        // create the div for every task
        const tasksArray = findProject(currentProjectId).tasks;
        const div = document.createElement('div');
        div.classList.add('task');
   
        // create the checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox')
        checkbox.addEventListener('change', function(){
if(this.checked){
    p.classList.add('completed');
}
else{
    p.classList.remove('completed');
}
        });
        // have to add event listener that adds/changes if its checked or not

        // actual content
        const p = document.createElement('p');
        p.classList.add('taskName');
        p.textContent = findProject(currentProjectId).tasks[i];
        
        //svg Delete task

        // The following is to remove the clicked task

        const svgDelete = createDeleteSvg();
        svgDelete.addEventListener('click',function(){
//this is the aprt that deletes the task
    tasksArray.splice(i,1)
    //then the project is saved
    saveProjects();

    //Dom is reseted.
    clearTasksDom();
    loadTasksDOM();

        })



        //putting all of it together 
      
        div.appendChild(checkbox);
  
        div.appendChild(p);
        div.appendChild(svgDelete)
        tasksMenu.appendChild(div);
    }
}


function clearTasksDom(){
    const allTasks = document.querySelectorAll('.task');
    
    allTasks.forEach(task => {
        tasksMenu.removeChild(task);
        
    });
};


// some event listeenrs

removeProjectDOM.addEventListener('click', ()=>{
    removeProject();
})

addTaskDOM.addEventListener('click',()=>{
taskDialog.showModal();
})


let theme = 'light'
themeDom.addEventListener('click',()=>{
    if(theme==='light'){
        leftSide.classList.remove('lightTheme2');
        leftSide.classList.add('darkTheme1');

        rightSide.classList.remove('lightTheme3');
        rightSide.classList.add('darkTheme2');
        theme = 'dark';
    }
    else if(theme==='dark'){
        leftSide.classList.add('lightTheme2');
        leftSide.classList.remove('darkTheme1');

        rightSide.classList.add('lightTheme3');
        rightSide.classList.remove('darkTheme2');
        theme='light';
    }
})




// Mobile



// function toggleExpanded() {
//   leftSide.classList.toggle('expanded');
//   leftSide.classList.toggle('collapsed');

//   if (leftSide.classList.contains('expanded')) {
//     container.style.gridTemplateColumns = '10% 90%';
//   } else {
//     container.style.gridTemplateColumns = '70% 30%';
//   }
//   svg.style.display = leftSide.classList.contains('collapsed') ? 'block' : 'none';



// }

// if (window.matchMedia('(max-width: 600px)').matches) {
//   leftSide.addEventListener('click', toggleExpanded);
// }



// if (window.matchMedia('(max-width: 600px)').matches) {
//     container.style.gridTemplateColumns = '10% 90%';
//   }
  
//   function toggleExpanded() {
//     leftSide.classList.toggle('expanded');
//     leftSide.classList.toggle('collapsed');
  
//     if (leftSide.classList.contains('expanded')) {
//       container.style.gridTemplateColumns = '10% 90%';
//     } else {
//       container.style.gridTemplateColumns = '70% 30%';
//     }
//     svg.style.display = leftSide.classList.contains('collapsed') ? 'block' : 'none';
//   }
  
//   if (window.matchMedia('(max-width: 600px)').matches) {
//     leftSide.addEventListener('click', toggleExpanded);
//   }

// Mobile
if (window.matchMedia('(max-width: 600px)').matches) {
    container.style.gridTemplateColumns = '0% 100%'; // Set initial column widths for mobile
}

function toggleExpanded() {
    leftSide.classList.toggle('expanded');
    leftSide.classList.toggle('collapsed');

    if (leftSide.classList.contains('expanded')) {
        container.style.gridTemplateColumns = '0% 100%';
    } else {
        container.style.gridTemplateColumns = '100% 0%';
    }
    svg.style.display = leftSide.classList.contains('collapsed') ? 'block' : 'none';
}

if (window.matchMedia('(max-width: 600px)').matches) {
    menuSvg.addEventListener('click', toggleExpanded);
    leftSide.addEventListener('click', toggleExpanded);
} else {
    // Ensure that the event listener is removed for larger screens
    menuSvg.removeEventListener('click', toggleExpanded);
    leftSide.addEventListener('click', toggleExpanded);
}
window.onload = function(){
    // allFrames = document.getElementById('work-img');
    anno.makeAnnotatable(document.getElementById('work-img-1'));
    anno.makeAnnotatable(document.getElementById('work-img-2'));
    anno.makeAnnotatable(document.getElementById('work-img-3'));

    var workBtnLink1 = document.getElementById('workBtnLink1');
    var workBtnLink2 = document.getElementById('workBtnLink2');
    var workBtnLink3 = document.getElementById('workBtnLink3');
    var workImg1 = document.getElementById('workImg1');
    var workImg2 = document.getElementById('workImg2');
    var workImg3 = document.getElementById('workImg3');

    workBtnLink1.addEventListener('click', openImg1);
    workBtnLink2.addEventListener('click', openImg2);
    workBtnLink3.addEventListener('click', openImg3);


    function openImg1(){
        workImg1.style.display = 'block';
        workImg2.style.display = 'none';
        workImg3.style.display = 'none';
    }

    function openImg2(){
        workImg1.style.display = 'none';
        workImg2.style.display = 'block';
        workImg3.style.display = 'none';
    }

    function openImg3(){
        workImg1.style.display = 'none';
        workImg2.style.display = 'none';
        workImg3.style.display = 'block';
    }
}

window.addEventListener('load', displayNone);

function displayNone(){
    workImg1.style.display = 'none';
    workImg2.style.display = 'none';
    workImg3.style.display = 'none';
}


// Create Project Start //

var createProjectBtn = document.getElementById('createProjectBtn');
var createProjectModal = document.getElementById('createProjectModal');
var closeProjectBtn = document.getElementById('closeProjectBtn');
var addMoreBtn = document.getElementById('addMoreBtn');
var addMoreInput = document.getElementById('addMoreInput');

// Listen for open Create Project
createProjectBtn.addEventListener('click', openProjectModal);
// Listen for close Create Project
closeProjectBtn.addEventListener('click', closeProjectModal);

// Listen for open Add More
addMoreBtn.addEventListener('click', openMoreInput);


function openProjectModal(){
    createProjectModal.style.display = 'block';
    projectItemModal1.style.display = 'none';
    projectItemModal3.style.display = 'none';
    projectItemModal2.style.display = 'none';
};

function closeProjectModal(){
    createProjectModal.style.display = 'none';
}

function openMoreInput(){
    addMoreInput.style.display = 'block';
};

// Create Project End //

// Add Project Start //

var addProject = document.getElementById('addProject');
var projectList = document.getElementById('projectList');

// form submit event 
addProject.addEventListener('submit', addProjectItem);

// add project item
function addProjectItem(e){
    e.preventDefault();


    // Get input value
    var newProject = document.getElementById('projectName').value;

    // create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input valur
    li.appendChild(document.createTextNode(newProject));

    projectList.appendChild(li);
 
}

// Add Project End //

// Project List ARea Start //

var projectItemTimesBtn1 = document.getElementById('projectItemTimesBtn1');
var projectItemTimesBtn2 = document.getElementById('projectItemTimesBtn2');
var projectItemTimesBtn3 = document.getElementById('projectItemTimesBtn3');
var projectItemPlusBtn1 = document.getElementById('projectItemPlusBtn1');
var projectItemPlusBtn2 = document.getElementById('projectItemPlusBtn2');
var projectItemPlusBtn3 = document.getElementById('projectItemPlusBtn3');
var projectItemInfoBtn1 = document.getElementById('projectItemInfoBtn1');
var projectItemInfoBtn2 = document.getElementById('projectItemInfoBtn2');
var projectItemInfoBtn3 = document.getElementById('projectItemInfoBtn3');

projectItemPlusBtn1.addEventListener('click', openProjectInfoBtn1);
projectItemPlusBtn2.addEventListener('click', openProjectInfoBtn2);
projectItemPlusBtn3.addEventListener('click', openProjectInfoBtn3);
projectItemTimesBtn1.addEventListener('click', closeProjectInfoBtn1);
projectItemTimesBtn2.addEventListener('click', closeProjectInfoBtn2);
projectItemTimesBtn3.addEventListener('click', closeProjectInfoBtn3);

// 1

function openProjectInfoBtn1(){
    projectItemInfoBtn1.style.display = 'block';
    projectItemPlusBtn1.style.display = 'none';
    projectItemTimesBtn1.style.display = 'block';
    projectItemInfoBtn2.style.display = 'none';
    projectItemInfoBtn3.style.display = 'none';
    projectItemPlusBtn2.style.display = 'block';
    projectItemTimesBtn2.style.display = 'none';
    projectItemPlusBtn3.style.display = 'block';
    projectItemTimesBtn3.style.display = 'none';
}

function closeProjectInfoBtn1(){
    projectItemInfoBtn1.style.display = 'none';
    projectItemPlusBtn1.style.display = 'block';
    projectItemTimesBtn1.style.display = 'none';
}

// 2

function openProjectInfoBtn2(){
    projectItemInfoBtn2.style.display = 'block';
    projectItemPlusBtn2.style.display = 'none';
    projectItemTimesBtn2.style.display = 'block';
    projectItemInfoBtn1.style.display = 'none';
    projectItemInfoBtn3.style.display = 'none';
    projectItemPlusBtn1.style.display = 'block';
    projectItemTimesBtn1.style.display = 'none';
    projectItemPlusBtn3.style.display = 'block';
    projectItemTimesBtn3.style.display = 'none';
}

function closeProjectInfoBtn2(){
    projectItemInfoBtn2.style.display = 'none';
    projectItemPlusBtn2.style.display = 'block';
    projectItemTimesBtn2.style.display = 'none';
}

// 3

function openProjectInfoBtn3(){
    projectItemInfoBtn3.style.display = 'block';
    projectItemPlusBtn3.style.display = 'none';
    projectItemTimesBtn3.style.display = 'block';
    projectItemInfoBtn2.style.display = 'none';
    projectItemInfoBtn1.style.display = 'none';
    projectItemPlusBtn2.style.display = 'block';
    projectItemTimesBtn2.style.display = 'none';
    projectItemPlusBtn1.style.display = 'block';
    projectItemTimesBtn1.style.display = 'none';
}

function closeProjectInfoBtn3(){
    projectItemInfoBtn3.style.display = 'none';
    projectItemPlusBtn3.style.display = 'block';
    projectItemTimesBtn3.style.display = 'none';
}

// Project List ARea End //

// Project Item Modal Start //
var projectItemModal1 = document.getElementById('projectItemModal1');
var projectItemModal2 = document.getElementById('projectItemModal2');
var projectItemModal3 = document.getElementById('projectItemModal3');
var projectLinkBtn1 = document.getElementById('projectLinkBtn1');
var projectLinkBtn2 = document.getElementById('projectLinkBtn2');
var projectLinkBtn3 = document.getElementById('projectLinkBtn3');
var closeProjectItemBtn1 = document.getElementById('closeProjectItemBtn1');
var closeProjectItemBtn2 = document.getElementById('closeProjectItemBtn2');
var closeProjectItemBtn3 = document.getElementById('closeProjectItemBtn3');
      
      projectLinkBtn1.addEventListener('click', openProjectItem1);
      projectLinkBtn2.addEventListener('click', openProjectItem2);
      projectLinkBtn3.addEventListener('click', openProjectItem3);
      closeProjectItemBtn1.addEventListener('click', closeProjectItem1);
      closeProjectItemBtn2.addEventListener('click', closeProjectItem2);
      closeProjectItemBtn3.addEventListener('click', closeProjectItem3);
      
    // 1
      function openProjectItem1(){
        createProjectModal.style.display = 'none';
        projectItemModal1.style.display = 'block';
        projectItemModal3.style.display = 'none';
        projectItemModal2.style.display = 'none';
      }

      function closeProjectItem1(){
        createProjectModal.style.display = 'none';
        projectItemModal1.style.display = 'none';
        projectItemModal3.style.display = 'none';
        projectItemModal2.style.display = 'none';
      }

    //   2 
    function openProjectItem2(){
        createProjectModal.style.display = 'none';
        projectItemModal2.style.display = 'block';
        projectItemModal3.style.display = 'none';
        projectItemModal1.style.display = 'none';
    }

    function closeProjectItem2(){
        createProjectModal.style.display = 'none';
        projectItemModal1.style.display = 'none';
        projectItemModal3.style.display = 'none';
        projectItemModal2.style.display = 'none';
      }

    // 3
    function openProjectItem3(){
        createProjectModal.style.display = 'none';
        projectItemModal3.style.display = 'block';
        projectItemModal2.style.display = 'none';
        projectItemModal1.style.display = 'none';
    }

    function closeProjectItem3(){
        createProjectModal.style.display = 'none';
        projectItemModal1.style.display = 'none';
        projectItemModal3.style.display = 'none';
        projectItemModal2.style.display = 'none';
      }
// Project Item Modal End //
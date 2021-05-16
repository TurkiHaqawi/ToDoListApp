// Setting Variables 
let theInput = document.querySelector('.add-task input'),
    addButton = document.querySelector('.add-task .plus'),
    tasksContainer = document.querySelector('.tasks-content'),
    tasksCount = document.querySelector('.tasks-count span'),
    tasksComplated = document.querySelector('.tasks-complated span'),
    btnDelete = document.querySelector('.btn-delete'),
    btnComplated = document.querySelector('.btn-complated');


    // Focus on Input Feild 
window.onload = function ()  {
    theInput.focus();
}

// Adding the Tasks 
addButton.onclick = function () {

    // check if the Input Feild is Empty
    if (theInput.value === "") {

        swal ("The Input Cann't be Empty!","To add Task you must write it !","error");
    }
    else {
        
        let noTasksMsg = document.querySelector('.no-tasks-message');

        // Ckeck if the (Span with no Tasks Message) is Exist
        if (document.body.contains(document.querySelector('.no-tasks-message'))) {

            // Remove (no task message)
            noTasksMsg.remove();

        }   

        

        // Create Main Span
        let mainSpan = document.createElement('span');

        // Create delete Element
        let deleteElemetn = document.createElement('span');

        // Create The Span Text
        let text = document.createTextNode(theInput.value);

        // Create The Delete Text
        let deleteText = document.createTextNode('Delete');

        // Add Text to Span
        mainSpan.appendChild(text);

        // Add Class to Span
        mainSpan.className = 'task-box';

        // Add Text to Delete Button
        deleteElemetn.appendChild(deleteText);

        // Add Class to Span
        deleteElemetn.className = 'delete';

        // Add Delete Button to Main Span
        mainSpan.appendChild(deleteElemetn);

        // Add Task to The Container
        tasksContainer.appendChild(mainSpan);

        // Empt the Input
        theInput.value = '';

        theInput.focus();

        // Calculate Tasks
        calculateTasks();

        
        
    }

    
}



document.addEventListener('click', function(e) {

    // Delete Task
    if (e.target.className == 'delete') {

        // Remove Current Task
        e.target.parentNode.remove();
        calculateTasks();

        // Ckeck number of Tasks Inside the Container
        if (tasksContainer.childElementCount == 0) {

            createNoTask();
        }
    }

    // Toggle Class 'finished'
    if (e.target.classList.contains('task-box')) {

        // Toggle class 'finished'
        // معنا Toggle انه اذا الكلاس موجود شيله واذا ما كان موجود حطه
        e.target.classList.toggle('finished');

        // Calculate Tasks
        calculateTasks();
    }


})


// Function Create No Tasks Message
function createNoTask() {

    // Create Message Span Element
    let noTaskSpan = document.createElement('span');

    // Create the Text Message
    let noTaskText = document.createTextNode('No Task To Show');

    // Add Text to Message Span
    noTaskSpan.appendChild(noTaskText);

    // Add class to Message Span 
    noTaskSpan.className = 'no-tasks-message';

    // Append Message Span Element to the Container
    tasksContainer.appendChild(noTaskSpan);
        
}



function calculateTasks() {

    // Calculate All Tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // Calculate Complated Tasks
    tasksComplated.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}





btnDelete.onclick = function() {

    let taskBoxs = Array.from(tasksContainer.children);

    taskBoxs.forEach(taskBox => {
        taskBox.remove();
        if (tasksContainer.childElementCount == 0) {

            createNoTask();
            calculateTasks();
        }
    })

}


btnComplated.onclick = function () {
    let taskBoxs = Array.from(tasksContainer.children);

    taskBoxs.forEach(taskBox => {
        taskBox.classList.toggle('finished');
        calculateTasks();
    })
}





















/* 
            // Create Main Span
            let mainSpan = document.createElement('span');

            // Create delete Element
            let deleteElemetn = document.createElement('span');

            // Create The Span Text
            let text = document.createTextNode(theInput.value);

            // Create The Delete Text
            let deleteText = document.createTextNode('Delete');

            // Add Text to Span
            mainSpan.appendChild(text);

            // Add Class to Span
            mainSpan.className = 'task-box';

            // Add Text to Delete Button
            deleteElemetn.appendChild(deleteText);

            // Add Class to Span
            deleteElemetn.className = 'delete';

            // Add Delete Button to Main Span
            mainSpan.appendChild(deleteElemetn);

            // Add Task to The Container
            tasksContainer.appendChild(mainSpan);

            // Empt the Input
            theInput.value = '';

            theInput.focus();

            // Calculate Tasks
            calculateTasks();
*/






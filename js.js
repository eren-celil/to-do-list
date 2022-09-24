//VIBRATION EFFECT FOR INPUT BOX

var element = document.getElementById('entry');
var removeError = function() { element.classList.remove('error'); };
var addError = function() { element.classList.add('error'); };


document.querySelector('#push').onclick = function(){
    const placeHD = document.getElementById('placeHolder');
    if(document.querySelector('#newtask input').value.length == 0){
        //alert("Please Enter a Task")
        addError();
    }

//ENTRY PUSH FOR TODO LIST

    else{
        if(placeHD != null){
        placeHD.remove();
        }
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete"><img class="trash-icon" src="trash.png">
                    <i class="far fa-trash-alt"></i>
              </img>  </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}


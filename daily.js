
class Task {
    constructor(place, notes) {
        this.place = place;
        this.notes = notes;
    }
}

class UI{
    static addTask(task){
        const task_list= document.querySelector('#task_list');
        const list_item = document.createElement('li');
        list_item.innerHTML=`${task.place}:${task.notes}`;
        task_list.appendChild(list_item);
        
    }
    static showError(message,className){
        const div = document.createElement('div');
        div.className='error';
        div.appendChild(document.createTextNode(message));
        const tt = document.getElementById('ttt');
        const container1 =document.querySelector('.container');
        container1.insertBefore(div,tt);
        setTimeout(function(){
            document.querySelector('.error').remove();
        },2000);

    }
    static showError1(message,className){
        const div = document.createElement('div');
        div.className='success';
        div.appendChild(document.createTextNode(message));
        const tt = document.getElementById('ttt');
        const container1 =document.querySelector('.container');
        container1.insertBefore(div,tt);
        setTimeout(function(){
            document.querySelector('.success').remove();
        },2000);

    }
    static clearFields(){
        document.getElementById('place').value="";
        document.getElementById('notes').value="";
    }

}
document.querySelector('.form-group').addEventListener('submit',function(e){
    e.preventDefault();
    const place = document.getElementById('place').value;
    const notes = document.getElementById('notes').value;
    if(place==""|| notes==""){
        UI.showError('fill all fields', 'error')
    }else{
        const task = new Task(place,notes);
    UI.addTask(task);
    UI.showError1('task added','success');
    UI.clearFields();

    }
    

    
   


})
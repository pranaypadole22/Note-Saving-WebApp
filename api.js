const theme=document.getElementById('theme');
const theme_icon=document.getElementById('theme-icon');
const note=document.querySelector('.note');
const noteInput=document.getElementById('noteinput');
const inbtn=document.getElementById('inbtn');

theme.addEventListener('click',()=>{
    console.log('clicked');
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        theme_icon.classList.remove('bx-moon');
        theme_icon.classList.add('bx-sun');
        theme_icon.style.color='white';
        noteInput.style.borderColor = 'white';
        noteInput.style.backgroundColor = 'black';
        
        noteInput.style.color='white';
        theme_icon.setAttribute('aria-label', 'Switch to Light Theme')
    }else{
        theme_icon.classList.remove('bx-sun');
        theme_icon.classList.add('bx-moon');
        theme_icon.style.color='black';
        note.style.borderColor='black';
        noteInput.style.borderColor = 'black';
       
        noteInput.style.backgroundColor = 'white';
      
        theme_icon.setAttribute('aria-label', 'Switch to dark Theme')
    
    }
});
        function addnote(){
            const noteinput=document.getElementById("noteinput");
            const notetext=noteinput.value.trim();

            if(notetext){
                const notes=getnotes();
                notes.push(notetext);
                localStorage.setItem('notes',JSON.stringify(notes));
                noteinput.value='';
                displaynotes();
            }
        }

        function getnotes(){
            const notes=localStorage.getItem('notes');
            return notes ? JSON.parse(notes) : [];
        }

        function displaynotes(){
            const notes = getnotes();
      const notesdiv = document.getElementById('notes');
      notesdiv.innerHTML = '';
      notes.forEach((note, index) => {
        const notediv = document.createElement('div');
        notediv.className = 'note';
        notediv.innerHTML = `
          <p>${note}</p>
          <button onclick="deletenotes(${index})">Delete</button>
        `;
        notesdiv.appendChild(notediv);
      });

        }
        function deletenotes(index){
            const notes=getnotes();
            notes.splice(index,1);
            localStorage.setItem('notes',JSON.stringify(notes));
            displaynotes();
        }
        displaynotes();
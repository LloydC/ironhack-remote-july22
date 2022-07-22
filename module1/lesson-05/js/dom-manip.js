const title = document.getElementById('title');
        title.style.color = 'red';
        title.innerText = 'Welcome Back!';

        const details = document.getElementsByClassName('details'); //[p,p,p,p]
        details[0].innerText = 'This is a new paragraph'; // p {innerText: 'I am a paragraph'}

        function updateButton(){
            if(document.getElementById('test').innerText === 'Click here!'){
                document.getElementById('test').innerText = 'Update complete :)';
            }
            else {
                document.getElementById('test').innerText = 'Click here!';
            }
        }
        function updateJustifyContent(){
            const heroContainer = document.getElementById('section-hero');
            
            if(heroContainer.style.justifyContent === "center"){
                heroContainer.style.justifyContent = "flex-end";
            }
            else {
                heroContainer.style.justifyContent = "center";
            }
            
        }
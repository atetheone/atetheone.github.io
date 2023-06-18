
const toggle = () => {
    document.querySelector('.dropcontent').classList.toggle('visible');
};


window.onclick = (event) => {
    
    if (document.getElementsByClassName('dropbtn')[0]?.contains(event.target)){
        console.log('Bonsoir');
        var dropdowns = document.getElementsByClassName(".dropcontent");
        console.log('dropdown : ' + JSON.stringify(dropdowns, null, 3));
        var i;
        for (i = 0; i < dropdowns.length; i++) {  
            var opendropdown = dropdowns[i];  
            if (opendropdown.classList.contains('visible')) {
                opendropdown.classList.remove('visible');
            }
        }
    } else {
        console.log('Bonjour');
    }
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll('.section');
hiddenElements.forEach(el => observer.observe(el));
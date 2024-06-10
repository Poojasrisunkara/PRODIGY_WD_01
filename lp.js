document.getElementById('homeb').addEventListener('click', function() {
    document.getElementById('scroll1').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('b').addEventListener('click', function() {
    document.getElementById('scroll2').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('abb').addEventListener('click', function() {
    document.getElementById('scroll3').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('bb1').addEventListener('click', function() {
    document.getElementById('scroll1').scrollIntoView({ behavior: 'smooth' });
});
function myFunction(x) {
    x.classList.toggle("change");
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.getElementById('id1').addEventListener('click', function() {
    event.preventDefault();
    document.getElementById('scroll1').scrollIntoView({ behavior: 'smooth' });
    closeNav();
});

document.getElementById('id2').addEventListener('click', function() {
    event.preventDefault();
    document.getElementById('scroll2').scrollIntoView({ behavior: 'smooth' });
    closeNav();
});

document.getElementById('id3').addEventListener('click', function() {
    event.preventDefault();
    document.getElementById('scroll3').scrollIntoView({ behavior: 'smooth' });
    closeNav();
});

document.getElementById('id4').addEventListener('click', function() {
    event.preventDefault();
    document.getElementById('scroll3').scrollIntoView({ behavior: 'smooth' });
    closeNav();
});
document.getElementById('s').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent the default form submission behavior
        searchSection();
    }
});
function searchSection() {
    var input = document.getElementById('s').value.toLowerCase();
    var sections = document.querySelectorAll('.t');  // Change this to your specific section class
    
    for (var section of sections) {
        var sectionText = section.innerText.toLowerCase();
        if (sectionText.includes(input)) {
            section.scrollIntoView({ behavior: 'smooth' });
            return;
        }
    }
    alert("Not found");
}


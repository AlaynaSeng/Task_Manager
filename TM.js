let usin = [];
$('#su').click(() => {
    let fn = $('#fn').val();
    let un = $('#un').val();
    let pw = $('#pw').val();

    if (localStorage.getItem('New User') !== null) {
        usin = JSON.parse(localStorage.getItem('New User'));
    }

    if (fn == '' || un == '' || pw == '') {
        alert("Fill out all parts of the form");
        return;
    }
    let ui = {
        Name: fn,
        User: un,
        Password: pw,
        Tasko: 'tasktitle'
    }

    usin.push(ui);
    localStorage.setItem('New User', JSON.stringify(usin));
    console.log(usin);

    location.assign('TMlogin.html');
});


function si() {
    let o = JSON.parse(localStorage.getItem('New User'));
    let a = 0;
    if (document.getElementById('username').value == '' || document.getElementById('password').value == '') {
        alert("Enter your username/pasword");
        return;
    } else {
        for (i in o) {
            if (document.getElementById('username').value === o[a].User && document.getElementById('password').value === o[a].Password) {
                localStorage.setItem('Useri', JSON.stringify(i));
                location.assign('TMtasks.html');
            } else {
                a++;
            }
        }
    }
    if (a === o.length) {
        alert("Username or password incorrect");
    }
}

$('#lg2').click(() => {
    let totuse = JSON.parse(localStorage.getItem('Task'));
    localStorage.setItem('New User', JSON.stringify(totuse));
    location.assign('TMlogin.html');
})


function f1() {
    let o = JSON.parse(localStorage.getItem('New User'));
    let name = JSON.parse(localStorage.getItem('Useri'));
    document.getElementById('name').innerHTML = o[name].Name
}


let tasks = [];
$('#add').click(() => {
    let totuse = JSON.parse(localStorage.getItem('New User'))
    let index = JSON.parse(localStorage.getItem('Useri'));
    let task = $('#tt').val();
    var ta;
    if (task == '') {
        alert('Enter a task');
        return;
    } else {
        ta = {
            Task: task,
            Status: 'Incomplete'
        }
    }
    tasks.push(ta);
    totuse[index].Tasko = tasks;
    console.log(totuse)
    localStorage.setItem('Task', JSON.stringify(totuse[index]));

})

$('#all').click(all)
function all() {
    let taskarr = JSON.parse(localStorage.getItem('Task'));
    let tm = taskarr.Tasko;
    let tab = document.getElementById('tb');
    let table1 = '';
    for (let g = 0; g < tm.length; g++) {
        table1 += `<tr>
                        <td>${tm[g].Task}</td> 
                        <td>${tm[g].Status}</td> 
                        <td>
                        <button id = "trash">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                        </button>
                        <button id = "edit" data-toggle="modal" data-target="#edmo">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                        </button>
                        </td>  
                    </tr>`
    }
    tab.innerHTML = table1;
}




$('#comp').click(() => {
    let index = JSON.parse(localStorage.getItem('Useri'));
    let comp = [];
    let current = JSON.parse(localStorage.getItem('Task'));
    let tota = current.Tasko

    for (i in tota) {
        if (tota[i].Status === 'Complete') {
            comp.push(tota[i]);
        }
    }

    let tab = document.getElementById('tb');
    let table1 = '';

    for (let e = 0; e < comp.length; e++) {
        table1 += `<tr>
                    <td>${comp[e].Task}</td> 
                    <td>${comp[e].Status}</td> 
                    <td>
                    <button id = "trash">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    </button>
                    <button id = "edit" data-toggle="modal" data-target="#edmo">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                    </button>
                    </td>  
                </tr>`
    }
    tab.innerHTML = table1;
})


$('#incomp').click(() => {
    let index = JSON.parse(localStorage.getItem('Useri'));
    let incomp = [];
    let current = JSON.parse(localStorage.getItem('Task'));
    let tota = current.Tasko

    for (i in tota) {
        if (tota[i].Status === 'Incomplete') {
            incomp.push(tota[i]);
        }
    }

    let tab = document.getElementById('tb');
    let table1 = '';

    for (let e = 0; e < incomp.length; e++) {
        table1 += `<tr>
                    <td>${incomp[e].Task}</td> 
                    <td>${incomp[e].Status}</td> 
                    <td>
                    <button id = "trash">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    </button>
                    <button id = "edit" data-toggle="modal" data-target="#edmo">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                    </button>
                    </td>  
                </tr>`
    }
    tab.innerHTML = table1;
})


$('#delcomp').click(() => {
    let index = JSON.parse(localStorage.getItem('Useri'));
    let comp = [];
    let current = JSON.parse(localStorage.getItem('Task'));
    let tota = current.Tasko

    for (i in tota) {
        if (tota[i].Status === 'Incomplete') {
            comp.push(tota[i]);
        }
    }

    let tab = document.getElementById('tb');
    let table1 = '';

    for (let e = 0; e < comp.length; e++) {
        table1 += `<tr>
                    <td>${comp[e].Task}</td> 
                    <td>${comp[e].Status}</td> 
                    <td>
                    <button id = "trash">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    </button>
                    <button id = "edit" data-toggle="modal" data-target="#edmo">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                    </button>
                    </td>  
                </tr>`
    }
    tab.innerHTML = table1;
    current.Tasko = comp;
    localStorage.setItem('Task', JSON.stringify(current));
})


$('tbody').on('click', 'button[id = "trash"]', function () {
    let t = JSON.parse(localStorage.getItem('Task'));
    let useri = JSON.parse(localStorage.getItem('Useri'))
    let total = JSON.parse(localStorage.getItem('New User'));
    let ytask = t.Tasko;
    let i = $(this).parents('tr').index();
    $(this).closest('tr').remove();
    ytask.splice(i, 1);
    ytask = t.Tasko;
    localStorage.setItem('Task', JSON.stringify(t));
    total[useri] = t;
    localStorage.setItem('New User', JSON.stringify(total));
})




$('tbody').on('click', 'button[id = "edit"]', function () {
    let t = JSON.parse(localStorage.getItem('Task'))
    let ltask = t.Tasko
    let row = $(this).parents('tr').index()
    $('#newtitle').val()
    localStorage.setItem('Editindex', JSON.stringify(row))

    console.log(ltask)
    if (ltask[row].Status == 'Complete') {
        $('#complete').prop('checked', true)
    } else if (ltask[row].Status == 'Incomplete') {
        $('#incomplete').prop('checked', true)
    }
})

$('#sc').click(() => {
    let ind = JSON.parse(localStorage.getItem('Editindex'));
    let t = JSON.parse(localStorage.getItem('Task'));
    let ctasko = t.Tasko;
    let ctaskoo = ctasko[ind];
    let ctask = ctaskoo.Task;
    let nttt = $('#newtitle').val();
    var ntt = ''

    if (nttt == '') {
        ntt = ctask;
    } else {
        ntt = nttt
    }
    let table = '';

    if ($('input[id="complete"]:checked').length == 0) {
        ctaskoo.Status = 'Incomplete'
    } else {
        ctaskoo.Status = 'Complete'
    }
    ctask = ntt;
    ctaskoo.Task = ctask
    ctasko[ind] = ctaskoo;
    for (var i in ctasko) {
        table += `<tr>
        <td>${ctasko[i].Task}</td> 
        <td>${ctasko[i].Status}</td> 
        <td>
        <button id = "trash">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        </button>
        <button id = "edit" data-toggle="modal" data-target="#edmo">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
        </button>
        </td>  
    </tr>`
    }
    document.getElementById('tb').innerHTML = table;
    t.Tasko = ctasko
    localStorage.setItem('Task', JSON.stringify(t))
})
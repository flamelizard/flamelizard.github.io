function change_heading(str) {
    msg = 'Hello World !';
    if (Boolean(str)) {
        msg = str;
    }
    // grab selector reference
    var majorHeading = document.querySelector('h1');
    majorHeading.innerHTML = msg;
}
// change_heading('Bob');

function true_false_exp () {
    vals = ['string', '', null, undefined, 0];
    for (var i in vals) {
        console.log(vals[i] + ' -> ' + Boolean(vals[i]))
    };
}
// true_false_exp();

function multiply (num1, num2) {
    return num1 * num2;
}

function addition (num1, num2) {
    return num1 + num2;
}

function math_exp () {
    // Must init var before +=, otherwise returns NaN (Not-A-Number)
    var multi = '';
    var add = '';

    multi += multiply(5, 2)
    multi += multiply('5', 2)

    add += addition(5, 2)
    // !! Concatenates when any or both vars are strings
    add += addition('5', 2)

    alert('Multiply ' + multi + '\n' + 'Additon ' + add)
}
// math_exp()

arr = ['first', 2, true, 'last'];

if (arr[1] == false) {
    arr[1] = true;
}

// Events
// Passed anonymous function
// document.querySelector('img').onclick = function () {
//     alert('Click on image detected')
// }

function image_changer () {
    img = document.querySelector('img');
    img.onclick = function () {
        var file = img.getAttribute('src');
        console.log('lab log: ' + file);

        if (file == 'images/man_face.png') {
            img.setAttribute('src', 'images/woman_face2.png');
        } else {
            img.setAttribute('src', 'images/man_face.png');
        }
    }
}
image_changer();

// comment_btn = document.querySelector('button');
// comment_btn.onclick = function () {
//     var reply = prompt('Some nice words: ');
//     localStorage.setItem('comments', reply);

//     comments_field = document.querySelector('.comments','p');
//     comments_field.innerHTML = reply;
// }

function handle_comments () {
    var reply = prompt('Some nice words: ');

    // save comments to persistent web storage - HTML5 feature
    var ptr = localStorage.getItem('last_comm_ptr');
    if (!ptr) {
        ptr = 0;
    } else {
        ptr++;
    }
    localStorage.setItem('last_comm_ptr', ptr);
    localStorage.setItem('comm.' + ptr, reply);

    msg = '';
    for ( var i = 0; i <= ptr; i++ ) {
        msg += localStorage['comm.' + i] + '<br>';
    }

    // display comments
    var comm = document.querySelector('.comments');
    comm.innerHTML = msg;
}

comm_btn = document.querySelector('button');
comm_btn.onclick = function () {
    handle_comments();
}
// delete stored values - will survive closing browser
localStorage.clear();

// # Equality == vs. Identity operator ===

// Identity operator does NO conversion on operand.
// Whereas equality will first try to convert operands to be of the same kind.


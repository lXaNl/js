let baseUrl = "http://localhost:8080/api/users/";
let users = {};

let id;
let age;
let name;
let surname;
let email;
let genders;
let gender;

function getUsers() {
    fetch(baseUrl)
        .then(function (response) {
            response.json()
                .then(function (usersObject) {
                    users = usersObject;
                    console.log(users);
                }).then(printUsers)
        });
}

function updatePrint(id) {
    let elementForm = document.createElement('div');
    elementForm.id = id;
    elementForm.className = "col-sm-12 mb-3";
    elementForm.innerHTML = "<br><div class=\" ml-auto mr-auto mb-3 col-3 input-group \">\n" +
        "            <div class=\"input-group-prepend\">\n" +
        "                <span class=\"input-group-text\" id=\"id\" >ID</span>\n" +
        "            </div>\n" +
        "            <input type=\"text\" id=\"id-inp\" class=\"form-control\" placeholder=\"ID\" aria-label=\"id\" aria-describedby=\"id\">\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\" ml-auto mr-auto mb-3 col-6 input-group \">\n" +
        "            <div class=\"  input-group-prepend\">\n" +
        "                <span class=\"input-group-text\" id=\"name\" >Name</span>\n" +
        "            </div>\n" +
        "            <input type=\"text\" id=\"name-inp\" class=\"form-control\" placeholder=\"Name\" aria-label=\"name\" aria-describedby=\"name\">\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\" ml-auto mr-auto mb-3 col-6 input-group \">\n" +
        "            <div class=\" input-group-prepend\">\n" +
        "                <span class=\"input-group-text\" id=\"surname\" >Surname</span>\n" +
        "            </div>\n" +
        "            <input type=\"text\" id=\"surname-inp\" class=\"form-control\" placeholder=\"Surname\" aria-label=\"surname\"\n" +
        "                   aria-describedby=\"surname\">\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\" ml-auto mr-auto mb-3 col-6 input-group \">\n" +
        "            <div class=\" input-group-prepend\">\n" +
        "                <span class=\"input-group-text\" id=\"email\" >Email</span>\n" +
        "            </div>\n" +
        "            <input type=\"email\" class=\"form-control\" id=\"email-inp\" placeholder=\"Email\" aria-label=\"email\" aria-describedby=\"email\">\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\" ml-auto mr-auto mb-3 col-6 input-group \">\n" +
        "            <div class=\"  input-group-prepend\">\n" +
        "                <span class=\"input-group-text\" id=\"age\" >Age</span>\n" +
        "            </div>\n" +
        "            <input type=\"text\" id=\"age-inp\" class=\"form-control\" placeholder=\"Age\" aria-label=\"age\" aria-describedby=\"age\">\n" +
        "        </div>\n" +
        "\n" +
        "        <div class=\" ml-auto mr-auto mb-3 col-6  \">\n" +
        "            <span class=\" mr-3 d-inline input-group-prepend col-2 input-group-text\" >\n" +
        "                <label ><input class=\"custom-radio mr-2 \" type=\"radio\" value=\"true\" name=\"gender\" >Male</label>\n" +
        "            </span>\n" +
        "            <span class=\" ml-3 d-inline input-group-text input-group-prepend col-2\">\n" +
        "                <label ><input class=\"custom-radio mr-2 \" type=\"radio\" value=\"false\" name=\"gender\" >Female</label>\n" +
        "            </span>\n" +
        "        </div>\n" +
        "\n" +
        "        <button type=\"button\" onclick=\"updateUser(" + id + ")\" class=\"btn mb-5 mt-4 col-3 btn-primary btn-lg\">Update User</button>\n"
    document.getElementById(id).appendChild(elementForm);
}

function printUsers() {
    users.forEach(function (users, i, array) {
        let divElement = document.createElement('div');
        divElement.className = "col-sm-12 mb-3";
        divElement.id = users.id;
        divElement.innerHTML =
            "<div class=\"text-light bg-dark  card text-center \"> " +
            "    <div class=\"card-body\">\n" +
            "        <h5 class=\"card-title\">User id : " + users.id + "</h5>\n" +
            "        <p class=\"m-0 card-text\"> Name : " + users.name + "</p>\n" +
            "        <p class=\"m-0 card-text\"> Surname : " + users.surname + "</p>\n" +
            "        <p class=\"m-0 card-text\"> Age : " + users.age + " </p>\n" +
            "        <p class=\"m-0 card-text\"> Gender : " + users.gender + "</p>\n" +
            "        <button class=\" mt-3 btn btn-outline-danger\" onclick='updatePrint(" + users.id + ")' type=\"button\">Edit </button>\n" +
            "        <button class=\" mt-3 btn btn-outline-danger\" onclick='deleteUser(" + users.id + ")' type=\"button\">User deleting</button>\n" +
            "    </div>\n" +
            "</div>";
        document.getElementById('cards').appendChild(divElement);
    });
}

function saveUser() {

    id = document.getElementById("id-inp").value;
    age = document.getElementById("age-inp").value;
    name = document.getElementById("name-inp").value;
    surname = document.getElementById("surname-inp").value;
    email = document.getElementById("email-inp").value;
    genders = document.getElementsByName("gender-inp");
    gender = true;

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            gender = genders[i].value;
        }
    }

    fetch(baseUrl + 'save', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            name: name,
            surname: surname,
            age: age,
            gender: gender,
            email: email
        })
    }).then(function (response) {
        response.json()
            .then(function (usersObject) {
                console.log(usersObject)
            })
    });

    console.log(genders); // NodeList [ length : 0]
    console.log(gender); // undefined

    // $(function () {
    //     $.ajax({
    //         url: baseUrl + 'users/save',
    //         dataType: 'json',
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         data: JSON.stringify({
    //             id: id,
    //             age: age,
    //             email: email,
    //             gender: gender,
    //             name: name,
    //             surname: surname
    //         }),
    //         success: function (response) {
    //             console.log('a');
    //             console.log(response);
    //         },
    //         error: function (xhr, status, err) {
    //             console.error(status, err.toString());
    //         }
    //     });
    // });

}

function deleteUser(id) {
    fetch(baseUrl + 'delete/' + id, {
        method: 'DELETE'
    });
    document.getElementById(id).remove();
    console.log(users);

}

function updateUser(id) {

    this.id = document.getElementById("id-inp").value;
    age = document.getElementById("age-inp").value;
    name = document.getElementById("name-inp").value;
    surname = document.getElementById("surname-inp").value;
    email = document.getElementById("email-inp").value;

    fetch(baseUrl + '/update', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            name: name,
            surname: surname,
            age: age,
            gender: gender,
            email: email
        })
    }).then(function (response) {
        response.json().then(function (userObject) {
            console.log(userObject)
        })
    });
    users.forEach(function (user, i, array) {
        if (user.id === id) {
            user.name = name;
            user.surname = surname;
            alert('Updated');
        }
    });


}


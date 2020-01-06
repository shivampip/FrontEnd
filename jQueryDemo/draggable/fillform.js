$(document).ready(function() {

    function print(msg) {
        console.log(msg);
    }



    var workContainer = document.getElementById("workContainer"); // assuming ul exists



    /////////////////////////////////////////////////////

    let data = [
        { itype: "head", label: "Personal Information" },
        { itype: "subhead", label: "We respect privacy" },
        { itype: "para", label: "Just don't worry, your information is fully secure with us. even we can't see it" },
        { itype: "text", label: "First Name", db_name: "first_name", required: true },
        { itype: "text", label: "Last Name", db_name: "last_name", required: false },
        { itype: "number", label: "Number of Vehicles", db_name: "no_of_vehicles", required: false, min: 5, max: 100 },
        { itype: "email", label: "Primary Email", db_name: "pri_email", required: true },
        { itype: "phone", label: "Mobile No.", db_name: "mobile", required: true },
        { itype: "submit", label: "Apply for Licence" },
    ]


    //=============================================================================

    function getHead(item) {
        return `<div class="oneLayer itemMain">
        <p class="heading">${item['label']}</p>
    </div>`;
    }

    function getSubHead(item) {
        return `<div class="oneLayer itemMain">
        <p class="subHeading">${item['label']}</p>
    </div>`;
    }

    function getPara(item) {
        return `<div class="oneLayer itemMain">
        <p class="para">${item['label']}</p>
    </div>`;
    }

    function getText(item) {
        req = "";
        if (item['required']) {
            req = "required";
        }
        return `<div class="twoLayer itemMain">
        <label>${item['label']}</label>
        <input type="text" name="${item['db_name']}" placeholder="Enter value" ${req}>
    </div>`;
    }

    function getNumber(item) {
        req = "";
        if (item['required']) {
            req = "required";
        }
        return `<div class="twoLayer itemMain">
        <label>${item['label']}</label>
        <input type="number" name="${item['db_name']}" placeholder="Enter value" ${req} min="${item['min']}" max="${item['max']}">
    </div>`;
    }

    function getEmail(item) {
        req = "";
        if (item['required']) {
            req = "required";
        }
        return `<div class="twoLayer itemMain">
        <label>${item['label']}</label>
        <input type="email" name="${item['db_name']}" placeholder="Enter value" ${req}>
    </div>`;
    }

    function getPhone(item) {
        req = "";
        if (item['required']) {
            req = "required";
        }
        return `<div class="twoLayer itemMain">
        <label>${item['label']}</label>
        <input type="number" name="${item['db_name']}" placeholder="Enter value" ${req}>
    </div>`;
    }

    function getSubmit(item) {
        return `<div class="twoLayer itemMain">
        <label></label>
        <input type="submit" name="${item['label']}" >
    </div>`;
    }

    //=============================================================================

    data.forEach(function(item) {
        itype = item['itype'];
        let out = "";
        if (itype == "head") {
            out = getHead(item);
        } else if (itype == "subhead") {
            out = getSubHead(item);
        } else if (itype == "para") {
            out = getPara(item);
        } else if (itype == "text") {
            out = getText(item);
        } else if (itype == "number") {
            out = getNumber(item);
        } else if (itype == "email") {
            out = getEmail(item);
        } else if (itype == "phone") {
            out = getPhone(item);
        } else if (itype == "submit") {
            out = getSubmit(item);
        }
        workContainer.insertAdjacentHTML("beforeend", out);
    });



});
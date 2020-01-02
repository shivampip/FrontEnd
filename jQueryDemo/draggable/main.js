function print(msg) {
    console.log(msg);
}

$(".draggable").draggable({
    start: function(eve, ui) {
        // print("Drag Started");
        //$(this).css("width", "100px");
        $(ui.helper).css("width", "170px"); //customize helper
        $(ui.helper).css("box-shadow", "0px 0px 18px 4px rgba(0,0,0,0.47)");
    },
    drag: function() {
        // print("Drag in progress");
    },
    stop: function() {
        // print("Drag Stopped");
        //$(this).css("width", "");
    },
    //revert: true,
    revert: function(dropped) {
        // print("Dropped is this");
        // print(dropped);
        var dropped = dropped && dropped.hasClass("droppable");
        if (!dropped) {
            // print("Dropped Outside");
            //$(".draggable").draggable("option", "revertDuration", 200);
            return true;
        } else {
            // print("Dropped inside");
            //$(".draggable").draggable("option", "revertDuration", 0);
            return true;
        }
    },
    revertDuration: 0, //how much time, it will take to revert
    helper: "clone"
        //connectToSortable: ".droppable"
});

$(".droppable").droppable({
    accept: ".draggable",
    activeClass: "ui-state-active",
    hoverClass: "ui-state-hover",
    drop: function(eve, ui) {
        // print("Dropped");
        let value = ui.draggable.attr("value");
        value = "#" + value;
        // print("Value is " + value);

        let item = $(value).clone(true);
        item.removeAttr("id");
        item.attr("value", value);
        // print("Now value is " + item.attr("value"));
        item.css("display", "grid");
        item.appendTo($(this));
        // $("#multipleChoice")
        //   .clone()
        //   .appendTo($(this));
    }
});

$("#workContainer").sortable({
    revert: true,
    handle: "div.itemSidebar",
    cancle: "div.itemMain"
});

function auto_grow(element) {
    //element.style.height = "5px";
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
}



/////////////////////////////////////////////////////////////////////

/* Messages */

function showMessage(mtype, msg) {
    print("MSG: " + mtype + ": " + msg);
}

function showError(msg) {
    showMessage("error", msg);
}

function showSuccess(msg) {
    showMessage("success", msg);
}

function showWarning(msg) {
    showMessage("warning", msg);
}

/////////////////////////////////////////////////////////////////

function parseHeading(oitem) {
    print("Heading================");

    let label = oitem.querySelector("input[name=fieldName]").value;
    print(label);

}

function parseEmail(oitem) {
    print("Email===================");

    let label = oitem.querySelector("input[name=fieldName]").value;
    print(label);

    let isRequired = oitem.querySelector("input[name=required]").checked;
    print(isRequired);

}

function parsePhone(oitem) {
    print("Phone===================");

    let label = oitem.querySelector("input[name=fieldName]").value;
    print(label);

    let isRequired = oitem.querySelector("input[name=required]").checked;
    print(isRequired);

}


/////////////////////////////////////////////////////////////////

previewB = document.getElementById("previewB");
previewB.addEventListener("click", (eve) => {
    console.clear();
    print("==========================================");
    let form = document.getElementById("workFrom");

    let workItems = $("workContainer.workItem");


    let params = [];
    let relations = [];
    let values = [];
    let workContainer = document.getElementById("workContainer");
    workContainer.querySelectorAll(".workItem").forEach(function(oitem) {
        let item = $(oitem);
        // print(oitem);
        // print(item);
        let value = item.attr("value");
        print("Value: " + value);
        if (value == "#itemHead") {
            parseHeading(oitem);
        }
        if (value == "#itemEmail") {
            parseEmail(oitem);
        }

        if (value == "#itemPhone") {
            parsePhone(oitem);
        }

        print("-------------------------------");


        // let name = approDiv.querySelector("p").innerHTML;

        // let priceWithCurr = approDiv.querySelector("span").innerHTML;
        // let priceArr = priceWithCurr.split(' ');
        // print(priceArr);
        // let price = priceArr[0];
        // print(price);


        // approvers.push(name + " , " + price);
        //print("Appro Next: " + name + ", " + price);
    });



    return;
    print("Setting ajax upp");
    //#################SETUP##############################
    var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
    print("CSRF: " + csrftoken);

    function csrfSafeMethod(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
            showLoadingScreen("Creating Rule");
        }
    });
    //####################################################


    let data = {
        org_id: "vegento",
        name: name.value,
        request_type: "requisition",
        min_price: 0,
        match_type: condiType,
        sequence: priority,
        param: params,
        relation: relations,
        value: values,
        approver: approvers,
    };

    print("----------------------")
    print(data);
    print("---------------------")

    $.ajax({
        method: "POST",
        //url: "http://localhost:8000/workflows/create_rule",
        url: "/workflows/create_rule",
        dataType: "json",
        data: data,
        success: function(data) {
            print("response success");
            print(data);
            if (data.status == "success") {
                showSuccess("Rule created Successfully");
            } else {
                showError("Rule couldn't be created");
            }
        },
        failure: function(errMsg) {
            print("response error");
            print(errMsg);
            showError("Rule can't be created");
        },
        complete: function(data) {
            print("Request completed");
            closeLoadingScreen();
        }
    });

});
function print(msg) {
    console.log(msg);
}

$(".draggable").draggable({
    start: function(eve, ui) {
        print("Drag Started");
        //$(this).css("width", "100px");
        $(ui.helper).css("width", "170px"); //customize helper
        $(ui.helper).css("box-shadow", "0px 0px 18px 4px rgba(0,0,0,0.47)");
    },
    drag: function() {
        print("Drag in progress");
    },
    stop: function() {
        print("Drag Stopped");
        //$(this).css("width", "");
    },
    //revert: true,
    revert: function(dropped) {
        print("Dropped is this");
        print(dropped);
        var dropped = dropped && dropped.hasClass("droppable");
        if (!dropped) {
            print("Dropped Outside");
            //$(".draggable").draggable("option", "revertDuration", 200);
            return true;
        } else {
            print("Dropped inside");
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
        print("Dropped");
        newbox = ui.draggable.clone();
        newbox.removeClass("draggable");
        newbox.removeClass("item");
        newbox.addClass("workItem");
        newbox.css("width", "");
        print(newbox);
        newbox.appendTo($(this));
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
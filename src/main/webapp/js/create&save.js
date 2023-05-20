function saveAccount(id) {
    let value_name = $("#input_name_" + id).val();
    let value_title = $("#input_title_" + id).val();
    let value_race = $("#select_race_" + id).val();
    let value_profession = $("#select_profession_" + id).val();
    let value_banned = $("#select_banned_" + id).val();

    let url = "rest/players/" + id;
    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json;charset=UTF-8',
        async: false,
        data: JSON.stringify({
            "name": value_name,
            "title": value_title,
            "race": value_race,
            "profession": value_profession,
            "banned": value_banned,
        }),
        success: function () {
            showTable(currentPage);
        }
    });
}

function createAccount() {
    let value_name = $("#input_name_create").val();
    let value_title = $("#input_title_create").val();
    let value_race = $("#input_race_create").val();
    let value_profession = $("#input_profession_create").val();
    let value_level = $("#input_level_create").val();
    let value_birthday = $("#input_birthday_create").val();
    let value_banned = $("#input_banned_create").val();

    let url = "/rest/players"
    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json;charset=UTF-8',
        async: false,
        data: JSON.stringify({
            "name": value_name,
            "title": value_title,
            "race": value_race,
            "profession": value_profession,
            "level": value_level,
            "birthday": new Date(value_birthday).getTime(),
            "banned": value_banned,
        }),
        success: function () {
            $("#input_name_create").val("");
            $("#input_title_create").val("");
            $("#input_race_create").val("");
            $("#input_profession_create").val("");
            $("#input_level_create").val("");
            $("#input_birthday_create").val("");
            $("#input_banned_create").val("");
            showTable(currentPage);
        }

    });
}






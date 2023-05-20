function deleteAccount(id){
    let url = "/rest/players/" + id;

    $.ajax({
        url: url,
        type: 'DELETE',
        async: false,
        success: function (){
            showTable(currentPage);
        }
    });
}

function editAccount(id){
    $(`#button_delete_${id}`).remove();
    let editButton = $(`#button_edit_${id}`);

    let saveImage = $("<img src='/img/save.png' alt='Save'>");
    editButton.empty().append(saveImage);

    let currentRow = editButton.closest("tr");

    let nameCell = currentRow.find("td:nth-child(2)");
    nameCell.html(`<input id='input_name_${id}' type='text' value='${nameCell.text()}'>`);

    let titleCell = currentRow.find("td:nth-child(3)");
    titleCell.html(`<input id='input_title_${id}' type='text' value='${titleCell.text()}'>`);

    let raceCell = currentRow.find("td:nth-child(4)");
    let currentRaceValue = raceCell.text();
    raceCell.html(getRaceListHtml(id));
    $("#select_race_" + id).val(currentRaceValue).change();

    let professionCell = currentRow.find("td:nth-child(5)");
    let currentProfessionValue = professionCell.text();
    professionCell.html(getProfessionListHtml(id));
    $("#select_profession_" + id).val(currentProfessionValue).change();

    let bannedCell = currentRow.find("td:nth-child(8)");
    let currentBannedValue = bannedCell.text();
    bannedCell.html(getBannedListHtml(id));
    $("#select_banned_" + id).val(currentBannedValue).change();

    let saveAccount = `saveAccount(${id})`;
    editButton.attr('onclick', saveAccount);

}
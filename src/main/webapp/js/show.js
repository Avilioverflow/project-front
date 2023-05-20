let currentPage;


function showTable(page_num){
    let totalAccounts = countAllAcc();
    let countOnPage = $("#acc_on_page").val();
    if (countOnPage == null){
        countOnPage = 3;
    }
    if (page_num == null){
        page_num = 0;
    }

    let url = "/rest/players?";
    url = `${url}pageSize=${countOnPage}&pageNumber=${page_num}`;
    let isFirstLoad = true;

    $.ajax({
        url: url,
        type: 'GET',
        success: function (data){
            let tableBody = $("#table_accounts tbody");

            $("#table_accounts tbody").fadeOut(300, function() {
                tableBody.empty();
                data.forEach(function (item){
                    let row = $('<tr>');

                    row.append($('<td>').text(item.id));
                    row.append($('<td>').text(item.name));
                    row.append($('<td>').text(item.title));
                    row.append($('<td>').text(item.race));
                    row.append($('<td>').text(item.profession));
                    row.append($('<td>').text(item.level));
                    row.append($('<td>').text(new Date(item.birthday).toLocaleDateString()));
                    row.append($('<td>').text(item.banned));
                    let buttonEdit = $(`<button id='button_edit_${item.id}' onclick='editAccount(${item.id})'>`);
                    let imgEdit = $("<img src='/img/edit.png' alt='Edit'>");
                    buttonEdit.append(imgEdit);
                    row.append($('<td>').append(buttonEdit));
                    let buttonDelete = $(`<button id='button_delete_${item.id}' onclick='deleteAccount(${item.id})'>`);
                    let imgDelete = $("<img src='/img/delete.png' alt='Delete'>");
                    buttonDelete.append(imgDelete);
                    row.append($('<td>').append(buttonDelete));
                    tableBody.append(row);
            });

                if (isFirstLoad){
                    $("#table_accounts tbody").show();
                    isFirstLoad = false;
                } else {
                    $("#table_accounts tbody").fadeIn(300);
                }
            });
        }
    });

    let actualPagesCount = Math.ceil(totalAccounts / countOnPage);

    $(".paging_button_group").remove();

    for (let i = 0; i < actualPagesCount ; i++){
        let button = document.createElement('button');
        button.innerHTML = (i + 1).toString();
        button.id = "paging_button_" + i;
        button.onclick = function (){
            showTable(i);
        }
        button.classList.add('paging_button_group');

        document.getElementById('paging_btn_panel').appendChild(button);
    }

    let current_page_id = "#paging_button_" + page_num;
    $(current_page_id).css('color', "red");
    currentPage = page_num;

}

function countAllAcc(){
    let url = "/rest/players/count";
    let result = 0;

    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (data){
            result = data;
        }
    });
    return result;
}
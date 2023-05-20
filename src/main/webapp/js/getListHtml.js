function getRaceListHtml(id) {
    let race_id = "select_race_" + id;
    return "<label for='race'></label>"
        + "<select id=" + race_id + " name='race'>"
        + "<option value='HUMAN'>HUMAN</option>"
        + "<option value='DWARF'>DWARF</option>"
        + "<option value='ELF'>ELF</option>"
        + "<option value='GIANT'>GIANT</option>"
        + "<option value='ORC'>ORC</option>"
        + "<option value='TROLL'>TROLL</option>"
        + "<option value='HOBBIT'>HOBBIT</option>"
        + "</select>";
}

function getProfessionListHtml(id) {
    let profession_id = "select_profession_" + id;
    return "<label for='profession'></label>"
        + "<select id=" + profession_id + " name='profession'>"
        + "<option value='WARRIOR'>WARRIOR</option>"
        + "<option value='ROGUE'>ROGUE</option>"
        + "<option value='SORCERER'>SORCERER</option>"
        + "<option value='CLERIC'>CLERIC</option>"
        + "<option value='PALADIN'>PALADIN</option>"
        + "<option value='NAZGUL'>NAZGUL</option>"
        + "<option value='DRUID'>DRUID</option>"
        + "</select>";
}

function getBannedListHtml(id) {
    let banned_id = "select_banned_" + id;
    return "<label for='banned'></label>"
        + "<select id=" + banned_id + " name='banned'>"
        + "<option value='false'>false</option>"
        + "<option value='true'>true</option>"
        + "</select>";
}
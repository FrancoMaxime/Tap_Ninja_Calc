const petList = [
    ["Bunny"    ,"Critter"],
    ["Mouse"    ,"Critter"],
    ["Hedgehog" ,"Critter"],
    ["Snake"    ,"Critter"],
    ["Frog"     ,"Critter"],
    ["Squirrel" ,"Critter"],
    ["Cat"      ,"Beast"  ],
    ["Dog"      ,"Beast"  ],
    ["Fox"      ,"Beast"  ],
    ["Panda"    ,"Beast"  ],
    ["Turtle"   ,"Beast"  ],
    ["Racoon"   ,"Beast"  ],
    ["Chicken"  ,"Bird"   ],
    ["Crane"    ,"Bird"   ],
    ["Raven"    ,"Bird"   ],
    ["Dragonfly","Bird"   ],
    ["Dragon"   ,"Bird"   ],
    ["Parrot"   ,"Bird"   ]
];

const heroList = [
    ["Falkron", "Legendary", "Water", "Support" ],
    ["Tièr"   , "Legendary", "Water", "Mage"    ],
    ["Kito"   , "Legendary", "Water", "Assassin"],
    ["Fin"    , "Legendary", "Water", "Warrior" ],
    ["Elyanna", "Legendary", "Earth", "Support" ],
    ["Wasp"   , "Legendary", "Earth", "Mage"    ],
    ["Alivia" , "Legendary", "Earth", "Assassin"],
    ["Husk"   , "Legendary", "Earth", "Warrior" ],
    ["Irbinok", "Legendary", "Wind" , "Support" ],
    ["Scythe" , "Legendary", "Wind" , "Mage"    ],
    ["Akira"  , "Legendary", "Wind" , "Assassin"],
    ["Hiro"   , "Legendary", "Wind" , "Warrior" ],
    ["Maki"   , "Legendary", "Fire" , "Support" ],
    ["Blazer" , "Legendary", "Fire" , "Mage"    ],
    ["Scarlet", "Legendary", "Fire" , "Assassin"],
    ["Scorn"  , "Legendary", "Fire" , "Warrior" ],
    ["Ray"    , "Epic"     , "Fire" , "Mage"    ],
    ["Kaoru"  , "Epic"     , "Wind" , "Mage"    ],
    ["Terra"  , "Epic"     , "Earth", "Mage"    ],
    ["Demid"  , "Epic"     , "Water", "Mage"    ],
    ["Fang"   , "Rare"     , "Fire" , "Assassin"],
    ["Jari"   , "Rare"     , "Wind" , "Warrior" ],
    ["Jie"    , "Rare"     , "Earth", "Support" ],
    ["Kenju"  , "Rare"     , "Water", "Warrior" ]
]

const lookUpLvlMedalsTime = [
    [  0,       0],
    [  0,     200],
    [  2,   11520],
    [  5,   46080],
    [ 10,  103680],
    [ 15,  172800],
    [ 20,  270720],
    [ 30,  368640],
    [ 40,  460800],
    [ 60,  604800],
    [ 80,  806400],
    [100, 1152000],
    [125, 1152000],
    [150, 1152000],
    [175, 1152000]
];

const lookUpEquipaments = {
    "Kimono" : [
        [   0,   0],
        [  50,  25],
        [ 140,  50],
        [ 268,  75],
        [ 403, 100],
        [ 526, 125],
        [ 569, 150],
        [ 750, 175],
        [ 871, 200],
        [ 992, 225],
        [1113, 250],
        [1234, 275],
        [1355, 300],
        [1476, 325],
        [1598, 350],
        [1719, 375],
        [1840, 400],
        [1961, 425],
        [2082, 450],
        [2203, 475],
        [2324, 500],
        [2425, 525],
        [2505, 550],
        [2565, 575],
        [2605, 600],
        [2625, 625]
    ],
    "Katana" : [
        [   0,   0  ],
        [  75,   7.5],
        [ 142,  15  ],
        [ 241,  22.5],
        [ 408,  30  ],
        [ 536,  37.5],
        [ 664,  45  ],
        [ 792,  52.5],
        [ 920,  60  ],
        [1048,  67.5],
        [1176,  75  ],
        [1304,  82.5],
        [1431,  90  ],
        [1559,  97.5],
        [1687, 105  ],
        [1815, 112.5],
        [1943, 120  ],
        [2071, 127.5],
        [2199, 135  ],
        [2327, 142.5],
        [2455, 150  ],
        [2456, 157.5],
        [2457, 165  ],
        [2458, 172.5],
        [2459, 180  ],
        [2460, 187.5]
    ],
    "Kabuto" : [
        [   0,  0  ],
        [ 100,  2.5],
        [ 221,  5  ],
        [ 349,  7.5],
        [ 484, 10  ],
        [ 607, 12.5],
        [ 727, 15  ],
        [ 842, 17.5],
        [ 952, 20  ],
        [1057, 22.5],
        [1158, 25  ],
        [1259, 27.5],
        [1360, 30  ],
        [1461, 32.5],
        [1562, 35  ],
        [1663, 37.5],
        [1764, 40  ],
        [1865, 42.5],
        [1966, 45  ],
        [2067, 47.5],
        [2168, 50  ],
        [2269, 52.5],
        [2370, 55  ],
        [2471, 57.5],
        [2572, 60  ],
        [2673, 62.5],
    ],
    "Geta" : [
        [   0,   0],
        [  50,  15],
        [ 100,  30],
        [ 175,  45],
        [ 250,  60],
        [ 330,  75],
        [ 410,  90],
        [ 490, 105],
        [ 570, 120],
        [ 650, 135],
        [ 735, 150],
        [ 820, 165],
        [ 905, 180],
        [ 990, 195],
        [1075, 210],
        [1165, 225],
        [1255, 240],
        [1345, 255],
        [1435, 270],
        [1525, 285],
        [1620, 300],
        [1715, 315],
        [1810, 330],
        [1905, 345],
        [2000, 360],
        [2095, 375]
    ]
}

function start(){
    let petTable = $("#petTable");
    petList.forEach(pet => {
        let tr = $("<tr></tr>").addClass(pet[1]);
        let th = $("<th></th>");
        let label = $("<label></label>").attr("for", "in" + pet[0])
            .text(pet[0]);
        th.append(label);
        let td0 = $("<td></td>");
        let input = $("<input></input>").attr("type", "number")
            .attr("min", 0).attr("max", 15)
            .attr("id", "in" + pet[0])
            .attr("name", "in" + pet[0])
            .val(localStorageGetItem(pet[0]+"Bond", 0));
        input.change(onChangePetBond);
        td0.append(input);
        let td1 = $("<td></td>").attr("id", "out" + pet[0] + "Medals").text("NaN");
        let td2 = $("<td></td>").attr("id", "out" + pet[0] + "Time").text("NaN");
        let td3 = $("<td></td>").attr("id", "out" + pet[0] + "MedalsSpent").text("NaN");
        tr.append(th).append(td0).append(td1).append(td2).append(td3);
        petTable.append(tr);
    });
    let totalPet = $("<tr class='header'><th>Total</td><td id='outTotalBond'>NaN</td><td id='outTotalMedals'>NaN</td><td id='outTotalTime'>NaN</td></td><td id='outTotalMedalsSpent'>NaN</td>");
    petTable.append(totalPet);

    let equipamentTable = $("#equipamentTable");
    Object.keys(lookUpEquipaments).forEach(item => {
        let tr = $("<tr></tr>").addClass("legend");
        let th = $("<th></th>");
        let label = $("<label></label>").attr("for", "in" + item)
            .text(item);
        th.append(label);
        let td0 = $("<td></td>");
        let input = $("<input></input>").attr("type", "number")
            .attr("min", 0).attr("max", lookUpEquipaments[item][25][1])
            .attr("step", lookUpEquipaments[item][2][1] - lookUpEquipaments[item][1][1])
            .attr("id", "in" + item)
            .attr("name", "in" + item)
            .val(localStorageGetItem(item+"Bonus", 0));
        input.change(onChangeEquipamentBonus);
        td0.append(input);
        let td1 = $("<td></td>").attr("id", "out" + item + "Level").text("NaN");
        let td2 = $("<td></td>").attr("id", "out" + item + "Cost").text("NaN");
        let td3 = $("<td></td>").attr("id", "out" + item + "Amber").text("NaN");
        tr.append(th).append(td0).append(td1).append(td2).append(td3);
        equipamentTable.append(tr);
    });
    let totalEquipament = $("<tr class='header'><th>Total</td><td colspan='3'></td><td id='outTotalAmber'>NaN</td></td>");
    equipamentTable.append(totalEquipament);

    onChangePetBond();
    onChangeEquipamentBonus();
    petTab();
}

function onChangePetBond(event){
    let bondTotal = 0;
    let medalsTotal = 0;
    let timeTotal = 0;
    let medalsSpentTotal = 0;
    petList.forEach(pet => {
        localStorage.setItem(pet[0]+"Bond", Number($("#in" + pet[0]).val()));
        bondTotal += Number($("#in" + pet[0]).val());
        let medalResult = calcMedals($("#in" + pet[0]).val());
        $("#out" + pet[0] + "Medals").text(medalResult);
        medalsTotal += medalResult;
        let timeResult = calcTime($("#in" + pet[0]).val());
        $("#out" + pet[0] + "Time").text(formatTime(timeResult));
        timeTotal += timeResult;
        let medalsSpentResult = calcMedalsSpent($("#in" + pet[0]).val());
        $("#out" + pet[0] + "MedalsSpent").text(medalsSpentResult);
        medalsSpentTotal += medalsSpentResult;
    });
    $("#outTotalBond").text(bondTotal);
    $("#outTotalMedals").text(medalsTotal);
    $("#outTotalTime").text(formatTime(timeTotal));
    $("#outTotalMedalsSpent").text(medalsSpentTotal);
}

function onChangeEquipamentBonus(event){
    let lvlTotal = 0;
    let amberTotal = 0;
    Object.keys(lookUpEquipaments).forEach(item => {
        localStorage.setItem(item+"Bonus", Number($("#in" + item).val()));
        let step = lookUpEquipaments[item][2][1] - lookUpEquipaments[item][1][1];
        let lvl = Number($("#in" + item).val())/step;
        lvlTotal += lvl;
        let cost = lookUpEquipaments[item][(lvl + 1)%26][0];
        let amber = calcAmber(item, lvl);
        amberTotal += amber;
        $("#out" + item + "Level").text(lvl);
        $("#out" + item + "Cost" ).text(cost);
        $("#out" + item + "Amber").text(amber);
    });
    $("#outTotalAmber").text(amberTotal);
    let lvlTotalWidth = (lvlTotal / (Object.keys(lookUpEquipaments).length * 25)) * 100
    $("#equipamentBar div").attr("style", "width:" + lvlTotalWidth + "%;").text("+" + lvlTotal + "%");
}

function calcMedals(bond){
    let result = 0;
    for (let s = Number(bond); s < lookUpLvlMedalsTime.length; s++) {
        result += lookUpLvlMedalsTime[s][0];
    }
    return result;
}

function calcMedalsSpent(bond){
    let result = 0;
    for (let s = 0; s < Number(bond); s++) {
        result += lookUpLvlMedalsTime[s][0];
    }
    return result;
}

function calcTime(bond){
    let result = 0;
    for (let s = Number(bond); s < lookUpLvlMedalsTime.length; s++) {
        result += lookUpLvlMedalsTime[s][1];
    }
    return result;
}

function calcAmber(item, lvl){
    if (lvl == 25) return 0;
    let result = 0;
    for (let s = Number(lvl + 1); s < lookUpEquipaments[item].length; s++) {
        result += lookUpEquipaments[item][s][0];
    }
    return result;
}

function localStorageGetItem(key, value){
    return localStorage.getItem(key) == null ? value : localStorage.getItem(key);
}

function formatTime(secs){
    if (Number(secs) == 0) return "00h 00m 00s";
    var sec_num = parseInt(secs, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;

    result = [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0);

    return result[0] + "h " + result[1] + "m " + result[2] + "s";
}

function petTab(){
    $("#petTable").show();
    $("#equipamentTable").hide();
    $("#equipamentTabButton").removeClass();
    $("#petTabButton").addClass("selected");
}

function equipamentTab(){
    $("#petTable").hide();
    $("#equipamentTable").show();
    $("#petTabButton").removeClass();
    $("#equipamentTabButton").addClass("selected");
}

$(document).ready(start());
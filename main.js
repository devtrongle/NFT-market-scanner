getCategory();


let pageSize = 99999999;

function getCategoryOff() {
    return [{
            "groupName": "Egg",
            "list": [{
                "code": "Egg",
                "name": "Egg",
                "id": 17,
                "tokenId": -1
            }]
        },
        {
            "groupName": "Metamon",
            "list": [{
                    "code": "Metamon",
                    "name": "Metamon",
                    "id": 13,
                    "tokenId": -1
                },
                {
                    "code": "RMetamon",
                    "name": "R-Metamon",
                    "id": 23,
                    "tokenId": -1
                },
                {
                    "code": "SRMetamon",
                    "name": "SR-Metamon",
                    "id": 24,
                    "tokenId": -1
                },
                {
                    "code": "SSRMetamon",
                    "name": "SSR-Metamon",
                    "id": 25,
                    "tokenId": -1
                }
            ]
        },
        {
            "groupName": "Potion",
            "list": [{
                "code": "Potion",
                "name": "Potion",
                "id": 15,
                "tokenId": -1
            }]
        },
        {
            "groupName": "Diamond",
            "list": [{
                    "code": "Diamond",
                    "name": "Yellow Diamond",
                    "id": 16,
                    "tokenId": 0
                },
                {
                    "code": "Diamond",
                    "name": "Purple Diamond",
                    "id": 16,
                    "tokenId": 1
                },
                {
                    "code": "Diamond",
                    "name": "Black Diamond",
                    "id": 16,
                    "tokenId": 2
                }
            ]
        },
        {
            "groupName": "Land",
            "list": [{
                    "code": "MML",
                    "name": "Musk USM LAND",
                    "id": 7,
                    "tokenId": -1
                },
                {
                    "code": "MetamonUL",
                    "name": "Metamon USM LAND",
                    "id": 8,
                    "tokenId": -1
                },
                {
                    "code": "KISS",
                    "name": "Kiss-up State Land",
                    "id": 20,
                    "tokenId": -1
                },
                {
                    "code": "NCA",
                    "name": "New California N Land",
                    "id": 29,
                    "tokenId": -1
                },
                {
                    "code": "NCAR",
                    "name": "New California R Land",
                    "id": 30,
                    "tokenId": -1
                },
                {
                    "code": "NCASR",
                    "name": "New California SR Land",
                    "id": 31,
                    "tokenId": -1
                },
                {
                    "code": "NCASSR",
                    "name": "New California SSR Land",
                    "id": 32,
                    "tokenId": -1
                },
                {
                    "code": "NCASSSR",
                    "name": "New California SSSR Land",
                    "id": 33,
                    "tokenId": -1
                },
                {
                    "code": "NHarN",
                    "name": "New Harvard State N Land",
                    "id": 34,
                    "tokenId": -1
                },
                {
                    "code": "NHarR",
                    "name": "New Harvard State R Land",
                    "id": 35,
                    "tokenId": -1
                },
                {
                    "code": "NHarSR",
                    "name": "New Harvard State SR Land",
                    "id": 36,
                    "tokenId": -1
                },
                {
                    "code": "NHarSSR",
                    "name": "New Harvard State SSR Land",
                    "id": 37,
                    "tokenId": -1
                },
                {
                    "code": "NHarSSSR",
                    "name": "New Harvard State SSSR Land",
                    "id": 38,
                    "tokenId": -1
                },
                {
                    "code": "NOXN",
                    "name": "New Oxford State N Land",
                    "id": 39,
                    "tokenId": -1
                },
                {
                    "code": "NOXR",
                    "name": "New Oxford State R Land",
                    "id": 40,
                    "tokenId": -1
                },
                {
                    "code": "NOXSR",
                    "name": "New Oxford State SR Land",
                    "id": 41,
                    "tokenId": -1
                },
                {
                    "code": "NOXSSR",
                    "name": "New Oxford State SSR Land",
                    "id": 42,
                    "tokenId": -1
                },
                {
                    "code": "NOXSSSR",
                    "name": "New Oxford State SSSR Land",
                    "id": 43,
                    "tokenId": -1
                }
            ]
        },
        {
            "groupName": "Kiss-Up-Dog",
            "list": [{
                    "code": "RKD",
                    "name": "R Kiss-Up-Dog",
                    "id": 44,
                    "tokenId": -1
                },
                {
                    "code": "SRKD",
                    "name": "SR Kiss-Up-Dog",
                    "id": 22,
                    "tokenId": -1
                },
                {
                    "code": "SSRKD",
                    "name": "SSR Kiss-Up-Dog",
                    "id": 27,
                    "tokenId": -1
                }
            ]
        },
        {
            "groupName": "BMB",
            "list": [{
                    "code": "BMBMUSK",
                    "name": "BMBMUSK",
                    "id": 18,
                    "tokenId": -1
                },
                {
                    "code": "BMBRACA",
                    "name": "BMBRACA",
                    "id": 19,
                    "tokenId": -1
                }
            ]
        },
        {
            "groupName": "Avatar",
            "list": [{
                    "code": "EggA",
                    "name": "Egg Avatar",
                    "id": 14,
                    "tokenId": -1
                },
                {
                    "code": "MetamonA",
                    "name": "Metamon Avatar",
                    "id": 5,
                    "tokenId": -1
                },
                {
                    "code": "PotionA",
                    "name": "Potion Avatar",
                    "id": 6,
                    "tokenId": -1
                },
                {
                    "code": "MDMA",
                    "name": "Diamond Avatar",
                    "id": 4,
                    "tokenId": -1
                }
            ]
        },
        {
            "groupName": "Other",
            "list": [{
                    "code": "MPB",
                    "name": "Matrix Plus Box",
                    "id": 10,
                    "tokenId": -1
                },
                {
                    "code": "Tesla",
                    "name": "Tesla",
                    "id": 3,
                    "tokenId": -1
                },
                {
                    "code": "SNG",
                    "name": "SpaceXNaut Dog",
                    "id": 9,
                    "tokenId": -1
                },
                {
                    "code": "BMM",
                    "name": "Bake Musk Mixer",
                    "id": 11,
                    "tokenId": -1
                },
                {
                    "code": "DING",
                    "name": "DING",
                    "id": 12,
                    "tokenId": -1
                },
                {
                    "code": "MBOX",
                    "name": "Mystery Box",
                    "id": 21,
                    "tokenId": -1
                },
                {
                    "code": "DFD",
                    "name": "Dragon Fruit Dog",
                    "id": 26,
                    "tokenId": -1
                },
                {
                    "code": "RACAPunk",
                    "name": "RACAPunk",
                    "id": 28,
                    "tokenId": -1
                },
                {
                    "code": "OTHERS",
                    "name": "Others",
                    "id": 1,
                    "tokenId": -1
                }
            ]
        }
    ]
}

function getCategory() {

    var lineNo = 0;

    var data = getCategoryOff();
    for (let groups of data) {
        for (let item of groups['list']) {

            let name = item['name'];
            let code = item['code'];
            let id = item['id'];

            var col = `<tr id="${code}">
                    <th scope="row">${lineNo}</th>
                    <td>${name}</td>
                    <td>???</td>
                    <td>???</td>
                    <td>???</td>
                    <td>
                        <button type="button" class="btn btn-primary" onClick="getData(${lineNo},'${code}',${id},'${name}')">GET</button>
                    </td>
                </tr>`

            tableBody = $("table tbody");
            tableBody.append(col);
            lineNo++;
        }
    }
    // var url = `https://market-api.radiocaca.com/categories`
    // $.getJSON(url, function(data) {
    //     for (let groups of data['groups']) {
    //         for (let item of groups['list']) {
    //             let name = item['name'];
    //             let code = item['code'];
    //             let id = item['id'];

    //             var col = `<tr id="${code}">
    //                     <th scope="row">${lineNo}</th>
    //                     <td>${name}</td>
    //                     <td>???</td>
    //                     <td>???</td>
    //                     <td>???</td>
    //                     <td>
    //                         <button type="button" class="btn btn-primary" onClick="getData(${lineNo},'${code}',${id},'${name}')">GET</button>
    //                     </td>
    //                 </tr>`

    //             tableBody = $("table tbody");
    //             tableBody.append(col);
    //             lineNo++;
    //         }
    //     }

    // });
}

function getCurrentTime() {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + ' ' + time;
}

function getData(no, code, categoryID, categoryName) {
    var col = `<tr id="${code}">
                    <th scope="row">${no}</th>
                    <td>${categoryName}</td>
                    <td>???</td>
                    <td>???</td>
                    <td>???</td>
                    <td>
                        <div class="loader"></div>
                    </td>
                </tr>`
    document.getElementById(code).innerHTML = col

    var url = `https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=${pageSize}&sortBy=single_price&order=asc&category=${categoryID}`

    $.getJSON(url, function(data) {
        console.log("Success")
        var count = 0;
        var price = 0;
        if (data['list'].length > 0) {
            for (let item of data['list']) {
                count += item['count'];
            }
            price = Number(data['list'][0]['fixed_price']) / Number(data['list'][0]['count'])
        }

        var col = `<tr>
                        <th scope="row">${no}</th>
                        <td>${categoryName}</td>
                        <td>${count}</td>
                        <td>${Intl.NumberFormat().format(price)}</td>
                        <td>${getCurrentTime()}</td>
                        <td>
                            <button type="button" class="btn btn-primary" onClick="getData(${no},'${code}',${categoryID},'${categoryName}')">GET</button>
                        </td>
                    </tr>`;
        document.getElementById(code).innerHTML = col
    });
}
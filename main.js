getData();


function getData() {
    //Show loading
    document.getElementById('loading').style.display = "block";

    //Get categories
    let url = 'https://market-api.radiocaca.com/categories';
    $.getJSON(url, function(category) {
        //Hide loading
        document.getElementById('loading').style.display = "none";
        var lineNo = 0;
        var data = category['groups'];
        for (let groups of data) {
            for (let item of groups['list']) {

                let categoryName = item['name'];
                let code = item['code'];
                let categoryID = item['id'];
                let tokenID = item['tokenId'];
                var col = `<tr id="${code}${tokenID}">
                <th scope="row">${lineNo}</th>
                <td>${categoryName}</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
                <td>?</td>
                <td><div class="loader"/></td>
            </tr>`
                tableBody = $("table tbody");
                tableBody.append(col);

                getFullData(lineNo, code + "" + tokenID, categoryID, categoryName, tokenID);
                lineNo++;
            }
        }

    });
}

function getCurrentTime() {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + ' ' + time;
}

function getWholesaleCount(data, startAt, endAt) {
    var count = 0;
    var prices = []
    for (let item of data['list']) {
        var c = item['count'];
        if (c >= startAt && c <= endAt) {
            count++;
            prices.push(Number(item['fixed_price']) / Number(item['count']));
        }

        if (item['name'] == "Metamon Egg" && item['count'] > 500 && startAt == 501) {
            console.log(item)
        }
    }

    //Sắp xếp giá trị tăng dần
    prices.sort(function(a, b) { return a - b; });

    lowest_price = 0;
    if (prices.length > 0)
        lowest_price = prices[0];
    return {
        "count": count,
        "lowest_price": lowest_price
    };
}

async function getFullData(no, code, categoryID, categoryName, tokenId) {
    let pageSize = 999999999;
    var url = `https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=${pageSize}&sortBy=single_price&order=asc&category=${categoryID}&tokenId=${tokenId}`
    $.getJSON(url, function(data) {
        var count = 0;
        var price = 0;
        if (data['list'].length > 0) {
            price = Number(data['list'][0]['fixed_price']) / Number(data['list'][0]['count'])
            for (let item of data['list']) {
                count += item['count'];
                var tmpPrice = Number(item['fixed_price']) / Number(item['count'])
                if (tmpPrice < price)
                    price = tmpPrice;
            }
        }

        //Số lượng bán lẻ 1
        var retail_cout = getWholesaleCount(data, 1, 1);

        //Số lượng sỉ 2
        var wholesale_count_2 = getWholesaleCount(data, 2, 50);

        //Số lượng sỉ 51
        var wholesale_count_51 = getWholesaleCount(data, 51, 150);

        //Số lượng sỉ 151
        var wholesale_count_151 = getWholesaleCount(data, 151, 500);

        //Số lượng sỉ 500
        var wholesale_count_500 = getWholesaleCount(data, 501, 999999999999);

        var col = `<tr>
                        <th scope="row">${no}</th>
                        <td>${categoryName}</td>
                        <td>${count == 0 ? 'x' : Intl.NumberFormat().format(count)}</td>
                        ${getValueCol(retail_cout, true)}
                        ${getValueCol(wholesale_count_2)}
                        ${getValueCol(wholesale_count_51)}
                        ${getValueCol(wholesale_count_151)}
                        ${getValueCol(wholesale_count_500)}
                        <td><span style="color: rgb(2, 109, 248);">${price == 0 ? 'x' : Intl.NumberFormat().format(price) + '<span> <img src="./raca.png" width="15px" height="15px"/>'} </td>
                        <td>
                        <span style="color: green;"><b>Completed</b></span>
                        </td>
                    </tr>`;
        document.getElementById(code).innerHTML = col
        document.getElementById('timeUpdate').innerHTML = "Cập nhật lần cuối: " + getCurrentTime() + ' | Auth: <a href="https://t.me/batrong2709">Dev James</a>';
    });
}

function getValueCol(val, isRetail = false) {
    var color = isRetail ? 'rgb(248, 100, 2)' : 'rgb(219, 2, 248)'
    if (val['count'] == 0)
        return `<td>x</td>`;
    else
        return `<td><span style="color: ${color}">${Intl.NumberFormat().format(val['count'])}</span><br><span style="color: rgb(2, 109, 248);">${Intl.NumberFormat().format(val['lowest_price'])}</span> <img src="./raca.png" width="15px" height="15px"/></td>`;
}

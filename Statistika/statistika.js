//Nomor 1
var data = [4, 1, 3, 7, 2, 1];
console.log("Diketahui data sebagai berikut: " + data)

//Rata-rata data
var totalData = 0;
for(var i = 0; i < data.length; i++) {
    totalData += data[i]
}
var rataRata = totalData / data.length;
console.log("Rata-rata dari data tersebut adalah " + rataRata);

//Jumlah modus dan kuartil 1
//Modus
var textArr = new Array();

arrOne = [0,1,0,2,3,10,10]
arrTwo = [1,2,3,1,1,1]

mode_without_associative_arrays(arrOne) // works fine
mode_without_associative_arrays(arrTwo) // doesn't work

function mode_without_associative_arrays(arr)
{
    if(arr.length == 0)
    return null;

    var collectArr = []; // array
    var countArr = []  // array to hold the count of each element in collectArr
    collectArr[0] = arr[0]
    countArr[0] = 1
    var mode = arr[0]
    maxCount = 1;

    for(var i = 0; i < arr.length; i++)
    {
        var ele = arr[i];

        for(var j = 0; j < collectArr.length; j++)
        {
            var addMe = false;
            if (collectArr[j] != ele) addMe = true
        }

            if (addMe == true)
            {
                collectArr.push(ele)
                countArr.push(1)
            }
            else
            {
                // count it up
                countArr[j]+=1
                if (countArr[j] > maxCount) 
                {
                    maxCount = countArr[j]
                    mode = ele
                }
            }
        }

        alert("Mode is " + mode + " which appears " + maxCount + " times!")
        return mode;
}
//Kuartil 1
// sort array ascending
const asc = arr => arr.sort((a, b) => a - b);

const sum = arr => arr.reduce((a, b) => a + b, 0);

const mean = arr => sum(arr) / arr.length;

// sample standard deviation
const std = (arr) => {
    const mu = mean(arr);
    const diffArr = arr.map(a => (a - mu) ** 2);
    return Math.sqrt(sum(diffArr) / (arr.length - 1));
};

const quantile = (arr, q) => {
    const sorted = asc(arr);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    } else {
        return sorted[base];
    }
};

const q25 = arr => quantile(arr, .25);

const q50 = arr => quantile(arr, .50);

const q75 = arr => quantile(arr, .75);

const median = arr => q50(arr);
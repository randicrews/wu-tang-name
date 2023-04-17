document.getElementById('submit').addEventListener('click', run)

let lastRes = []
let firstRes = []

function run(){
    if ((document.querySelector('input[name="last1"]:checked').value) != null 
    && (document.querySelector('input[name="last2"]:checked').value) != null 
    && (document.querySelector('input[name="last3"]:checked').value) != null
    && (document.querySelector('input[name="first1"]:checked').value) != null
    && (document.querySelector('input[name="first2"]:checked').value) != null
    && (document.querySelector('input[name="first3"]:checked').value) != null){
        lastRes.push(document.querySelector('input[name="last1"]:checked').value)
        lastRes.push(document.querySelector('input[name="last2"]:checked').value)
        lastRes.push(document.querySelector('input[name="last3"]:checked').value)
        firstRes.push(document.querySelector('input[name="first1"]:checked').value)
        firstRes.push(document.querySelector('input[name="first2"]:checked').value)
        firstRes.push(document.querySelector('input[name="first3"]:checked').value)
        // console.log(lastRes, 'last')
        // console.log(firstRes, 'first')
    }
    function checkRes(){
        function check(array){
            for (let i = 0; i < array.length; i++) {
                for (let j = i + 1; j < array.length; j++) {
                  if (array[i] === array[j]) {
                    return array[j]
                    // console.log(array)
                  }
                }
            }
            return 'd'
        }
        const first = check(firstRes)
        console.log(first, 'first')
        const last = check(lastRes)
        console.log(last, 'last')
        if (first == 'a'){
            firstRes = 'Lil Grimey'
            console.log(firstRes)
        }
        if (first == 'b'){
            firstRes = 'Methodical'
            console.log(firstRes)
        }
        if (first == 'c'){
            firstRes = 'Spookyhead'
            console.log(firstRes)
        }
        if (first == 'd'){
            firstRes = 'Jr. Detective'
            console.log(firstRes)
        }
        
        if (last == 'a'){
            lastRes = 'Heathen'
            console.log(lastRes)
        }
        if (last == 'b'){
            lastRes = 'Mang'
            console.log(lastRes)
        }
        if (last == 'c'){
            lastRes = 'Murderah'
            console.log(lastRes)
        }
        if (last == 'd'){
            lastRes = 'Godess'
            console.log(lastRes)
        }
        console.log(`${firstRes} ${lastRes}`)
        document.getElementById('name').innerText = `${firstRes} ${lastRes}`
    }
    checkRes()
    lastRes = []
    firstRes = []
}


// let firstRes = []
// firstRes.push(document.querySelector('input[name="first1"]:checked').value)
// firstRes.push(document.querySelector('input[name="first2"]:checked').value)
// firstRes.push(document.querySelector('input[name="first3"]:checked').value)
// let lastRes = []
// lastRes.push(document.querySelector('input[name="last1"]:checked').value)
// lastRes.push(document.querySelector('input[name="last2"]:checked').value)
// lastRes.push(document.querySelector('input[name="last3"]:checked').value)

// console.log(firstRes, 'first')
// console.log(lastRes, 'last')
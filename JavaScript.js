async function getApi(){
    try {
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        // send request api from server
        const req = await fetch(url, {
            method:'GET'
        })
        console.log(req)
        const res = await req.json() // convert data to JSON data
        console.log(res)
        document.getElementById('time').innerText = res.time.updated
        document.getElementById('usd').innerText = res.bpi.USD.rate
        document.getElementById('eur').innerText = res.bpi.EUR.rate
        document.getElementById('gbp').innerText = res.bpi.GBP.rate

    } catch (error) {
        console.error(error)
    }
}
// call function
getApi()
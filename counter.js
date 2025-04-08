const counts = document.querySelectorAll('.count')
const speed = 97
counts.forEach((counter) => {
    function upData() {
        console.log("hi asif");
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed
        if (count < target) {
            counter.innerText = Math.floor(inc + count)
            setTimeout(upData, 1000)
        } else {
            counter.innerText = target
        }
    }
    upData()
})
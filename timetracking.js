const dailyBtn = document.querySelector('#daily-btn');
const weeklyBtn = document.querySelector('#weekly-btn');
const mothlyBtn = document.querySelector('#monthly-btn');

const hours = document.querySelectorAll('.hours');
const lastTime = document.querySelectorAll('.last-time');

function dailyData(){

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
                lastTime[i].innerHTML = 'Last Daily - ' + data[i].timeframes.daily.previous + 'hrs';
            })
        })
}

function weeklyData(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs'
                lastTime[i].innerHTML = 'Last Weekly - ' + data[i].timeframes.weekly.previous + 'hrs'
            })
        })
}

function mothlyData(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs'
                lastTime[i].innerHTML = 'Last Monthly - ' + data[i].timeframes.monthly.previous + 'hrs'
            })
        })
}


dailyBtn.addEventListener('click', () => {
    dailyBtn.classList.remove('text-time')
    weeklyBtn.classList.add('text-time')
    mothlyBtn.classList.add('text-time')
    dailyData()
})

weeklyBtn.addEventListener('click', () => {
    weeklyBtn.classList.remove('text-time')
    mothlyBtn.classList.add('text-time')
    dailyBtn.classList.add('text-time')
    weeklyData()
})

mothlyBtn.addEventListener('click', () => {
    mothlyBtn.classList.remove('text-time')
    dailyBtn.classList.add('text-time')
    weeklyBtn.classList.add('text-time')
    mothlyData()
})

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, action) {
        if(!time || !action) {
            throw new Error('Отсутствуют обязательные аргументы')
        } else if(this.alarmCollection.includes(time)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({callback: action, time: time, canCall: true})
    }

    removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter((n) => n.time !== time)
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        return currentDate.getHours() + ":" + currentDate.getMinutes();
    }

    start() {
        if(this.intervalId) {
            return;
        }

       this.intervalId = setInterval((alarmCollection, getCurrentFormattedTime) => {
        console.log('collection', alarmCollection);
        alarmCollection.forEach(element => {
            if(element.time === getCurrentFormattedTime() && element.canCall === true) {
                element.canCall = false;
                element.callback();
            }
        });        
    }, 1000, this.alarmCollection, this.getCurrentFormattedTime);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(element => element.canCall = true) 
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
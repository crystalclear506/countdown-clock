import React from 'react';
import styles from './styles/style.css';

class CountdownClock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            secondsDisp: '00',
            minutesDisp: '00',
            hoursDisp: '00',
            daysDisp: '0',
            milisDisp: '00',
            endTime: null,
            isTimeout: false,
        };
    }

    setCountdownEnd(endTime) {
        this.setState({
            endTime: endTime
        });
        this.initializeClock();
    }

    _onUpdateInterval() {
        let diff = this.state.endTime - new Date().getTime();

        if (diff <= 0) {
            this.setState({
                isTimeout: true
            });
            diff = 0;
            clearInterval(this.intervalId);
        }

        const mili = diff;
        const seconds = mili / 1000;
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;

        let milisDisp = mili % 1000;
        let secondsDisp = seconds % 60;
        let minutesDisp = minutes % 60;
        let hoursDisp = hours % 24;
        let daysDisp;

        milisDisp = Math.floor(milisDisp/10).toString().padStart(2, '0');
        secondsDisp = Math.floor(secondsDisp).toString().padStart(2, '0');
        minutesDisp = Math.floor(minutesDisp).toString().padStart(2, '0');
        hoursDisp = Math.floor(hoursDisp).toString().padStart(2, '0');
        daysDisp = Math.floor(days);

        this.setState({
            milisDisp,
            secondsDisp,
            minutesDisp,
            hoursDisp,
            daysDisp
        });
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    initializeClock() {
        this.intervalId = setInterval(() => {
            this._onUpdateInterval();
        }, 1);
    }

    render() {
        return (
            <div className={styles['clock-container']}>
                <div className={styles.clock}>
                    <div className={styles.cell}> 
                        <div>{ this.state.daysDisp }</div>
                        <div className={styles.label}> Days </div> 
                    </div>
                    <div className={styles.cell}> 
                        <div>{ this.state.hoursDisp }</div>
                        <div className={styles.label}> Hours </div> 
                    </div>
                    <div className={styles.cell}> 
                        <div>{ this.state.minutesDisp }</div>
                        <div className={styles.label}> Minutes </div> 
                    </div>
                    <div className={styles.cell}> 
                        <div>{ this.state.secondsDisp }</div>
                        <div className={styles.label}> Seconds </div> 
                    </div>

                </div>
            </div>
        );
    }
}

export default CountdownClock;
import React from 'react';
import Cell from './cell';
import './styles/style.css';

const Colons = () => <div className='colons'><div>:</div></div>;
class CountdownClock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            secondsDisp: '',
            minutesDisp: '',
            hoursDisp: '',
            daysDisp: '',
            milisDisp: '',
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

        milisDisp = Math.floor(milisDisp);
        secondsDisp = Math.floor(secondsDisp);
        minutesDisp = Math.floor(minutesDisp);
        hoursDisp = Math.floor(hoursDisp);
        daysDisp = Math.floor(days);

        this.setState({
            milisDisp,
            secondsDisp,
            minutesDisp,
            hoursDisp,
            daysDisp
        });
    }

    initializeClock() {
        this.intervalId = setInterval(() => {
            this._onUpdateInterval();
        }, 1);
    }

    _getHour() {
        return this.state.hoursDisp.toString().padStart(2, '0');
    }

    _getMinute() {
        return this.state.minutesDisp.toString().padStart(2, '0');
    }

    _getSecond() {
        return this.state.secondsDisp.toString().padStart(2, '0');
    }

    _getMilisecond() {
        return this.state.milisDisp.toString().padStart(3, '0'); 
    }

    render() {
        return (
            <div className='clock-container'>
                <div className='clock'>
                    <Cell value={ this._getHour() } />
                    <Colons/>
                    <Cell value={ this._getMinute() } />
                    <Colons/>
                    <Cell value={ this._getSecond() } />
                    <Colons/>
                    <Cell value={ this._getMilisecond() } />
                </div>
            </div>
        );
    }
}

export default CountdownClock;
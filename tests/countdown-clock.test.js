import { expect, test } from '@jest/globals';
import React from 'react';
import renderer from 'react-test-renderer';
import CountdownClock from '../src/Components/countdown-clock';

jest.useFakeTimers();

test('Component should be rendered correctly', () => {
    const testRenderer = renderer.create(
        <CountdownClock/>
    );
    
    expect(testRenderer).toMatchSnapshot();
});

test('Countdown should decrement correctly', (done) => {
    const testRenderer = renderer.create(
        <CountdownClock/>
    );

    const component = testRenderer.getInstance();

    const seconds = 1000 * 60;
    const timeLater = new Date().getTime() + seconds;
    component.setCountdownEnd(timeLater);
    
    
    setTimeout(() => {
        expect(component.state.secondsDisp).toBe(30);
    }, seconds / 2);

    setTimeout(() => {
        expect(component.state.secondsDisp).toBe(0);
    }, seconds);    
    
    jest.runAllTimers();
    done();
})
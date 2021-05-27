import { expect, test } from '@jest/globals';
import React from 'react';
import renderer from 'react-test-renderer';
import CountdownClock from '../countdown-clock';


test('Component should rendered correctly', () => {
    const countdownClock = renderer.create(
        <CountdownClock/>
    );
    expect(countdownClock).toBeDefined();
});
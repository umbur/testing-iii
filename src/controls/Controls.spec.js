// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Controls from './Controls';

const mock = jest.fn()

describe('<Controls />', () => {
    it('should call the toggleLocked function passed as prop to unlock the gate', () => {
        const { getByText } = render(<Controls locked = {true} closed={true} toggleLocked={mock} />)
        fireEvent.click(getByText(/unlock/i))
        expect(mock).toHaveBeenCalledTimes(1)
    })
    it('should call the toggleClosed function passed as prop to open an unlocked closed gate', () => {
        const { getByText } = render(<Controls locked={false} closed={true} toggleLocked={mock} toggleClosed={mock} />);
        fireEvent.click(getByText(/open/i));
        expect(mock).toHaveBeenCalledTimes(1);
        mock.mockClear();
    })
    it('should call the toggleClosed function passed as prop to close an open gate', () => {
        const { getByText } = render(<Controls locked={false} closed={false} toggleLocked={mock} toggleClosed={mock} />);
        fireEvent.click(getByText(/close/i));
        expect(mock).toHaveBeenCalledTimes(1);
        mock.mockClear();
    })
    it('should call the toggleLocked function passed as prop to lock an unlocked closed gate', () => {
        const { getByText } = render(<Controls locked={false} closed={true} toggleLocked={mock} toggleClosed={mock} />);
        fireEvent.click(getByText(/lock/i));
        expect(mock).toHaveBeenCalledTimes(1);
        mock.mockClear();
    });

    

})
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TaskItem from './TaskItem';
import mockData from '../mockData';

describe('<TaskItem /> test', () => {

    it('should show name of each task', () => {
        render(<TaskItem item={mockData[0]} />);
        screen.debug();
        expect(screen.getByText(mockData[0].name)).toBeInTheDocument();
    });

    it('to be in document', () => {
        render(<TaskItem item={mockData[2]} />);
        expect(screen.getByTestId(`checkbox-${mockData[2].id}`)).toBeInTheDocument();
        expect(screen.getByTestId(`delete-${mockData[2].id}`)).toBeInTheDocument();
        expect(screen.getByText(mockData[2].name)).toBeInTheDocument();
    });


});
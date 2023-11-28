/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegistratonForm from './RegistrationForm';

describe('RegistrationForm Form Elements', () => {
    it('should update form data when input values change', () => {
        render(<RegistratonForm />);

        const testData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '1234567890',
            passport: 'AB123456',
            travel: '2023-12-01',
            return: '2023-12-10',
            destination: 'New York',
            reason: 'Business trip',
        };

        Object.keys(testData).forEach((field) => {
            const inputElement = screen.getByTestId(`${field}-input`);
            fireEvent.change(inputElement, { target: { value: testData[field] } });
            expect(inputElement.value).toBe(testData[field]);
        });
    });

    it('should submit the form data when the "Login" button is clicked', () => {
        render(<RegistratonForm />);

        const testData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '1234567890',
            passport: 'AB123456',
            travel: '2023-12-01',
            return: '2023-12-10',
            destination: 'New York',
            reason: 'Business trip',
        };

        Object.keys(testData).forEach((field) => {
            fireEvent.change(screen.getByTestId(`${field}-input`), {
                target: { value: testData[field] },
            });
        });
    });
});
import { fireEvent, render, screen } from "@testing-library/react"
import SampleForm from "./Form";

test('renders user name, email and message input field', () => {
    render(<SampleForm />)
    const consoleSpy = jest.spyOn(console, 'log');

    const nameInputField = screen.getByTestId('name-input');
    expect(nameInputField).toBeInTheDocument();
    fireEvent.change(nameInputField, { target: { value: 'John' } });

    const emailInputField = screen.getByTestId('email-input');
    expect(emailInputField).toBeInTheDocument();
    fireEvent.change(emailInputField, { target: { value: 'john@gmail.com' } });

    const messageInputField = screen.getByTestId('message-input');
    expect(messageInputField).toBeInTheDocument();
    fireEvent.change(messageInputField, { target: { value: 'Hello' } });

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    expect(nameInputField.value).toBe('John');
    expect(emailInputField.value).toBe('john@gmail.com');
    expect(messageInputField.value).toBe('Hello');
    expect(consoleSpy).toHaveBeenCalledWith({
        name: 'John',
        email: 'john@gmail.com',
        message: 'Hello',

    })
    consoleSpy.mockRestore();
})
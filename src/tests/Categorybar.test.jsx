import {screen, render} from '@testing-library/react';
import CategoryBar from '../components/Categorybar';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import '@testing-library/jest-dom';

test('renders category button', () => {
    
    render(
        <Provider store={store}>
            <CategoryBar />
        </Provider>
    );

    const button = screen.getByText('movies');
    expect(button).toBeInTheDocument();
});
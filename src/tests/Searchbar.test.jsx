import { Provider } from 'react-redux';
import {store} from '../app/store';
import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Searchbar from '../components/Searchbar';
import '@testing-library/jest-dom';

test('renders search input' , ()=>{
    render(
        <Provider store={store}>
          <Searchbar />
        </Provider>
      );
    // render the searchbar
    
    // Grab the searchinput
    const searchInput = screen.getByPlaceholderText(/search reddit/i);
    // assert that input renders
    expect(searchInput).toBeInTheDocument()
})

test('allows user to type in the search input', async()=>{

  render(<Provider store={store}>
          <Searchbar />
         </Provider>
         )

    

    const searchInput = screen.getByPlaceholderText(/search reddit/i)

    await userEvent.type(searchInput, 'react');

    expect(searchInput).toHaveValue('react');
})
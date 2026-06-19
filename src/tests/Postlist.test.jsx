import {screen, render, configure} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Postlist from '../components/Postlist';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../app/store';


const mockStore = configureStore({

  reducer : {
    posts : () =>({

        items : [
            {
                id : 1, 
                title : "React Post"
            },
        ],

        loading: false,
        error: null



    })
  }
  

})

test( 'renders posts', () => {

    render(
    <BrowserRouter>
    <Provider store={mockStore}>
        <Postlist />
      </Provider>
      </BrowserRouter>
  )
    const Post = screen.getByText('React Post');


    expect(Post).toBeInTheDocument();
})
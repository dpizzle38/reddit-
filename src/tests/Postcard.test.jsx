import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Postcard from '../components/Postcard';
import { BrowserRouter } from "react-router-dom";

const mockpost = {
  id: 1,
  title: 'React Redux',
  ups: 100,
  num_comments:20
};


test('renders title', () =>{

    render(
        <BrowserRouter>
           <Postcard post={mockpost}/>
        </BrowserRouter>
    )

    const postTitle = screen.getByText('React Redux')

    expect(postTitle).toBeInTheDocument()
});

 test('renders vote and comments count', () =>{

       render(
            <BrowserRouter>
                <Postcard post={mockpost} />
            </BrowserRouter>
          )
      
          const voteAndCommentsCount = screen.getByText('100 | 20')
          
          expect(voteAndCommentsCount).toBeInTheDocument()

 }


 );
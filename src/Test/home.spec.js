import Home from '../Components/Home/Home';
import  {render , screen } from '@testing-library/react';
import React ,{ useState, useEffect } from "react";
import {render as renderer, unmountComponentAtNode} from "react-dom";
import '@testing-library/jest-dom/extend-expect';

describe('test header', () =>{
    let element=' ';
    beforeEach(()=>{
        element=document.createElement('div');
        document.body.appendChild(element);
    });
    afterEach(()=>{
        unmountComponentAtNode(element);
        element.remove();
        element=null;
    })
     test('should have carousel item class in a component', () => {
        const link=element.getElementsByTagName('div');
       for(let i=1;i<link.length;i++){
            expect(count(link[i].toHaveClass('carousel-item'))).toBeGreaterThanOrEqual(3);
       }
    });
     test('should have 3 images in carousel', () => {
         renderer(<Home/>,element);
         const count=element.getElementsByTagName('button').length;
         expect(count).toBeGreaterThanOrEqual(3);
        
    });
     test('should have welcome to foodzilla as Heading',()=>{
        render(<Home/>);
        expect(screen.getByTestId('h2id')).toHaveTextContent('Welcome To Foodzilla');

    });
     test('should have 4 img tag', () => {
         renderer(<Home/>,element);
         const count=element.getElementsByTagName('img').length;
         expect(count).toBe(4);
     });
          test('should have text Cities we deliver to as Heading',()=>{
        render(<Home/>);
        expect(screen.getByTestId('previoushome')).toHaveTextContent('Previous');

    });
     test('should have text Cities we deliver to as Heading',()=>{
        render(<Home/>);
        expect(screen.getByTestId('nexthome')).toHaveTextContent('Next');

    });
    
});

export default Home;
import Header from '../Components/Header/Header';
import { render, screen } from '@testing-library/react';
import { render as renderer, unmountComponentAtNode } from "react-dom";
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
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

       // Testcase1
       test('Should Header Have Rendering', () => {
        renderer(<Router><Header /></Router>,element);
      });

       // Testcase2
       test('Should render header component with News Hunt Text', () => {
        renderer(<Router><Header /></Router>,element);
        expect(screen.getByText(/Foodzilla/)).toBeInTheDocument();
      });

       // Testcase3
      test('Should have nav in Header component', () => {
        renderer(<Router><Header /></Router>, element);
        const count = element.getElementsByTagName('nav').length;
        expect(count).toBe(1);
      });

       // Testcase4
       test('Should have search text field in Header Component', () => {
        renderer(<Router><Header /></Router>, element);
        const count = element.getElementsByTagName('input').length;
        expect(count).toBe(1);
      });

      // Testcase5
      test('should have nav-link class in a component', () => {
        const link=element.getElementsByTagName('Link');
       for(let i=1;i<link.length;i++){
            expect(count(link[i].toHaveClass('nav-link'))).toBe(4);
        }
    });
      
    });


export default Header;
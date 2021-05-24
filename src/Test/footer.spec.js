import Footer from '../Components/Footer/Footer';
import  {render , screen } from '@testing-library/react';
import React ,{ useState, useEffect } from "react";
import {render as renderer, unmountComponentAtNode} from "react-dom";
import '@testing-library/jest-dom';

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
    test('should have text Cities we deliver to as Heading',()=>{
        render(<Footer/>);
        expect(screen.getByTestId('foothead1')).toHaveTextContent('CITIES WE DELIVER TO');

    });
     test('should have text Contact details as Heading',()=>{
        render(<Footer/>);
        expect(screen.getByTestId('foothead2')).toHaveTextContent('Contact Details');

    });
     test('should have text Our apps as Heading',()=>{
        render(<Footer/>);
        expect(screen.getByTestId('foothead3')).toHaveTextContent('Our Apps');

    });
        test('should have text Follow us as Heading',()=>{
        render(<Footer/>);
        expect(screen.getByTestId('foothead4')).toHaveTextContent('Follow Us');

    });
     test('should have copyright text in footer component', () => {
        render(<Footer/>);
        expect(screen.getByTestId('copyright')).toHaveTextContent("Copyrights © 2021 All Rights Reserved by FoodZilla Inc.");
        
    });
     test('should have one nav tag', () => {
         renderer(<Footer/>,element);
         const count=element.getElementsByTagName('ul').length;
         expect(count).toBeGreaterThanOrEqual(3);
        
    });

});

export default Footer;
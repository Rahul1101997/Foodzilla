import { render, screen } from '@testing-library/react';
import { render as renderer, unmountComponentAtNode } from "react-dom";
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import FavrouiteRes from '../Components/FavrouiteRes/FavrouiteRes';

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
   
       test('should have container classname', () => {
           renderer(<Router><FavrouiteRes/></Router>,element);
        const link=element.getElementsByTagName('div');
       
          expect(link[0]).toHaveClass('container');
     
    });
     test('should have row classname', () => {
           renderer(<Router><FavrouiteRes/></Router>,element);
        const link=element.getElementsByTagName('div');
      
          expect(link[1]).toHaveClass('row');
     
    });
     test('should have margin classname', () => {
            renderer(<Router><FavrouiteRes/></Router>,element);
        const link=element.getElementsByTagName('div');
       
         expect(link[1]).toHaveClass('my-5');
     
    });
      test('should have one img element', () => {
        renderer(<Router><FavrouiteRes/></Router>,element);
         const count=element.getElementsByTagName('img').length;
         expect(count).toBe(1);
        
    });
          test('should have one div element', () => {
          renderer(<Router><FavrouiteRes/></Router>,element);
         const count=element.getElementsByTagName('div').length;
         expect(count).toBe(3);
        
    });

});

export default FavrouiteRes;
import Register from '../Components/Register/Register';
import  {render , screen } from '@testing-library/react';
import React ,{ useState, useEffect } from "react";
import {BrowserRouter as Router } from 'react-router-dom';
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
    test('should have craete new account as Heading',()=>{
        render(<Router><Register/></Router>);
        expect(screen.getByTestId('registerheading')).toHaveTextContent('Create New Account');

    });
      test('should have six input fields', () => {
         renderer(<Router><Register/></Router>,element);
         const count=element.getElementsByTagName('input').length;
         expect(count).toBe(6);
        
    });
      test('should have one register button', () => {
         renderer(<Router><Register/></Router>,element);
         const count=element.getElementsByTagName('button').length;
         expect(count).toBe(1);
        
    });
     test('should have text already have an account for old users',()=>{
        render(<Router><Register/></Router>);
        expect(screen.getByTestId('registerpara')).toHaveTextContent('Already have an account?');

    });
          test('should have six icon tags next to input fields', () => {
         renderer(<Router><Register/></Router>,element);
         const count=element.getElementsByTagName('i').length;
         expect(count).toBe(6);
        
    });

});

export default Register;
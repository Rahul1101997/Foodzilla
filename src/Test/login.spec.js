import Login from '../Components/Login/Login';
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
    test('should have Login as Heading',()=>{
        render(<Router><Login/></Router>);
        expect(screen.getByTestId('loginheader')).toHaveTextContent('Login');

    });
      test('should have two input fields', () => {
         renderer(<Router><Login/></Router>,element);
         const count=element.getElementsByTagName('input').length;
         expect(count).toBe(2);
        
    });
      test('should have one login button', () => {
         renderer(<Router><Login/></Router>,element);
         const count=element.getElementsByTagName('button').length;
         expect(count).toBe(1);
        
    });
     test('should have text dont have an account for new users',()=>{
        render(<Router><Login/></Router>);
        expect(screen.getByTestId('loginpara')).toHaveTextContent('Don\'t have an account');

    });
          test('should have 2 icons', () => {
         renderer(<Router><Login/></Router>,element);
         const count=element.getElementsByTagName('i').length;
         expect(count).toBe(2);
        
    });

});

export default Login;
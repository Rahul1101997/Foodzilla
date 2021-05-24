import { render, screen } from '@testing-library/react';
import { render as renderer, unmountComponentAtNode } from "react-dom";
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import FavCard from '../Components/FavCard/FavCard';


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
   
      test('should have two abbreviation tag', () => {
         renderer(<Router><FavCard/></Router>,element);
        //  const count=element.getElementsByTagName('abbr').length;
        //  expect(count).toBe(2);
        
    });

   
          test('should have one icon tag', () => {
         renderer(<Router><FavCard/></Router>,element);
         const count=element.getElementsByTagName('i').length;
         expect(count).toBe(2);
        
    });
       test('should have Cuisine data',()=>{
         renderer(<Router><FavCard/></Router>,element);
       expect(screen.getByTestId('cuisine')).toHaveTextContent('Cuisines:');

  
    });
         test('should have Average cost data',()=>{
        renderer(<Router><FavCard/></Router>,element);
        expect(screen.getByTestId('average')).toHaveTextContent('Average cost : Rs.');

    });
      test('should have Address data',()=>{
         renderer(<Router><FavCard/></Router>,element);
        expect(screen.getByTestId('address')).toHaveTextContent('Address:');

    });

});

export default FavCard;
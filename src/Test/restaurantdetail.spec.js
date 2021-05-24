import  {render , screen } from '@testing-library/react';
import React ,{ useState, useEffect } from "react";
import {render as renderer, unmountComponentAtNode} from "react-dom";
import '@testing-library/jest-dom';
import RestaurantDetail from '../Components/RestaurantDetail/RestaurantDetail';

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
         render(<RestaurantDetail/>,element);

        });

         test('should have cuisines data',()=>{
            renderer(<RestaurantDetail/>,element);
                expect(screen.getByTestId('timing')).toHaveTextContent('Timings:');
        
            });
        
               test('should have Average cost data',()=>{
                 renderer(<RestaurantDetail/>,element);
                expect(screen.getByTestId('address')).toHaveTextContent('Address:');
        
            });
            test('should have cuisines data',()=>{
                renderer(<RestaurantDetail/>,element);
                    expect(screen.getByTestId('phone')).toHaveTextContent('Phone:-');
            
                });
            
                   test('should have Average cost data',()=>{
                     renderer(<RestaurantDetail/>,element);
                    expect(screen.getByTestId('average')).toHaveTextContent('Average Cost:');
            
                });

                test('should have Average cost data',()=>{
                    renderer(<RestaurantDetail/>,element);
                   expect(screen.getByTestId('highlights')).toHaveTextContent('Highlights');
           
               });

               test('should have one icon tag', () => {
                renderer(<RestaurantDetail/>,element);
                const count=element.getElementsByTagName('h4').length;
                expect(count).toBe(2);
               
            });

            test('should have one icon tag', () => {
                renderer(<RestaurantDetail/>,element);
                const count=element.getElementsByTagName('h5').length;
                expect(count).toBeGreaterThanOrEqual(2);
               
            });

            test('should have one icon tag', () => {
                renderer(<RestaurantDetail/>,element);
                const count=element.getElementsByTagName('img').length;
                expect(count).toBeGreaterThanOrEqual(1);
               
            });

            test('should have one icon tag', () => {
                renderer(<RestaurantDetail/>,element);
                const count=element.getElementsByTagName('ul').length;
                expect(count).toBe(1);
               
            });
        
    


});

export default RestaurantDetail;
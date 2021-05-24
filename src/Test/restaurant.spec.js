import React  from "react";
import {render as renderer, unmountComponentAtNode} from "react-dom";
import '@testing-library/jest-dom';
import Restaurant from '../Components/Restaurant/Restaurant';

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
           renderer(<Restaurant/>,element);
        const link=element.getElementsByTagName('div');
       
          expect(link[0]).toHaveClass('container');
     
    });
    
   test('should have three div element', () => {
         renderer(<Restaurant/>,element);
         const count=element.getElementsByTagName('div').length;
         expect(count).toBe(2);
    });

    test('should have a img tag', () => {
        renderer(<Restaurant/>,element);
        const count=element.getElementsByTagName('img').length;
        expect(count).toBe(1);
    });

});

export default Restaurant;
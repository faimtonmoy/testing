import {render, screen} from '@testing-library/react'
import Home from '@/app/page'

describe('Home', ()=>{
    it('should have Docs test',()=>{
        render(<Home/>)
        
        const myElm= screen.getByText('Docs');
    
        expect(myElm).toBeInTheDocument();
    })

    it('should contain the word information',()=>{
        render(<Home/>)
        
        const myElm= screen.getByText(/information/i);
    
        expect(myElm).toBeInTheDocument();
    })

    it('should have a heading component',()=>{
        render(<Home/>)
        
        const myElm= screen.getByRole('heading', {
            name: 'Learn'
        });
    
        expect(myElm).toBeInTheDocument();
    })

})


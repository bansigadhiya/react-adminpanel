import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Accordion from 'react-bootstrap/Accordion';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <a
            href='javascript:;'
            className='text-decoration-none'
            onClick={decoratedOnClick}
        >
            {children}
        </a>
    );
}

export default CustomToggle
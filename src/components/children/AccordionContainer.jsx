import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
function AccordionContainer({ items }) {
    return (
        <Accordion>
            {items.map((item) => (
                <AccordionItem key={item.uuid}>
                    <AccordionItemHeading>
                        <AccordionItemButton>{item.heading}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>{item.content}</AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default AccordionContainer;

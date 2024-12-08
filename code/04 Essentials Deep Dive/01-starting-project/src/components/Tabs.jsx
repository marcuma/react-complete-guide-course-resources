import { Fragment } from "react";

export default function Tab({ children, buttons, ButtonsContaner = 'menu' }) { 
    return (
        <Fragment>
            <ButtonsContaner>
                {buttons}
            </ButtonsContaner>
            {children}
        </Fragment>
        
    );
} 
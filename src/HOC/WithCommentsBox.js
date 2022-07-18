import React from 'react';
import TextBox from '../Components/Controls/TextBox';
function WithCommentsBlock(BaseComponent) {
    function UpdatedComponent({ ...props }) {
        debugger;
        return (
            <>
                <BaseComponent {...props}></BaseComponent>
                {props.hasComments &&
                    <TextBox></TextBox>
                }
            </>
        );
    }
    return UpdatedComponent;
}
export default WithCommentsBlock;
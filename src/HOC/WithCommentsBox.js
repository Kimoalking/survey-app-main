import React from 'react';
import TextBox from '../Components/Controls/TextBox';


function WithCommentsBlock(BaseComponent) {
    function UpdatedComponent({ ...props }) {
        return (
            <>
                <BaseComponent {...props}></BaseComponent>
                {props.hasComments &&
                    <TextBox {...props} IsHOC={true} ></TextBox>
                }
            </>
        );
    }
    return UpdatedComponent;
}
export default WithCommentsBlock;
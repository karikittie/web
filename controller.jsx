/**
 * Created by pixie on 7/18/2017.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'semantic-ui-react'

const ButtonExampleButton = () => (
    <Button>
        Click Here
    </Button>
);


ReactDOM.render(<ButtonExampleButton></ButtonExampleButton>, document.getElementById('react'));

export default ButtonExampleButton
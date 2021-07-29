import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import './MyComponent.css'

type CardProps = {
  name: string,
  onButtonClick: CallableFunction
}

import Button from '@material-ui/core/Button';

export const MyComponent: FunctionComponent<CardProps> = (props) => <aside>
  <div id="megaComponent">
    
    { props.name }
    <Button variant="contained" color="primary" onClick={() => props.onButtonClick()}>
      Inside mega component
    </Button>
  </div>
</aside>

export default MyComponent;

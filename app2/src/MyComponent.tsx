import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import './MyComponent.css'
type CardProps = {
  name: string,
}

export const MyComponent: FunctionComponent<CardProps> = (props) => <aside>
  <div id="megaComponent">
    { props.name }
  </div>
</aside>

export default MyComponent;

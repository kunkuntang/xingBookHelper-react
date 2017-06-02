import React from 'react'
import {
  Link
} from 'react-router-dom'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginBottom: '1.5rem',
  marginRight: '1.5rem'
};

class FloatingActionBtn extends React.Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div style={{float: 'right'}}>
        <Link to="/addBookList">
          <FloatingActionButton style={style}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
      </div>
    )  
  }
}

export default FloatingActionBtn
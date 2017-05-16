import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';

import './listCard.css'

const BookListCard = (props) => (
  <Card>
    <CardHeader
      title={props.data.listName}
      subtitle={props.data.desc}
      actAsExpander={false}
      showExpandableButton={false}
    >
    <div className="card-time">2017-04-30</div>
    </CardHeader>
  </Card>
);

export default BookListCard;
import ListGroup from 'react-bootstrap/ListGroup';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    // <ul>
    //   <li>
    //     <p>Good:</p>
    //     <span>{good}</span>
    //   </li>
    //   <li>
    //     <p>Neutral:</p>
    //     <span>{neutral}</span>
    //   </li>
    //   <li>
    //     <p>Bad:</p>
    //     <span>{bad}</span>
    //   </li>
    //   <li>
    //     <p>Total</p>
    //     <span>{total}</span>
    //   </li>
    //   <li>
    //     <p>Positive feedback:</p>
    //     <span>{positivePercentage() || 0} %</span>
    //   </li>
    // </ul>
    <ListGroup>
      <ListGroup.Item>
        <p>Good:</p>
        <span>{good}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>Neutral:</p>
        <span>{neutral}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>Bad:</p>
        <span>{bad}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>Total</p>
        <span>{total}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>Positive feedback:</p>
        <span>{positivePercentage() || 0} %</span>
      </ListGroup.Item>
    </ListGroup>
  );
};

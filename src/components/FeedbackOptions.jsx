import Button from 'react-bootstrap/Button';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {options.map((el, i) => (
        <Button
          variant="primary"
          type="button"
          onClick={onLeaveFeedback}
          name={el}
          key={i}
        >
          {el}
        </Button>
      ))}
    </div>
  );
};

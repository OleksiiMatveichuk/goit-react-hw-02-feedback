export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((el, i) => (
        <button type="button" onClick={onLeaveFeedback} name={el} key={i}>
          {el}
        </button>
      ))}
    </div>
  );
};

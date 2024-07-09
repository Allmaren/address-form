import { data } from './data.json';

const ServAdd = e => {
  return (
    <div>
      {e.map((longText, index, types) =>
        longText.types && longText.types.length > 0 ? (
          <div key={index}>
            <span>{longText.types[0]}</span> {longText.longText}
          </div>
        ) : null
      )}
    </div>
  );
};

import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

/**
 * Main app component: paragraph generator form + dynamic paragraph list.
 * Uses controlled input and useState; no backend—data comes from ./data.
 */
const App = () => {
  // count: how many paragraphs to show (1–8); text: array of strings to render
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  /** On form submit: take first `amount` items from data and set as text to display */
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h4>tired of boring lorem ipsum?</h4>
      {/* Controlled form: value and onChange keep input in sync with count state */}
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          step='1'
          max='8'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      {/* List: each item needs a unique key (nanoid) for React reconciliation */}
      <article className='lorem-text'>
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;

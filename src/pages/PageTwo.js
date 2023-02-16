import { useState } from 'react';
import './PageTwo.css';

const PageTwo = () => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const sentence = 'Helo hwo its work man man';

  const vowelsCount = sentence.split('').reduce((acc, letter) => {
    return Number((acc += vowels.includes(letter) ? 1 : 0));
  }, 0);
  const [countVowels] = useState(vowelsCount);

  const INITIAL_STATE = {
    email: '',
    password: '',
  };

  const VALIDATION = {
    email: [
      {
        isValid: (value) => !!value,
        message: 'Is required.',
      },
      {
        isValid: (value) => /\S+@\S+\.\S+/.test(value),
        message: 'Needs to be an email.',
      },
    ],
    password: [
      {
        isValid: (value) => !!value,
        message: 'Is required.',
      },
    ],
  };

  const getErrorFields = (form) =>
    Object.keys(form).reduce((acc, key) => {
      if (!VALIDATION[key]) return acc;

      const errorsPerField = VALIDATION[key]
        // get a list of potential errors for each field
        // by running through all the checks
        .map((validation) => ({
          isValid: validation.isValid(form[key]),
          message: validation.message,
        }))
        // only keep the errors
        .filter((errorPerField) => !errorPerField.isValid);

      return { ...acc, [key]: errorsPerField };
    }, {});

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errorFields = getErrorFields(form);
    console.log(errorFields);
    const hasErrors = Object.values(errorFields).flat().length > 0;
    console.log(Object.values(errorFields).flat().length);
    console.log(errorFields);
    if (hasErrors) {
      console.log(errorFields);
      return;
    }
    alert(form.email + ' ' + form.password);
  };

  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
    console.log(password);
  };
  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const [favorite, setFavorite] = useState('dog');

  const handleCatChange = () => {
    setFavorite('cat');
  };

  const handleDogChange = () => {
    setFavorite('dog');
  };

  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>PageTwo</h1>
      <form onSubmit={handleSubmit} className='my-form'>
        <label htmlFor='cheese'>Do you like cheese?</label>
        <input type='checkbox' name='cheese' id='cheese' />
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' onChange={handleChange} />
        <label htmlFor='password'>Pass Password</label>
        <input type={'password'} id='password' onChange={handleChange} />
        <RadioButton
          label='Cat'
          value={favorite === 'cat'}
          onChange={handleCatChange}
        />
        <RadioButton
          label='Dog'
          value={favorite === 'dog'}
          onChange={handleDogChange}
        />
        <button type='submit'>Send</button>
      </form>
      {/* {finalData.map((element) => {
        return <p>{element.name}</p>
      })} */}
      <h1>{form.password}</h1>
      <br></br>
      <button onClick={countHandler}>Count</button>
      {count}
      {countVowels}
    </>
  );
};

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label>
      <input type='radio' checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default PageTwo;

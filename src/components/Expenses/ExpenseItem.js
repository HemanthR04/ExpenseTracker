import React, { useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


const ExpenseItem = (props) => {

  const [title,setTitle] = useState(props.title);

 // let title = props.title;
const ClickHandler = () =>{
  setTitle('Updated');
  console.log(title)
};
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={ClickHandler}>Click Me</button>
    </Card>
  );
}

export default ExpenseItem;

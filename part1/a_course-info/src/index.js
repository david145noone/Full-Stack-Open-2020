import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  );
}

const Content = (props) => {
  const e1 = props.parts[0];
  const e2 = props.parts[1];
  const e3 = props.parts[2];
  return (
    <>
      <Part title={e1.title} number={e1.exercises}/>
      <Part title={e2.title} number={e2.exercises}/>
      <Part title={e3.title} number={e3.exercises}/>
    </>
  );
}

const Part = (props) => {
  return (
    <p>
      {props.title} {props.number}
    </p>
  );
}

const Total = (props) => {
  let total = 0;
  props.parts.forEach(part => {
    total += part.exercises;
  });
  return (
      <p>
        Number of exercises {total}
      </p>
  );
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      title : 'Fundamentals of React',
      exercises : 10
    },
    {
      title : 'Using props to pass data',
      exercises : 7
    },
    {
      title : 'State of a component',
      exercises : 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
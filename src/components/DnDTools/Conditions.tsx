import React from 'react';
import { Title, Subheading, Body } from '../Typography';
import { conditions } from '../../util/dnd';

const Conditions: React.FC = props => {
  return (
    <div>
      <Title>Conditions</Title>
      <ul>
        {conditions.map(c => {
          const sublist = (
            <ul>
              {c.effects.map((e, i) => (
                <li key={i}>
                  <Body>{e}</Body>
                </li>
              ))}
            </ul>
          );
          return (
            <li key={c.name}>
              <Subheading>{c.name}</Subheading>
              {sublist}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Conditions;

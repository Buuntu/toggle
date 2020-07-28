import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Toggle } from '../src';

it('Should render the toggle and be clickable between states', () => {
  // mock onChange function
  const onChange = jest.fn();

  const { getByTestId, rerender } = render(
    <Toggle isOn={false} handleChange={onChange} />
  );
  // checkbox and parent label components
  const checkbox = getByTestId('Toggle');
  const label = getByTestId('Toggle-label');

  // isOn=false should mean it's unchecked
  expect(checkbox).toHaveProperty('checked', false);

  // Clicking from off -> on
  fireEvent.click(label);
  expect(onChange).toHaveBeenCalledTimes(1);

  // isOn=true should mean it's checked
  rerender(<Toggle isOn={true} handleChange={onChange} />);
  expect(checkbox).toHaveProperty('checked', true);

  // Clicking from on -> off
  fireEvent.click(label);
  expect(onChange).toHaveBeenCalledTimes(2);
});

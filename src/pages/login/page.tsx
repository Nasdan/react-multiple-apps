import * as React from 'react';

interface Props {
  name: string;
  onChange: (value: string) => void;
}

export const LoginPage: React.StatelessComponent<Props> = props => (
  <>
    <h1>Write login name: {props.name}</h1>
    <input value={props.name} onChange={handleChange(props)} />
  </>
);

const handleChange = (props: Props) => e => {
  props.onChange(e.target.value);
};

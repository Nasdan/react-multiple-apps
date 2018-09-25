import * as React from 'react';

interface Props {
  title: string;
  subTitle: string;
  onChange: (value: string) => void;
}

export const PageA: React.StatelessComponent<Props> = props => (
  <>
    <h1>Page a title: {props.title}</h1>
    <h3>Subtitle: {props.subTitle}</h3>
    <input value={props.title} onChange={handleChange(props)} />
  </>
);

const handleChange = (props: Props) => e => {
  props.onChange(e.target.value);
};

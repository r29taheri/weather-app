interface Props {
  val: string;
  text: string;
}

export const Highlighter = ({ val, text }: Props) => {
  const index = text.toLowerCase().indexOf(val.toLowerCase());

  if (index >= 0) {
    return (
      <>
        {text.substring(0, index)}
        <strong>{text.substring(index, index + val.length)}</strong>
        {text.substring(index + val.length)}
      </>
    );
  }

  return <>text</>;
};

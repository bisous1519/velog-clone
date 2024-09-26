'use client';

type ButtonPropsType = {
  name: string;
};

export default function Button({ name }:ButtonPropsType) {
  const onClick = () => {
    console.log('클릭!');
  };
  return (
    <button className="pt-1.5 pb-1.5 pl-2.5 pr-2.5 bg-black" type="button" onClick={onClick}>
      {name}
    </button>
  );
}

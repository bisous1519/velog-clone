'use client';

type ButtonPropsType = {
  name: string;
  className?: string;
};

export default function Button({ name, className }:ButtonPropsType) {
  const onClick = () => {
    console.log('클릭!');
  };
  return (
    <button className={`${className} pt-1 pb-1 pl-4 pr-4 rounded-full`} type="button" onClick={onClick}>
      {name}
    </button>
  );
}

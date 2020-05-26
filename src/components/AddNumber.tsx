import React from "react";

import { useNumbersStore } from "../hooks";
import { values } from "mobx";
import {observer} from 'mobx-react-lite';

const AddNumber: React.FunctionComponent = () => {
  const numbersStore = useNumbersStore();
  const [value, setValue] = React.useState(42);

  const test = () => {
    return (
      // @ts-ignore
      <div>{values(numbersStore.test).map(x => x.name)}</div>
    )
  }

  return (
    <>
    <div>
      <input
        type="number"
        value={value}
        onChange={e => setValue(+e.target.value)}
      />
      <button
        onClick={() => {
          numbersStore.add(value);
          setValue(Math.floor(Math.random() * 100));
        }}
      >
        Add
      </button>
    </div>
    <div>-----START-----</div>
    {numbersStore.test.size < 1 && 
    <button onClick={() => {
      numbersStore.populateTest()
    }}>Populate</button>}
    {test()}
    <div>----Middle----</div>
    <div>----END-----</div>
    </>
  );
};

export default observer(AddNumber);

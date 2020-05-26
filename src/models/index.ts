export * from "./NumbersStore";
import {TestModel} from './custom';
import { types, Instance } from "mobx-state-tree";
import { values } from "mobx";

const Store = types.model({
  test: types.map(TestModel)
});

export const store = Store.create();
import { types, Instance } from "mobx-state-tree";
import {TestModel} from './custom';

let lastKey = 0;

const NumberItemModel = types.model({
  key: types.number,
  value: types.number
});

export const NumbersStore = types
  .model({
    numbers: types.array(NumberItemModel),
    test: types.map(TestModel)
  })
  .views(self => ({
    get sum() {
      return self.numbers.reduce((sum, n) => sum + n.value, 0);
    },
    get product() {
      return self.numbers.length
        ? self.numbers.reduce((product, n) => product * n.value, 1)
        : 0;
    },
    get average() {
      return self.numbers.length
        ? self.numbers.reduce((sum, n) => sum + n.value, 0) /
            self.numbers.length
        : 0;
    }
  }))
  .actions(self => ({
    add(value: number) {
      self.numbers.push({ key: ++lastKey, value });
    },
    populateTest(){
      self.test.put(TestModel.create({id: "1", name: 'Hakan', description: 'desc 1'}))
      self.test.put(TestModel.create({id: "2", name: 'Emre', description: 'desc 2'}))
      self.test.put(TestModel.create({id: "3", name: 'Özlem', description: 'desc 3'}))
      self.test.put(TestModel.create({id: "4", name: 'Gürcan', description: 'desc 4'}))
    }
  }));

export interface NumbersType extends Instance<typeof NumbersStore> {}

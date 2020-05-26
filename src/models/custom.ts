import {types} from 'mobx-state-tree';

const withTagsModel = types.model('withTags', {
  tags: types.map(types.string)
})

const Base = types.model('Base', {
  id: types.identifier,
  name: '',
  description: ''
})

export const TestModel = types.compose(withTagsModel, Base);
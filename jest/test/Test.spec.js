import { mount } from '@vue/test-utils'
import Test from '@/components/Test.vue'

describe('Test', () => {
  test('is a propsData', () => {
    //propsデータをしっかりと渡しているかの確認
    const props = {
      test: 'ダミー'
    }
    const wrapper = mount(Test,{
      propsData: props
    })
    console.log(wrapper.props().test);
    expect(wrapper.props().test).toBeTruthy()

  })
})

describe('Test2', () => {
  test('is propsData judge undefined', () => {
    //propsデータが渡されない場合デフォルト値が要素に書き出されるかのテスト
    const wrapper = mount(Test)
    const progress = wrapper.get('#progress');
    console.log(progress.text());
    expect(progress.text()).toBe('デフォルト')

  })
})

describe('Test3', () => {
  test('is propsData judge undefined', () => {
    //propsデータが渡されない場合デフォルト値が要素に書き出されるかのテスト
    const wrapper = mount(Test)
    const progress = wrapper.get('#progress');
    console.log(progress.text());
    expect(progress.text()).toBe('デフォルト')

  })
})


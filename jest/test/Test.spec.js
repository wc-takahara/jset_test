import { mount } from '@vue/test-utils'
import Test from '@/components/Test.vue'

describe('Test', () => {
  test('propsデータをしっかりと渡しているかの確認', () => {
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
  test('propsデータが渡されない場合デフォルト値が要素に書き出されるかのテスト', () => {
    const wrapper = mount(Test)
    const progress = wrapper.get('#progress');
    console.log(progress.text());
    expect(progress.text()).toBe('デフォルト')

  })
})

describe('Test3', () => {
  test('propsデータが渡されない場合デフォルト値が要素に書き出されるかのテスト', () => {
    const wrapper = mount(Test)
    const progress = wrapper.get('#progress');
    console.log(progress.text());
    expect(progress.text()).toBe('デフォルト')

  })
})

describe('TimerTest',() => {
  test('timer',() =>{
    const mocked =  jest.useFakeTimers('modern').setSystemTime(new Date('2022-01-03 12:00:00'))
    const day = new Date().getDate()
    expect(day).toBe(3);
  })
})


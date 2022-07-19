import { mount } from '@vue/test-utils'
import Test from '@/components/Test.vue'
import Timer from '@/components/Timer.vue'

const yearEnd = 

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
  test('冬のtimer',() =>{
    jest.useFakeTimers('modern').setSystemTime(new Date('2022-12-03 12:00:00'))
    const wrapper = mount(Timer);
    const lead = wrapper.get('.season')
    expect(lead.text()).toBe('冬ですか…')
  })
})

describe('TimerTest',() => {
  test('夏のtimer',() =>{
    jest.useFakeTimers('modern').setSystemTime(new Date('2022-06-03 11:00:00'))
    const wrapper = mount(Timer);
    const lead = wrapper.get('.season')
    expect(lead.text()).toBe('夏ですね～')
  })
})


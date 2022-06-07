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

describe('Test', () => {
  test('is a Vue instance', () => {
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


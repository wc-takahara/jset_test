import { shallowMount,createLocalVue, mount } from '@vue/test-utils'
import Test from '@/components/Test.vue'
import Timer from '@/components/Timer.vue'
import PageTest from '../../pages/test/index.vue'
import VueMeta from 'vue-meta'
const index = require('../../store/index')
const Vuex = require('vuex')

var _cookie = {
  
}

//NOTE: Vuexを使う際にグローバルのVueと切り離し他ページに影響をださないため
const localVue =  createLocalVue();
localVue.use(Vuex)
localVue.use(VueMeta, { keyName: 'head' })

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

describe('Storeのテスト',() => {
    let store
    beforeEach(() => {
      store = new Vuex.Store(index)
    })

    test('check cookie',() =>{
      expect(store.getters['double']).toBe(2)
      expect(store.state.count).toBe(1)
    })
})

describe('validateのテスト',() => {
    let store
    let wrapper
    beforeEach(() => {
      store = new Vuex.Store(index)
      store.state.count = 2
      wrapper = shallowMount(PageTest,{
        localVue
      });
    })

    test('check validate',async() =>{
      console.log(wrapper.vm)
      await expect(wrapper.validate({store:store})).toBe(false);

      // const title = await wrapper.vm.$metaInfo.title;
      // console.log(store.state.count)
      // console.log(title)
      // expect(titleData).toBe('test-title')
    })
})


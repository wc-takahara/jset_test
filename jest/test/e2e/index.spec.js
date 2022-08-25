import {createLocalVue } from '@vue/test-utils'
const index = require('../../store/index')
import Vuex from 'vuex'

//NOTE: Vuexを使う際にグローバルのVueと切り離し他ページに影響をださないため
const localVue =  createLocalVue();
localVue.use(Vuex)

describe('Validate',() => {
var store
    beforeAll(async () =>{
        const url = 'http://localhost:3000/test/';
        await page.goto(url);
    })
    beforeEach(() => {
        store = new Vuex.Store(index)
        store.state.count = 2
    })

    test('store get',() =>{
        expect(store.getters['double']).toBe(4)
    })

    test('display page',async () =>{
        await expect(page.title()).resolves.toMatch('This page could not be found')
    })
})
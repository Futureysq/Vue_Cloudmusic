import {state} from './state'
import {mutations} from './mutations'
import {actions} from './actions'

export const rankModule = {
    namespaced: true,
    mutations,
    state,
    actions
}
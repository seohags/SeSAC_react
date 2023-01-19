/// redux 통합 관리 (합치기)
import { combineReducers } from 'redux'; 
import todo from './modules/todo';
import mbti from './modules/mbti';

export default combineReducers({
    todo, mbti
});







import {atom} from 'recoil'

export const AnswersState = atom({
    key: 'Answers',
    //default: []
    default:[
        {
            mainQuestionId:'',
            questionId:'',
            answerIds:[],
            answerValues:'',
            commentValue: ''
        },
        // {
        //     mainQuestionId: '9992', 
        //     questionId: '1119', 
        //     answersIds: [], 
        //     commentValue: 'sf'
        // }
    ]
})



//https://recoiljs.org/docs/api-reference/utils/atomFamily/ 
//check this if you want to have get,set shape of atom

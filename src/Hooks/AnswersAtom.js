
import {atom} from 'recoil'

export const AnswersState = atom({
    key: 'Answers',
    //default: []
    default:[
        {
            mainQuestionId:'',
            questionId:'',
            answerValue:[],
            commentValue: ''
        },
        // {
        //     mainQuestionId: '9992', 
        //     questionId: '1119', 
        //     answerValue: [], 
        //     commentValue: 'sf'
        // }
    ]
})



//https://recoiljs.org/docs/api-reference/utils/atomFamily/ 
//check this if you want to have get,set shape of atom

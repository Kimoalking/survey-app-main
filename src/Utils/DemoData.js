import { v4 as uuidv4 } from 'uuid';
const Pages = [
    //1: Textbox, 2:Date. 6: CheckBox,7: RadioGroupButton, 12 RadioButton control
    {
        "id": uuidv4(), 
        "title": "1: Textbox, 2:Date. 6: CheckBox,7: RadioGroupButton , 12 RadioButton",
        "sequenceNo": 1,
        "questions": [
            {
                "id": uuidv4(),
                "title": "Give us your comments",
                "controlType": "1",
                "hasComments": false,
                "answers": []
            },
            {
                "id": uuidv4(),
                "title": "When did you arrive",
                "controlType": "2",
                "hasComments": false,
                "answers": []
            },
            {
                "id": uuidv4(),
                "title": "Are you satisfied",
                "controlType": "6",
                "hasComments": false,
                "answers": [
                    {
                        "id": uuidv4(),
                        "title": "Very Satisfied",
                    },
                    {
                        "id": uuidv4(),
                        "title": "Satisfied",
                    },
                    {
                        "id": uuidv4(),
                        "title": "Disatisfied",
                    },
                    {
                        "id": uuidv4(),
                        "title": "Very Disatisfied",
                    },
                ]
            },
            {
                "id": uuidv4(),
                "title": "Are you satisfied",
                "controlType": "7",
                "hasComments": false,
                "answers": [
                    {
                        "id": uuidv4(),
                        "title": "Very Satisfied",
                    },
                    {
                        "id": uuidv4(),
                        "title": "Satisfied",
                    },
                    {
                        "id": uuidv4(),
                        "title": "Disatisfied",
                    },
                    {
                        "id": uuidv4(),
                        "title": "Very Disatisfied",
                    },
                ]
            },
            {
                "id": uuidv4(),
                "title": "Gender",
                "controlType": "12",
                "hasComments": false,
                "answers": [
                    {
                        "id": uuidv4(),
                        "title": "Male",
                    },
                    {
                        "id": uuidv4(),
                        "title": "Female",
                    }
                ]
            }
        ]
    },
    //Kamal Page
    //3:Time controller,8:Rating,10:DateRange
    {
        "id": uuidv4(), 
        "title": "3:Time controller,8:Rating,10:DateRange",
        "sequenceNo": 2,
        "questions": [
            {
                "id": uuidv4(),
                "title": "last checkin time",
                "controlType": "3",
                "hasComments": false,
                "answers": []
            },
            {
                "id": uuidv4(),
                "title": "Rate yourself",
                "controlType": "8",
                "hasComments": false,
                "answers": []
            },
            {
                "id": uuidv4(),
                "title": "When was you last travel",
                "controlType": "10",
                "hasComments": false,
                "answers": []
            }
        ]
    },
    //11:Matrix using 1 possible Answer Control 
    {
        "id": uuidv4(), 
        "title": "11:Matrix using 1 possible Answer Control",
        "sequenceNo": 3,
        "questions": [
            {
                "id": uuidv4(),
                "title": "Rate your skills ",
                "controlType": "11",
                "isSurveyFormat": false,
                "mainColumnTitle": "Fell Free to answer the below",
                "hasComments": false,
                "answers": [
                    {
                        "id": uuidv4(),
                        "title": "C#",
                        "controlType": "8",
                        "hasComments": false,
                        "answers": []
                    },
                    {
                        "id": uuidv4(),
                        "title": "SqlServer",
                        "controlType": "8",
                        "hasComments": false,
                        "answers": []
                    },
                    {
                        "id": uuidv4(),
                        "title": "Crystal Report",
                        "controlType": "8",
                        "hasComments": false,
                        "answers": []
                    },
                    {
                        "id": uuidv4(),
                        "title": "PhotoShop",
                        "controlType": "8",
                        "hasComments": false,
                        "answers": []
                    }
                ]
            }
            
        ]
    },
    //12: Matrix using multi possible Answers Control 
    {
        "id": uuidv4(), 
        "title": "12: Matrix using multi possible Answers Control ",
        "sequenceNo": 4,
        "questions": [
            {
                "id": "123213123",//uuidv4(),
                "title": "Tell us more about yourself",
                "controlType": "11",
                "isSurveyFormat": true,
                "mainColumnTitle": "Matrix Me", 
                "hasComments": true,
                "answers": [
                    {
                        "id": uuidv4(),
                        "title": "Are you Married?",
                        "controlType": "12",
                        "hasComments": false,
                        "answers": [
                        {
                            "id": uuidv4(),
                            "title": "Yes",
                        },
                        {
                            "id": uuidv4(),
                            "title": "No",
                        },
                        {
                            "id": uuidv4(),
                            "title": "N/A",
                        },
                        {
                            "id": uuidv4(),
                            "title": "Never Tell",
                        },
                        {
                            "id": uuidv4(),
                            "title": "Cool",
                        }
                    ]
                    },
                    {
                        "id": uuidv4(),
                        "title": "Do you have Master College Degree?",
                        "controlType": "12",
                        "hasComments": false,
                        "answers": [
                            {
                                "id": uuidv4(),
                                "title": "Yes",
                            },
                            {
                                "id": uuidv4(),
                                "title": "No",
                            },
                            {
                                "id": uuidv4(),
                                "title": "N/A",
                            },
                            {
                                "id": uuidv4(),
                                "title": "Never Tell",
                            },
                            {
                                "id": uuidv4(),
                                "title": "Cool",
                            }
                        ]
                    },
                    {
                        "id": uuidv4(),
                        "title": "Did you do covid test in the past 14 days?",
                        "controlType": "12",
                        "hasComments": false,
                        "answers": [
                            {
                                "id": uuidv4(),
                                "title": "Yes",
                            },
                            {
                                "id": uuidv4(),
                                "title": "No",
                            },
                            {
                                "id": uuidv4(),
                                "title": "N/A",
                            },
                            {
                                "id": uuidv4(),
                                "title": "Never Tell",
                            },
                            {
                                "id": uuidv4(),
                                "title": "Cool",
                            }
                        ]
                    },
                    {
                        "id": uuidv4(),
                        "title": "Do you have lanuch today?",
                        "controlType": "12",
                        "hasComments": false,
                        "answers": [
                            {
                                "id": uuidv4(),
                                "title": "Yes",
                            },
                            {
                                "id": uuidv4(),
                                "title": "No",
                            },
                            {
                                "id": uuidv4(),
                                "title": "N/A",
                            },
                            {
                                "id": uuidv4(),
                                "title": "Never Tell",
                            },
                            {
                                "id": uuidv4(),
                                "title": "Cool",
                            }
                        ]
                    }
                ]
            }
            
        ]
    },
    //Result
    {
        "id": uuidv4(), 
        "title": "Result",
        "sequenceNo": 5,
        "questions": [
            {
                "id": uuidv4(),
                "title": "Result of the Survay"
            }
        ]
    }


];
export default Pages;

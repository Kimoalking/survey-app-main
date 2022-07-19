import { v4 as uuidv4 } from 'uuid';
const Pages = [
    {
//1: Textbox, 2:Date. 6: CheckBox,7: RadioButton
        "id": uuidv4(), 
        "title": "1: Textbox, 2:Date. 6: CheckBox,7: RadioButton",
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
                "hasComments": true,
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
                "hasComments": true,
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
//11:Matrix using Rating Control
    {
        "id": uuidv4(), 
        "title": "11:Matrix using Rating Control",
        "sequenceNo": 3,
        "questions": [
            {
                "id": uuidv4(),
                "title": "Rate your skills ",
                "controlType": "11",
                "isSurveyFormat": false,
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
//11: Matrix using Radio Control
    {
        "id": uuidv4(), 
        "title": "11: Matrix using Radio Control",
        "sequenceNo": 4,
        "questions": [
            {
                "id": uuidv4(),
                "title": "Tell us more about yourself",
                "controlType": "11",
                "isSurveyFormat": true,
                "hasComments": false,
                "answers": [
                    {
                        "id": uuidv4(),
                        "title": "Are you Married?",
                        "controlType": "7",
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
                        }
                        ]
                    },
                    {
                        "id": uuidv4(),
                        "title": "Do you have Master College Degree?",
                        "controlType": "7",
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
                            }
                            ]
                    },
                    {
                        "id": uuidv4(),
                        "title": "Did you do covid test in the past 14 days?",
                        "controlType": "7",
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
                            }
                            ]
                    },
                    {
                        "id": uuidv4(),
                        "title": "Do you have lanuch today?",
                        "controlType": "7",
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
                            }
                            ]
                    }
                ]
            }
            
        ]
    }

];
export default Pages;

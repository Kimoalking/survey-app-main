import { v4 as uuidv4 } from 'uuid';
const Pages = [
    {
        "id": uuidv4(), 
        "title": "My Page 1",
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
    {
        "id": uuidv4(),
        "title": "My Page 2",
        "sequenceNo": 2,
        "questions": [
            {
                "id": uuidv4(),
                "title": "P2 Give us your comments",
                "controlType": "1",
                "hasComments": false,
                "answers": []
            },
            {
                "id": uuidv4(),
                "title": "P2 Are you satisfied",
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
                "title": "P2 Are you satisfied",
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
    {
        "id": uuidv4(), 
        "title": "My Page 3",
        "sequenceNo": 3,
        "questions": [
            {
                "id": uuidv4(),
                "title": "Top main key skills you have",
                "controlType": "1",
                "hasComments": false,
                "answers": []
            },
            {
                "id": uuidv4(),
                "title": "Date of birth",
                "controlType": "2",
                "hasComments": true,
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
    }




];
export default Pages;

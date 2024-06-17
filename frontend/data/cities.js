const cities = {
    id: "city",
    title: "Вибір міста",
    description: "Допоможемо вам знайти місто, яке відповідає вашим потребам",
    questions: [
        {
            id: "cityName",
            text: "Чи є у вас варіанти для переїзду?",
            type: "radio",
            options: [{
                id: "cityNameYes",
                value: true,
                label: "Так (введіть назву міст)",
                action: "nested",
                nested: {
                    id: "cityNameValue",
                    text: "Введіть назву міста",
                    type: "text",
                    answer: "",
                }
            }, {
                id: "cityNameNo",
                value: false,
                label: "Hi (запропонувати міста)",
                action: "next",
            }],
            nested: {
                id: "cityNameValue",
                text: "Введіть назву міста",
                type: "text",
            },
        },
        {
            id: "cityType",
            text: "Якому типу міста ви надаєте перевагу?",
            type: "radio",
            options: ["Велике місто", "Середнє місто", "Маленьке місто"],
            answer: "",
        },
        {
            id: "infrastructure",
            text: "Яка інфраструктура для вас важлива?",
            type: "checkbox",
            options: ["Магазини", "Медичні заклади", "Школи/Університети", "Громадський транспорт"],
            answer: "",
        },
        {
            id: "budget",
            text: "Який ваш загальний бюджет на переїзд та проживання (грн/місяць)?",
            type: "text",
            answer: "",
        },
        {
            id: "rentBudget",
            tex: "Який ваш максимальний бюджет на оренду житла в місяць (грн)?",
            type: "text",
            answer: "",
        },
        {
            id: "job",
            text: "Яка ваша професія або галузь роботи?",
            type: "text",
            answer: "",
        },
        {
            id: "entertainment",
            text: "Які види розваг вам цікаві?",
            type: "text",
            answer: "",
        }
    ]
};

export default cities;

interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}
const data: ToJsonStringify = {
    id: 1,
    name: "Василий",
}

const data_js = JSON.stringify(data);

console.log(data_js);
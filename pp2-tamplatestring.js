// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।

let name = 'monir';
console.log(`
Mr. ${name}, Thank you for your feedback. `
)

const students = {
    name1: 'Monir',
    id: 570,
    class: 'honors',
    position: 2,
}
console.log(`${students.name1} your class is ${students.position} id is ${students.id}`)


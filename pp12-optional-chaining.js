// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।

const employee = {
    name: 'Md Moniruzzaman',
    id: 5542646,
    position: 'CMO',
    CompanyName: 'LGC',
    Address: {
        village: {
            house: '277',
            road: '16',
            block: 'k',
        },
        ps: 'Rampura',
        city: 'Dhaka',
    },
    colleaguesPhoneName: [
        {name: 'iphone', camera:'13mp', price: 5000},
        {name: 'navia', camera:'13mp', price: 5000},
        {name: 'opp', camera:'13mp', price: 10000},
        {name: 'xiomi', camera:'13mp', price: 5000}
        ]

}

console.log(employee.Address.villages?.block);
// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const employee = {
    name: 'Md Moniruzzaman',
    id: 5542646,
    position: 'CMO',
    CompanyName: 'LGC',
    Address: {
        village: 'South Banasree',
        ps: 'Rampura',
        city: 'Dhaka',
    },
    colleaguesName: [
        'rahim', 'karim', 'hablu', 'kantu'
    ]

}

console.log(employee);
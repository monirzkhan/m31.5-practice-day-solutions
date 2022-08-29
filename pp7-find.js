// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
const phones = [
{name: 'iphone', camera:'13mp', price: 5000},
{name: 'navia', camera:'13mp', price: 5000},
{name: 'opp', camera:'13mp', price: 10000},
{name: 'xiomi', camera:'13mp', price: 5000}
]

const lowPrice = phones.find(x => x.price === 5000);
console.log(lowPrice);
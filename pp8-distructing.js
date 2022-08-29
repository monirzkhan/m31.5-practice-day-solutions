// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।


const { camera, price } = {
    name: 'iphone',
    camera: '13mp',
    price: 5000
}

console.log(camera,price);
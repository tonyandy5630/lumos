import React from 'react';
import Image from 'next/image';

const About = () => {
 return (
    <section id="about" className="bg-slate-100 p-5">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Giới thiệu Lumos</h2>
          <p className="text-gray-600 mb-4">
            Chúng tôi kết nối bạn với những chuyên gia sức khỏe đầu tiên, đảm bảo rằng ưu tiên của họ là sức khỏe của bạn. Đặt lịch và quản lý dịch vụ sức khỏe với dễ dàng từ smartphone hoặc máy tính cá nhân.
          </p>
          <p className="text-gray-600 mb-4">
            Nhóm tư vấn của chúng tôi đảm bảo tiêu chuẩn chăm sóc tốt nhất và cung cấp hướng dẫn chuyên gia.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Chúng tôi thực sự quan tâm đến sức khỏe của bạn và nỗ lực để làm cho hành trình chăm sóc sức khỏe của bạn dễ dàng nhất.</li>
            <li>Với tập trung vào công nghệ và sáng tạo, Lumos đang đồng hành xuyên suốt thời gian với những người đi trước để xác định hướng đi của ngành y tế.</li>
          </ul>
        </div>
        <div className="hidden md:block md:w-1/2">
          <Image
            alt="lumos"
            src="/public/images.jpg"
            width={400}
            height={300}
          />
        </div>
      </div>
    </section>
 );
};

export default About;
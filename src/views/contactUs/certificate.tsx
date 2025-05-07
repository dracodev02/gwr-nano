import Image from "next/image";

const Certificate = () => {
  return (
    <section className="container-custom pb-[104px] flex flex-col gap-10">
      <div className="grid grid-cols-2 py-2.5">
        <div className="flex justify-center">
          <Image
            src="/images/innovationaward.jpg"
            alt="innovationaward"
            width={210}
            height={300}
            className="h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/images/iso-1.png"}
            alt="logo"
            width={150}
            height={150}
            className="py-2.5"
          />
          <Image
            src={"/images/iso-2.png"}
            alt="logo"
            width={150}
            height={150}
            className="py-2.5"
          />
        </div>
      </div>
      <div className="h-1.5 border-t-2 border-b-2 border-black w-full mt-10"></div>
      <div style={{ width: "100%", height: "450px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5389.106909485382!2d18.988661!3d47.518087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dec53635111f%3A0x8561175568f6ff4a!2sBudapest%2C%20Labanc%20%C3%BAt%207a%2C%201021%20Hungary!5e0!3m2!1sen!2sus!4v1746618567440!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Certificate;

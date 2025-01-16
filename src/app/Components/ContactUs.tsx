"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaTruck, FaHeadphones, FaShieldAlt } from "react-icons/fa";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan telah dikirim!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-background p-4">
      <h1 className="text-3xl font-bold text-primary my-6">Kontak Kami</h1>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor= "name">
              Nama
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Alamat Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan email Anda"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Pesan
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Tulis pesan Anda"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-900 transition"
          >
            Kirim
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4 text-primary text-4xl">
            <FaTruck />
          </div>
          <h3 className="text-lg font-semibold">Pengiriman Gratis dan Cepat</h3>
          <p className="text-gray-600 text-sm">Pengiriman gratis untuk pembelian lebih dari $40</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center mb-4 text-primary text-4xl">
            <FaHeadphones />
          </div>
          <h3 className="text-lg font-semibold">Layanan Pelanggan 24/7</h3>
          <p className="text-gray-600 text-sm">Dukungan pelanggan yang ramah tersedia</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center mb-4 text-primary text-4xl">
            <FaShieldAlt />
          </div>
          <h3 className="text-lg font-semibold">Jaminan Uang Kembali</h3>
          <p className="text-gray-600 text-sm">Kami mengembalikan uang Anda dalam waktu 30 hari.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

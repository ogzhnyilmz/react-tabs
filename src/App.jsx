import React, { useState } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-6"
      style={{ backgroundImage: "url('/bg-image.jpg')" }}
    >
      <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 max-w-3xl w-full text-center">
        <div className="flex flex-wrap justify-center space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("home")}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
              activeTab === "home" ? "bg-blue-600 text-white" : "bg-gray-200"
            } w-full sm:w-auto`}
          >
            Ana Sayfa
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
              activeTab === "about" ? "bg-blue-600 text-white" : "bg-gray-200"
            } w-full sm:w-auto`}
          >
            Hakkımda
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
              activeTab === "contact" ? "bg-blue-600 text-white" : "bg-gray-200"
            } w-full sm:w-auto`}
          >
            İletişim
          </button>
        </div>

        <div className="p-6">
          {activeTab === "home" && (
            <div>
              <img
                src="/profile.jpeg"
                alt="Profil Foto"
                className="rounded-full mx-auto mb-4 w-32 h-32 border-4 border-blue-500"
              />
              <h2 className="text-2xl font-bold text-gray-800">Merhabalar, Ben Oğuzhan Yılmaz</h2>
              <p className="text-gray-600">JR. Frontend geliştiriciyim. Javascript, React.js, CSS ile uygulamalar tasarlıyorum.</p>
            </div>
          )}
          {activeTab === "about" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Hakkımda</h2>
              <p className="text-gray-600">
                Adım Oğuzhan, soyadım Yılmaz. 24 yaşındayım. Rizeliyim ve Rize'de yaşıyorum. Yazılıma karşı hep bir ilgim vardı. Bunun sebebi çocukluğumdan beri bilgisayarla uğraşmam ve kendi kendime öğrenmemdi. Şimdi ise Acunmedya Akademi'de Frontend uzmanlık eğitimi alıyorum.
              </p>
            </div>
          )}
          {activeTab === "contact" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">İletişim</h2>
              <div className="flex flex-col items-center space-y-3 text-blue-600">
                <p>📞 +90 553 440 5273</p>
                <p>📧 ogzhnyilmzz@outlook.com</p>
                <a href="https://www.linkedin.com/in/o%C4%9Fuzhan-y%C4%B1lmaz-720849315/" target="_blank" className="hover:underline">🔗 LinkedIn</a>
                <a href="https://github.com/ogzhnyilmz" target="_blank" className="hover:underline">🐙 GitHub</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

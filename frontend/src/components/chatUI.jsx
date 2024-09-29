import React from "react";

export default function ChatUI() {
  return (
    <div className="border w-[600px] mx-auto h-[700px] rounded-lg shadow-lg flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {/* 채팅 메시지 내용이 표시될 부분 (이 부분은 추가될 메시지들이 들어가는 곳) */}
      </div>

      <div className="p-4 border-t flex items-center text-xl">
        <input
          type="text"
          placeholder="메시지를 입력하세요..."
          className="flex-1 p-2 border-l border-y rounded-l-lg"
        />
        <button className="bg-blue-500 text-white p-2 border-blue-500 border-r border-y box-border rounded-r-lg">
          전송
        </button>
      </div>
    </div>
  );
}

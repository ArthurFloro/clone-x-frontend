"use client";

import { user } from "@/app/data/user";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Button } from "../ui/button";

export const TweetPost = () => {
  const handleImageUpload = () => {};

  const handlePostClick = () => {};

  return (
    <div className="flex gap-6 px-8 py-6 border-b-2 border-gray-900">
      <div>
        <Image
          src={user.avatar}
          alt={user.name}
          width={100}
          height={100}
          unoptimized
          className="rounded-full size-12"
        />
      </div>

      <div className="flex-1">
        <div
          className="min-h-14 outline-none text-lg text-white empty:before:text-gray-500 empty:before:content-[attr(data-placeholder)]"
          contentEditable
          role="textbox"
          data-placeholder="O que está acontecendo?"
          onInput={(e) => {
            // Se o texto visível for vazio, limpamos o HTML (remove o <br> fantasma)
            if (e.currentTarget.textContent.trim() === "") {
              e.currentTarget.innerHTML = "";
            }
          }}
        ></div>

        <div className="flex justify-between items-center mt-2">
          <div className="cursor-pointer" onClick={handleImageUpload}>
            <FontAwesomeIcon icon={faImage} size="lg" />
          </div>
          <div className="w-28">
            <Button label="Postar" size={2} onClick={handlePostClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

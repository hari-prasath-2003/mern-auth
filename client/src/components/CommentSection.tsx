import { Button } from "./ui/button";
import { Badge, Star } from "lucide-react";
import { Progress } from "./ui/progress";
import { useState } from "react";

function CommentSection({ productId }: { productId: string }) {
  const [comment, setComment] = useState("");
  return (
    <div className="flex border-2 border-gray-100 p-5 h-[344px] box-content gap-5">
      <div className="max-w-[400px]">
        <div className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr]  gap-5 ">
          <div className="text-center flex flex-col gap-2">
            <div className="flex text-xl font-bold items-center justify-center">
              <p>4.5 </p>
              <Star fill={"black"} />
            </div>
            <div className="text-gray-500">
              <p>500 Rating &</p>
              <p>100 Reviews</p>
            </div>
            <div>
              <Button variant={"outline"} className="shadow-sm">
                Rate Product
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                5
                <Star fill="black" size={14} />
              </div>
              <Progress value={(232 / 422) * 100} />
              <p className="text-gray-500">232</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  4
                  <Star fill="black" size={14} />
                </div>
                <Progress value={(123 / 422) * 100} />
                <p className="text-gray-500">123</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  3
                  <Star fill="black" size={14} />
                </div>
                <Progress value={(25 / 422) * 100} />
                <p className="text-gray-500">25</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  2
                  <Star fill="black" size={14} />
                </div>
                <Progress value={(30 / 422) * 100} />
                <p className="text-gray-500">30</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  1
                  <Star fill="black" size={14} />
                </div>
                <Progress value={(12 / 422) * 100} />
                <p className="text-gray-500">12</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-7">
          <div className="grid grid-cols-4 gap-5 place-items-center">
            {Array.from([1, 2, 3, 4, 5, 6, 7, 8]).map((val) => {
              return (
                <img
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  alt=""
                  key={val}
                  className="size-[70px] object-contain "
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className=" flex-1 p-5 flex flex-col gap-5  overflow-y-scroll">
        <div className="flex flex-col gap-3 border-b-2 border-gray-200 pb-2">
          <div className="flex gap-2">
            <div className="flex bg-green-600 h-min w-[50px] text-white justify-center items-center gap-1 rounded-md">
              <p>3</p>
              <Star fill="white" size={12} />
            </div>
            <div className="font-bold">
              <h1>Wonderfull</h1>
            </div>
          </div>
          <div>
            <p>Nice and super product good customer service</p>
          </div>
          <div className="text-gray-500">
            <p>Sam miller oct 12 2024</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b-2 border-gray-200 pb-2">
          <div className="flex gap-2">
            <div className="flex bg-green-600 h-min w-[50px] text-white justify-center items-center gap-1 rounded-md">
              <p>3</p>
              <Star fill="white" size={12} />
            </div>
            <div className="font-bold">
              <h1>Wonderfull</h1>
            </div>
          </div>
          <div>
            <p>Nice and super product good customer service</p>
          </div>
          <div className="text-gray-500">
            <p>Sam miller oct 12 2024</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b-2 border-gray-200 pb-2">
          <div className="flex gap-2">
            <div className="flex bg-green-600 h-min w-[50px] text-white justify-center items-center gap-1 rounded-md">
              <p>3</p>
              <Star fill="white" size={12} />
            </div>
            <div className="font-bold">
              <h1>Wonderfull</h1>
            </div>
          </div>
          <div>
            <p>Nice and super product good customer service</p>
          </div>
          <div className="text-gray-500">
            <p>Sam miller oct 12 2024</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b-2 border-gray-200 pb-2">
          <div className="flex gap-2">
            <div className="flex bg-green-600 h-min w-[50px] text-white justify-center items-center gap-1 rounded-md">
              <p>3</p>
              <Star fill="white" size={12} />
            </div>
            <div className="font-bold">
              <h1>Wonderfull</h1>
            </div>
          </div>
          <div>
            <p>Nice and super product good customer service</p>
          </div>
          <div className="text-gray-500">
            <p>Sam miller oct 12 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentSection;

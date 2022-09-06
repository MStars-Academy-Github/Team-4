import React, { useCallback, useEffect, useState } from "react";
import { MainProps, IVideos } from "../types/types";
import MainHeader from "./mainHeader";
import { AiOutlineMenu } from "react-icons/ai";
import Toggle from "./Toggle";
import LeftSide from "./LeftSide";
import axios from "axios";
import Player from "./Player";

export default function Main({ setChecker }: MainProps) {
  const [videos, setVideos] = useState<IVideos[] | undefined>([]);
  const [search, setSearch] = useState<IVideos[] | any[]>([]);
  const [checking, setChecking] = useState<number>(0);
  const [values, setValues] = useState<string>("");
  const [temp, setTemp] = useState<IVideos[] | []>(videos ? videos : []);
  const [isOpen, setIsopen] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/media/videos")
      .then((res) => {
        setVideos(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  function getSearchValue(e: string) {
    setSearch([]);
    videos?.forEach((p: IVideos, i: number) => {
      if (p.title.includes(e)) {
        if (search && search.includes(p)) {
          console.log("video exists");
        } else {
          setSearch([...search, p]);
        }
      }
    });
    if (search.length <= 0) {
      console.log("no video within this search");
      setValues("haisan bichleg bhgu");
      setChecking(0);
    }
    setChecking(1);
  }
  function filterHandler(e: string) {
    const filters: IVideos[] = [];
    console.log(e);

    videos?.forEach((p: IVideos) => {
      if (p.genre == e) {
        filters.push(p);
        console.log(filters);
      }
    });
    if (filters.length > 0) {
      setChecking(2);
    }
    setTemp(filters);
  }

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <div>
      <div>
        <MainHeader
          getSearchValue={getSearchValue}
          filterHandler={filterHandler}
          setChecking={setChecking}
          videos={videos}
        />
      </div>
      <AiOutlineMenu
        onClick={ToggleSidebar}
        className="w-[25px] absolute top-8 ml-8 h-[25px] cursor-pointer"
      />
      <div className="flex">
        {isOpen == true ? <Toggle /> : <LeftSide />}
        <div className="flex  w-full h-[700px] bg-[#f9f9f9] flex-wrap justify-around">
          {(checking == 0 ? videos : checking == 1 ? search : temp)?.map(
            (e: IVideos, i: number) => {
              return (
                <div className="items-center flex">
                  <p>{values}</p>
                  <Player e={e} i={i} />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
